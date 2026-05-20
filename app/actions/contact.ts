"use server";

import { Resend } from "resend";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(2, "Name is required"),
  phone: z.string().min(8, "Valid phone is required"),
  email: z.string().email("Valid email is required"),
  service: z.string().min(1, "Please select a service"),
  message: z.string().min(10, "Message must be at least 10 characters"),
  website: z.string().max(0).optional(),
});

export type ContactFormState = {
  success?: boolean;
  error?: string;
  fieldErrors?: Record<string, string[]>;
};

export async function submitContact(
  _prev: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const raw = {
    name: formData.get("name"),
    phone: formData.get("phone"),
    email: formData.get("email"),
    service: formData.get("service"),
    message: formData.get("message"),
    website: formData.get("website") ?? "",
  };

  const parsed = contactSchema.safeParse(raw);

  if (!parsed.success) {
    return {
      success: false,
      fieldErrors: parsed.error.flatten().fieldErrors as Record<string, string[]>,
    };
  }

  if (parsed.data.website) {
    return { success: true };
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL ?? "contact@ahtraveltourism.com";
  const from = process.env.RESEND_FROM_EMAIL ?? "A&H Travel <onboarding@resend.dev>";

  if (!apiKey) {
    console.error("RESEND_API_KEY is not configured");
    return { success: false, error: "Email service is not configured." };
  }

  const resend = new Resend(apiKey);
  const { name, phone, email, service, message } = parsed.data;

  try {
    const { error } = await resend.emails.send({
      from,
      to,
      replyTo: email,
      subject: `New Enquiry: ${service} — ${name}`,
      html: `
        <h2>New contact form submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Service:</strong> ${service}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, "<br>")}</p>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return { success: false, error: "Failed to send email. Please try WhatsApp." };
    }

    return { success: true };
  } catch (e) {
    console.error(e);
    return { success: false, error: "Failed to send email. Please try WhatsApp." };
  }
}

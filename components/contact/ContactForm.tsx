"use client";

import { submitContact, type ContactFormState } from "@/app/actions/contact";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Select } from "@/components/ui/Select";
import { Textarea } from "@/components/ui/Textarea";
import { useTranslations } from "next-intl";
import { useFormState, useFormStatus } from "react-dom";

const initialState: ContactFormState = {};

function SubmitButton() {
  const { pending } = useFormStatus();
  const tCommon = useTranslations("common");
  return (
    <Button type="submit" variant="gold" disabled={pending} className="w-full">
      {pending ? tCommon("sending") : tCommon("submit")}
    </Button>
  );
}

export function ContactForm() {
  const t = useTranslations("contact.form");
  const tCommon = useTranslations("common");
  const [state, formAction] = useFormState(submitContact, initialState);

  const serviceOptions = [
    { value: "tourism", label: t("services.tourism") },
    { value: "visa", label: t("services.visa") },
    { value: "umrah", label: t("services.umrah") },
    { value: "safari", label: t("services.safari") },
    { value: "admin", label: t("services.admin") },
    { value: "other", label: t("services.other") },
  ];

  return (
    <form action={formAction} className="space-y-5">
      <input type="text" name="website" className="hidden" tabIndex={-1} autoComplete="off" />

      <div>
        <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-navy">
          {t("name")}
        </label>
        <Input id="name" name="name" required minLength={2} />
        {state.fieldErrors?.name && (
          <p className="mt-1 text-sm text-red-600">{state.fieldErrors.name[0]}</p>
        )}
      </div>

      <div>
        <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-navy">
          {t("phone")}
        </label>
        <Input id="phone" name="phone" type="tel" required minLength={8} />
        {state.fieldErrors?.phone && (
          <p className="mt-1 text-sm text-red-600">{state.fieldErrors.phone[0]}</p>
        )}
      </div>

      <div>
        <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-navy">
          {t("email")}
        </label>
        <Input id="email" name="email" type="email" required />
        {state.fieldErrors?.email && (
          <p className="mt-1 text-sm text-red-600">{state.fieldErrors.email[0]}</p>
        )}
      </div>

      <div>
        <label htmlFor="service" className="mb-1.5 block text-sm font-medium text-navy">
          {t("service")}
        </label>
        <Select id="service" name="service" required defaultValue="">
          <option value="" disabled>
            {t("selectService")}
          </option>
          {serviceOptions.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </Select>
        {state.fieldErrors?.service && (
          <p className="mt-1 text-sm text-red-600">{state.fieldErrors.service[0]}</p>
        )}
      </div>

      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-navy">
          {t("message")}
        </label>
        <Textarea id="message" name="message" required minLength={10} />
        {state.fieldErrors?.message && (
          <p className="mt-1 text-sm text-red-600">{state.fieldErrors.message[0]}</p>
        )}
      </div>

      {state.success && (
        <p className="rounded-xl bg-green-50 px-4 py-3 text-sm text-green-800">{tCommon("success")}</p>
      )}
      {state.error && (
        <p className="rounded-xl bg-red-50 px-4 py-3 text-sm text-red-800">
          {state.error || tCommon("error")}
        </p>
      )}

      <SubmitButton />
    </form>
  );
}

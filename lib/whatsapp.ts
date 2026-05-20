export const WHATSAPP_NUMBER =
  process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "971529615154";

export function whatsappUrl(service: string) {
  const text = `Hello A&H Travel, I'm interested in ${service}. Please assist.`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}

export const WHATSAPP_BASE = `https://wa.me/${WHATSAPP_NUMBER}`;

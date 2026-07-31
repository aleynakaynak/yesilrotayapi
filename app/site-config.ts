export type SiteConfig = {
  phone: string;
  whatsapp: string;
  email: string;
  address: string;
  siteUrl: string;
};

export const siteConfig: SiteConfig = {
  phone: "",
  whatsapp: "",
  email: "",
  address: "",
  siteUrl: "",
};

export function telHref(phone: string) {
  return `tel:${phone.replace(/[^+\d]/g, "")}`;
}

export function whatsappHref(whatsapp: string) {
  const digits = whatsapp.replace(/[^\d]/g, "");
  return `https://wa.me/${digits}`;
}

export function mailtoHref(email: string) {
  return `mailto:${email}`;
}

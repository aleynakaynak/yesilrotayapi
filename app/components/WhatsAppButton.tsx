import { siteConfig, whatsappHref } from "../site-config";

export default function WhatsAppButton() {
  if (!siteConfig.whatsapp) {
    return null;
  }

  return (
    <a
      className="whatsapp-float-button"
      href={whatsappHref(siteConfig.whatsapp)}
      target="_blank"
      rel="noreferrer"
      aria-label="WhatsApp üzerinden yazın"
    >
      <svg viewBox="0 0 32 32" width="26" height="26" aria-hidden="true" fill="currentColor">
        <path d="M16 3C9 3 3.3 8.6 3.3 15.5c0 2.4.7 4.7 1.9 6.7L3 29l7-1.8c1.9 1 4 1.6 6 1.6 7 0 12.7-5.6 12.7-12.5C28.7 8.6 23 3 16 3zm0 22.7c-1.9 0-3.7-.5-5.3-1.4l-.4-.2-4.2 1.1 1.1-4-.3-.4a10.1 10.1 0 0 1-1.6-5.4c0-5.6 4.6-10.1 10.7-10.1 5.9 0 10.7 4.5 10.7 10.1S21.9 25.7 16 25.7zm5.9-7.6c-.3-.2-1.9-.9-2.2-1s-.5-.2-.7.2-.8 1-1 1.2-.4.2-.7.1a8.7 8.7 0 0 1-2.6-1.6 9.6 9.6 0 0 1-1.8-2.2c-.2-.3 0-.5.1-.6l.4-.5.3-.4c.1-.2 0-.4 0-.5s-.7-1.6-.9-2.2-.4-.5-.7-.5h-.6c-.2 0-.6.1-.9.4-.3.3-1.2 1.1-1.2 2.8s1.2 3.3 1.4 3.5c.2.3 2.4 3.6 5.8 5 .8.3 1.4.5 1.9.7.8.2 1.5.2 2 .1.6-.1 1.9-.8 2.2-1.5.3-.7.3-1.3.2-1.5s-.3-.3-.6-.4z" />
      </svg>
    </a>
  );
}

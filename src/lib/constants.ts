export const WHATSAPP_NUMBER = "12029722722";
export const WHATSAPP_DISPLAY = "+1-202-972-2722";
export const WHATSAPP_ORDER_MESSAGE =
  "Hi, I'd like to place a room service order from Ahari.";
export const EMAIL = "hello@arcaroatan.com";
export const MAIN_WEBSITE = "https://www.arcaroatan.com";

export const WHATSAPP_ORDER_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_ORDER_MESSAGE)}`;
export const SMS_ORDER_URL = `sms:${WHATSAPP_DISPLAY}?body=${encodeURIComponent(WHATSAPP_ORDER_MESSAGE)}`;
export const WHATSAPP_CONCIERGE_MESSAGE =
  "Hi Arca, I need a little help during my stay.";
export const WHATSAPP_CONCIERGE_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_CONCIERGE_MESSAGE)}`;

export const PORTAL_TABS = [
  { id: "landing", label: "Landing page" },
  { id: "dining", label: "Dining Menu" },
  { id: "events", label: "This week at Arca" },
  { id: "island", label: "The Island" },
  { id: "tours", label: "Tours and Excursions" },
] as const;

export type PortalTabId = (typeof PORTAL_TABS)[number]["id"];

export const SESSION_COOKIE = "arca_admin_session";

import { faTelegram } from '@fortawesome/free-brands-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';

export const headerLinks = [
  { id: 1, name: "Home", url: "/" },
  { id: 2, name: "Pricing", url: "/pricing" },
  { id: 3, name: "Contacts", url: "/contacts" },
];

export const headerOuterLinks = [
  { id: 1, name: "Telegram", url: "/", icon: faTelegram},
  { id: 2, name: "WhatsApp", url: "/pricing", icon: faWhatsapp},
  { id: 3, name: "YouTube", url: "/contacts", icon: faYoutube},
];
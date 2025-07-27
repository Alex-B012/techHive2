import { faTelegram } from '@fortawesome/free-brands-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';

import { faSquarePhone } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

export const burgerBtns = [
  { id: 1, name: "Hamburger", icon: faBars },
  { id: 2, name: "Close", icon: faXmark },
];

export const squarePhone = faSquarePhone;

export const headerLinks = [
  { id: 1, name: "Home", url: "/" },
  { id: 2, name: "Pricing", url: "/pricing" },
  { id: 3, name: "Contacts", url: "/contacts" },
];

export const headerOuterLinks = [
  { id: 1, name: "Telegram", url: "/", icon: faTelegram },
  { id: 2, name: "WhatsApp", url: "/pricing", icon: faWhatsapp },
  { id: 3, name: "YouTube", url: "/contacts", icon: faYoutube },
];


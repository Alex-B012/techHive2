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

export const contact_info = {
  company_name: "TechHive",
  phone: "+1 (123) 456-7890",
  address: "1127 Industrial Rd, San Carlos, CA 94070, USA",
  email: "info@techhive.com",
}

export const allRights = {
  iconChar: "©",
  text: "All Rights Reserved",
  year: "2025"
}

export const pages_links = [
  { id: 1, name: "Home", link: "/" },
  { id: 2, name: "Pricing", link: "/pricing" },
  { id: 6, name: "Category", link: "/pricing/:categoryId" },
  { id: 7, name: "Product", link: "/pricing/:categoryId/:productId" },
  { id: 3, name: "Contacts", link: "/contacts" },
  { id: 4, name: "Careers", link: "/careers" },
  { id: 5, name: "Our Team", link: "/team" },
  { id: 8, name: "NotFound", link: "*" },
]
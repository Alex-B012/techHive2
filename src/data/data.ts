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
  { id: 3, name: "News", url: "/news" },
  { id: 4, name: "Contacts", url: "/contacts" },
];

export const headerOuterLinks = [
  { id: 1, name: "Telegram", url: "/", icon: faTelegram },
  { id: 2, name: "WhatsApp", url: "/pricing", icon: faWhatsapp },
  { id: 3, name: "YouTube", url: "/contacts", icon: faYoutube },
];

export const contact_info = {
  company_name: "TechHive",
  phone: "+1 (123) 456-7890",
  address: {
    street: "1127 Industrial Rd",
    city: "San Carlos",
    state: "CA",
    zipcode: "94070",
    country: "USA"
  },
  email: "info@techhive.com",
  business_hours: [
    { id: 1, days: "Mon - Thu", hours: "10 AM - 8 PM" },
    { id: 2, days: "Fri", hours: "10 AM - 7 PM" },
    { id: 3, days: "Sat", hours: "11 AM - 6 PM" },
    { id: 4, days: "Sun", hours: "11 AM - 5 PM" }]
}

export const allRights = {
  iconChar: "©",
  text: "All Rights Reserved",
  year: "2025"
}

export const pages_links = [
  { id: 1, name: "Home", link: "/" },
  { id: 2, name: "Pricing", link: "/pricing" },
  { id: 3, name: "Category", link: "/pricing/:categoryId" },
  { id: 4, name: "Product", link: "/pricing/:categoryId/:productId" },
  { id: 5, name: "NewsList", link: "/news" },
  { id: 6, name: "NewsPage", link: "/news/:newsId" },
  { id: 7, name: "Contacts", link: "/contacts" },
  { id: 8, name: "Careers", link: "/careers" },
  { id: 9, name: "Our Team", link: "/team" },
  { id: 100, name: "NotFound", link: "*" },
]
export function formatPhoneNumber(phone: string) {
   return phone.replace(/\D/g, '');
}
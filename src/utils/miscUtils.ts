export function removeAllWhitespace(str: string): string {
   return str.trim().replace(/\s+/g, '');
}

export function displayPrice(num: number, currency: string = 'USD', toFixed: number = 2): string {
   const formattedNumber = (num / 100).toFixed(toFixed);
   return `${currency} ${formattedNumber.replace(/\d(?=(\d{3})+\.)/g, '$&,')}`;
}

export function removeAllWhitespace(str: string): string {
   return str.trim().replace(/\s+/g, '');
}
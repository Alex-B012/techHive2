interface removeAllWhitespaceProp {
   str: string
}

export function removeAllWhitespace({ str }: removeAllWhitespaceProp) {
   return str.trim().replace(/\s+/g, '');
}
export function removeAllWhitespace(str: string): string {
   return str.trim().replace(/\s+/g, '');
}

export function scrollToTop() {
   setTimeout(() => {
      if (typeof window !== 'undefined') {
         window.scrollTo({
            top: 0,
            behavior: 'smooth'
         });
      }
   }, 100
   )

}
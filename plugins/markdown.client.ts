import { marked } from "marked";
import DOMPurify from "dompurify";

export default defineNuxtPlugin(() => {
  return {
    provide: {
      md: (text: string) => DOMPurify.sanitize(marked(text) as any)
    }
  };
});

"use server"

import { headers } from "next/headers";

const supportedLanguages = ["fr", "en"];
const defaultLanguage = "fr";

/**
 * Get the current pathname on the server using Next.js headers API.
 * Returns the pathname string (e.g. /fr/xxx or /en/xxx)
 */
export async function getServerPathname(): Promise<string> {
  const h = await headers();
  // Be careful to not delete the proxy.ts
  return (
    h.get("x-current-path")?.replace(/^https?:\/\/[^/]+/, "") ||
    "/"
  );
}

export async function getCurrentLanguage(): Promise<"fr" | "en"> {
  const pathname = await getServerPathname();
  const lang = pathname.split("/")[1];
  if (supportedLanguages.includes(lang)) {
    return lang as "fr" | "en";
  }
  return defaultLanguage;
}
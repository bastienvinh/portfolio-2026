"use server"

import { headers } from "next/headers";

// The slug is based on Blog and Projects structure: /[language]/projects/[slug]
export async function getSlug() {
  // http://localhost:3000/fr/projects/mission-manager
  const header = await headers()
  console.log(header.get("x-current-path"))

  return header.get("x-current-path")?.split("/")[3] ?? null
}
import type { GlobalConfig } from "payload"

export const About: GlobalConfig = {
  slug: "about",
  label: {
    singular: "Page About",
    plural: "Pages About",
  },
  fields: [
    {
      name: "fullname",
      type: "text",
      required: true,
      localized: true,
    },
    {
      name: "welcome_message",
      type: "text",
      required: true,
      localized: true,
    },
    {
      name: "job_title",
      type: "text",
      required: true,
      localized: true,
    },
    {
      name: "presentation",
      type: "textarea",
      required: true,
      localized: true,
    },
    {
      name: "technologies_text",
      type: "text",
      required: true,
      localized: true,
    },
    {
      name: "technologies",
      type: "relationship",
      relationTo: "technology",
      hasMany: true,
    },
  ],
}

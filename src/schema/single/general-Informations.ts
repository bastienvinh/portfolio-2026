import type { GlobalConfig } from "payload"

export const GeneralInformations: GlobalConfig = {
  slug: "general_informations",
  label: {
    singular: "General Information",
    plural: "General Informations",
  },
  fields: [
    {
      name: "linkedin_url",
      type: "text",
      required: true,
    },
    {
      name: "x_twitter",
      type: "text",
      required: true,
    },
    {
      name: "github_url",
      type: "text",
      required: true,
    },
    {
      name: "email",
      type: "email",
      required: true,
    }
  ],
}

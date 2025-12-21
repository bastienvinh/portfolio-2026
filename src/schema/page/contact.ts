import type { GlobalConfig } from "payload"

export const Contact: GlobalConfig = {
  slug: "contact",
  fields: [
    {
      label: "Email",
      name: "email_contact",
      type: "email",
      required: true
    },
    {
      label: "GitHub",
      name: "github_link",
      type: "text",
      required: false
    },
    {
      label: "Facebook",
      name: "facebook_link",
      type: "text",
      required: false
    },
    {
      label: "Twitter",
      name: "x_twitter_link",
      type: "text",
      required: false
    },
    {
      label: "LinkedIn",
      name: "linkedin_link",
      type: "text",
      required: false,
      localized: true
    },
  ],
}

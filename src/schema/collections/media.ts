import type { CollectionConfig } from "payload"

export const Media: CollectionConfig = {
  slug: "media",
  upload: true,
  access: {
    read: () => true,
  },
  fields: [
    {
      label: "Alternative Text",
      name: "alt",
      type: "text"
    },
  ],
}

import type { CollectionConfig } from "payload"

export const Media: CollectionConfig = {
  slug: "media",
  upload: true,
  labels: {
    singular: "Image",
    plural: "Images",
  },
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

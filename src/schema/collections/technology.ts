import type { CollectionConfig } from "payload"

export const Technology: CollectionConfig = {
  slug: "technology",
  admin: {
    useAsTitle: "name",
  },
  fields: [
    {
      name: "name",
      type: "text",
      required: true,
    },
    {
      name: "light_mode_image",
      type: "upload",
      relationTo: "media",
      required: true,
      filterOptions: {
        mimeType: { contains: "image/svg+xml" },
      },
    },
    {
      name: "dark_mode_image",
      type: "upload",
      relationTo: "media",
      required: true,
      filterOptions: {
        mimeType: { contains: "image/svg+xml" },
      },
    },
  ],
}

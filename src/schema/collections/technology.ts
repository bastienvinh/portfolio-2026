import type { CollectionConfig } from "payload"

export const Technology: CollectionConfig = {
  slug: "technology",
  admin: {
    useAsTitle: "name",
  },
  fields: [
    {
      label: "Name",
      name: "name",
      type: "text",
      required: true,
    },
    {
      label: "Light Mode Image",
      name: "light_mode_image",
      type: "upload",
      relationTo: "media",
      required: true,
      filterOptions: {
        mimeType: { contains: "image/svg+xml" },
      },
    },
    {
      label: "Dark Mode Image",
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

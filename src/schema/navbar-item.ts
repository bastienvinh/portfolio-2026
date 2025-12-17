import type { CollectionConfig } from "payload"

export const NavbarItem: CollectionConfig = {
  slug: "navbar-items",
  admin: {
    useAsTitle: "name",
  },
  fields: [
    {
      name: "name",
      type: "text",
      required: true,
      localized: true,
    },
    {
      name: "link",
      type: "text",
      required: true,
    },
  ],
}

import type {  CollectionConfig  } from "payload"

export const Projects: CollectionConfig = {
  slug: "projects",
  fields: [
    {
      name: "title",
      type: "text",
      required: true,
      localized: true
    },
    {
      name: "content",
      type: "richText",
      localized: true
    },
    {
      name: "technologies",
      type: "relationship",
      relationTo: "technology",
      hasMany: true,
    },
  ]
}
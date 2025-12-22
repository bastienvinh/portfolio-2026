import type {  CollectionConfig  } from "payload"

export const Projects: CollectionConfig = {
  slug: "projects",
  fields: [
    {
      label: "Slug",
      name: "slug",
      type: "text",
      required: true,
      localized: true,
      unique: true
    },
    {
      label: "Title",
      name: "title",
      type: "text",
      required: true,
      localized: true
    },
    {
      label: "Summary",
      name: "summary",
      type: "textarea",
      minLength: 20,
      maxLength: 300,
      required: true,
      localized: true,
    },
    {
      label: "Overview",
      name: "overview",
      type: "richText",
      localized: true
    },
    {
      label: "Challenges and Solutions",
      name: "challenges_and_solutions",
      type: "richText",
      localized: true,
      required: true
    },
    {
      label: "Outcomes",
      name: "outcomes",
      type: "richText",
      localized: true
    },
    {
      label: "Code URL",
      name: "code_url",
      type: "text",
      localized: false
    },
    {
      label: "Live URL",
      name: "live_url",
      type: "text",
      localized: false
    },
    {
      label: "Cover Image",
      name: "cover_image",
      type: "upload",
      required: true,
      localized: false,
      relationTo: "media"
    },
    {
      label: "Miniature Image List",
      name: "miniature_image_list",
      type: "upload",
      required: true,
      localized: false,
      relationTo: "media"
    },
    {
      label: "Technologies",
      name: "technologies",
      type: "relationship",
      relationTo: "technology",
      hasMany: true,
      localized: false
    },
  ]
}
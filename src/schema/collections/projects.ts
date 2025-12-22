
import type {  CollectionConfig  } from "payload"

// Slug validation: remove spaces and line returns, support localized (array) and single value
function validateSlug(value: string | string[] | null | undefined): true | string {
  if (Array.isArray(value)) {
    for (const v of value) {
      const res = validateSlug(v);
      if (res !== true) return res
    }
    return true
  }
  if (typeof value !== 'string') return 'Slug must be a string'
  const cleaned = value.replace(/[\s\r\n]+/g, '-')
  if (cleaned !== value) {
    return 'Slug cannot contain spaces or line returns.'
  }
  if (!cleaned.length) {
    return 'Slug cannot be empty.'
  }
  return true
}

export const Projects: CollectionConfig = {
  slug: "projects",
  labels: {
    singular: "Project",
    plural: "Projects",
  },
  disableDuplicate: true,
  access: {
    read: () => true,
  },
  fields: [
    {
      label: "Slug",
      name: "slug",
      type: "text",
      required: true,
      localized: true,
      unique: true,
      validate: validateSlug
    },
    {
      label: "Title",
      name: "title",
      type: "text",
      required: true,
      localized: true
    },
    {
      label: "Starting Date",
      name: "starting_date",
      type: "date",
      defaultValue: new Date().toISOString(),
      required: true,
      localized: false
    },
    {
      label: "Ending Date",
      name: "ending_date",
      type: "date",
      required: false,
      localized: false
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
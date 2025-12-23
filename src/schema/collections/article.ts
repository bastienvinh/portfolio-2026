
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

export const Articles: CollectionConfig = {
  slug: "articles",
  labels: {
    singular: "Article",
    plural: "Articles",
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
      label: "Published Date",
      name: "published_date",
      type: "date",
      defaultValue: new Date().toISOString(),
      required: true,
      localized: false
    },
    {
      label: "Content",
      name: "content",
      type: "richText",
      required: true,
      localized: true
    },
    {
      label: "Minutes to read",
      name: "minutes_to_read",
      type: "number",
      defaultValue: 5,
      required: false,
      localized: false,
      min: 1
    }
  ]
}
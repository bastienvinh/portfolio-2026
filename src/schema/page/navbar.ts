import { GlobalConfig } from "payload";

export const TabAbout: GlobalConfig = {
  slug: "tab_about",
  label: {
    singular: "Traduction About",
    plural: "Traductions About",
  },
  fields: [
    {
      name: "name",
      type: "text",
      required: true,
      localized: true,
    },
  ],
}

export const TabProjects: GlobalConfig = {
  slug: "tab_projects",
  label: {
    singular: "Traduction Projects",
    plural: "Traductions Projects",
  },
  fields: [
    {
      name: "name",
      type: "text",
      required: true,
      localized: true,
    },
  ],
}

export const TabBlog: GlobalConfig = {
  slug: "tab_blog",
  label: {
    singular: "Traduction Blog",
    plural: "Traductions Blog",
  },
  fields: [
    {
      name: "name",
      type: "text",
      required: true,
      localized: true,
    },
  ],
}

export const TabContact: GlobalConfig = {
  slug: "tab_contact",
  label: {
    singular: "Traduction Contact",
    plural: "Traductions Contact",
  },
  fields: [
    {
      name: "name",
      type: "text",
      required: true,
      localized: true,
    },
  ],
}
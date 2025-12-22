import { GlobalConfig } from "payload"

export const NavbarConfig: GlobalConfig = {
  slug: "navbar_config",
  label: {
    singular: "Navbar Configuration",
    plural: "Navbar Configurations",
  },
  fields: [
    {
      label: "Tab About",
      name: "tab_about",
      type: "text",
      required: true,
      localized: true,
    },
    {
      label: "Tab Projects",
      name: "tab_projects",
      type: "text",
      required: true,
      localized: true,
    },
    {
      label: "Tab Blog",
      name: "tab_blog",
      type: "text",
      required: true,
      localized: true,
    },
    {
      label: "Tab Contact",
      name: "tab_contact",
      type: "text",
      required: true,
      localized: true,
    }
  ],
}
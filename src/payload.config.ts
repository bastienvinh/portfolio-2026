import sharp from 'sharp'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { postgresAdapter } from '@payloadcms/db-postgres'
import { buildConfig } from 'payload'

import { en } from '@payloadcms/translations/languages/en'

import { Technology } from './schema/collections/technology'
import { Projects } from './schema/collections/projects'
import { Media } from './schema/collections/media'
import { Users } from './schema/single/users'
import { About } from './schema/page/about'
import { NavbarConfig } from './schema/page/navbar'
import { GeneralInformations } from './schema/single/general-Informations'
import { Contact } from './schema/page/contact'

export default buildConfig({
  // If you'd like to use Rich Text, pass your editor here
  editor: lexicalEditor(),

  i18n: {
    fallbackLanguage: 'en',
    supportedLanguages: { en },
  },

  localization: {
    locales: [{
      label: 'Français',
      code: 'fr',
    }, {
      label: 'English',
      code: 'en',
    }],
    defaultLocale: 'fr',
    fallback: true
  },

  // Define and configure your collections in this array
  collections: [
    Users,
    Projects,
    Technology,
    Media,
  ],

  // Define and configure your globals in this array
  globals: [GeneralInformations, About, Contact, NavbarConfig],

  // Your Payload secret - should be a complex and secure string, unguessable
  secret: process.env.PAYLOAD_SECRET || '',
  // Whichever Database Adapter you're using should go here
  // Mongoose is shown as an example, but you can also use Postgres
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URL || '',
    }
  }),
  // If you want to resize images, crop, set focal point, etc.
  // make sure to install it and pass it to the config.
  // This is optional - if you don't need to do these things,
  // you don't need it!
  sharp,
})
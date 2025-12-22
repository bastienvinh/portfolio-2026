import type { CollectionConfig } from 'payload'

export const Users: CollectionConfig = {
  slug: 'users',
  labels: {
    singular: 'User',
    plural: 'Users',
  },
  auth: {
    verify: false,
    maxLoginAttempts: 5,
    lockTime: 600000,
    tokenExpiration: 7200,
    forgotPassword: {
      generateEmailHTML: () => '',
      generateEmailSubject: () => '',
      expiration: 1
    }
  },
  admin: {
    useAsTitle: 'email',
  },
  fields: [
    {
      name: 'name',
      type: 'text',
    },
  ],
  access: {
    read: ({ req }) => !!req.user,
    create: ({ req }) => !!req.user,
    update: ({ req }) => !!req.user,
    delete: ({ req }) => !!req.user,
  }
}

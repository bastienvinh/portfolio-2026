import type { CollectionConfig } from 'payload'

export const Users: CollectionConfig = {
  slug: 'users',
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
}

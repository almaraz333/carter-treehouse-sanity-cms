import offeringType from './offeringType'

export default {
  title: 'Offerings',
  name: 'offerings',
  type: 'document',
  fields: [
    {
      title: 'Offerings',
      name: 'offerings',
      type: 'array',
      of: [offeringType],
    },
    {
      title: 'Title',
      name: 'title',
      type: 'string',
    },
  ],
}

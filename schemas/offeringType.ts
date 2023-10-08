export default {
  title: 'Offering',
  name: 'offeringType',
  type: 'object',
  fields: [
    {
      title: 'Body',
      name: 'body',
      type: 'array',
      of: [{type: 'block'}],
    },
    {
      name: 'icon',
      type: 'string',
      title: 'Icon',
    },
    {
      name: 'title',
      type: 'string',
      title: 'Title',
    },
  ],
}

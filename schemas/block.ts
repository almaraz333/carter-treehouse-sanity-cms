export default {
  title: 'Text Block',
  name: 'textBlock',
  type: 'document',
  fields: [
    {
      title: 'Body',
      name: 'body',
      type: 'array',
      of: [{type: 'block'}],
    },
    {
      name: 'name',
      type: 'string',
      title: 'Name',
    },
  ],
}

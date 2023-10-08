export default {
  name: 'textSection',
  type: 'document',
  title: 'Text Section',
  fields: [
    {
      name: 'image',
      type: 'image',
      title: 'Background Image',
    },
    {
      name: 'title',
      type: 'string',
      title: 'Title',
    },
    {
      name: 'titleCursive',
      type: 'boolean',
      title: 'Title Cursive',
    },
    {
      name: 'subTitle',
      type: 'string',
      title: 'Sub Title',
    },
    {
      name: 'subtitleCursive',
      type: 'boolean',
      title: 'Subtitle Cursive',
    },
    {
      title: 'Body',
      name: 'body',
      type: 'array',
      of: [{type: 'block'}],
    },
    {
      title: 'Body Background',
      name: 'bodyBackground',
      type: 'boolean',
    },
    {
      title: 'Body Background Color',
      name: 'bodyBackgroundColor',
      type: 'color',
    },
  ],
}

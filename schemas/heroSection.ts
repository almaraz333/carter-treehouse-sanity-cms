export default {
  name: 'heroSection',
  type: 'document',
  title: 'Hero Section',
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
      name: 'hasButton',
      type: 'boolean',
      title: 'Has Button',
    },
    {
      name: 'buttonText',
      type: 'string',
      title: 'Button Text',
    },
    {
      name: 'buttonLink',
      type: 'string',
      title: 'Button Link',
    },
  ],
}

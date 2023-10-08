export default {
  name: 'imageSection',
  type: 'document',
  title: 'Image Section',
  fields: [
    {
      name: 'image',
      type: 'image',
      title: 'Image',
    },
    {
      title: 'Image Orientation',
      name: 'imageOrientation',
      type: 'string',
      layout: 'dropdown',
      options: {
        list: [
          {title: 'Left', value: 'left'},
          {title: 'Right', value: 'right'},
        ],
      },
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
  ],
}

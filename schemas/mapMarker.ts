import mapMarkerType from './mapMarkerType'

export default {
  title: 'Map Markers',
  name: 'mapMarkers',
  type: 'document',
  fields: [
    {
      title: 'Markers',
      name: 'markers',
      type: 'array',
      of: [mapMarkerType],
    },
    {
      title: 'Title',
      name: 'title',
      type: 'string',
    },
    {
      title: 'Description',
      name: 'description',
      type: 'array',
      of: [{type: 'block'}],
    },
  ],
  initialValue: {
    markers: [
      {
        latitude: 0,
        longitude: 0,
        name: 'Map Center',
        description: 'Map Center',
      },
    ],
  },
}

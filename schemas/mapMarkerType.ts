export default {
  title: 'Map Marker',
  name: 'mapMarkerType',
  type: 'object',
  fields: [
    {
      title: 'Latitude',
      name: 'latitude',
      type: 'number',
    },
    {
      name: 'longitude',
      type: 'number',
      title: 'Longitude',
    },
    {
      name: 'name',
      type: 'string',
      title: 'Name',
    },
    {
      name: 'description',
      type: 'text',
      title: 'Description',
    },
  ],
}

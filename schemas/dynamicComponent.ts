import {orderRankField, orderRankOrdering} from '@sanity/orderable-document-list'

import Offering from './offering'
import MapMarker from './mapMarker'
import ImageSection from './imageSection'
import HeroSection from './heroSection'
import TextSection from './textSection'

export default {
  name: 'dynamicComponent',
  title: 'Dynamic Component',
  type: 'document',
  orderings: [orderRankOrdering],
  fields: [
    orderRankField({type: 'dynamicComponent'}),
    {
      name: 'componentType',
      title: 'Component Type',
      type: 'string',
      options: {
        list: [
          {title: 'Offerings', value: 'offerings'},
          {title: 'Map', value: 'Map Marker'},
          {title: 'Image Section', value: 'Image Section'},
          {title: 'Hero Section', value: 'Hero Section'},
          {title: 'Text Section', value: 'Text Section'},
        ],
        layout: 'dropdown',
      },
    },
    {...Offering, hidden: ({document}: any) => document.componentType !== 'offerings'},
    {...MapMarker, hidden: ({document}: any) => document.componentType !== 'Map Marker'},
    {...ImageSection, hidden: ({document}: any) => document.componentType !== 'Image Section'},
    {...HeroSection, hidden: ({document}: any) => document.componentType !== 'Hero Section'},
    {...TextSection, hidden: ({document}: any) => document.componentType !== 'Text Section'},
  ],
  preview: {
    select: {
      componentType: 'componentType',
      offerings: 'offerings',
      mapMarker: 'mapMarkers',
      imageSection: 'imageSection',
      heroSection: 'heroSection',
      textSection: 'textSection',
    },
    prepare(selection: any) {
      const {componentType, imageSection, heroSection, mapMarker, textSection, offerings} =
        selection
      let title

      switch (componentType) {
        case 'offerings':
          title = offerings?.title || 'No title'
          break
        case 'Map Marker':
          title = mapMarker?.title || 'No title'
          break
        case 'Image Section':
          title = imageSection?.title || 'No title'
          break
        case 'Hero Section':
          title = heroSection?.title || 'No title'
          break
        case 'Text Section':
          title = textSection?.title || 'No title'
          break
        default:
          title = 'Unknown type'
      }

      return {
        title: title ? `${title} - ${componentType}`.toUpperCase() : componentType.toUpperCase(),
      }
    },
  },
}

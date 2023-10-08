import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'
import {orderableDocumentListDeskItem} from '@sanity/orderable-document-list'
import {colorInput} from '@sanity/color-input'

export default defineConfig({
  name: 'default',
  title: 'sanity-cms',

  projectId: 'lfx1rf9u',
  dataset: 'production',

  plugins: [
    deskTool({
      structure: (S, context) => {
        const orderableTypes = ['dynamicComponent']
        return S.list()
          .title('Content')
          .items([
            ...S.documentTypeListItems().filter(
              (listItem) => !orderableTypes.includes(listItem.getId())
            ),
            ...orderableTypes.map((type) => orderableDocumentListDeskItem({type, S, context})),
          ])
      },
    }),
    visionTool(),
    colorInput(),
  ],

  schema: {
    types: schemaTypes,
  },
})

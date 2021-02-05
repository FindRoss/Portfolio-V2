export default {
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string'
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text'
    },
    {
      name: 'tool',
      title: 'Tools',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [
            { type: 'tool' }
          ]
        }
      ]
    }
  ]
}
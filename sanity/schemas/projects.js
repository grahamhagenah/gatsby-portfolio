export default {
  title: 'Projects',
  name: 'projects',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Title',
      type: 'string',
      description: 'Name of web project'
    },
    {
      name: 'subtitle',
      title: 'Subtitle',
      type: 'string',
      description: 'Short description of project'
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 100,
      },
    },
    {
      name: 'date',
      title: 'Date',
      type: 'date',
      description: 'Date completed',
    },
    {
      name: 'type',
      title: 'Project Type',
      type: 'string',
      options: {
        list: [
          { title: 'Project', value: 'project' },
          { title: 'Story', value: 'story' },
        ],
      },
    },
    {
      name: 'image',
      title: 'Featured Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'desktop',
      title: 'Desktop View',
      type: 'image',
      options: {
        hotspot: true,
      },
      hidden: ({document}) => document?.type == 'story'
    },
    {
      name: 'mobile',
      title: 'Mobile View',
      type: 'image',
      options: {
        hotspot: true,
      },
      hidden: ({document}) => document?.type == 'story'
    },
    {
      name: 'url',
      title: 'URL',
      type: 'url',
      description: 'URL of project',
      hidden: ({document}) => document?.type == 'story'
    },
    {
      name: 'source',
      title: 'Source Code',
      type: 'url',
      description: 'Source code of project',
      hidden: ({document}) => document?.type == 'story'
    },
    {
      title: 'Overview', 
      name: 'overview',
      type: 'array', 
      description: 'Overview of project',
      of: [{type: 'block'}]
    },
    {
      title: 'Stack',
      name: 'stack',
      type: 'array',
      of: [{type: 'string'}],
      hidden: ({document}) => document?.type == 'story'
    },
    {
      title: 'Full Description', 
      name: 'text',
      type: 'array', 
      description: 'Description of project process and details',
      of: [{type: 'block'}]
    },
    {
      title: 'Why I made this',
      name: 'why',
      type: 'array', 
      description: 'Describe the purpose and goal',
      of: [{type: 'block'}],
      hidden: ({document}) => document?.type == 'story'
    },
    {
      title: 'Stack Description',
      name: 'stackDescription',
      type: 'array', 
      description: 'Explain the tech stack',
      of: [{type: 'block'}],
      hidden: ({document}) => document?.type == 'story'
    },
  ],
  orderings: [
    {
      title: 'Date',
      name: 'dateDesc',
      by: [
        {field: 'date', direction: 'desc'}
      ]
    },
  ]
};
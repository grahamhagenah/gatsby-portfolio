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
    },
    {
      name: 'mobile',
      title: 'Mobile View',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'date',
      title: 'Date',
      type: 'string',
      description: 'Date completed'
    },
    {
      name: 'url',
      title: 'URL',
      type: 'url',
      description: 'URL of project'
    },
    {
      name: 'source',
      title: 'Source Code',
      type: 'url',
      description: 'Source code of project'
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
      of: [{type: 'string'}]
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
      of: [{type: 'block'}]
    },
    {
      title: 'Stack Description',
      name: 'stackDescription',
      type: 'array', 
      description: 'Explain the tech stack',
      of: [{type: 'block'}]
    }
  ],
};
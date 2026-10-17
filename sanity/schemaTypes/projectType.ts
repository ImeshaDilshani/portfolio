import { defineField, defineType } from 'sanity'

export const projectType = defineType({
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Project Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'label',
      title: 'Type / Label',
      type: 'string',
      description: 'E.g., "FULL STACK WEB", "AI INTEGRATION", "DATA SCIENCE", "MOBILE APP"',
    }),
    defineField({
      name: 'category',
      title: 'Portfolio Section',
      type: 'string',
      options: {
        list: [
          { title: 'My Own Product (Main Showcase)', value: 'featured' },
          { title: 'Coding & Software Engineering', value: 'coding' },
          { title: 'Data Science & Data Engineering', value: 'data' },
        ],
        layout: 'radio',
      },
      initialValue: 'featured',
    }),
    defineField({
      name: 'description',
      title: 'Short Description',
      type: 'text',
      rows: 3,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'mainImage',
      title: 'Project Visual / Thumbnail',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'tags',
      title: 'Tags / Technologies',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags',
      },
    }),
    defineField({
      name: 'href',
      title: 'Primary Link (Live Site / Demo)',
      type: 'url',
      description: 'Direct link to live site, web app, or demo',
    }),
    defineField({
      name: 'githubUrl',
      title: 'GitHub URL',
      type: 'url',
      description: 'Link to GitHub repository (optional)',
    }),
    defineField({
      name: 'links',
      title: 'Additional Links',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'label', title: 'Label', type: 'string' },
            { name: 'href', title: 'URL', type: 'url' },
          ],
        },
      ],
    }),
    defineField({
      name: 'year',
      title: 'Year',
      type: 'number',
      initialValue: new Date().getFullYear(),
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description: 'Lower numbers display first (e.g. 1, 2, 3)',
      initialValue: 1,
    }),
    defineField({
      name: 'publishedAt',
      title: 'Date Completed / Published',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
    }),
  ],

  preview: {
    select: {
      title: 'title',
      label: 'label',
      category: 'category',
      media: 'mainImage',
    },
    prepare(selection) {
      const { label, category } = selection
      return {
        ...selection,
        subtitle: label || category || 'Project',
      }
    },
  },
})

export default function () {
  return useState('links', () => ({
    main: [
      { url: '/', label: 'Home' }
    ],
    footer: {
      highlights: [
        { url: '/', label: 'Moving Interstate' },
        { url: '/', label: 'How I Got Here' },
        { url: '/', label: 'Back to School' }
      ],
      about: [
        { url: '/contact', label: 'Contact' },
        { url: '/uses', label: 'Uses' }
      ],
      social: [
        {
          url: 'https://codepen.io/miclgael',
          icon: 'icon-codepen',
          label: 'Codepen'
        },
        {
          url: 'https://linkedin.com/in/miclgael',
          icon: 'icon-linkedin',
          label: 'LinkedIn'
        },
        {
          url: 'https://twitter.com/miclgael',
          icon: 'icon-twitter',
          label: 'Twitter'
        }
      ]
    }
  }))
}

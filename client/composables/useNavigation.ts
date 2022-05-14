export default function () {
  // Todo, this doesn't need to be reactive...
  return useState('links', () => ({
    main: [
      { url: '/portfolio', label: 'Portfolio' },
      { url: '/resume', label: 'Resumé' },
      { url: '/projects', label: 'Projects' },
      { url: '/about', label: 'About' },
      { url: '/contact', label: 'Get in Contact', cta: true }
    ],
    footer: {
      highlights: [
        { url: '/blog/moving-interstate', label: 'Moving Interstate' },
        { url: '/blog/how-i-got-here', label: 'How I Got Here' },
        { url: '/blog/back-to-school', label: 'Back to School' }
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

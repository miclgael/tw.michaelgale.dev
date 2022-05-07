import { defineNuxtConfig } from 'nuxt3'
import transformerDirective from '@unocss/transformer-directives'

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  app: {
    head: {
      htmlAttrs: {
        lang: 'en'
      },
      title: 'Michael Gale',
      meta: [{
        hid: 'description',
        name: 'description',
        content: 'The web developer from Melbourne, Australia'
      },
      {
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        name: 'msapplication-TileColor',
        content: '#070707'
      },
      {
        name: 'msapplication-config',
        content: '/favicons/browserconfig.xml'
      },
      {
        name: 'theme-color',
        content: '#070707'
      }
      ],
      link: [
        // Favicons
        {
          rel: 'icon',
          href: '/favicons/favicon.ico'
        },
        {
          rel: 'apple-touch-icon',
          sizes: '180x180',
          href: '/favicons/apple-touch-icon.png'
        },
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '32x32',
          href: '/favicons/favicon-32x32.png'
        },
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '16x16',
          href: '/favicons/favicon-16x16.png'
        },
        {
          rel: 'manifest',
          href: '/favicons/site.webmanifest'
        },
        {
          rel: 'mask-icon',
          href: '/favicons/safari-pinned-tab.svg',
          color: '#070707'
        },
        {
          rel: 'shortcut icon',
          href: '/favicons/favicon.ico'
        },
        // Fonts
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css?family=Fira+Sans|IBM+Plex+Mono:400,400i,600|IBM+Plex+Sans:400,600&display=swap'
        }
      ]
    }
  },
  buildModules: [
    '@nuxtjs/eslint-module',
    '@unocss/nuxt',
    '@unocss/transformer-directives'
  ],
  srcDir: './client',
  css: [
    '@unocss/reset/tailwind.css'
  ],
  unocss: {
    // enabled `@unocss/preset-uno`
    uno: true,
    // enabled `@unocss/preset-icons`
    icons: false,
    // enabled `@unocss/preset-attributify`
    attributify: false,
    shortcuts: {
      inside: `
        p-l
        p-r
        max-w-screen-2xl
        m-auto
      `,
      'site-content': `
        min-h-xl
      `
    },
    rules: [
      ['plex-mono', { 'font-family': '\'IBM Plex Mono\', monospace', 'font-weight': 'normal' }],
      ['gradient-fill', { 'background-image': 'linear-gradient(to right, rgb(74, 95, 226), #0ff)' }]
    ],
    transformers: [
      // Force transformer to expand `@apply` before passing to other preprocessors
      // https://github.com/unocss/unocss/issues/809#issuecomment-1118632177
      transformerDirective({ enforce: 'pre' })
    ],
    theme: {
      breakpoints: {
        // custom xs
        xs: '428px',
        // defaults
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
        // custom 3xl
        '3xl': '1600px'
      }
    }
  }
})

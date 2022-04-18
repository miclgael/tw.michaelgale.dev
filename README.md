# Nuxt 3 Minimal Starter

We recommend to look at the [documentation](https://v3.nuxtjs.org).

## Setup

Make sure to install the dependencies

```bash
npm install
```

## Development

Start the development server on http://localhost:3000

```bash
npm run dev
```

## Production

Build the application for production:

```bash
npm run build
```

Checkout the [deployment documentation](https://v3.nuxtjs.org/docs/deployment).

## Scaffolding steps

Steps taken to initialise repository

```
npx nuxi init tw.michaelgale.dev && \
cd tw.michaelgale.dev && \
npm install && \
npm run dev
```

### Ensure LTS node

```
nvm use --lts && \
echo v16.14.2 >> .nvmrc
```

### Starter component, layout and index page

```
npx nuxi add component global/AppHeader && \
npx nuxi add component global/AppFooter && \
npx nuxi add component global/AppIcons && \
npx nuxi add component global/AppNavigation && \
npx nuxi add component global/AppBranding && \
npx nuxi add layout default && \
npx nuxi add page index && \
rm -rf app.vue
```

### Move nuxt root to `./client`

```ts nuxt.config.ts
import { defineNuxtConfig } from "nuxt3";

export default defineNuxtConfig({
  srcDir: "./client", // ✨
});
```

### Convert Vanilla CSS to Tailwind Utils

[https://tailwind-converter.netlify.app/](https://tailwind-converter.netlify.app/)
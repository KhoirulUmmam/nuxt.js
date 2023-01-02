# Nuxt 3 Minimal Starter

Look at the [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Make sure to install the dependencies:

```bash
# yarn
yarn install

# npm
npm install

# pnpm
pnpm install --shamefully-hoist
```

## Development Server

Start the development server on http://localhost:3000

```bash
npm run dev
```

## Production

Build the application for production:

```bash
npm run build
```

Locally preview production build:

```bash
npm run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.

# Styling with NuxtTailwind

Look at the [NuxtTailwind documentation](https://tailwindcss.nuxt.dev/) to learn more.

## Installation

Using Tailwind CSS in your Nuxt project is only one command away ✨

Make sure to install the dependencies:
1. Add @nuxtjs/tailwindcss dependency to your project:

```bash
# yarn
yarn add --dev @nuxtjs/tailwindcss

# npm
npm install --save-dev @nuxtjs/tailwindcss
```

2. Add it to your modules section in your nuxt.config:
```bash
# nuxt.config (Nuxt 3)
export default defineNuxtConfig({
    modules: ['@nuxtjs/tailwindcss']
})

# nuxt.config (Nuxt 2)
export default {
  modules: ['@nuxtjs/tailwindcss']
}
```


If you're going to create your own Tailwind CSS file, make sure to add the @tailwind directives for each of Tailwind’s layers.
```bash
@tailwind base;
@tailwind components;
@tailwind utilities;
```

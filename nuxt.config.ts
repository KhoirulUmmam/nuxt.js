// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
      '@nuxtjs/tailwindcss'
    ],

    app: {
      head: {
        charset: 'utf-16',
        viewport: 'width=500, initial-scale=1',
        title: 'Shiro Store',
        meta: [
          { name: 'description', content: 'Voucher Online Game.' }
        ],
        link: [
          { rel: 'stylesheet', href:'https://fonts.googleapis.com/icon?family=Material+Icons' }
        ]
      }
    }
})
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    components: true,
    modules: [
      '@nuxtjs/tailwindcss',
      "nuxt-icon",
      "@pinia/nuxt"
    ],

    tailwindcss: {
      cssPath: "~/assets/css/tailwindcss.css",
      configPath: 'tailwind.config',
      exposeConfig: false,
      injectPosition: 0,
      viewer: true,
    },

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
        ],
      }
    },
    // auth: {
    //   strategies: {
    //     cookie: {
    //       cookie: {
    //         name: 'XSRF-TOKEN'
    //       }
    //     },
    //     laravelSanctum: {
    //       provider: 'laravel/sanctum',
    //       url: 'http://localhost:8000',
    //       endpoints: {
    //         login: {
    //           url: '/login'
    //         }
    //         // logout: {
    //         //   url: '/api/logout'
    //         // },
    //         // user: {
    //         //   url: '/api/user'
    //         // }
    //       }
    //       // user: {
    //       //   property: false
    //       // }
    //     },
    //   },
    //   redirect: {
    //     login: 'auth/login',
    //     logout: '/',
    //     home: '/dashboard'
    //   }
    // },

    // axios: {
    //   // proxyHeaders: false,
    //   baseURL : 'http://localhost:8000',
    //   credentials: true
    // },

    runtimeConfig: {
      currencyKey: process.env.CURRENCY_API_KEY,
      MONGO_URI: process.env.MONGO_URI
    },

    nitro: {
      plugins: ["@/server/db/index.ts"],
    },

    build: {
      transpile: [
        "@headlessui/vue",
        "vue-taostification",
        "@headlessui/tailwindcss",
      ],
    },
    
    // publicRuntimeConfig: {
    //   axios: {
    //     browserBaseURL: process.env.BROWSER_BASE_URL
    //   }
    // },
  
    // privateRuntimeConfig: {
    //   axios: {
    //     baseURL: process.env.BASE_URL
    //   }
    // },
})
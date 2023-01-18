// https://nuxt.com/docs/api/configuration/nuxt-config
export default {
    components: true,
    modules: ['@nuxtjs/tailwindcss'],

    axios: {
      // proxyHeaders: false,
      baseURL : 'http://localhost:8000',
      credentials: true
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
        ]
      }
    },
    auth: {
      strategies: {
        laravelSanctum: {
          provider: 'laravel/sanctum',
          url: 'http://localhost:8000',
          endpoints: {
            login: {
              url: '/api/login'
            },
            logout: {
              url: '/api/logout'
            },
            user: {
              url: '/api/user'
            }
          },
          user: {
            property: false
          }
        },
      },
      redirect: {
        login: 'auth/login',
        logout: '/',
        home: '/dashboard'
      }
    },
    runtimeConfig: {
      currencyKey: process.env.CURRENCY_API_KEY
    },
    publicRuntimeConfig: {
      axios: {
        browserBaseURL: process.env.BROWSER_BASE_URL
      }
    },
  
    privateRuntimeConfig: {
      axios: {
        baseURL: process.env.BASE_URL
      }
    },
}
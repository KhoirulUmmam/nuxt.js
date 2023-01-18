// https://nuxt.com/docs/api/configuration/nuxt-config
export default {
    components: true,
    modules: ['@nuxtjs/tailwindcss'],

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
        cookie: {
          cookie: {
            name: 'XSRF-TOKEN'
          }
        },
        laravelSanctum: {
          provider: 'laravel/sanctum',
          url: 'http://localhost:8000',
          endpoints: {
            login: {
              url: '/login'
            }
            // logout: {
            //   url: '/api/logout'
            // },
            // user: {
            //   url: '/api/user'
            // }
          }
          // user: {
          //   property: false
          // }
        },
      },
      redirect: {
        login: 'auth/login',
        logout: '/',
        home: '/dashboard'
      }
    },

    axios: {
      // proxyHeaders: false,
      baseURL : 'http://localhost:8000',
      credentials: true
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

export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    htmlAttrs: {
      lang: 'en'
    },
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/icono.ico' },
      { rel: 'preload', as: 'style', href: 'https://fonts.googleapis.com/css?family=Montserrat&display=swap' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: {
    color: '#4FC08D',
    failedColor: '#bf5050',
    position: 'absolute',
    duration: 1500
  },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~/plugins/vue-lazysizes.client.js'
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module'
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa'
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
    retry: { retries: 3 }
  },
  /*
  ** PWA module configuration
  ** See https://pwa.nuxtjs.org/modules/manifest.html
  */
  pwa: {
    manifest: {
      name: 'Web Page of Esteve',
      short_name: 'Esteve Genovard Ferriol',
      lang: 'en'
    },
    workbox: {
      runtimeCaching: [
        {
          urlPattern: 'https://us-central1-tfg2019-ae3f8.cloudfunctions.net/api/education_v3',
          handler: 'cacheFirst',
          method: 'GET',
          strategyOptions: { cacheableResponse: { statuses: [0, 200] } }
        }
      ]
    }
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}

import { defineNuxtConfig } from 'nuxt'
import inject from '@rollup/plugin-inject'
import commonjs from '@rollup/plugin-commonjs'

export default defineNuxtConfig({
  publicRuntimeConfig: {
    iconNetwork: process.env.ICON_NETWORK,
  },
  app: {
    head: {
      title: 'Agora',
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      ],
    },
  },
  css: [
    '~/assets/styles/tailwind.css',
    '~/assets/styles/fonts.css',
    '~/assets/styles/global.css',
    '~/assets/styles/overrides.css',
    '~/assets/styles/transitions.css',
    '~/assets/styles/typography.css',
    '~/assets/styles/utils.css',
  ],
  plugins: [
    '~/plugins/pinia-persistedstate.client',
  ],
  buildModules: [
    '@pinia/nuxt',
  ],
  build: {
    postcss: {
      postcssOptions: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
      },
    },
  },
  vite: {
    plugins: [
      commonjs(),
      inject({
        Buffer: ['buffer', 'Buffer'],
      }),
    ],
    optimizeDeps: {
      include: [
        'buffer',
      ],
    },
  },
})

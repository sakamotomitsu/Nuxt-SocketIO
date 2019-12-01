import { Configuration } from '@nuxt/types';

const config: Configuration = {
  srcDir: 'src/',
  env: { baseUrl: 'http://localhost:3000' },
  buildModules: ['@nuxt/typescript-build'],
  modules: ['@nuxtjs/style-resources'],
  css: ['reset.css'],
  styleResources: {
    sass: ['./src/assets/css/resouces/*']
  },
  build: {
    postcss: {
      plugins: { 'postcss-flexbox': {} },
      preset: { autoprefixer: { grid: true } }
    },
  },
  // manifest.json generator
  manifest: {
    lang: 'ja',
    name: 'LP Title',
    shortName: 'LPT',
    startUrl: '/',
    display: 'standalone'
  },
  serverMiddleware: [
    'redirect-ssl',
    '~/api/main.ts',
    '~/lib/logger.ts'
  ]
};

export default config;

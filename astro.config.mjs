import { defineConfig } from 'astro/config'
import storyblok from '@storyblok/astro'
import { loadEnv } from 'vite'
import tailwind from '@astrojs/tailwind'
import basicSsl from '@vitejs/plugin-basic-ssl'
import react from '@astrojs/react';
const env = loadEnv('', process.cwd(), 'STORYBLOK')

// https://astro.build/config
export default defineConfig({
  integrations: [storyblok({
    //accessToken: env.STORYBLOK_TOKEN,
    accessToken: 'kJZhZFmsjQdPQ303DCdv0Qtt',
    apiOptions: {
      region: '',
    },
    bridge: {
      customParent: 'https://app.storyblok.com',
    },
    components: {
      page: 'storyblok/Page',
      feature: 'storyblok/Feature',
      grid: 'storyblok/Grid',
      teaser: 'storyblok/Teaser',
      Button:'storyblok/Button',
      categorycard:'storyblok/Categorycard',
      Header:'storyblok/Header',
      react_counter:"storyblok/Reactcounter",
      Our_Outlets:"storyblok/Outlets",
      card:"storyblok/Card",
      login:"storyblok/Login"

    },
  }), tailwind(), react()],
  vite: {
    plugins: [basicSsl()],
    server: {
      https: true,
    },
  },
  output:"server"
})
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  // GitHub Pages serves project sites at /<repo-name>/.
  // Update this if the repo is ever renamed.
  base: '/EiT_Pyton/',
})

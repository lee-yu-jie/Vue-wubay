import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from "unplugin-auto-import/vite"
import Components from "unplugin-vue-components/vite";
import Pages from 'vite-plugin-pages'
import Layouts from 'vite-plugin-vue-layouts';


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      imports: ["vue", "vue-router"],
      dts: "src/auto-imports.js"
    }),
    Components({
      extensions: ["vue"],
      include: [/\.vue$/, /\.vue\?vue/],
      dts: "src/auto-components.js",
    }),
    Pages(),
    Layouts(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})

import { defineConfig } from 'vite'

// vue3
// import vue from '@vitejs/plugin-vue'

// vue2
import { createVuePlugin as vue2 } from 'vite-plugin-vue2';

import WindiCSS from 'vite-plugin-windicss'

// 讓所有頁面中都可以使用 scss 變數

// https://vitejs.dev/config/
export default defineConfig({

  // alias: {
  //   "/@": path.resolve(__dirname, "src"),
  // },
  plugins: [
    vue2(),
    WindiCSS()
  ],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "src/mixin.scss";`

        // additionalData: `
        //   $font-stack:  Helvetica, sans-serif;
        //   $font-size:  30px;
        //   $primary-color: #333;
        //   $bg-color: pink;`
      },
    },
  },
})

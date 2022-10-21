/// <reference types="vitest" />

import { resolve } from 'path';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueSetupExtend from 'unplugin-vue-setup-extend-plus/vite';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueSetupExtend(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ],
  base: './',
  css: {
    preprocessorOptions: {
      // 添加scss全局样式
      scss: {
        additionalData: '@import "./src/styles/common.scss";',
      },
    },
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
  server: {
    port: 8080,
    hmr: {
      host: '127.0.0.1',
      port: 8080,
    },
    // 设置 https 代理
    proxy: {
      '/api': {
        target: 'your https address',
        changeOrigin: true,
        rewrite: (path: string) => path.replace(/^\/api/, ''),
      },
    },
  },
  build: {
    rollupOptions: {
      // https://rollupjs.org/guide/en/#outputmanualchunks
      output: {
        manualChunks: {
          Index: ['./src/views/index.vue', './src/views/about.vue'],
        },
      },
    },
  },
  test: {
    environment: 'happy-dom',
    include: ['**/__test__/*.{test,spec}.{ts,tsx}'],
  },
});

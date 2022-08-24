import { defineConfig, splitVendorChunkPlugin } from 'vite'
import react from '@vitejs/plugin-react'
import svgrPlugin from 'vite-plugin-svgr'
import tsconfigPaths from 'vite-tsconfig-paths'
// eslint-disable-next-line import/no-extraneous-dependencies
import checker from 'vite-plugin-checker'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    svgrPlugin(),
    tsconfigPaths(),
    checker({
      typescript: true,
      eslint: {
        lintCommand: 'eslint "./src/**/*.{ts,tsx}"',
      },
      terminal: true,
      overlay: false,
    }),
  ],
  build: {
    sourcemap: true,
    rollupOptions: {
      plugins: [
        splitVendorChunkPlugin()
      ]
    }
  }
})

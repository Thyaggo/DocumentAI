import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import mdx from '@mdx-js/rollup'

/** @type {import('rollup').RollupOptions} */

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),  mdx()],
})

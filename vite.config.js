import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'
import { resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import path from 'node:path'

const __dirname = fileURLToPath(new URL('.', import.meta.url))

export default defineConfig({
  plugins: [
    react(),
    tailwindcss()
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
      '@package': path.resolve(__dirname, 'package.json'),
      '@root': path.resolve(__dirname),
    }
  },
  optimizeDeps: {
    include: [
      'react',
      'react-dom',
      'react/jsx-runtime',
      'react/jsx-dev-runtime',
      'use-sync-external-store',
      'use-sync-external-store/shim',
      'use-sync-external-store/shim/with-selector',
    ],
<<<<<<< /var/folders/c7/8_zkmby94mg9cmkd3knh6w940000gn/T/sk-mf-cur.tmp
=======
    esbuildOptions: {
      target: 'esnext',
      define: {
        global: 'globalThis'
      }
    }
  },
  build: {
    rollupOptions: {
      external: [
        /\.node$/,
        /@tailwindcss\/oxide/
      ]
    }
  },
  server: {
    host: 'localhost',
    open: false,
    port: 5173,
    strictPort: false,
    // Don't pin the HMR port — Vite derives it from the resolved server port.
    // Hardcoding 5173 broke HMR ("WebSocket closed without opened") whenever
    // 5173 was taken and the server fell back to 5174 while HMR still dialed 5173.
    hmr: {
      overlay: false
    },
    watch: {
      usePolling: false,
      ignored: ['**/node_modules/**', '**/.git/**']
    }
>>>>>>> /var/folders/c7/8_zkmby94mg9cmkd3knh6w940000gn/T/sk-mf-new.tmp
  },
})

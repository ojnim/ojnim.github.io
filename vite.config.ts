import { defineConfig } from 'vite'
import react from "@vitejs/plugin-react";
import path from 'path'

export default defineConfig({
  base: '/', // Important for GitHub Pages!
  root: 'src',
  plugins: [react()],
  build: {
    outDir: '../dist',
    emptyOutDir: true,
    sourcemap: true,
    minify: 'esbuild', // Use esbuild for minification (default)
    assetsDir: 'assets',
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'src/index.html'),
        experience: path.resolve(__dirname, 'src/experience.html'),
        blog: path.resolve(__dirname, 'src/blog.html'),
      },
      output: {
        assetFileNames: 'assets/[name]-[hash][extname]' // Hashing for cache busting
      }
    }
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'), // Optional alias for cleaner imports
    }
  },
  define: {
    'process.env.NODE_ENV': '"production"' // Inject environment variables
  }
})

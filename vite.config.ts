import { defineConfig } from 'vite'
import path from 'path'

export default defineConfig({
  base: '/', // Important for GitHub Pages!
  root: 'src',
  build: {
    outDir: '../dist',
    emptyOutDir: true,
    sourcemap: true,
    minify: 'esbuild', // Use esbuild for minification (default)
    assetsDir: 'assets',
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'index.html'),
        experience: path.resolve(__dirname, 'experience.html'),
        blog: path.resolve(__dirname, 'blog.html'),
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

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      assetsInclude: ['**/*.jpg', '**/*.JPG', '**/*.png'], // Include all assets to be cached
      manifest: {
        name: 'GuyMorganB.com',
        short_name: 'GuyMorganB',
        description: 'Check out GuyMorganB.com, Software & Web Developer portal',
        theme_color: '#ffffff',
        background_color: '#ffffff',
        display: 'standalone',
        start_url: '/GuyMorganB.com/', // start URL for GitHub Pages
        id: '/GuyMorganB.com/', //  a consistent ID for the app
        scope: '/GuyMorganB.com/', // the scope to restrict what URLs are considered part of the app
        icons: [
          // Include square icons as required by most devices
          {
            src: '192x192Icon.png', // path to the icon
            sizes: '192x192',
            type: 'image/png',
            purpose: 'any', // Can be used as app icon and shortcut icon
          },
          // More icon sizes can be included here, for example, 512x512
          {
            src: '512x512Icon.png', // Provide the correct path to the icon
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any',
          },
        ],
        screenshots: [
          // Include screenshots to provide a preview during PWA installation
          {
            src: 'Screenshot1280x720.png', // Path to the desktop screenshot
            sizes: '1280x720',
            type: 'image/png',
            label: 'Desktop Screenshot',
            form_factor: 'wide',
          },
          {
            src: 'Screenshot640x1136.png', // Path to the mobile screenshot these sizes must be exact
            sizes: '640x1136',
            type: 'image/png',
            label: 'Mobile Screenshot',
            form_factor: 'narrow',
          },
        ],
      },
    }),
  ],
  build: {
    outDir: 'dist', // Default output directory
    base: '/Guymorganb/', 
  }
})

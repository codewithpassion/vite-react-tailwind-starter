import react from '@vitejs/plugin-react-swc';
import sizeOf from 'image-size';
import path from 'path';
import { defineConfig } from 'vite';
import { imagetools } from 'vite-imagetools';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:8787',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  },
  plugins: [
    react(),
    imagetools({
      defaultDirectives: (url) => {
        if (url.pathname.includes('photos')) {
          const dimensions = sizeOf(url.pathname);
          let w = 800;
          let h = Math.round(dimensions.height! * (w / dimensions.width!));
          if (dimensions.height! > dimensions.width!) {
            h = 800;
            w = Math.round(dimensions.width! * (h / dimensions.height!));
          }

          return new URLSearchParams({
            format: 'webp',
            quality: '85',
            width: `${w}`,
            height: `${h}`,
          })
        }
        return new URLSearchParams()
      }
    }),
    // ViteImageOptimizer({}),
  ],
  resolve: {
    alias: {

      "@": path.resolve(__dirname, "./src"),
    },
  }
})

import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig} from 'vite';

export default defineConfig(() => {
  return {
    plugins: [react(), tailwindcss()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    build: {
      rollupOptions: {
        input: {
          main: path.resolve(__dirname, 'index.html'),
          about: path.resolve(__dirname, 'about/index.html'),
          services: path.resolve(__dirname, 'services/index.html'),
          teethWhitening: path.resolve(__dirname, 'services/teeth-whitening/index.html'),
          dentalBraces: path.resolve(__dirname, 'services/dental-braces/index.html'),
          toothExtraction: path.resolve(__dirname, 'services/tooth-extraction/index.html'),
          rootCanal: path.resolve(__dirname, 'services/root-canal/index.html'),
          dentalImplants: path.resolve(__dirname, 'services/dental-implants/index.html'),
          veneers: path.resolve(__dirname, 'services/veneers/index.html'),
          pediaDentistry: path.resolve(__dirname, 'services/pedia-dentistry/index.html'),
          oralProphylaxis: path.resolve(__dirname, 'services/oral-prophylaxis/index.html'),
        },
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modify—file watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});

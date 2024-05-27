import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@components': path.resolve(__dirname, 'src/components'),
      '@constants': path.resolve(__dirname, 'src/constants'),
      '@layout': path.resolve(__dirname, 'src/layout'),
      '@views': path.resolve(__dirname, 'src/views'),
      '@reducers': path.resolve(__dirname, 'src/reducers'),
      '@assets': path.resolve(__dirname, 'public/assets'),

    },
  },
})

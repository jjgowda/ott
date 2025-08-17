import { sveltekit } from '@sveltejs/kit/vite';
import type { UserConfig } from 'vite';

const config: UserConfig = {
  plugins: [sveltekit()],
  build: {
    target: 'es2019',
    rollupOptions: {
      output: {
        manualChunks: undefined
      }
    }
  }
};
export default config;
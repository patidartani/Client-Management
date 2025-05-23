import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: "/ca-project/", // Yeh add karna zaroori hai
  plugins: [react()],
});

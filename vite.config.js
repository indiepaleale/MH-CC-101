import { defineConfig } from 'vite';

export default defineConfig(({ command, mode }) => {
  const slide = process.env.SLIDE || '00'; 
  return {
    root: slide, 
    base: './', 
    build: {
      outDir: `../dist/${slide}`,
      emptyOutDir: true,
    },
    server: {
      open: true,
    },
  };
});

import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: "/tailwindcss-learning-task/", 
  plugins: [
    tailwindcss(),
  ],
})
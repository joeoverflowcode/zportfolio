import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/zportfolio/",
  // build: {
  //   rollupOptions: {
  //     input: {cname: "CNAME" } 
  //   }
  // },
  plugins: [react()],
})

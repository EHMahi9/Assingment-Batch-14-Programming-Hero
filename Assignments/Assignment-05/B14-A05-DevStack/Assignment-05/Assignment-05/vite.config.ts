import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// এখানে আমরা tailwind-এর প্লাগিনটি সরিয়ে দিলাম, কারণ Version 3-তে এটি লাগে না
export default defineConfig({
  plugins: [react()],
})
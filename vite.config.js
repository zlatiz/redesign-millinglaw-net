import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        "main": "index.html",
        "about": "about/index.html",
        "practice-areas": "practice-areas/index.html",
        "attorney": "attorney/index.html",
        "contact": "contact/index.html"
}
    }
  }
})

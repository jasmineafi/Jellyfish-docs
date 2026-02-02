import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "Catatan Jasmine",
  description: "User Guide Jellyfish",
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Panduan', link: '/guide/login' }
    ],
    sidebar: [
      {
        text: 'Pendahuluan',
        items: [
          { text: 'Login ke Sistem', link: '/guide/login' }
        ]
      }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})

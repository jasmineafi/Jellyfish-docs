import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "Jellyfish Guide",
  description: "User Guide for Jellyfish App",
  // Hapus baris srcDir kalau ada, atau pastikan isinya kosong/titik
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/navigasi' }
    ],
    sidebar: [
      {
        text: 'Panduan',
        items: [
          { text: 'Navigasi', link: '/guide/navigasi' },
          { text: 'Login', link: '/guide/login' }
        ]
      }
    ]
  }
})

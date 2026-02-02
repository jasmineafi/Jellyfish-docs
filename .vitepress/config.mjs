import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "Jellyfish Guide",
  description: "User Guide",
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Login', link: '/guide/login' },
      { text: 'Navigasi', link: '/guide/navigasi' } // Tambahkan ini di menu atas
    ],
    sidebar: [
      {
        text: 'Panduan Penggunaan',
        items: [
          { text: 'Pengenalan', link: '/' },
          { text: 'Login ke Sistem', link: '/guide/login' },
          { text: 'Navigasi Aplikasi', link: '/guide/navigasi' } // Tambahkan ini supaya tombol "Next" muncul
        ]
      }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/jasmineafi/Jellyfish-docs' } // Link ke repo kamu sendiri
    ],
    // Opsional: Ganti tulisan di tombol bawah
    docFooter: {
      prev: 'Sebelumnya',
      next: 'Selanjutnya'
    }
  }
})

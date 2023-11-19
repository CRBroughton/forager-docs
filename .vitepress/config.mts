import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Forager",
  description: "Web based application for mapping publicly accessible foods",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    search: {
      provider: 'local'
    },
    nav: [
      { text: 'Home', link: '/' },
    ],

    sidebar: [
      {
        text: "Introduction",
        items: [
          {
            text: "What is Forager?", link: "/what-is-forager"
          }
        ]
      },
      {
        text: "Guide",
        items: [
          {
            text: "Installation", link: '/guide/installation'
          },
          {
            text: "Account creation", link: '/guide/account-creation'
          },
          {
            text: "Features", link: "/guide/features"
          },
          // {
          //   text: "Hosting", link: "/guide/hosting"
          // },
          {
            text: "Building Forager from source", link: "/guide/building-forager-from-source"
          }
        ]
      },
      // {
      //   text: 'Examples',
      //   items: [
      //     { text: 'Markdown Examples', link: '/markdown-examples' },
      //     { text: 'Runtime API Examples', link: '/api-examples' }
      //   ]
      // }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/crbroughton/forager' }
    ]
  }
})

import { defineConfig } from 'vitepress';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  ignoreDeadLinks: true,
  base: '/_documents/',
  title: 'Template Docs',
  description: 'A VitePress Site',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' },
    ],

    sidebar: [
      {
        text: 'Guide',
        items: [
          { text: 'Introduction', link: '/guide/introduction' },
          {
            text: 'Getting Started',
            items: [
              {
                text: 'Installation',
                link: '/guide/getting-started/installation',
              },
              {
                text: 'Configuration',
                link: '/guide/getting-started/configuration',
              },
              {
                items: [
                  {
                    text: 'Installation',
                    link: '/guide/getting-started/installation',
                  },
                  {
                    text: 'Configuration',
                    link: '/guide/getting-started/configuration',
                  },
                ],
              },
            ],
          },
        ],
      },
    ],

    socialLinks: [{ icon: 'github', link: 'https://github.com/k-ito-cat' }],
  },
});

module.exports = {
  title: "GSMA",
  description: "GSMA API documentation",
  base: '/',
  head: [
    ['meta', { name: 'theme-color', content: 'red' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],
  extend: '@vuepress/theme-default',
  themeConfig: {
    repo: '',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    logo: '/images/logo.png',
    nav: [
      {
        text: 'Examples page',
        link: '/examples/'
      },
      {
        text: 'Test',
        link: '/test/'
      },
    ],
    footer: [
      {
        text: 'Examples page',
        link: '/examples/'
      },
      {
        text: 'Test',
        link: '/test/'
      },
    ],
    sidebar: {
      '/examples/': [
        {
          title: 'Examples',
          collapsable: false,
          children: [
            '#introduction',
            'swagger-page',
          ]
        }
      ],
    }
  },
  plugins: [
    ['@vuepress/search', {
      searchMaxSuggestions: 10
    }],
  ]
}

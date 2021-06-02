const fs = require('fs');
const { path } = require('@vuepress/shared-utils');

// define navigation menus

const mainNavigation = [
  {
    text: 'About',
    items: [
      {
        text: 'Business 1',
        link: '/examples/',
      },
    ]
  },
  {
    text: 'Business',
    items: [
      {
        text: 'Business 1',
        link: '/examples/',
      },
      {
        text: 'Business 1',
        link: '/examples/',
      },
      {
        text: 'Business 1',
        link: '/examples/',
      },
      {
        text: 'Business 1',
        link: '/examples/',
      },
      {
        text: 'Business 1',
        link: '/examples/',
      },
    ]
  },
  {
    text: 'API version',
    items: [
      {
        text: 'Business 1',
        link: '/examples/',
      },
      {
        text: 'Business 1',
        link: '/examples/',
      },
    ]
  },
  {
    text: 'Resources',
    items: [
      {
        text: 'Business 1',
        link: '/examples/',
      },
      {
        text: 'Business 1',
        link: '/examples/',
      },
      {
        text: 'Business 1',
        link: '/examples/',
      },
    ]
  },
  {
    text: 'Support',
    link: '/test/'
  },
]

const footerNavigation = [
  {
    text: 'Sitemap',
    link: '/test/'
  },
  {
    text: 'Contact GSMA',
    link: '/test/'
  },
  {
    text: 'Legal',
    link: '/test/'
  },
  {
    text: 'Email Preference Centre',
    link: '/test/'
  },
]

const sidebarNavigation = {
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
    logo: '/images/logo.svg',
    logoSmall: '/images/logo-small.svg',
    nav: [...mainNavigation],
    footer: [...footerNavigation],
    sidebar: sidebarNavigation
  },
  plugins: [
    // ['@vuepress/search', {
    //   searchMaxSuggestions: 10
    // }],
    [
      'fulltext-search',
      {
        tokenize: 'full',
        // provide the contents of a JavaScript file
        hooks: fs.readFileSync(path.resolve(__dirname, './services/searchHooks.js')),
      },
    ],
  ]
}

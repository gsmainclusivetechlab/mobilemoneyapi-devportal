const fs = require('fs');
const { path } = require('@vuepress/shared-utils');

// define navigation menus

const mainNavigation = [
  {
    text: 'About',
    link: '/examples/',
    submenu: [
      {
        text: 'About 1',
        link: '/examples/',
      },
      {
        text: 'About 2',
        link: '/examples/',
      },
      {
        text: 'About 3',
        link: '/examples/',
      }
    ]
  },
  {
    text: 'Business',
    link: '/test/',
    submenu: [
      {
        text: 'Business 1',
        link: '/examples/',
      },
      {
        text: 'Business 2',
        link: '/examples/',
      },
      {
        text: 'Business 3',
        link: '/examples/',
      }
    ]
  },
  {
    text: 'API version',
    link: '/test/',
    submenu: [
      {
        text: 'API version 1',
        link: '/examples/',
      },
      {
        text: 'API version 2',
        link: '/examples/',
      },
      {
        text: 'API version 3',
        link: '/examples/',
      }
    ]
  },
  {
    text: 'Resources',
    link: '/test/',
    submenu: [
      {
        text: 'Resources 1',
        link: '/examples/',
      },
      {
        text: 'Resources 2',
        link: '/examples/',
      },
      {
        text: 'Resources 3',
        link: '/examples/',
      }
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

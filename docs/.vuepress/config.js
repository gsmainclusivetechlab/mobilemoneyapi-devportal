const fs = require('fs');
const { path } = require('@vuepress/shared-utils');

// define navigation menus

const mainNavigation = [
  {
    text: 'About',
    items: [
      {
        text: 'About GSMA',
        link: 'https://www.gsma.com/aboutus/',
        target:'_blank',
      },
      {
        text: 'Mobile for Development',
        link: 'https://www.gsma.com/mobilefordevelopment/mobile-money/',
        target:'_blank',
      },
      {
        text: 'Inclusive Tech Lab',
        link: 'https://www.gsma.com/mobilefordevelopment/mobile-money/gsma-inclusive-tech-lab/',
        target:'_blank',
      },
    ]
  },
  {
    text: 'Business',
    items: [
      {
        text: 'Mobile Money Providers',
        link: '/mobile-money-providers/',
      },
      {
        text: 'Merchants & Service Providers',
        link: '/merchants-and-service-providers/',
      },
      {
        text: 'Governments',
        link: '/governments/',
      },
      {
        text: 'Humanitarian Agencies',
        link: '/humanitarian-agencies/',
      },

      {
        text: 'International Transfer Organisations',
        link: '/international-transfer-organisations/',
      },
      {
        text: 'Payment Service Providers & Payment Aggregators',
        link: '/payment-service-providers-and-payment-aggregators/',
      },
      {
        text: 'Banks & Microfinance Institutions',
        link: '/banks-microfinance-institutions/',
      },
      {
        text: 'FinTech Providers (Insurance Savings Loans)',
        link: '/fintech-providers/',
      },

      {
        text: 'Employers',
        link: '/employers/',
      },
      {
        text: 'Energy & Utilities & AgriTech',
        link: '/energy-utilities-agritech/',
      },
      {
        text: 'Education & Health',
        link: '/education-and-health/',
      },
      {
        text: 'Mobile Money Agents',
        link: '/mobile-money-agents/',
      },
    ]
  },
  {
    text: 'API version',
    items: [
      {
        text: 'Version 1.2',
        link: '/examples/',
      },
      {
        text: 'Version 1.1',
        link: '/examples/',
      },
      {
        text: 'Version 1.0',
        link: '/examples/',
      },
    ]
  },
  {
    text: 'Resources',
    items: [
      {
        text: 'Security',
        link: '/security/',
      },
      {
        text: 'Glossary',
        link: '/examples/',
      },
      {
        text: 'FAQ',
        link: '/faq/',
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
    text: 'Contact GSMA',
    link: 'https://www.gsma.com/aboutus/worldwide-offices',
    target:'_blank',
  },
  {
    text: 'Legal',
    link: 'https://www.gsma.com/aboutus/legal',
    target:'_blank',
  },
  {
    text: 'Email Preference Centre',
    link: 'https://www.gsma.com/aboutus/legal/email-preference-centre',
    target:'_blank',
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
    logo: '/images/logo-small.svg',
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

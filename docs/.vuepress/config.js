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
        link: '/api-versions-1.2/',
      },
      {
        text: 'Version 1.1',
        link: '/download-files/Mobile_Money_API_v1.1.2-Specification_Definition.yaml',
        target: 'download',
      },
      {
        text: 'Version 1.0',
        link: '/download-files/Mobile_Money_API_V1.0.0-Specification_Definition.yaml',
        target: 'download',
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
  
  '/api-versions-1.2/': [
    {
      title: 'API version 1.2',
      collapsable: false,
      sidebarDepth: 2,
      children: [
        {
          title: 'Get started',
          collapsable: true,
          sidebarDepth: 2,
          children: [
            {
              title: 'Api Fundamental',
              path: '/api-versions-1.2/get-started',
              sidebarDepth: 2,
            }
          ]
        },
        {
          title: 'Resources',
          collapsable: true,
          sidebarDepth: 2,
          children: [
            {
              title: 'API Endpoints',
              path: '/api-versions-1.2/resources/api-service-definition',
              collapsable: true,
              sidebarDepth: 2,
            },
            {
              title: 'Change list',
              path: '/api-versions-1.2/resources/change-list',
              collapsable: true,
              sidebarDepth: 2,
            },
            {
              title: 'Highlights',
              path: '/api-versions-1.2/resources/highlights',
              collapsable: true,
              sidebarDepth: 2,
            },
          ]
        },
        {
          title: 'Use cases',
          collapsable: true,
          sidebarDepth: 2,
          children: [
            {
              title: 'P2P Transfers',
              path: '/use-cases/p-2-p-tranfer/',
            },
          ]
        }
      ]
    }
  ],
  '/use-cases/p-2-p-tranfer/':[
    {
      title: 'P2P Transfers',
      collapsable: false,
      sidebarDepth: 2,
      children: [
        {
          title: 'Overview',
          collapsable: true,
          sidebarDepth: 2,
          children: [
            {
              title: 'P2P Transfers',
              path: '/use-cases/p-2-p-tranfer/',
            },
          ]
        },
        {
          title: 'Use case scenarious',
          collapsable: true,
          sidebarDepth: 2,
          children: [
            {
              title: 'Use case scenarious',
              path: '/use-cases/p-2-p-tranfer/scenarious',
              sidebarDepth: 2,
            }
          ]
        }
      ]
    },
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
    sidebar: sidebarNavigation,
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

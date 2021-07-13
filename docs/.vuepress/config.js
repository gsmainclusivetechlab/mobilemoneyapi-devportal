const fs = require('fs');
const { path } = require('@vuepress/shared-utils');

const md = require('markdown-it')()
    .use(require('markdown-it-code-copy'));


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
        items: [
          {
            text: 'Home',
            link: '/api-versions-1.2/',
          },
          {
            text: 'Highlights',
            link: '/api-versions-1.2/resources/highlights',
          },
          {
            text: 'Change list',
            link: '/api-versions-1.2/resources/change-list',
          },
        ]
      },
      {
        text: 'Version 1.1',
        link: '/api-versions-1.1/',
        // link: '/download-files/Mobile_Money_API_v1.1.2-Specification_Definition.yaml',
        // target: 'download',
      },
      {
        text: 'Version 1.0',
        link: '/api-versions-1.0/'
        // link: '/download-files/Mobile_Money_API_V1.0.0-Specification_Definition.yaml',
        // target: 'download',
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
        link: '/glossary/',
      },
      {
        text: 'FAQ',
        link: '/faq/',
      },
    ]
  },
  {
    text: 'Support',
    link: '/support/',
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
      backLink: {
        title: 'API version  1.2',
        path: '/api-versions-1.2/',
      },
      children: [
        {
          title: 'Get started',
          //collapsable: false,
          sidebarDepth: 2,
          children: [
            {
              title: 'Getting started',
              path: '/api-versions-1.2/get-started',
              sidebarDepth: 2,
            }
          ]
        },
        {
          title: 'Resources',
          //collapsable: false,
          sidebarDepth: 2,
          children: [
            {
              title: 'API Service Definition',
              path: '/api-versions-1.2/resources/api-service-definition',
              collapsable: true,
              sidebarDepth: 2,
            },
            {
              title: 'Open OAS3 UI',
              path: '/api-versions-1.2/resources/open-oas3-ui',
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
          //collapsable: false,
          sidebarDepth: 2,
          children: [
            {
              title: 'Merchant payments',
              path: '/use-cases/merchant-payments/',
              sidebarDepth: 2,
              collapsable: true,
            },
            {
              title: 'Disbursements',
              path: '/use-cases/disbursements/',
              sidebarDepth: 2,
              collapsable: true,
            },
            {
              title: 'International transfers',
              path: '/use-cases/international-transfers/',
              sidebarDepth: 2,
              collapsable: true,
            },
            {
              title: 'P2P transfers',
              path: '/use-cases/p-2-p-transfers/',
              sidebarDepth: 2,
              collapsable: true,
            },
            {
              title: 'Reccuring payments',
              path: '/use-cases/reccuring-payments/',
              sidebarDepth: 2,
              collapsable: true,
            },
            {
              title: 'Account linking',
              path: '/use-cases/account-linking/',
              sidebarDepth: 2,
              collapsable: true,
            },
            {
              title: 'Bill payments',
              path: '/use-cases/bill-payments/',
              sidebarDepth: 2,
              collapsable: true,
            },
            {
              title: 'Agent Services',
              path: '/use-cases/agent-services/',
              sidebarDepth: 2,
              collapsable: true,
            },
          ]
        }
      ]
    }
  ],

  '/use-cases/merchant-payments/':[
    {
      title: 'Merchant payments',
      collapsable: false,
      sidebarDepth: 2,
      backLink: {
        title: 'API version 1.2',
        path: '/api-versions-1.2/',
      },
      children: [
        {
          title: 'Overview',
          collapsable: true,
          sidebarDepth: 2,
          children: [
            {
              title: 'P2P Transfers',
              path: '/use-cases/p-2-p-transfers/',
            },
          ]
        },
        {
          title: 'Use case scenarios',
          collapsable: true,
          sidebarDepth: 2,
          children: [
            {
              title: 'P2P Transfer via Switch',
              path: '/use-cases/p-2-p-transfers/scenarios/scenarios.html#p2p-transfer-via-switch',
            },
            {
              title: 'Bilateral P2P Transfer',
              path: '/use-cases/p-2-p-transfers/scenarios/scenarios.html#bilateral-p2p-transfer',
            }
          ]
        }
      ]
    },
  ],
  '/use-cases/disbursements/':[
    {
      title: 'Disbursements',
      collapsable: false,
      sidebarDepth: 2,
      backLink: {
        title: 'API version 1.2',
        path: '/api-versions-1.2/',
      },
      children: [
        {
          title: 'Overview',
          collapsable: true,
          sidebarDepth: 2,
          children: [
            {
              title: 'P2P Transfers',
              path: '/use-cases/p-2-p-transfers/',
            },
          ]
        },
        {
          title: 'Use case scenarios',
          collapsable: true,
          sidebarDepth: 2,
          children: [
            {
              title: 'P2P Transfer via Switch',
              path: '/use-cases/p-2-p-transfers/scenarios/scenarios.html#p2p-transfer-via-switch',
            },
            {
              title: 'Bilateral P2P Transfer',
              path: '/use-cases/p-2-p-transfers/scenarios/scenarios.html#bilateral-p2p-transfer',
            }
          ]
        }
      ]
    },
  ],
  '/use-cases/international-transfers/':[
    {
      title: 'International transfers',
      collapsable: false,
      sidebarDepth: 2,
      backLink: {
        title: 'API version 1.2',
        path: '/api-versions-1.2/',
      },
      children: [
        {
          title: 'Overview',
          collapsable: true,
          sidebarDepth: 2,
          children: [
            {
              title: 'P2P Transfers',
              path: '/use-cases/p-2-p-transfers/',
            },
          ]
        },
        {
          title: 'Use case scenarios',
          collapsable: true,
          sidebarDepth: 2,
          children: [
            {
              title: 'P2P Transfer via Switch',
              path: '/use-cases/p-2-p-transfers/scenarios/scenarios.html#p2p-transfer-via-switch',
            },
            {
              title: 'Bilateral P2P Transfer',
              path: '/use-cases/p-2-p-transfers/scenarios/scenarios.html#bilateral-p2p-transfer',
            }
          ]
        }
      ]
    },
  ],
  '/use-cases/p-2-p-transfers/':[
    {
      title: 'P2P Transfers',
      collapsable: false,
      sidebarDepth: 2,
      backLink: {
        title: 'API version 1.2',
        path: '/api-versions-1.2/',
      },
      children: [
        {
          title: 'Overview',
          collapsable: true,
          sidebarDepth: 2,
          children: [
            {
              title: 'P2P Transfers',
              path: '/use-cases/p-2-p-transfers/',
            },
          ]
        },
        {
          title: 'Use case scenarios',
          collapsable: true,
          sidebarDepth: 2,
          children: [
            {
              title: 'Scenarios',
              path: '/use-cases/p-2-p-transfers/scenarios/scenarios',
            },
          ]
        },
        {
          title: 'API Definition',
          collapsable: true,
          sidebarDepth: 2,
          children: [
            {
              title: 'API Endpoints',
              path: '/use-cases/p-2-p-transfers/api-endpoints',
            },
            {
              title: 'Supporting Objects',
              path: '/use-cases/p-2-p-transfers/supporting-objects',
            },
            {
              title: 'Enumerations',
              path: '/use-cases/p-2-p-transfers/enumerations',
            },
          ]
        },
        {
          title: 'P2P Transfers Open OAS UI',
          collapsable: true,
          sidebarDepth: 2,
          children: [
            {
              title: 'P2P Transfers Open OAS UI',
              path: '/use-cases/p-2-p-transfers/p2p-transfers-open-oas-ui',
            },
          ]
        },
      ]
    },
  ],
  '/use-cases/reccuring-payments/':[
    {
      title: 'Reccuring payments',
      collapsable: false,
      sidebarDepth: 2,
      backLink: {
        title: 'API version 1.2',
        path: '/api-versions-1.2/',
      },
      children: [
        {
          title: 'Overview',
          collapsable: true,
          sidebarDepth: 2,
          children: [
            {
              title: 'P2P Transfers',
              path: '/use-cases/p-2-p-transfers/',
            },
          ]
        },
        {
          title: 'Use case scenarios',
          collapsable: true,
          sidebarDepth: 2,
          children: [
            {
              title: 'P2P Transfer via Switch',
              path: '/use-cases/p-2-p-transfers/scenarios/scenarios.html#p2p-transfer-via-switch',
            },
            {
              title: 'Bilateral P2P Transfer',
              path: '/use-cases/p-2-p-transfers/scenarios/scenarios.html#bilateral-p2p-transfer',
            }
          ]
        }
      ]
    },
  ],
  '/use-cases/account-linking/':[
    {
      title: 'Account linking',
      collapsable: false,
      sidebarDepth: 2,
      backLink: {
        title: 'API version 1.2',
        path: '/api-versions-1.2/',
      },
      children: [
        {
          title: 'Overview',
          collapsable: true,
          sidebarDepth: 2,
          children: [
            {
              title: 'P2P Transfers',
              path: '/use-cases/p-2-p-transfers/',
            },
          ]
        },
        {
          title: 'Use case scenarios',
          collapsable: true,
          sidebarDepth: 2,
          children: [
            {
              title: 'P2P Transfer via Switch',
              path: '/use-cases/p-2-p-transfers/scenarios/scenarios.html#p2p-transfer-via-switch',
            },
            {
              title: 'Bilateral P2P Transfer',
              path: '/use-cases/p-2-p-transfers/scenarios/scenarios.html#bilateral-p2p-transfer',
            }
          ]
        }
      ]
    },
  ],
  '/use-cases/bill-payments/':[
    {
      title: 'Bill payments',
      collapsable: false,
      sidebarDepth: 2,
      backLink: {
        title: 'API version 1.2',
        path: '/api-versions-1.2/',
      },
      children: [
        {
          title: 'Overview',
          collapsable: true,
          sidebarDepth: 2,
          children: [
            {
              title: 'P2P Transfers',
              path: '/use-cases/p-2-p-transfers/',
            },
          ]
        },
        {
          title: 'Use case scenarios',
          collapsable: true,
          sidebarDepth: 2,
          children: [
            {
              title: 'P2P Transfer via Switch',
              path: '/use-cases/p-2-p-transfers/scenarios/scenarios.html#p2p-transfer-via-switch',
            },
            {
              title: 'Bilateral P2P Transfer',
              path: '/use-cases/p-2-p-transfers/scenarios/scenarios.html#bilateral-p2p-transfer',
            }
          ]
        }
      ]
    },
  ],
  '/use-cases/agent-services/':[
    {
      title: 'Agent Services',
      collapsable: false,
      sidebarDepth: 2,
      backLink: {
        title: 'API version 1.2',
        path: '/api-versions-1.2/',
      },
      children: [
        {
          title: 'Overview',
          collapsable: true,
          sidebarDepth: 2,
          children: [
            {
              title: 'P2P Transfers',
              path: '/use-cases/p-2-p-transfers/',
            },
          ]
        },
        {
          title: 'Use case scenarios',
          collapsable: true,
          sidebarDepth: 2,
          children: [
            {
              title: 'P2P Transfer via Switch',
              path: '/use-cases/p-2-p-transfers/scenarios/scenarios.html#p2p-transfer-via-switch',
            },
            {
              title: 'Bilateral P2P Transfer',
              path: '/use-cases/p-2-p-transfers/scenarios/scenarios.html#bilateral-p2p-transfer',
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
  // render all <h> tags that exist in .md page
  markdown: {
    extractHeaders: [ 'h2', 'h3', 'h4','h5','h6' ],
  },
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
    smoothScroll: true,
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

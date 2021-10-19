const fs = require('fs');
const {path} = require('@vuepress/shared-utils');

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
                target: '_blank',
            },
            {
                text: 'Mobile for Development',
                link: 'https://www.gsma.com/mobilefordevelopment/mobile-money/',
                target: '_blank',
            },
            {
                text: 'Inclusive Tech Lab',
                link: 'https://www.gsma.com/mobilefordevelopment/mobile-money/gsma-inclusive-tech-lab/',
                target: '_blank',
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
        target: '_blank',
    },
    {
        text: 'Legal',
        link: 'https://www.gsma.com/aboutus/legal',
        target: '_blank',
    },
    {
        text: 'Email Preference Centre',
        link: 'https://www.gsma.com/aboutus/legal/email-preference-centre',
        target: '_blank',
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
                    sidebarDepth: 2,
                    children: [
                        {
                            title: 'About',
                            path: '/api-versions-1.2/use-cases-about.md',
                            sidebarDepth: 2,
                            collapsable: true,
                        },
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
                            title: 'Recurring payments',
                            path: '/use-cases/recurring-payments/',
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

    '/use-cases/merchant-payments/': [
        {
            title: 'Merchant Payments',
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
                            title: 'Merchant Payments',
                            path: '/use-cases/merchant-payments/',
                        },
                    ]
                },
                {
                    title: 'Use case scenarios',
                    collapsable: true,
                    sidebarDepth: 2,
                    children: [
                        {
                            title: 'About Merchant Payments Scenarios',
                            path: '/use-cases/merchant-payments/scenarios/scenarios',
                        },
                    ]
                },
                {
                    title: 'API Service Definition',
                    collapsable: true,
                    sidebarDepth: 2,
                    children: [
                        {
                            title: 'API Service Definition',
                            path: '/use-cases/merchant-payments/api-service-definition',
                        },
                    ]
                },
                {
                    title: 'Merchant Payments Open OAS UI',
                    collapsable: true,
                    sidebarDepth: 2,
                    children: [
                        {
                            title: 'Merchant Payments Open OAS UI',
                            path: '/use-cases/merchant-payments/merchant-payments-open-oas-ui',
                        },
                    ]
                },
            ]
        },
    ],
    '/use-cases/disbursements/': [
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
                            title: 'Disbursements',
                            path: '/use-cases/disbursements/',
                        },
                    ]
                },
                {
                    title: 'Use case scenarios',
                    collapsable: true,
                    sidebarDepth: 2,
                    children: [
                        {
                            title: 'About Disbursements Scenarios',
                            path: '/use-cases/disbursements/scenarios/scenarios',
                        },
                    ]
                },
                {
                    title: 'API Service Definition',
                    collapsable: true,
                    sidebarDepth: 2,
                    children: [
                        {
                            title: 'API Service Definition',
                            path: '/use-cases/disbursements/api-service-definition',
                        },
                    ]
                },
                {
                    title: 'Disbursements Open OAS UI',
                    collapsable: true,
                    sidebarDepth: 2,
                    children: [
                        {
                            title: 'Disbursements Open OAS UI',
                            path: '/use-cases/disbursements/disbursements-open-oas-ui',
                        },
                    ]
                },
            ]
        },
    ],
    '/use-cases/international-transfers/': [
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
                            title: 'International Transfers',
                            path: '/use-cases/international-transfers/',
                        },
                    ]
                },
                {
                    title: 'Use case scenarios',
                    collapsable: true,
                    sidebarDepth: 2,
                    children: [
                        {
                            title: 'About International Transfers Scenarios',
                            path: '/use-cases/international-transfers/scenarios/scenarios',
                        },
                    ]
                },
                {
                    title: 'API Service Definition',
                    collapsable: true,
                    sidebarDepth: 2,
                    children: [
                        {
                            title: 'API Service Definition',
                            path: '/use-cases/international-transfers/api-service-definition',
                        },
                    ]
                },
                {
                    title: 'International Transfers Open OAS UI',
                    collapsable: true,
                    sidebarDepth: 2,
                    children: [
                        {
                            title: 'International Transfers Open OAS UI',
                            path: '/use-cases/international-transfers/international-transfers-open-oas-ui',
                        },
                    ]
                },
            ]
        },
    ],
    '/use-cases/p-2-p-transfers/': [
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
                            title: 'About P2P Transfers Scenarios',
                            path: '/use-cases/p-2-p-transfers/scenarios/scenarios',
                        },
                    ]
                },
                {
                    title: 'API Service Definition',
                    collapsable: true,
                    sidebarDepth: 2,
                    children: [
                        {
                            title: 'API Service Definition',
                            path: '/use-cases/p-2-p-transfers/api-service-definition',
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
    '/use-cases/recurring-payments/': [
        {
            title: 'Recurring Payments',
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
                            title: 'Recurring Payments',
                            path: '/use-cases/recurring-payments/',
                        },
                    ]
                },
                {
                    title: 'Use case scenarios',
                    collapsable: true,
                    sidebarDepth: 2,
                    children: [
                        {
                            title: 'About Recurring Payments Scenarios',
                            path: '/use-cases/recurring-payments/scenarios/scenarios',
                        },
                    ]
                },
                {
                    title: 'API Service Definition',
                    collapsable: true,
                    sidebarDepth: 2,
                    children: [
                        {
                            title: 'API Service Definition',
                            path: '/use-cases/recurring-payments/api-service-definition',
                        },
                    ]
                },
                {
                    title: 'Recurring Payments Open OAS UI',
                    Recurring: true,
                    sidebarDepth: 2,
                    children: [
                        {
                            title: 'Recurring Payments Open OAS UI',
                            path: '/use-cases/recurring-payments/recurring-payments-open-oas-ui',
                        },
                    ]
                },
            ]
        },
    ],
    '/use-cases/account-linking/': [
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
                            title: 'Account Linking',
                            path: '/use-cases/account-linking/',
                        },
                    ]
                },
                {
                    title: 'Use case scenarios',
                    collapsable: true,
                    sidebarDepth: 2,
                    children: [
                        {
                            title: 'About Account Linking Scenarios',
                            path: '/use-cases/account-linking/scenarios/scenarios',
                        },
                    ]
                },
                {
                    title: 'API Service Definition',
                    collapsable: true,
                    sidebarDepth: 2,
                    children: [
                        {
                            title: 'API Service Definition',
                            path: '/use-cases/account-linking/api-service-definition',
                        },
                    ]
                },
                {
                    title: 'Account Linking Open OAS UI',
                    collapsable: true,
                    sidebarDepth: 2,
                    children: [
                        {
                            title: 'Account Linking Open OAS UI',
                            path: '/use-cases/account-linking/account-linking-open-oas-ui',
                        },
                    ]
                },
            ]
        },
    ],
    '/use-cases/bill-payments/': [
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
                            title: 'Bill Payments',
                            path: '/use-cases/bill-payments/',
                        },
                    ]
                },
                {
                    title: 'Use case scenarios',
                    collapsable: true,
                    sidebarDepth: 2,
                    children: [
                        {
                            title: 'About Bill Payments Scenarios',
                            path: '/use-cases/bill-payments/scenarios/scenarios',
                        },
                    ]
                },
                {
                    title: 'API Service Definition',
                    collapsable: true,
                    sidebarDepth: 2,
                    children: [
                        {
                            title: 'API Service Definition',
                            path: '/use-cases/bill-payments/api-service-definition',
                        },
                    ]
                },
                {
                    title: 'Bill Payments Open OAS UI',
                    collapsable: true,
                    sidebarDepth: 2,
                    children: [
                        {
                            title: 'Bill Payments Open OAS UI',
                            path: '/use-cases/bill-payments/bill-payments-open-oas-ui',
                        },
                    ]
                },
            ]
        },
    ],
    '/use-cases/agent-services/': [
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
                            title: 'Agent Services',
                            path: '/use-cases/agent-services/',
                        },
                    ]
                },
                {
                    title: 'Use case scenarios',
                    collapsable: true,
                    sidebarDepth: 2,
                    children: [
                        {
                            title: 'About Agent Services Scenarios',
                            path: '/use-cases/agent-services/scenarios/scenarios',
                        },
                    ]
                },
                {
                    title: 'API Service Definition',
                    collapsable: true,
                    sidebarDepth: 2,
                    children: [
                        {
                            title: 'API Service Definition',
                            path: '/use-cases/agent-services/api-service-definition',
                        },
                    ]
                },
                {
                    title: 'Agent Services Open OAS UI',
                    collapsable: true,
                    sidebarDepth: 2,
                    children: [
                        {
                            title: 'Agent Services Open OAS UI',
                            path: '/use-cases/agent-services/agent-services-open-oas-ui',
                        },
                    ]
                },
            ]
        },
    ],

}

module.exports = {
    title: "Mobile Money API Developer Portal",
    description: "Mobile Money API documentation",
    base: '/',
    head: [
        ['meta', {name: 'theme-color', content: 'red'}],
        ['meta', {name: 'apple-mobile-web-app-capable', content: 'yes'}],
        ['meta', {name: 'apple-mobile-web-app-status-bar-style', content: 'black'}],
        ['script', {src: '/js/fix-scroll-to-hash.js'}]
    ],
    extend: '@vuepress/theme-default',
    // render all <h> tags that exist in .md page
    markdown: {
        extractHeaders: ['h2', 'h3', 'h4', 'h5', 'h6'],
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
    plugins: {
        'vuepress-plugin-code-copy': true,
        'vuepress-plugin-smooth-scroll': true,
        // '@vuepress/search': {
        //   searchMaxSuggestions: 10
        // },
        'fulltext-search':
            {
                tokenize: 'full',
                // provide the contents of a JavaScript file
                hooks: fs.readFileSync(path.resolve(__dirname, './services/searchHooks.js')),
            },
    },
};

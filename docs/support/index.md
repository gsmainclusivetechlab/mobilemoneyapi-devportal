---
pageClass: contact-us-page custom
title: Support
---

<contact-us-form>
<template v-slot:title>
    Contact us.
</template>
<template v-slot:description>
    If you have any comments or you have found any issues please let us know by filling in the fields below.
</template>
</contact-us-form>

<cta-2-col
    :sectionClass="'cta-cards-block__contact-us'"
    :ctaCards="[
        {
            title: 'FAQ',
            text: 'Search for an answer for your question.',
            link: '/faq',
            linkText: 'Go to FAQ',
        },
        {
            title: 'Glossary',
            text: 'Use the glossary here to find answers to your questions.',
            link: '/glossary',
            linkText: 'Go to Glossary',
        }
    ]"
/>

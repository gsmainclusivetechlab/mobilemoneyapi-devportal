---
pageClass: industry-page custom
title: Merchants & Service Providers
---

  <industry-hero-section
    :title="'Merchants & Service Providers'"
    :description="'A merchant service provider or merchant account provider is a company or service that gives you access to all the tools you need to handle those all-important transactions.'"
    :imageSrc="'/images/industry-hero.jpg'"
    :imageAlt="'image alt'" 
    />

  <use-cases-merchants-service-providers-with-tabs :defaultTab="1"/>

  <succeed-use-case-section
  :cards="[
    {
      image: '/images/succeed-use-case.jpg',
      title: 'Succeed case study',
      description: 'Dictumst habitasse ultrices elementum, consequat ultrices purus volutpat. Posuere amet amet, cum justo bibendum morbi. Auctor interdum morbi non platea justo, et neque.',
      caseList: [
        {
          bulletColor: '#00568F',
          text: 'Increased conversion',
        },
        {
          bulletColor: '#FF6600',
          text: 'Important point',
        },
        {
          bulletColor: '#00A182',
          text: 'Reduced errors',
        },
        {
          bulletColor: '#FCBB2C',
          text: 'Important point',
        },
      ]
    },
  ]"
  />

  <testimonials-slider
  :slides="[
        {
          image: '/images/slide-item-1.jpg',
          description: 'Quisque bibendum elit purus ultricies. Nam imperdiet praesent cursus congue euismod volutpat.\n' +
          'Scelerisque hendrerit sagittis, sit aliquet id sodales dictum pellentesque quis. Lobortis ultrices\n' +
          'ultrices integer urna, pharetra.',
          author: 'John Smith',
          position: 'Developer at Porto',
        },
    ]"
  />

  <get-started
  :sectionTitle="'Ready to explore?'"
  :sectionDescription="'Find our latest API documentation.'"
  :accentLink="{text: 'Start developing', link: '/examples'}"
  />
  
  <div class="text-hidden">
    <p>Merchants & Service Providers</p>
    <p>A merchant service provider or merchant account provider is a company or service that gives you access to all the tools you need to handle those all-important transactions.</p>
  </div>

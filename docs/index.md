---
pageClass: home-page custom
---

  <home-hero-section 
    :title="'Welcome to the GSMA Mobile Money API Developer Portal.'"
    :description="'The Mobile Money API is an initiative developed through collaboration between the mobile money industry and the GSMA, which provides a harmonized API Specification for all the common mobile money use cases which is both easy to use and secure.'"
    :videoSrc="'https://www.youtube.com/watch?v=nJkWmKf6b5Q&ab_channel=MobileforDevelopment'"
    :videoThumbSrc="'/images/hero-video-thumb.png'"
    :imageSrc="'/images/hero-video-thumb.png'"
    :imageAlt="'image alt'" 
    :accentLink="{text: 'Go to API Docs', link: '/examples'}"
    :transparentLink="{text: 'Learn more', link: '/test'}"
    
    />

  <what-you-get/>

  <benefits-list/>

  <mm-metrics/>

  <industries/>
  
  <use-case
  :sectionTitle="'Explore use cases'"
  :sectionDescription="'Bibendum integer quam sem purus donec. Morbi volutpat euismod cras convallis quam.'"
  />

  <specific-grid-section
  :cards="[
    {
      image: '/images/succeed-use-case.jpg',
      title: 'Compliance platform',
      description: 'Dictumst habitasse ultrices elementum, consequat ultrices purus volutpat. Posuere amet amet, cum justo bibendum morbi. Auctor interdum morbi non platea justo, et neque.',
      btnText: 'Learn more',
      link: '#',
    },
    {
      image: '/images/succeed-use-case.jpg',
      title: 'Collaboration platform',
      description: 'Dictumst habitasse ultrices elementum, consequat ultrices purus volutpat. Posuere amet amet, cum justo bibendum morbi. Auctor interdum morbi non platea justo, et neque.',
      btnText: 'Learn more',
      link: '#',
    },
  ]"
/>

  <get-started
  :sectionTitle="'Get Started with Development'"
  :sectionDescription="'We offers a powerful and easy to use tools to take full advantage of the Mobile Money API Specification.'"
  :borderedLink="{text: 'Learn more', link: '/test'}"
  :accentLink="{text: 'Start developing', link: '/examples'}"
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
        {
          image: 'https://via.placeholder.com/400x400/F8F8F9/DE002B?text=placeholder-1',
          description: 'Text for test 1',
          author: 'Test 1',
          position: 'Test 1',
        },
        {
          image: 'https://via.placeholder.com/400x400/F8F8F9/DE002B?text=placeholder-2',
          description: 'Text for test 2',
          author: 'Test 2',
          position: 'Test 2',
        },
        {
          image: 'https://via.placeholder.com/400x400/F8F8F9/DE002B?text=placeholder-3',
          description: 'Text for test 3',
          author: 'Test 3',
          position: 'Test 3',
        },
        {
          image: 'https://via.placeholder.com/400x400/F8F8F9/DE002B?text=placeholder-4',
          description: 'Text for test 4',
          author: 'Test 4',
          position: 'Test 4',
        },
    ]"
  />

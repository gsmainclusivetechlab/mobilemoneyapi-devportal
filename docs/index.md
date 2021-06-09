---
pageClass: home-page custom
---

  <hero-section 
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
  
  <use-case/>

  <column-section
  :cards="[
    {
      image: 'https://via.placeholder.com/400x400/F8F8F9/DE002B?text=placeholder',
      title: 'Compliance platform',
      description: 'Dictumst habitasse ultrices elementum, consequat ultrices purus volutpat. Posuere amet amet, cum justo bibendum morbi. Auctor interdum morbi non platea justo, et neque.',
      btnText: 'Learn more',
      link: '#',
    },
    {
      image: 'https://via.placeholder.com/400x400/F8F8F9/DE002B?text=placeholder',
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

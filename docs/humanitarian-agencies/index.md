---
pageClass: industry-page custom
---

  <industry-hero-section
    :title="'Humanitarian Agencies'"
    :description="'Humanitarian organisations help to ensure that there is swift, efficient humanitarian assistance available when sudden natural disasters strike or wars occur or in connection with long-term conflicts.'"
    :imageSrc="'/images/industry-hero.jpg'"
    :imageAlt="'image alt'" 
    />

  <use-cases-humanitarian-agencies-with-tabs :defaultTab="1"/>

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
    <p>Humanitarian Agencies.</p>
    <p>Humanitarian organisations help to ensure that there is swift, efficient humanitarian assistance available when sudden natural disasters strike or wars occur or in connection with long-term conflicts.</p>
  </div>

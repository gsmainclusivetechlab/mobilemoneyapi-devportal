<template>
  <section class="special-grid-section section--m-gap">
    <div class="container container--narrow">
      <div class="section-intro section-intro--one-column">

## API Case Study

</div>
      <case-study mediaType='image/png' customCSSclass='custom' imageHeight='86px' imageLink="/images/lmms.png">
        <template v-slot:main-description>
The disbursement process has to be efficient and being directly integrated with the MNOs results in faster and more successful outreach. A lot of humanitarian work will be in non-urban areas, which might be more difficult to reach physically.  
Being able to distribute money via mobile wallets, which can be easily facilitated through integrations with MNOs, offers lot of convenience to the organisation’s disbursement process. The organisation is currently directly integrated with over 30 MNOs in various regions, mainly in the Sub-Saharan African region.
As an organisation, it works with two types of beneficiaries, those that receive a large chunk of money as a response to a disaster, and those that receive recurring payments, such as supplementary income. 
        </template>
        <template v-slot:first-description>
The pandemic intensified the need for MNO integrations, for instance, it was easier to disburse money to women in slums in East Africa. Additionally, the advantages of disbursing directly to mobile wallets has been felt particularly when dealing with vulnerable women, who can access funds discreetly.
        </template>
        <template v-slot:second-description>
Overall, the process is fast and secure. 
The organisation favours API integrations is it feels it lowers the security risk associated with physical distribution, for both the beneficiary and the humanitarian worker. As an organisation that response to global crises, it would benefit from a Standard API which can allow it to connect to more MNOs in various regions globally.
        </template>
        <template v-slot:org-type>
Humanitarian Agency
        </template>
        <template v-slot:use-case-links>
          <p>
            <router-link to="/use-cases/disbursements/">Disbursements</router-link>
          </p>
          <p>
            <router-link to="/use-cases/p-2-p-transfers/">P2P transfers</router-link>
          </p>
        </template>
      </case-study>
    </div>
  </section>
</template>

const StoriApp = {
  thumbClient: 'RCU',
  client: 'RCU - Responsible Cannabis Use',
  date: 'Sep. 2020',
  id: 'stori-app',
  images: {
    banner: {
      alt: 'Phones with Stori app',
      sm: [
        { src: '/projects/stori_app@sm.webp', type: 'webp' },
        { src: '/projects/stori_app@sm.jpg', type: 'jpeg' },
      ],
      lg: [
        { src: '/projects/stori_app@lg.webp', type: 'webp' },
        { src: '/projects/stori_app@lg.jpg', type: 'jpeg' },
      ],
    },
    inventory: {
      alt: 'Stori app adding to inventory',
      sm: [{ src: '/projects/stori_app_inventory@sm.png', type: 'png' }],
      lg: [{ src: '/projects/stori_app_inventory@lg.png', type: 'png' }],
    }
  },
  name: 'Stori app',
  url: 'https://app.yourstori.com',
}

StoriApp.frames = [
  {
    layout: 'Banner',
    contents: [
      StoriApp.images.banner,
      StoriApp.name,
      StoriApp.client,
      StoriApp.date,
    ],
  },
  {
    layout: 'TextLeftImageRight',
    contents: [
      StoriApp.images.inventory,
      `<h2 class="fade-in-slide-up-300 mb-6"><span class="text-yellow-300">Stori app</span> is a companion app for the Stori cannabis container.</h2>
      <p class="fade-in-slide-up-350">The app tracks your inventory and provides you with product details and offers.</p>`
    ],
  },
  {
    layout: 'TextLeftTextRight',
    contents: [
      `<h2 class="fade-in-slide-up-300">It is a <span class="text-yellow-300">web app</span>, built using React.js, a Node.js API server, and MongoDB.</h2>`,
      `<p class="fade-in-slide-up-350 mb-7">Launching as a web app afforded us a faster turnaround and publishing freedom. Built in React, it can be ported to native platforms via React Native with reduced development effort.</p>
      <p class="fade-in-slide-up-350">Using a cloud-native database allowed us to pivot while in production, without compromising any data or uptime.</p>`
    ],
  },
  {
    layout: 'TextLeftTextRight',
    contents: [
      `<h2 class="fade-in-slide-up-300">The app was built in approximately <span class="text-yellow-300">two months</span> by two developers.</h2>`,
      `<p class="fade-in-slide-up-350 mb-10">My roles in the project were Project Lead, Lead Back-End Developer, Front-End Developer, and DevOps Engineer.</p>
      <p class="fade-in-slide-up-400">
        <a class="button" href="https://app.yourstori.com" target="_blank">
          <span class="button__label">Visit Project</span>
          <span class="button__hover-label">Visit Project</span>
        </a>
      </p>`
    ],
  },
]

const CanniknowWebsite = {
  thumbClient: 'RCU',
  client: 'RCU - Responsible Cannabis Use',
  date: 'Apr. 2020',
  id: 'canniknow-website',
  images: {
    banner: {
      alt: 'CanniKnow website homepage banner',
      sm: [{ src: '/projects/canniknow@sm.png', type: 'png' }],
      lg: [{ src: '/projects/canniknow@lg.png', type: 'png' }],
    },
    location: {
      alt: 'CanniKnow website location page',
      sm: [{ src: '/projects/canniknow_location@sm.png', type: 'png' }],
      lg: [{ src: '/projects/canniknow_location@lg.png', type: 'png' }],
    },
  },
  name: 'Cann I Know website',
}

CanniknowWebsite.frames = [
  {
    layout: 'Banner',
    contents: [
      CanniknowWebsite.images.banner,
      CanniknowWebsite.name,
      CanniknowWebsite.client,
      CanniknowWebsite.date,
    ],
  },
  {
    layout: 'TextLeftImageRight',
    contents: [
      CanniknowWebsite.images.location,
      `<h2 class="fade-in-slide-up-300 mb-6"><span class="text-yellow-300">CanniKnow.com</span> is TripAdvisor for cannabis.</h2>
      <p class="fade-in-slide-up-350">The website catalogs cannabis laws and other relevant details across North America and the world.</p>`
    ],
  },
  {
    layout: 'TextLeftTextRight',
    contents: [
      `<h2 class="fade-in-slide-up-300">It is built using React.js and a headless CMS.</h2>`,
      `<p class="fade-in-slide-up-350 mb-7">Building a server-side-rendered React app gave us the performance benefits of React while also keeping the SEO benefits of server-rendered HTML.</p>
      <p class="fade-in-slide-up-350">Leveraging a headless CMS reduced the complexity of back-end development while still enabling the team to manage large datasets.</p>`
    ],
  },
  {
    layout: 'TextLeftTextRight',
    contents: [
      `<h2 class="fade-in-slide-up-300">The site was built in approximately <span class="text-yellow-300">two months</span> by one developer.</h2>`,
      `<p class="fade-in-slide-up-350 mb-10">I was the sole developer and dev-ops engineer.</p>
      <p class="fade-in-slide-up-400">
        <a class="button" href="https://www.canniknow.com" target="_blank">
          <span class="button__label">Visit Project</span>
          <span class="button__hover-label">Visit Project</span>
        </a>
      </p>`
    ],
  },
]

export default [
  StoriApp,
  CanniknowWebsite,
  {
    client: 'RCU',
    date: 'Nov. 2019',
    id: 'canned-retail-app',
    images: {
      banner: {
        alt: 'CannedRetail app home screen',
        sm: [
          { src: '/projects/cannedretail.png', type: 'png' },
        ],
        lg: [
          { src: '/projects/cannedretail.png', type: 'png' },
        ],
      },
    },
    name: 'CannEd Retail app',
  },
  {
    client: 'HighLife',
    date: 'Feb. 2019',
    id: 'highlife-website',
    images: {
      banner: {
        alt: 'HighLife website homepage banner',
        sm: [
          { src: '/projects/highlife.png', type: 'png' },
        ],
        lg: [
          { src: '/projects/highlife.png', type: 'png' },
        ],
      },
    },
    name: 'HighLife website',
  },
  {
    client: 'RCU',
    date: 'Dec. 2018',
    id: 'dontbesorry-website',
    images: {
      banner: {
        alt: 'Don\' Be Sorry website homepage banner',
        sm: [
          { src: '/projects/dontbesorry.png', type: 'png' },
        ],
        lg: [
          { src: '/projects/dontbesorry.png', type: 'png' },
        ],
      },
    },
    name: 'Don\'t Be Sorry website',
  },
]

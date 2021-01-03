const StoriApp = {
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
      StoriApp.images.banner,
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
      `<p class="fade-in-slide-up-350 mb-10">My roles in the project were Project Lead, Lead Back-End Developer, and Front-End Developer.</p>
      <p class="fade-in-slide-up-400">
        <a class="button" href="https://app.yourstori.com" target="_blank">
          <span class="button__label">Visit Project</span>
          <span class="button__hover-label">Visit Project</span>
        </a>
      </p>`
    ],
  },
]

export default [
  StoriApp,
  {
    client: 'RCU',
    date: 'Apr. 2020',
    id: 'canniknow-website',
    images: {
      banner: {
        alt: 'CanniKnow website homepage banner',
        sm: [
          { src: '/projects/canniknow@sm.png', type: 'png' },
        ],
        lg: [
          { src: '/projects/canniknow@lg.png', type: 'png' },
        ],
      },
    },
    name: 'CannIKnow website',
  },
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

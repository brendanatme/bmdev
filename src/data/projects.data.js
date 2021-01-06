const StoriApp = {
  thumbClient: 'RCU',
  client: 'RCU - Responsible Cannabis Use',
  date: 'Sep. 2020',
  id: 'stori-app',
  description: 'Stori app is a companion app for the Stori cannabis container. The app tracks your inventory and provides you with product details and offers.',
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
      `<p class="fade-in-slide-up-350 mb-10">My roles in the project were Project Lead, Lead Back-End Developer, Front-End Developer, and Lead DevOps Engineer.</p>
      <p class="fade-in-slide-up-400">
        <a class="button" href="https://app.yourstori.com" target="_blank">
          <span class="button__label">Visit Project</span>
          <span class="button__hover-label">Visit Project</span>
        </a>
      </p>`
    ],
  },
]

const Canniknow = {
  thumbClient: 'RCU',
  client: 'RCU - Responsible Cannabis Use',
  date: 'Apr. 2020',
  id: 'canniknow-website',
  desc: 'CanniKnow.com is TripAdvisor for cannabis. The website catalogs cannabis laws and other relevant details across North America and the world.',
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

Canniknow.frames = [
  {
    layout: 'Banner',
    contents: [
      Canniknow.images.banner,
      Canniknow.name,
      Canniknow.client,
      Canniknow.date,
    ],
  },
  {
    layout: 'TextLeftImageRight',
    contents: [
      Canniknow.images.location,
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

const CannedRetail = {
  thumbClient: 'RCU',
  client: 'RCU - Responsible Cannabis Use',
  date: 'Nov. 2019',
  id: 'canned-retail-app',
  desc: 'CannEd Retail is a comprehensive cannabis customer education platform for retailers. An omni-channel offering, users can interact in-store or online.',
  images: {
    banner: {
      alt: 'CannedRetail app question',
      sm: [{ src: '/projects/cannedretail_q@lg.png', type: 'png' }],
      lg: [{ src: '/projects/cannedretail_q@lg.png', type: 'png' }],
    },
    answer: {
      alt: 'CannedRetail app answer',
      sm: [{ src: '/projects/cannedretail_a@lg.png', type: 'png' }],
      lg: [{ src: '/projects/cannedretail_a@lg.png', type: 'png' }],
    },
    install: {
      alt: 'CannedRetail app installation',
      sm: [{ src: '/projects/cannedretail_install@lg.png', type: 'png' }],
      lg: [{ src: '/projects/cannedretail_install@lg.png', type: 'png' }],
    },
    portal: {
      alt: 'CannedRetail embeddable portal',
      sm: [{ src: '/projects/cannedretail_portal@lg.png', type: 'png' }],
      lg: [{ src: '/projects/cannedretail_portal@lg.png', type: 'png' }],
    },
  },
  name: 'CannEd Retail app & widget',
}

CannedRetail.frames = [
  {
    layout: 'Banner',
    contents: [
      CannedRetail.images.banner,
      CannedRetail.name,
      CannedRetail.client,
      CannedRetail.date,
    ],
  },
  {
    layout: 'TextLeftImageRight',
    contents: [
      CannedRetail.images.answer,
      `<h2 class="fade-in-slide-up-300 mb-6"><span class="text-yellow-300">CannEd Retail</span> is a comprehensive cannabis customer education platform for retailers.</h2>
      <p class="fade-in-slide-up-350">An omni-channel offering, users can interact in-store or online.</p>`
    ],
  },
  {
    layout: 'ImageLeftTextRight',
    contents: [
      CannedRetail.images.install,
      `<h2 class="fade-in-slide-up-300 mb-6"><span class="text-yellow-300">The tablet app</span> solved a number of unique challenges.</h2>
      <p class="fade-in-slide-up-350">It is built as a PWA with a seamless installation flow using React, leveraging bleeding-edge features.`,
    ],
  },
  {
    layout: 'TextLeftImageRight',
    contents: [
      CannedRetail.images.portal,
      `<h2 class="fade-in-slide-up-300 mb-6">Retailers can also <span class="text-yellow-300">embed a portal</span> onto their website.</h2>
      <p class="fade-in-slide-up-350">By copy/pasting one line of code, retailers have a responsive, fully-customizable embedded portal on their own website.`,
    ],
  },
  {
    layout: 'TextLeftTextRight',
    contents: [
      '',
      `<p class="fade-in-slide-up-350 mb-10">Role: sole front-end developer, back-end developer, and dev-ops engineer.</p>
      <p class="fade-in-slide-up-400">
        <a class="button" href="https://highlife.ca/pages/rcu/#/quizzes/basics" target="_blank">
          <span class="button__label">Visit Project</span>
          <span class="button__hover-label">Visit Project</span>
        </a>
      </p>`
    ],
  },
]

const Highlife = {
  thumbClient: 'HighLife',
  client: 'HighLife',
  date: 'Feb. 2019',
  id: 'highlife-website',
  desc: 'HighLife.ca is this Sudbury retailer\'s online store. Built on Shopify, this slick design required a great deal of customization to fully realize the vision.',
  images: {
    banner: {
      alt: 'HighLife website homepage banner',
      sm: [{ src: '/projects/highlife@sm.png', type: 'png' }],
      lg: [{ src: '/projects/highlife@lg.png', type: 'png' }],
    },
    page: {
      alt: 'HighLife website page screenshot',
      sm: [{ src: '/projects/highlife_page@sm.png', type: 'png' }],
      lg: [{ src: '/projects/highlife_page@lg.png', type: 'png' }],
    },
  },
  name: 'HighLife website',
}

Highlife.frames = [
  {
    layout: 'Banner',
    contents: [
      Highlife.images.banner,
      Highlife.name,
      Highlife.client,
      Highlife.date,
    ],
  },
  {
    layout: 'TextLeftImageRight',
    contents: [
      Highlife.images.page,
      `<h2 class="fade-in-slide-up-300 mb-6"><span class="text-yellow-300">HighLife.ca</span> is this Sudbury retailer's online store.</h2>
      <p class="fade-in-slide-up-350">Built on Shopify, this slick design required a great deal of customization to fully realize the vision.</p>`
    ],
  },
  {
    layout: 'TextLeftTextRight',
    contents: [
      `<h2 class="fade-in-slide-up-200">Turnaround: approximately <span class="text-yellow-300">one month</span></h2>`,
      `<p class="fade-in-slide-up-250">Features:</p>
      <ul class="fade-in-slide-up-300 mb-6">
        <li>Custom age gate</li>
        <li>Custom pages</li>
        <li>A sprinkling of unobtrusive parallax</li>
      </ul>
      <p class="fade-in-slide-up-350 mb-10">Role: sole front-end developer.</p>
      <p class="fade-in-slide-up-400">
        <a class="button" href="https://highlife.ca" target="_blank">
          <span class="button__label">Visit Project</span>
          <span class="button__hover-label">Visit Project</span>
        </a>
      </p>`
    ],
  },
]

const Foglers = {
  thumbClient: 'Pixelcarve',
  client: 'Pixelcarve Inc.',
  date: '2013',
  id: 'fogler-rubinoff-website',
  desc: 'This website was the first of its kind. Serving as a corporate directory and both an external and internal resource, the site won a gold Davey award in 2013 for its first-class UX.',
  images: {
    banner: {
      alt: 'Foglers.com website homepage',
      sm: [{ src: '/projects/foglers@sm.png', type: 'png' }],
      lg: [{ src: '/projects/foglers@lg.png', type: 'png' }],
    },
    search: {
      alt: 'Foglers.com website search',
      sm: [{ src: '/projects/foglers_search@lg.png', type: 'png' }],
      lg: [{ src: '/projects/foglers_search@lg.png', type: 'png' }],
    },
    scroller: {
      alt: 'Foglers.com website scrolling',
      sm: [{ src: '/projects/foglers_scroller@lg.png', type: 'png' }],
      lg: [{ src: '/projects/foglers_scroller@lg.png', type: 'png' }],
    },
  },
  name: 'Fogler Rubinoff website',
}

Foglers.frames = [
  {
    layout: 'Banner',
    contents: [
      Foglers.images.banner,
      Foglers.name,
      Foglers.client,
      Foglers.date,
    ],
  },
  {
    layout: 'TextLeftImageRight',
    contents: [
      Foglers.images.search,
      `<h2 class="fade-in-slide-up-300 mb-6">This website was <span class="text-yellow-300">the first</span> of its kind.</h2>
      <p class="fade-in-slide-up-350">Serving as a corporate directory and both an external and internal resource, the site won a gold Davey award in 2013 for its first-class UX.</p>`
    ],
  },
  {
    layout: 'ImageLeftTextRight',
    contents: [
      Foglers.images.scroller,
      `<h2 class="fade-in-slide-up-300 text-yellow-300">Features</h2>
      <ul class="fade-in-slide-up-350">
        <li>Real-time sync with search and navigation</li>
        <li>Gesture-controlled side-scrolling with columnized text</li>
        <li>Gyroscope-powered Google streetview</li>
        <li>Internet Explorer 8 compatible</li>
      </ul>`,
    ],
  },
  {
    layout: 'TextLeftTextRight',
    contents: [
      `<h2 class="fade-in-slide-up-300">The site was built in approximately <span class="text-yellow-300">six months</span> by two developers.</h2>`,
      `<p class="fade-in-slide-up-350 mb-10">I was the sole front-end developer for the project.</p>
      <p class="fade-in-slide-up-400">
        <a class="button" href="http://foglers.com" target="_blank">
          <span class="button__label">Visit Project</span>
          <span class="button__hover-label">Visit Project</span>
        </a>
      </p>`
    ],
  },
]

export default [
  StoriApp,
  Canniknow,
  CannedRetail,
  Highlife,
  Foglers,
]

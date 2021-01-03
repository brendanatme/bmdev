const RCU = {
  id: 'the-rcu',
  thumb: {
    bg: 'bg-opacity-20',
    img: '/roles/rcu.png',
    op: 'opacity-100',
    w: '150px',
    hoverBg: 'bg-white',
  },
  name: 'RCU - Responsible Cannabis Use',
}

RCU.frames = [
  {
    layout: 'ThumbLeftTextRight',
    contents: [
      RCU.thumb,
      RCU.name,
      'January 2018 - Currently',
      'Director of Engineering',
    ],
  },
  {
    layout: 'TextLeftTextRight',
    contents: [
      `<h2 class="fade-in-slide-up-200 mb-6 text-yellow-300">Summary</h2>
      <p class="fade-in-slide-up-250 mb-6">As Director of Engineering, I am responsible for the planning, management, and execution of all IT-related efforts, including:</p>
      <ul class="fade-in-slide-up-300 list-disc list-inside text-display-2">
        <li>Product development</li>
        <li>Dev team resource planning</li>
        <li>Development best practices</li>
        <li>Data reporting & analytics</li>
        <li>Infrastructure and security</li>
      </ul>`,
      ``,
    ],
  },
  {
    layout: 'TextLeftTextRight',
    contents: [
      `<h2 class="fade-in-slide-up-200 mb-6 text-yellow-300">Projects</h2>
      <h3>Stori app</h3>
      <p class="fade-in-slide-up-250 mb-6">As Director of Engineering, I am responsible for the planning, management, and execution of all IT-related efforts, including:</p>
      <ul class="fade-in-slide-up-300 list-disc list-inside text-display-2">
        <li>Product development</li>
        <li>Dev team resource planning</li>
        <li>Development best practices</li>
        <li>Data reporting & analytics</li>
        <li>Infrastructure and security</li>
      </ul>`,
      ``,
    ],
  },
]

export default [
  RCU,
  {
    id: 'bendigi-technologies',
    thumb: {
      bg: 'bg-opacity-100',
      img: '/roles/bendigi.png',
      op: 'opacity-50',
      w: '249px',
      hoverBg: 'bg-white',
    },
  },
  {
    id: 'telmetrics',
    thumb: {
      bg: 'bg-opacity-10',
      img: '/roles/telmetrics.png',
      op: 'opacity-100',
      w: '185px',
      hoverBg: 'bg-blue-500',
    },
  },
  {
    id: 'bounteous',
    thumb: {
      bg: 'bg-opacity-10',
      img: '/roles/bounteous.svg',
      op: 'opacity-100',
      w: '150px',
      hoverBg: 'bg-blue-500',
    },
  },
  {
    id: 'pixelcarve',
    thumb: {
      bg: 'bg-opacity-30',
      img: '/roles/pixelcarve.svg',
      op: 'opacity-100',
      w: '150px',
      hoverBg: 'bg-white',
    },
  },
]

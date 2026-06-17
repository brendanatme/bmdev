const Vdm = {
  id: 'vdm',
  name: 'VDM',
  images: {
    thumb: {
      alt: 'VDM Logo',
      sm: [{ src: '/experiments/vdm.svg', type: 'svg' }],
      lg: [{ src: '/experiments/vdm.svg', type: 'svg' }],
    },
  },
  url: 'https://vdm.brendanm.dev',
}

Vdm.frames = [
  {
    layout: 'TextCenter',
    contents: [
      `<h1 class="fade-in-slide-up-300 font-bold text-4xl md:text-6xl mb-10">VDM</h1>
       <p class="fade-in-slide-up-400">
         <a class="button focusable" href="https://vdm.brendanm.dev" target="_blank">
           <span class="button__label">Visit Experiment</span>
           <span class="button__hover-label">Visit Experiment</span>
         </a>
       </p>`,
    ],
  },
]

const Offnotes = {
  id: 'offnotes',
  name: 'OffNotes',
  images: {
    thumb: {
      alt: 'OffNotes Logo',
      sm: [{ src: '/experiments/offnotes.svg', type: 'svg' }],
      lg: [{ src: '/experiments/offnotes.svg', type: 'svg' }],
    },
  },
  url: 'https://notes.brendanm.dev',
}

Offnotes.frames = [
  {
    layout: 'TextCenter',
    contents: [
      `<h1 class="fade-in-slide-up-300 font-bold text-4xl md:text-6xl mb-10">OffNotes</h1>
       <p class="fade-in-slide-up-400">
         <a class="button focusable" href="https://notes.brendanm.dev" target="_blank">
           <span class="button__label">Visit Experiment</span>
           <span class="button__hover-label">Visit Experiment</span>
         </a>
       </p>`,
    ],
  },
]

export default [Vdm, Offnotes]

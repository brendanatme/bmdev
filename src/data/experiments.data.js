const Vdm = {
  id: "vdm",
  name: "VDM",
  images: {
    thumb: {
      alt: "VDM Logo",
      sm: [{ src: "/experiments/vdm.svg", type: "svg" }],
      lg: [{ src: "/experiments/vdm.svg", type: "svg" }],
    },
    banner: {
      alt: "VDM Sequencer",
      sm: [{ src: "/experiments/vdm_sequencer@lg.png", type: "png" }],
      lg: [{ src: "/experiments/vdm_sequencer@lg.png", type: "png" }],
    },
    pads: {
      alt: "VDM Pads",
      sm: [{ src: "/experiments/vdm_pads@lg.png", type: "png" }],
      lg: [{ src: "/experiments/vdm_pads@lg.png", type: "png" }],
    },
  },
  url: "https://vdm.brendanm.dev",
};

Vdm.frames = [
  {
    layout: "TextLeftImageRight",
    contents: [
      Vdm.images.banner,
      `<h2 class="fade-in-slide-up-300 mb-6"><span class="text-yellow-300">VDM</span> is an in-browser virtual drum machine and sequencer.</h2>
       <p class="fade-in-slide-up-350">It allows you to customize your sounds and pads, play the drum machine live, or program loops.</p>`,
    ],
  },
  {
    layout: "ImageLeftTextRight",
    contents: [
      Vdm.images.pads,
      `<h2 class="fade-in-slide-up-300 mb-6">I created it as a Proof of Concept for <span class="text-yellow-300">browser-based audio production software</span>,</h2>
       <p class="fade-in-slide-up-350">and as an opportunity to experiment with browser audio APIs.</p>`,
    ],
  },
  {
    layout: "TextLeftTextRight",
    contents: [
      `<h2 class="fade-in-slide-up-300">VDM is built with <span class="text-yellow-300">React and TypeScript</span>.</h2>`,
      `<p class="fade-in-slide-up-350 mb-10">
         <a class="button focusable" href="https://vdm.brendanm.dev" target="_blank">
           <span class="button__label">Visit Experiment</span>
           <span class="button__hover-label">Visit Experiment</span>
         </a>
       </p>
       <p class="fade-in-slide-up-400">
         <a class="button focusable" href="https://github.com/brendanatme/vdm2" target="_blank">
           <span class="button__label">View on GitHub</span>
           <span class="button__hover-label">View on GitHub</span>
         </a>
       </p>`,
    ],
  },
];

const Offnotes = {
  id: "offnotes",
  name: "OffNotes",
  images: {
    thumb: {
      alt: "OffNotes Logo",
      sm: [{ src: "/experiments/offnotes.svg", type: "svg" }],
      lg: [{ src: "/experiments/offnotes.svg", type: "svg" }],
    },
    banner: {
      alt: "OffNotes Banner",
      sm: [{ src: "/experiments/offnotes@lg.png", type: "png" }],
      lg: [{ src: "/experiments/offnotes@lg.png", type: "png" }],
    },
  },
  url: "https://notes.brendanm.dev",
};

Offnotes.frames = [
  {
    layout: "TextLeftImageRight",
    contents: [
      Offnotes.images.banner,
      `<h2 class="fade-in-slide-up-300 mb-6"><span class="text-yellow-300">OffNotes</span> is a full-stack, offline-first note-taking application.</h2>
       <p class="fade-in-slide-up-350">It was created to experiment with offline-first browser applications, and solve the difficult problems that come with asynchronously syncing multiple clients to one source of truth.</p>`,
    ],
  },
  {
    layout: "TextLeftTextRight",
    contents: [
      `<h2 class="fade-in-slide-up-300">OffNotes is built with <span class="text-yellow-300">React, TypeScript, Django, Python, and Postgres</span>.</h2>`,
      `<p class="fade-in-slide-up-350 mb-10">
         <a class="button focusable" href="https://notes.brendanm.dev" target="_blank">
           <span class="button__label">Visit Experiment</span>
           <span class="button__hover-label">Visit Experiment</span>
         </a>
       </p>
       <p class="fade-in-slide-up-400 mb-10">
         <a class="button focusable" href="https://github.com/brendanatme/offnotes-frontend" target="_blank">
           <span class="button__label">View frontend on GitHub</span>
           <span class="button__hover-label">View frontend on GitHub</span>
         </a>
       </p>
       <p class="fade-in-slide-up-450">
         <a class="button focusable" href="https://github.com/brendanatme/offnotes-backend" target="_blank">
           <span class="button__label">View backend on GitHub</span>
           <span class="button__hover-label">View backend on GitHub</span>
         </a>
       </p>
       `,
    ],
  },
];

export default [Vdm, Offnotes]

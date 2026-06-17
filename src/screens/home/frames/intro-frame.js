import Frame from '~/src/base/frame'

const IntroFrame = () => (
  <Frame>
    <div className="container p-6">
      <div className="max-w-lg text-white">
        <h1>
          <div className="text-hero-1 my-5 text-yellow-300 fade-in-slide-up-250">
            Hi,
          </div>
          <div className="text-hero-2 my-5 fade-in-slide-up-300">
            I'm Brendan.
          </div>
        </h1>
        <p className="text-display-1 my-5 fade-in-slide-up-350">
          I'm an award-winning full-stack engineer of over 10 years.
        </p>
        <p className="text-display-2 my-5 fade-in-slide-up-400">
          I plan, create, and grow online platforms.
        </p>
      </div>
    </div>
  </Frame>
)

export default IntroFrame

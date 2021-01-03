/**
 * content-frame.component
 * 
 * display dynamic content blocks
 * using the "layout" property
 * to determine how to display the content
 */
import Frame from '@/src/base/frame'
import Html from '@/src/components/html'
import Picture from '@/src/components/picture'

const Banner = ({ contents }) => (
  <>
    <Picture className="z-0" image={contents[0]} />
    <div className="z-0 fill bg-white opacity-30" />
    <div className="z-10 container">
      <div className="py-6 px-12 font-sans font-medium text-gray-600">
        <h1 className="font-bold text-6xl">{contents[1]}</h1>
        <h2 className="text-xl">{contents[2]}</h2>
        <h3 className="text-xl">{contents[3]}</h3>
      </div>
    </div>
  </>
)

const ThumbLeftTextRight = ({ contents }) => (
  <div className="container p-6">
    <div
      className={`fade-in-slide-up-200 overflow-hidden rounded shadow-xl relative p-5 bg-white ${contents[0].bg} inline-block mb-6`}
    >
      <img src={contents[0].img} style={{ width: contents[0].w }} />
    </div>
    <div className="max-w-lg">
      <h1 className="fade-in-slide-up-300 font-bold text-3xl">{contents[1]}</h1>
      <h2 className="fade-in-slide-up-350 text-xl"><em>{contents[2]}</em></h2>
      <h3 className="fade-in-slide-up-400 text-xl">Role(s): {contents[3]}</h3>
    </div>
  </div>
)

const TextLeftImageRight = ({ contents }) => (
  <div className="container md:flex items-center justify-center md:flex-row-reverse">
    <div className="md:relative mx-auto mb-5 md:m-0 w-3/4 md:w-1/2 md:-left-16">
      <div className="fade-in-slide-up-200 ratio-16x9 overflow-hidden rounded shadow-xl">
        <div className="fill">
          <Picture image={contents[0]} />
          <div className="fill bg-gray-500 bg-opacity-20" />
        </div>
      </div>
    </div>
    <Html
      className="relative py-2 px-6 md:p-0 w-full md:w-1/2 md:left-16"
      content={contents[1]}
    />
  </div>
)

const TextLeftTextRight = ({ contents }) => (
  <div className="container md:flex items-center justify-center">
    <Html
      className="md:relative md:m-0 py-2 px-6 md:p-0 md:pr-12 md:w-1/2"
      content={contents[0]}
    />
    <Html
      className="relative py-2 px-6 md:p-0 md:pr-12 w-full md:w-1/2"
      content={contents[1]}
    />
  </div>
)

const Layouts = {
  Banner,
  ThumbLeftTextRight,
  TextLeftImageRight,
  TextLeftTextRight,
}

const ContentFrame = ({ layout, contents }) => {
  const DynamicComponent = Layouts[layout]

  return (
    <Frame className="text-white">
      <DynamicComponent contents={contents} />
    </Frame>
  )
}

export default ContentFrame

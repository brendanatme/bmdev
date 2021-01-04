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
  <div className="container md:flex items-center justify-center">
    <div className="relative mx-auto md:m-0 md:w-1/2 md:left-16">
      <div className="fade-in-slide-up-200 ratio-16x9 overflow-hidden md:rounded md:shadow-xl">
        <div className="fill">
          <Picture image={contents[0]} only="lg" />
        </div>
      </div>
    </div>
    <div
      className="bg-dblue md:inline-block relative py-4 px-6 lg:p-10 lg:-left-16 font-sans font-medium text-white md:rounded md:shadow-xl"
    >
      <h1 className="font-bold text-3xl lg:text-5xl">{contents[1]}</h1>
      <h2 className="text-xl mt-2">{contents[2]}</h2>
      <h3 className="text-xl">{contents[3]}</h3>
    </div>
  </div>
)

const TextLeftImageRight = ({ contents }) => (
  <div className="container md:flex items-center justify-center md:flex-row-reverse">
    <div className="md:relative mx-auto mb-5 md:m-0 w-3/4 md:w-1/2 md:-left-16">
      <div className="fade-in-slide-up-200 ratio-16x9 overflow-hidden rounded shadow-xl">
        <div className="fill">
          <Picture image={contents[0]} only="lg" />
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

const ImageLeftTextRight = ({ contents }) => (
  <div className="container md:flex items-center justify-center">
    <div className="md:relative mx-auto mb-5 md:m-0 w-3/4 md:w-1/2 md:left-8">
      <div className="fade-in-slide-up-200 ratio-16x9 overflow-hidden rounded shadow-xl">
        <div className="fill">
          <Picture image={contents[0]} only="lg" />
          <div className="fill bg-gray-500 bg-opacity-20" />
        </div>
      </div>
    </div>
    <Html
      className="relative py-2 px-6 md:p-0 w-full md:w-1/2 md:-left-8"
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
  ImageLeftTextRight,
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

/**
 * home.screen
 * 
 * test 3d animations to transition "pages"
 * (sections within screen)
 * using react-spring and react-use-gesture
 */
import Frame from '@/src/base/frame'
import Screen from '@/src/base/screen'
import Carousel from '@/src/components/carousel'
import Picture from '@/src/components/picture'
// import Title from '@/src/components/title'
// import { projects } from '@/src/data'
// import styles from './project.screen.module.css'

const ProjectScreen = ({ project }) => {
  // const router = useRouter()
  // console.log('router', router)
  // const project = projects.find((project) => project.id === router.query.id)
  // console.log('project', project)

  return (
    <Screen title={`${project.name} | Projects`}>
      <Carousel>
        <Frame>
          <Picture className="z-0" image={project.images.banner} />
          <div className="z-0 fill bg-white opacity-30" />
          <div className="z-10 container">
            <div className="py-6 px-12 font-sans font-medium text-gray-600">
              <h1 className="font-bold text-6xl">{project.name}</h1>
              <h2 className="text-xl">{project.client}</h2>
              <h3 className="text-xl">{project.date}</h3>
            </div>
          </div>
        </Frame>
        <Frame>
          <div className="container md:flex items-center justify-center md:flex-row-reverse">
            <div className="md:relative mx-auto mb-5 md:m-0 w-3/4 md:w-1/2 md:-left-16">
              <div className="fade-in-slide-up-200 ratio-16x9 overflow-hidden rounded shadow-xl">
                <div className="fill">
                  <Picture image={project.images.banner} />
                  <div className="fill bg-gray-500 bg-opacity-20" />
                </div>
              </div>
            </div>
            <div className="relative p-6 md:p-0 w-full md:w-1/2 md:left-16 font-sans text-white">
              <h2 className="fade-in-slide-up-300 font-bold text-3xl md:text-6xl leading-justright text-shadow-lg"><span className="text-yellow-300">Stori app</span> is a companion app for the Stori cannabis container.</h2>
              <p className="fade-in-slide-up-350 font-medium text-xl md:text-3xl mt-6 leading-tight text-shadow-sm">It tracks your inventory, and provides you with product details and offers.</p>
            </div>
          </div>
        </Frame>
        <Frame>
          <div className="container md:flex items-center justify-center">
            <div className="md:relative md:m-0 p-6 md:p-0 md:pr-12 md:w-1/2">
              <h2 className="font-sans text-white fade-in-slide-up-300 font-bold text-3xl md:text-6xl leading-justright text-shadow-lg">It is a <span className="text-yellow-300">web app</span>, built using React.js, a Node.js API server, and MongoDB.</h2>
            </div>
            <div className="relative p-6 md:p-0 md:pr-12 w-full md:w-1/2 font-sans text-white">
              <p className="fade-in-slide-up-350 text-xl md:text-3xl mt-6 leading-tight text-shadow-sm">Launching as a web app allowed us complete freedom in terms of publishing. And being built in React, it can be ported to native platforms via React Native with reduced development effort.</p>
              <p className="fade-in-slide-up-350 text-xl md:text-3xl mt-6 leading-tight text-shadow-sm">Using a cloud NoSQL database allowed us to pivot and change focus while in production, without compromising any data or uptime.</p>
            </div>
          </div>
        </Frame>
        {/* <Frame>
          <div className="container md:flex items-center justify-center">
            <div className="md:relative mx-auto mb-5 md:m-0 w-3/4 md:w-1/2 md:left-16">
              <div className="fade-in-slide-up-200 ratio-16x9 overflow-hidden rounded shadow-xl">
                <div className="fill">
                  <Picture image={project.images.banner} />
                  <div className="fill bg-gray-500 bg-opacity-20" />
                </div>
              </div>
            </div>
            <div className="relative p-6 md:p-0 w-full md:w-1/2 md:-left-16 font-sans text-white">
              {/* <h2 className="fade-in-slide-up-300 font-bold text-3xl md:text-6xl leading-justright text-shadow-lg">It is a web app, built using React.js.</h2>
              <p className="fade-in-slide-up-350 text-xl md:text-3xl mt-6 leading-tight text-shadow-sm">It is a web app, built using React.js, a Node.js API server, and MongoDB.</p>
              <p className="fade-in-slide-up-350 text-xl md:text-3xl mt-6 leading-tight text-shadow-sm">Launching as a web app allowed us complete freedom in terms of publishing. And being built in React, it can be ported to native platforms via React Native with reduced development effort.</p>
              <p className="fade-in-slide-up-350 text-xl md:text-3xl mt-6 leading-tight text-shadow-sm">Using a cloud NoSQL database allowed us to pivot and change focus while in production, without compromising any data</p>
            </div>
          </div>
        </Frame> */}
        <Frame>
          <div className="container md:flex items-center justify-center md:flex-row-reverse">
            <div className="md:relative mx-auto mb-5 md:m-0 w-3/4 md:w-1/2 md:-left-16">
              <div className="fade-in-slide-up-200 ratio-16x9 overflow-hidden rounded shadow-xl">
                <div className="fill">
                  <Picture image={project.images.banner} />
                  <div className="fill bg-gray-500 bg-opacity-20" />
                </div>
              </div>
            </div>
            <div className="relative p-6 md:p-0 w-full md:w-1/2 md:left-16 font-sans text-white">
              {/* <h2 className="fade-in-slide-up-300 font-bold text-3xl md:text-6xl leading-justright text-shadow-lg">The app was built over approximately two months by two developers.</h2> */}
              <p className="fade-in-slide-up-350 text-xl md:text-3xl mt-6 leading-tight text-shadow-sm">The app was built in approximately two months by two developers.</p>
              <p className="fade-in-slide-up-350 text-xl md:text-3xl mt-6 leading-tight text-shadow-sm">My roles in the project were Project Lead, Lead Back-End Developer, and Front-End Developer.</p>
            </div>
          </div>
        </Frame>
      </Carousel>
    </Screen>
  )
}

export default ProjectScreen

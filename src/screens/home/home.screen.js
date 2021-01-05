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
import Link from '@/src/components/link'
import Picture from '@/src/components/picture'
import Title from '@/src/components/title'
import SvgIcon from '@/src/components/svg-icon'
import { clients, projects, socials } from '@/src/data'
import styles from './home.screen.module.css'

const HomeScreen = () => {
  return (
    <Screen
      title="Hello!"
      description="Hi, I'm Brendan. I'm an award-winning full-stack developer of nine years. I plan, create, and grow online products."
    >
      <Carousel activeClass={styles.active}>
        <Frame>
          <div className="container p-6">
            <div className="max-w-lg text-white">
              <h1>
                <div className="text-hero-1 my-5 text-yellow-300 fade-in-slide-up-250">Hi,</div>
                <div className="text-hero-2 my-5 fade-in-slide-up-300">I'm Brendan.</div>
              </h1>
              <p className="text-display-1 my-5 fade-in-slide-up-350">I'm an award-winning, full-stack developer of nine years.</p>
              <p className="text-display-2 my-5 fade-in-slide-up-400">I plan, create, and grow online products.</p>
            </div>
          </div>
        </Frame>
        <Frame>
          <Title>Expertise</Title>
          <div className="container p-6 text-white">
            <p className="font-sans text-md md:text-xl mb-8 md:mb-20 md:-mt-20 max-w-xl fade-in-slide-up-250">
              I specialize in (some of) the work that goes into building a successful web app, platform, product, or service:
            </p>
            <div className="md:flex md:justify-evenly">
              <div className="my-2 md:w-1/3 md:pr-20 fade-in-slide-up-300">
                <div className="flex md:block">
                  <SvgIcon className="fill-current text-yellow-300 ml-2 mr-2 md:ml-0" type="UserPhone" />
                  <h3 className="mt-2 md:mt-1 font-sans font-medium text-2xl md:text-3xl">User<br />Experience</h3>
                </div>
                <p className="hidden md:block text-display-3 my-5">
                  Delighting users and differentiating products through careful, attentive interaction design and development
                </p>
              </div>
              <div className="my-2 md:w-1/3 md:pr-20 fade-in-slide-up-350">
                <div className="flex md:block">
                  <SvgIcon className="fill-current text-yellow-300 ml-2 mr-2 md:ml-0" type="Architecture" />
                  <h3 className="mt-2 md:mt-1 font-sans font-medium text-2xl md:text-3xl">Software<br />Development</h3>
                </div>
                <p className="hidden md:block text-display-3 my-5">
                  Creating extensible software ready to handle evolving business needs&mdash;and the workflows to scale it
                </p>
              </div>
              <div className="my-2 md:w-1/3 fade-in-slide-up-400">
                <div className="flex md:block">
                  <SvgIcon className="fill-current text-yellow-300 ml-2 mr-2 md:ml-0" type="Networking" />
                  <h3 className="mt-2 md:mt-1 font-sans font-medium text-2xl md:text-3xl">System<br />Design</h3>
                </div>
                <p className="hidden md:block text-display-3 my-5">
                  Connecting the many moving components of an online business in a way that provides security, resilliency, and scalability
                </p>
              </div>
            </div>
          </div>
        </Frame>
        <Frame>
          <Title>Featured <span className="sm:br" />Projects</Title>
          
          <Carousel
            axis="x"
            nextArrow={false}
            overflow
          >
            {projects.map((project, i) => (
              <div className="fill flex items-center justify-center" key={i}>
                <Link href={`/projects/${project.id}`}>
                  <div className={`${styles.project} rounded`}>
                    <Picture className={styles.projectBg} image={project.images.banner} />
                    <div className={`fill ${styles.projectOverlay}`} />
                    <div className={`${styles.projectMeta} absolute bottom-0 left-0 py-2 px-3 md:py-5 md:px-10 w-full`}>
                      <div className={`${styles.projectMetaBg} bg-gray-50 fill`} />
                      <div className={`text-gray-700 text-display-1 my-1 md:my-2 flex-1 leading-none ${styles.projectName}`}>{project.name}</div>
                      <div className={`text-gray-700 text-display-2 my-1 md:my-2 flex-initial ${styles.projectClient}`}>{project.thumbClient}</div>
                      <div className={`text-gray-700 text-display-2 my-1 md:my-2 flex-initial ${styles.projectDate}`}>{project.date}</div>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </Carousel>
        </Frame>
        <Frame>
          <Title>Clients &amp; <span className="sm:br" />Employers</Title>
          <div className="container p-6 text-white">
            <div className="flex flex-wrap justify-evenly">
              {clients.map((client, i) => (
                <div
                  className={`block m-5 relative z-10 ${styles.client} ${styles['client' + i]} flex flex-col rounded overflow-hidden`}
                  key={`client${i}`}
                >
                  <div
                    className={`relative p-5 z-10 bg-white ${client.thumb.bg} ${client.thumb.op} flex-grow flex flex-col justify-center`}
                  >
                    <img className="z-10 flex-initial select-none" src={client.thumb.img} style={{ width: client.thumb.w }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Frame>
        <Frame>
          <Title>Get in touch</Title>
          <div className="container p-6 text-white text-center">
            <p className="text-display-2 my-5 max-w-xl mx-auto mb-8 md:mb-20 fade-in-slide-up-200">
              If you're looking to collaborate, need someone to implement your vision, or just wanna say "hi", let's connect.
            </p>
            <div className="flex flex-wrap justify-center">
              {socials.map((social, i) => (
                <a
                  className={`${social.anim} ${styles.social} relative m-2 py-2 px-5 md:m-5 md:py-5 md:px-10 bg-white bg-opacity-20 rounded overflow-hidden`}
                  href={social.href}
                  key={`social${i}`}
                  target="_blank"
                >
                  <SvgIcon
                    className="fill-current"
                    type={social.type}
                  />
                  <div className={`${styles.socialMask} fill py-2 px-5 md:py-5 md:px-10 bg-white ${social.color}`}>
                    <SvgIcon
                      className="fill-current"
                      type={social.type}
                    />
                  </div>
                </a>
              ))}
            </div>
          </div>
        </Frame>
      </Carousel>
    </Screen>
  )
}

export default HomeScreen

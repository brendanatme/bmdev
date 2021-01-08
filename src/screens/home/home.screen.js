/**
 * home.screen
 * 
 * use 3d carousel to transition "frames"
 * (sections within screen)
 */
import { clients, projects, socials } from '@/src/data'
import Frame from '@/src/base/frame'
import Screen from '@/src/base/screen'
import Carousel from '@/src/components/carousel'
import Title from '@/src/components/title'
import SvgIcon from '@/src/components/svg-icon'
import Project from './project'
import styles from './home.screen.module.css'

const HomeScreen = () => {
  return (
    <Screen
      title="Hello!"
      description="Hi, I'm Brendan. I'm an award-winning full-stack developer of nine years. I plan, create, and grow online products."
    >
      <Carousel
        activeClass={styles.active}
        tabIndex="2"
      >
        <Frame key="frame0">
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
        <Frame key="frame1">
          <Title>Expertise</Title>
          <div className="container p-6 text-white">
            <p className="font-sans text-md md:text-xl mb-8 md:mb-20 md:-mt-20 max-w-xl fade-in-slide-up-250">
              I specialize in (some of) the work that goes into building a successful web app, platform, product, or service:
            </p>
            <div className="md:flex md:justify-evenly">
              <div className="my-2 md:w-1/3 md:pr-20 fade-in-slide-up-300">
                <div className="flex md:block">
                  <SvgIcon
                    className="square-80 xs:square-100 fill-current text-yellow-300 ml-2 mr-2 md:ml-0"
                    type="UserPhone"
                  />
                  <h3 className="mt-2 md:mt-1 font-sans font-medium text-2xl md:text-3xl">User<br />Experience</h3>
                </div>
                <p className="hidden md:block text-display-3 my-5">
                  Delighting users and differentiating products through careful, attentive interaction design and development
                </p>
              </div>
              <div className="my-2 md:w-1/3 md:pr-20 fade-in-slide-up-350">
                <div className="flex md:block">
                  <SvgIcon
                    className="square-80 xs:square-100 fill-current text-yellow-300 ml-2 mr-2 md:ml-0"
                    type="Architecture"
                  />
                  <h3 className="mt-2 md:mt-1 font-sans font-medium text-2xl md:text-3xl">Software<br />Development</h3>
                </div>
                <p className="hidden md:block text-display-3 my-5">
                  Creating extensible software ready to handle evolving business needs&mdash;and the workflows to scale it
                </p>
              </div>
              <div className="my-2 md:w-1/3 fade-in-slide-up-400">
                <div className="flex md:block">
                  <SvgIcon
                    className="square-80 xs:square-100 fill-current text-yellow-300 ml-2 mr-2 md:ml-0"
                    type="Networking"
                  />
                  <h3 className="mt-2 md:mt-1 font-sans font-medium text-2xl md:text-3xl">System<br />Design</h3>
                </div>
                <p className="hidden md:block text-display-3 my-5">
                  Connecting the many moving components of an online business in a way that provides security, resilliency, and scalability
                </p>
              </div>
            </div>
          </div>
        </Frame>
        <Frame key="frame2">
          <Title>Featured <span className="sm:br" />Projects</Title>
          <Carousel
            axis="x"
            nextArrow={false}
            overflow
          >
            {projects.map((project) => (<Project key={project.id} project={project} />))}
          </Carousel>
        </Frame>
        <Frame key="frame3">
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
                    <img
                      alt={client.thumb.alt}
                      className="z-10 flex-initial select-none"
                      src={client.thumb.img}
                      style={{ width: client.thumb.w }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Frame>
        <Frame key="frame4">
          <Title>Get in touch</Title>
          <div className="container p-6 text-white text-center">
            <p className="text-display-2 my-5 max-w-xl mx-auto mb-8 md:mb-20 fade-in-slide-up-200">
              If you're looking to collaborate, need someone to implement your vision, or just wanna say "hi", let's connect.
            </p>
            <div className="flex flex-wrap justify-center">
              {socials.map((social, i) => (
                <a
                  className={`focusable ${social.anim} ${styles.social} relative m-2 p-1 xs:py-2 xs:px-5 md:m-5 md:py-5 md:px-10 bg-white bg-opacity-20 rounded overflow-hidden`}
                  href={social.href}
                  key={`social${i}`}
                  target="_blank"
                >
                  <span className="sr-only">{social.type}</span>
                  <SvgIcon
                    className="fill-current"
                    type={social.type}
                  />
                  <div className={`${styles.socialMask} fill p-1 xs:py-2 xs:px-5 md:py-5 md:px-10 bg-white ${social.color}`}>
                    <SvgIcon
                      className="fill-current"
                      type={social.type}
                    />
                  </div>
                </a>
              ))}
            </div>
          </div>
          <div class="absolute bottom-0 left-0 p-6 w-full z-20 fade-in-slide-up-400">
            <p className="text-sm text-white opacity-60">"Expertise" icons created by corpus delicti, Serhii Smirnov, and Mochammad Kafi from the Noun Project.</p>
          </div>
        </Frame>
      </Carousel>
    </Screen>
  )
}

export default HomeScreen

/**
 * home.screen
 * 
 * test 3d animations to transition "pages"
 * (sections within screen)
 * using react-spring and react-use-gesture
 */
import Head from 'next/head'
import Screen from '@/src/base/screen'
import Carousel from '@/src/components/carousel'
import Link from '@/src/components/link'
import Picture from '@/src/components/picture'
import SvgIcon from '@/src/components/svg-icon'
import { clients, projects, socials } from '@/src/data'
import Title from './title.component'
import styles from './home.screen.module.css'

const HomeScreen = () => {
  return (
    <Screen>
      <Head>
        <title>Home Screen</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={`fullscreen ${styles.bg}`} />

      <Carousel activeClass={styles.active}>
        <div className={`fill flex items-center justify-center bg-white bg-opacity-5`}>
          <div className="container p-6">
            <div className="max-w-lg text-white">
              <h1>
                <div className="text-hero-1 my-5 text-yellow-300 fade-in-slide-up-250">Hi,</div>
                <div className="text-hero-2 my-5 fade-in-slide-up-300">I'm Brendan.</div>
              </h1>
              <p className="text-copy-1 my-5 fade-in-slide-up-350">I'm an award-winning, full-stack developer of nine years.</p>
              <p className="text-copy-2 my-5 fade-in-slide-up-400">I plan, create, and grow online products.</p>
            </div>
          </div>
        </div>
        <div className={`fill flex items-center justify-center bg-white bg-opacity-5`}>
          <Title>Expertise</Title>
          <div className="container p-6">
            <div className="text-white">
              <p className="select-none font-sans text-md md:text-xl mb-8 md:mb-20 md:-mt-20 max-w-xl fade-in-slide-up-250">
                I specialize in (some of) the work that goes into building a successful web app, platform, product, or service:
              </p>
              <div className="md:flex md:justify-evenly">
                <div className="my-2 md:w-1/3 md:pr-20 fade-in-slide-up-300">
                  <div className="flex md:block">
                    <SvgIcon className="fill-current text-yellow-300 ml-2 mr-2 md:ml-0" type="UserPhone" />
                    <h3 className="mt-2 md:mt-1 font-sans font-medium text-2xl md:text-3xl">User<br />Experience</h3>
                  </div>
                  <p className="hidden md:block text-copy-3 my-5">
                    Delighting users and differentiating products through careful, attentive interaction design and development
                  </p>
                </div>
                <div className="my-2 md:w-1/3 md:pr-20 fade-in-slide-up-350">
                  <div className="flex md:block">
                    <SvgIcon className="fill-current text-yellow-300 ml-2 mr-2 md:ml-0" type="Architecture" />
                    <h3 className="mt-2 md:mt-1 font-sans font-medium text-2xl md:text-3xl">Software<br />Development</h3>
                  </div>
                  <p className="hidden md:block text-copy-3 my-5">
                    Creating extensible software ready to handle evolving business needs&mdash;and the workflows to scale it
                  </p>
                </div>
                <div className="my-2 md:w-1/3 fade-in-slide-up-400">
                  <div className="flex md:block">
                    <SvgIcon className="fill-current text-yellow-300 ml-2 mr-2 md:ml-0" type="Networking" />
                    <h3 className="mt-2 md:mt-1 font-sans font-medium text-2xl md:text-3xl">System<br />Design</h3>
                  </div>
                  <p className="hidden md:block text-copy-3 my-5">
                    Connecting the many moving components of an online business in a way that provides security, resilliency, and scalability
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={`fill flex items-center justify-center bg-white bg-opacity-5`}>
          <Title>Projects</Title>
          
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
                    <div className={`absolute bottom-0 left-0 w-full ${styles.projectMeta}`}>
                      <div className={`text-white text-copy-1 m-4 flex-1 ${styles.projectName}`}>{project.name}</div>
                      <div className={`text-white text-copy-2 m-4 flex-initial ${styles.projectClient}`}>{project.client}</div>
                      <div className={`text-white text-copy-2 m-4 flex-initial ${styles.projectDate}`}>{project.date}</div>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </Carousel>
        </div>
        <div className={`fill flex items-center justify-center bg-white bg-opacity-5`}>
          <Title>Clients &amp; <span className="sm:br" />Employers</Title>
          <div className="container p-6">
            <div className="text-white">
              <div className="flex flex-wrap justify-evenly">
                {clients.map((client, i) => (
                  <div className={`m-5 p-5 ${styles['client' + i]} bg-white ${client.bg} opacity-${client.op} flex flex-col justify-center rounded`} key={i}>
                    <img className="flex-initial" src={client.img} style={{ width: client.w }} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className={`fill flex items-center justify-center bg-white bg-opacity-5`}>
          <Title>Get in touch</Title>
          <div className="container p-6">
            <div className="text-white text-center">
              <p className="text-copy-2 my-5 max-w-xl mx-auto mb-8 md:mb-20 fade-in-slide-up-200">
                If you're looking to collaborate, need someone to implement your vision, or just wanna say "hi", let's connect.
              </p>
              <div className="flex flex-wrap justify-center">
                {socials.map((social, i) => (
                  <div
                    className={`${social.anim} ${styles.social} m-2 py-2 px-5 md:m-5 md:py-5 md:px-10 bg-white bg-opacity-20 rounded`}
                    key={`socials${i}`}
                  >
                    <SvgIcon
                      className="fill-current"
                      type={social.type}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Carousel>
    </Screen>
  )
}

export default HomeScreen

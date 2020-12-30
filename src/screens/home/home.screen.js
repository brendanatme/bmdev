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

/**
 * purely here to trick tailwind to not purge these classes during build
 * (since these classes come from dynamic source)
 */
const TAILWIND_HACK = 'bg-opacity-10 bg-opacity-20 bg-opacity-30 bg-opacity-100' // eslint-disable-line

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
                <div className="text-hero-1 my-5">Hi,</div>
                <div className="text-hero-2 my-5">I'm Brendan.</div>
              </h1>
              <p className="text-copy-1 my-5">I'm an award-winning, full-stack developer of nine years.</p>
              <p className="text-copy-2 my-5">I plan, create, and grow online products.</p>
            </div>
          </div>
        </div>
        <div className={`fill flex items-center justify-center bg-white bg-opacity-5`}>
          <Title className={styles.title}>Expertise</Title>
          <div className="container p-6">
            <div className="text-white">
              <p className="select-none font-sans text-md md:text-xl my-5 md:mb-20 md:-mt-20 max-w-xl">
                I specialize in (some of) the work that goes into building a successful web app, platform, product, or service:
              </p>
              <div className="md:flex md:justify-evenly">
                <div className="my-5 md:w-1/3 md:pr-20">
                  <div className="flex md:block">
                    <SvgIcon className="mr-3" type="UserPhone" />
                    <h3 className="mt-2 md:mt-1 font-sans font-medium text-2xl md:text-3xl">User<br />Experience</h3>
                  </div>
                  <p className="hidden md:block text-copy-3 my-5">
                    Delighting users and differentiating products through careful, attentive interaction design and development
                  </p>
                </div>
                <div className="my-5 md:w-1/3 md:pr-20">
                  <div className="flex md:block">
                    <SvgIcon className="mr-3" type="Architecture" />
                    <h3 className="mt-2 md:mt-1 font-sans font-medium text-2xl md:text-3xl" style={{ color: '#d7d8a7' }}>Software<br />Development</h3>
                  </div>
                  <p className="hidden md:block text-copy-3 my-5">
                    Creating extensible software ready to handle evolving business needs&mdash;and the workflows to scale it
                  </p>
                </div>
                <div className="my-5 md:w-1/3">
                  <div className="flex md:block">
                    <SvgIcon className="mr-3" type="Networking" />
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
          <Title className={styles.title}>Projects</Title>
          
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
          <Title className={styles.title}>Clients &amp; <span className="sm:br" />Employers</Title>
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
          <Title className={styles.title}>Get in touch</Title>
          <div className="container p-6">
            <div className="text-white">
              <p className="text-copy-2 my-5 max-w-xl">
                If you're looking to collaborate, need someone to implement your vision, or just wanna say "hi", let's connect.
              </p>
              <div className="flex flex-wrap justify-evenly">
                {socials.map((social, i) => (
                  <div className="m-5" key={i}>
                    {social.type}
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

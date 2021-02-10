/**
 * home.screen
 * 
 * use 3d carousel to transition "frames"
 * (sections within screen)
 */
import { useEffect, useState } from 'react'
import { clients, projects, socials } from '~/src/data'
import Frame from '~/src/base/frame'
import Screen from '~/src/base/screen'
import Carousel from '~/src/components/carousel'
import Title from '~/src/components/title'
import SvgIcon from '~/src/components/svg-icon'
import IconWithText from './icon-with-text'
import Project from './project'
import styles from './home.screen.module.css'

const expertisePoints = [
  {
    className: 'fade-in-slide-up-300',
    icon: 'UserPhone',
    heading: ['User', 'Experience'],
    text: 'Delighting users and differentiating products through careful, attentive interaction design and development',
  },
  {
    className: 'fade-in-slide-up-350',
    icon: 'Architecture',
    heading: ['Software', 'Development'],
    text: 'Creating extensible software ready to handle evolving business needs&mdash;and the workflows to scale it',
  },
  {
    className: 'fade-in-slide-up-400',
    icon: 'Networking',
    heading: ['System', 'Design'],
    text: 'Connecting the many moving components of an online business in a way that provides security, resilliency, and scalability',
  },
]

const HomeScreen = () => {
  const [socialHover, setSocialHover] = useState(-1);
  const [hasHovered, setHasHovered] = useState(false);
  
  useEffect(() => {
    if (socialHover >= 0 && !hasHovered) {
      setHasHovered(true);
    }
  }, [socialHover]);

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
              {expertisePoints.map((point) => (<IconWithText {...point} key={point.text} />))}
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
                  className={`block m-5 relative z-10 ${styles['client' + i]} flex flex-col rounded overflow-hidden`}
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
            <div
              className={`${socialHover > -1 ? styles['socialGroupHover' + socialHover] : ''} ${hasHovered ? styles.hasHovered : ''} flex flex-wrap justify-center`}
              onMouseLeave={() => setSocialHover(-1)}
            >
              {socials.map((social, i) => (
                <a
                  className={`${styles.social} ${styles['social' + i]} ${styles[socialHover === i ? 'socialHover' : 'socialNotHover']} focusable m-2 p-1 xs:py-2 xs:px-5 md:m-5 md:py-5 md:px-10`}
                  href={social.href}
                  key={`social${i}`}
                  onMouseEnter={() => setSocialHover(i)}
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
          <div className="absolute bottom-0 left-0 p-6 w-full z-20 fade-in-slide-up-400">
            <p className="text-sm text-white opacity-60">"Expertise" icons created by corpus delicti, Serhii Smirnov, and Mochammad Kafi from the Noun Project.</p>
          </div>
        </Frame>
      </Carousel>
    </Screen>
  )
}

export default HomeScreen

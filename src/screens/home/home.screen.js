/**
 * home.screen
 *
 * use 3d carousel to transition "frames"
 * (sections within screen)
 */
import Screen from '~/src/base/screen'
import Carousel from '~/src/components/carousel'
import IntroFrame from './frames/intro-frame'
import ExpertiseFrame from './frames/expertise-frame'
import ProjectsFrame from './frames/projects-frame'
import ExperimentsFrame from './frames/experiments-frame'
import ClientsFrame from './frames/clients-frame'
import ContactFrame from './frames/contact-frame'

const HomeScreen = () => (
  <Screen
    title="Hello!"
    description="Hi, I'm Brendan. I'm an award-winning full-stack engineer of 15 years. I plan, create, and grow online platforms."
  >
    <Carousel tabIndex="2">
      <IntroFrame key="frame0" />
      <ExpertiseFrame key="frame1" />
      <ProjectsFrame key="frame2" />
      <ExperimentsFrame key="frame3" />
      <ClientsFrame key="frame4" />
      <ContactFrame key="frame5" />
    </Carousel>
  </Screen>
)

export default HomeScreen

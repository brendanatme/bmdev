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
// import styles from './project.screen.module.css'

const ProjectScreen = () => {
  return (
    <Screen>
      <Head>
        <title>Project Screen</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Carousel>
        <section className="fill bg-gray-700">Section 1</section>
        <section className="fill bg-gray-700">Section 2</section>
        <section className="fill bg-gray-700">Section 3</section>
      </Carousel>
    </Screen>
  )
}

export default ProjectScreen

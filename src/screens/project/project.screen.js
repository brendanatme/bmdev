/**
 * project.screen
 * 
 * 'project' property is passed from /pages/projects/[id].js
 * 
 * data is contained in /src/data/projects.data.js
 */
import Screen from '@/src/base/screen'
import Carousel from '@/src/components/carousel'
import ContentFrame from '@/src/components/content-frame'
// import { projects } from '@/src/data'

const ProjectScreen = ({ project }) => {
  // const router = useRouter()
  // console.log('router', router)
  // const project = projects.find((project) => project.id === router.query.id)
  // console.log('project', project)

  return (
    <Screen title={`${project.name} | Projects`}>
      <Carousel>
        {project.frames.map((frame, i) => (
          <ContentFrame {...frame} key={`frame${i}`} />
        ))}
      </Carousel>
    </Screen>
  )
}

export default ProjectScreen

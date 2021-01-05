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

const ProjectScreen = ({ project }) => {
  return (
    <Screen
      title={`${project.name} | Projects`}
      description={project.desc}
    >
      <Carousel>
        {project.frames.map((frame, i) => (
          <ContentFrame {...frame} key={`frame${i}`} />
        ))}
      </Carousel>
    </Screen>
  )
}

export default ProjectScreen

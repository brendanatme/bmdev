import { projects } from '~/src/data'
import Frame from '~/src/base/frame'
import Carousel from '~/src/components/carousel'
import Title from '~/src/components/title'
import Project from '../project'

const ProjectsFrame = () => (
  <Frame>
    <Title>
      Featured <span className="sm:br" />
      Projects
    </Title>
    <Carousel axis="x" nextArrow={false} overflow enterEnabled>
      {projects.map((project) => (
        <Project key={project.id} project={project} />
      ))}
    </Carousel>
  </Frame>
)

export default ProjectsFrame

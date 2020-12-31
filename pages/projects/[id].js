import ProjectScreen from '@/src/screens/project'
import { projects } from '@/src/data'

export default ProjectScreen

export async function getStaticProps(context) {
  return {
    props: {
      project: projects.find(({ id }) => id === context.params.id)
    }
  }
}

export async function getStaticPaths() {
  return {
    paths: projects.map(({ id }) => ({ params: { id } })),
    fallback: false,
  }
}

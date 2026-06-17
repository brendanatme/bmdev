import ExperimentScreen from '~/src/screens/experiment'
import { experiments } from '~/src/data'

export default ExperimentScreen

export async function getStaticProps(context) {
  return {
    props: {
      experiment: experiments.find(({ id }) => id === context.params.id)
    }
  }
}

export async function getStaticPaths() {
  return {
    paths: experiments.map(({ id }) => ({ params: { id } })),
    fallback: false,
  }
}

import { experiments } from '~/src/data'
import Frame from '~/src/base/frame'
import Carousel from '~/src/components/carousel'
import Title from '~/src/components/title'
import Experiment from '../experiment'

const ExperimentsFrame = () => (
  <Frame>
    <Title>Experiments</Title>
    <Carousel axis="x" nextArrow={false} overflow enterEnabled>
      {experiments.map((experiment) => (
        <Experiment key={experiment.id} experiment={experiment} />
      ))}
    </Carousel>
  </Frame>
)

export default ExperimentsFrame

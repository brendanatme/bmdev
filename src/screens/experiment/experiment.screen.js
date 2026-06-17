import Screen from '~/src/base/screen'
import Carousel from '~/src/components/carousel'
import ContentFrame from '~/src/components/content-frame'

const ExperimentScreen = ({ experiment }) => (
  <Screen title={`${experiment.name} | Experiments`}>
    <Carousel>
      {experiment.frames.map((frame, i) => (
        <ContentFrame {...frame} key={`${experiment.name}${i}`} />
      ))}
    </Carousel>
  </Screen>
)

export default ExperimentScreen

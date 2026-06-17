import Frame from '~/src/base/frame'
import Title from '~/src/components/title'
import IconWithText from '../icon-with-text'

const expertisePoints = [
  {
    className: "fade-in-slide-up-300",
    icon: "Architecture",
    heading: ["Software", "Engineering"],
    text: "Creating extensible software ready to handle evolving business needs—and the workflows to scale it",
  },
  {
    className: "fade-in-slide-up-350",
    icon: "UserPhone",
    heading: ["User", "Experience"],
    text: "Delighting users and differentiating products through careful, attentive interaction design and development",
  },
  {
    className: "fade-in-slide-up-400",
    icon: "Networking",
    heading: ["System", "Design"],
    text: "Connecting the many moving components of an online business in a way that provides security, resilliency, and scalability",
  },
  {
    className: "fade-in-slide-up-450",
    icon: "HighFive",
    heading: ["Team", "Leadership"],
    text: "Finding, hiring, mentoring and helping people to do our best work",
  },
]

const ExpertiseFrame = () => (
  <Frame>
    <Title>Expertise</Title>
    <div className="container p-6 text-white">
      <p className="font-sans text-sm md:text-xl mb-8 md:mb-20 md:-mt-20 max-w-xl fade-in-slide-up-250">
        I specialize in some of the work that goes into building a
        successful online platform, product, or service:
      </p>
      <div className="md:flex md:justify-evenly">
        {expertisePoints.map((point) => (
          <IconWithText {...point} key={point.text} />
        ))}
      </div>
    </div>
  </Frame>
)

export default ExpertiseFrame

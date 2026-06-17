import { useEffect, useState } from 'react'
import { socials } from '~/src/data'
import Frame from '~/src/base/frame'
import Title from '~/src/components/title'
import SvgIcon from '~/src/components/svg-icon'
import styles from './contact-frame.module.css'

const ContactFrame = () => {
  const [socialHover, setSocialHover] = useState(-1)
  const [hasHovered, setHasHovered] = useState(false)

  useEffect(() => {
    if (socialHover >= 0 && !hasHovered) {
      setHasHovered(true)
    }
  }, [socialHover])

  return (
    <Frame>
      <Title>Get in touch</Title>
      <div className="container p-6 text-white text-center">
        <p className="text-display-2 my-5 max-w-xl mx-auto mb-8 md:mb-20 fade-in-slide-up-200">
          If you're looking to collaborate, need someone to implement your
          vision, or just wanna say "hi", let's connect.
        </p>
        <div
          className={`${socialHover > -1 ? styles["socialGroupHover" + socialHover] : ""} ${hasHovered ? styles.hasHovered : ""} flex flex-wrap justify-center`}
          onMouseLeave={() => setSocialHover(-1)}
        >
          {socials.map((social, i) => (
            <a
              className={`${styles.social} ${styles["social" + i]} ${styles[socialHover === i ? "socialHover" : "socialNotHover"]} focusable m-2 p-1 xs:py-2 xs:px-5 md:m-5 md:py-5 md:px-10`}
              href={social.href}
              key={`social${i}`}
              onMouseEnter={() => setSocialHover(i)}
              target="_blank"
            >
              <span className="sr-only">{social.type}</span>
              <SvgIcon className="fill-current" type={social.type} />
              <div
                className={`${styles.socialMask} fill p-1 xs:py-2 xs:px-5 md:py-5 md:px-10 bg-white ${social.color}`}
              >
                <SvgIcon className="fill-current" type={social.type} />
              </div>
            </a>
          ))}
        </div>
      </div>
      <div className="absolute bottom-0 left-0 p-6 w-full z-20 fade-in-slide-up-400">
        <p className="text-sm text-white opacity-60">
          "Expertise" icons created by corpus delicti, Serhii Smirnov,
          Mochammad Kafi, and Mick Apps from the Noun Project.
        </p>
      </div>
    </Frame>
  )
}

export default ContactFrame

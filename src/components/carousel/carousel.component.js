/**
 * carousel.component
 * 
 * provide 3d animations to transition "pages"
 * (sections within the carousel -- `props.children`)
 * using react-spring and react-use-gesture
 */
import clamp from 'lodash.clamp'
import { useEffect, useRef, useState } from 'react'
import { useGesture } from 'react-use-gesture'
import { animated, useSpring, useSprings } from '@react-spring/web'
import { useScreen } from '@brendanatme/react-utils/hooks'
import Delayed from 'react-delayed'
import KeyHandler, { DOWN_ARROW, LEFT_ARROW, RIGHT_ARROW, UP_ARROW } from '~/src/components/key-handler'
import LiveIcon from '~/src/components/live-icon'
import { calcSlideSpring } from './carousel.helpers'
import styles from './carousel.component.module.css'

/**
 * determine which keyboard keys to use
 * depending on carousel orientation
 */
const ARROWS = {
  x: [RIGHT_ARROW, LEFT_ARROW],
  y: [DOWN_ARROW, UP_ARROW],
}

/**
 * use to determine which "direction" array item to get from react-use-gesture
 * when reading gesture information
 */
const DIR_MAP = { x: 0, y: 1 }

const Carousel = ({
  activeClass = '',
  axis = 'y',
  children,
  nextArrow = true,
  overflow = false,
  tabIndex = null,
}) => {
  const hasDragged = useRef(false)
  const dirKey = DIR_MAP[axis]
  const index = useRef(0)
  const [, setSi] = useState(index.current)
  const [atEnd, setAtEnd] = useState(false)
  const [isGrabbing, setIsGrabbing] = useState(false)
  const { h, w } = useScreen()
  const dim = axis === 'y' ? h : w
  const len = children.length
  const last = len - 1

  const calcByAxis = calcSlideSpring(axis, dim, overflow)

  const [springs, setSprings] = useSprings(
    len,
    (i) => calcByAxis(i, index.current),
  )

  const nextBtnSpring = useSpring({
    opacity: atEnd ? 0 : 1,
    visibility: atEnd ? 'hidden' : 'visible',
  })

  const setIndex = (n) => {
    index.current = clamp(n, 0, last)
    setSi(index.current)
    if (!atEnd && index.current === last) {
      setAtEnd(true)
    } else if (atEnd && index.current !== last) {
      setAtEnd(false)
    }
  }

  /**
   * when the children change, return to slide 0 and re-render
   */
  useEffect(() => {
    setIndex(0)
    setSprings((i) => calcByAxis(i, index.current))
  }, [children[0].key])

  useEffect(() => setSprings((i) => calcByAxis(
    i,
    index.current,
  )), [dim])

  const bind = useGesture(
    {
      onDrag: ({
        cancel,
        direction,
        distance,
        down,
        last,
        tap,
        velocity,
      }) => {
        if (last) {
          setTimeout(() => (hasDragged.current = false), 100)
        } else if (!tap) {
          hasDragged.current = true
        }

        const dir = direction[dirKey] > 0 ? -1 : 1
        const crossedThreshold = down && (
          distance > dim / 2 ||
          (velocity > 0.5 && distance > dim / 6)
        )

        if (down && !isGrabbing) {
          setIsGrabbing(true)
        } else if (!down && isGrabbing) {
          setIsGrabbing(false)
        }

        if (crossedThreshold) {
          setIndex(index.current + dir)
          cancel()
        }

        setSprings((i) => calcByAxis(
          i,
          index.current,
          down ? dir * distance : 0
        ))
      },
      
      /**
       * capture any clicks within children if we've been dragging
       */
      onClickCapture: (e) => {
        if (hasDragged.current) {
          e.stopPropagation()
        }
      },
    },
    {
      drag: {
        axis,
        filterTaps: true,
      },
    },
  )

  const goto = (n) => {
    setIndex(index.current + n)
    setSprings((i) => calcByAxis(i, index.current))
  }

  const next = () => goto(1)
  const prev = () => goto(-1)

  const handleKeyPress = (key) => key === DOWN_ARROW || key === RIGHT_ARROW ? next() : prev()

  return (
    <div className={`${styles.carousel} ${styles[axis]} fullscreen`}>
      <KeyHandler
        handleKeys={ARROWS[axis]}
        onKeyEvent={handleKeyPress}
      />
      <div className={`fill ${styles.scene}`}>
        <div className={`fill ${styles.slides}`} {...bind()}>
          {springs.map((styleProps, i) => (
            <animated.div
              className={`fill ${i === index.current ? 'slide--active ' + activeClass : ''} ${styles.slide} ${overflow ? styles.overflow : ''} ${isGrabbing ? styles.isGrabbing : ''}`}
              key={i}
              style={styleProps}
            >
              {children[i]}
            </animated.div>
          ))}
        </div>
      </div>

      {nextArrow ? (
        <animated.button
          aria-label="Next Slide"
          className={`focusable ${styles.nextBtn}`}
          onClick={next}
          style={nextBtnSpring}
          tabIndex={tabIndex}
        >
          <Delayed mounted mountAfter={3000}>
            <LiveIcon color="white" hover={!atEnd} type="DownArrow" />
          </Delayed>
        </animated.button>
      ) : (
        ''
      )}
    </div>
  )
}

export default Carousel

import React, { useEffect } from 'react'
import { animated, useSprings } from '@react-spring/web'
import styles from './hamburger.icon.component.module.css'

const enterVals = [0, 0, 0]
const shrinkVals = [1, 1, 1]
const expandVals = [0.9, 1.1, 0.8]

const calcAnim = (vals) => (i) => ({
  delay: 50 * i,
  transform: `scaleX(${vals[i]})`,
})

const enter = calcAnim(enterVals)
const expand = calcAnim(expandVals)
const shrink = calcAnim(shrinkVals)

const HamburgerIcon = ({
  color = 'white',
  hover = false,
  size = 'm',
}) => {
  const [springs, animate] = useSprings(3, enter)

  useEffect(() => animate(shrink))

  return (
    <div
      className={`${styles.hamburger} ${styles[color]} ${styles[size]}`}
      onMouseEnter={hover ? () => animate(expand) : null}
      onMouseLeave={hover ? () => animate(shrink) : null}
    >
      {springs.map((style, i) => (
        <animated.div
          className={`${styles.bar} ${styles['bar' + i]}`}
          key={i}
          style={style}
        />
      ))}
    </div>
  )
}

export default HamburgerIcon

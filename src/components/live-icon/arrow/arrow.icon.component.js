import React, { useEffect } from 'react'
import { animated, to, useSprings } from '@react-spring/web'
import styles from './arrow.icon.component.module.css'

const makeArrowIcon = (degrees, hoverDegrees) => {
  const startVals = {
    deg: degrees,
    factor: 0,
    x: [0, 0],
    y: [0, 0],
  }

  const enterVals = {
    deg: degrees,
    factor: 200,
    x: [0.525, 0.525],
    y: [0, 0],
  }

  const shrinkVals = {
    deg: degrees,
    factor: 0,
    x: [0.525, 0.525],
    y: [0, 0],
  }

  const expandVals = {
    deg: hoverDegrees,
    factor: 0,
    x: [0.525, 0.525],
    y: [-5, -5],
  }

  const calcAnim = ({ deg, factor, x, y }) => (i) => ({
    delay: factor * i,
    x: x[i],
    y: y[i],
    z: deg[i],
  })

  const start = calcAnim(startVals)
  const enter = calcAnim(enterVals)
  const expand = calcAnim(expandVals)
  const shrink = calcAnim(shrinkVals)

  const ArrowIcon = ({
    color = 'white',
    hover = false,
    size = 'm',
  }) => {
    const [springs, animate] = useSprings(2, start)
    
    useEffect(() => animate(enter))

    return (
      <animated.div
        className={`${styles.arrow} ${styles[color]} ${styles[size]}`}
        onMouseEnter={hover ? () => animate(expand) : null}
        onMouseLeave={hover ? () => animate(shrink) : null}
        style={hover ? {
          transform: to([springs[0].y], (_y) => `translateY(${-_y}px)`)
        } : null}
      >
        {springs.map(({ x, y, z }, i) => (
          <animated.div
            className={`${styles.bar} ${styles['bar' + i]}`}
            key={i}
            style={{
              transform: to([x, y, z], (_x, _y, _z) => `rotateZ(${_z}deg) translateY(${_y}px) scaleX(${_x})`)
            }}
          />
        ))}
      </animated.div>
    )
  }

  return ArrowIcon
}

export const DownArrow = makeArrowIcon([45, 315], [60, 300])

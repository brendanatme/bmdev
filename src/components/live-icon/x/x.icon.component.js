import React, { useEffect } from 'react'
import { animated, to, useSprings } from '@react-spring/web'
import styles from './x.icon.component.module.css'

const degrees = [45, 315]

const enterVals = {
  factor: 0,
  left: [0],
  x: [0, 0],
  rz: [0],
}

const shrinkVals = {
  factor: 50,
  left: [0],
  x: [1, 1],
  rz: [0],
}

const expandVals = {
  factor: 0,
  left: [15],
  x: [0.525, 0.525],
  rz: [90],
}

const calcAnim = ({ factor, left, rz, x }) => (i) => ({
  delay: factor * i,
  left: left[i],
  x: x[i],
  rz: rz[i],
  z: degrees[i],
})

const enter = calcAnim(enterVals)
const expand = calcAnim(expandVals)
const shrink = calcAnim(shrinkVals)

const XIcon = ({
  color = 'white',
  hover = false,
  size = 'm',
}) => {
  const [springs, animate] = useSprings(2, enter)
  
  useEffect(() => animate(shrink))

  return (
    <animated.div
      className={`${styles.x} ${styles[color]} ${styles[size]}`}
      onMouseEnter={hover ? () => animate(expand) : null}
      onMouseLeave={hover ? () => animate(shrink) : null}
      style={hover ? {
        transform: to([springs[0].left, springs[0].rz], (left, rz) => `translateX(${left}px) rotateZ(-${rz}deg)`)
      } : null}
    >
      {springs.map(({ x, z }, i) => (
        <animated.div
          className={`${styles.bar} ${styles['bar' + i]}`}
          key={i}
          style={{
            transform: to([x, z], (_x, _z) => `rotateZ(${_z}deg) scaleX(${_x})`)
          }}
        />
      ))}
    </animated.div>
  )
}

export default XIcon

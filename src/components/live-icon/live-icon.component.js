import React from 'react'
import Hamburger from './hamburger'
import {
  DownArrow,
} from './arrow'
import X from './x'

const IconMap = {
  DownArrow,
  Hamburger,
  X,
}

const Icon = ({
  color = 'white',
  hover = false,
  size = 'm',
  type,
}) => {
  const Component = IconMap[type]
  
  return (
    <Component
      color={color}
      hover={hover}
      size={size}
    />
  )
}

export default Icon

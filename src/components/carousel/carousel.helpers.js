import clamp from 'lodash.clamp'

/**
 * calculate the rotation around the X axis
 * as the slide leaves, rotate it back
 * as it enters, rotate it in
 */
const calcRotate = (h, i, currentSlide, offset) => {
  if (!h) return 0

  const yPos = currentSlide * h + offset
  const startPos = h * i
  const relPos = startPos - yPos
  const deg = clamp(30 * (relPos / h), -30, 30)

  return deg
}

/**
 * calculate the y pos of the slide
 * slide should always be at its index of slides times screen height
 * plus the current drag from user input
 * (negative translateY is scrolling up)
 */
const calcTranslate = (slideIndex, currentSlide, h, currentDrag, overflowMode) => {
  const indexDiff = slideIndex - currentSlide
  
  return overflowMode
    ? indexDiff * (h / 2) - currentDrag + (h / 4)
    : indexDiff * h - currentDrag
}

/**
 * based on:
 * carousel's axis,
 * screen size,
 * overflow mode,
 * slide's index,
 * and user input (current drag)
 * set the slide's properties
 * 
 * if overflow mode (overflowMode === true), only use half the screen, and offset all items by 1/4 screen
 */
export const calcSlideSpring = (axis, dim, overflowMode) => (slideIndex, currentSlide, currentDrag = 0) => {
  const A = axis === 'y' ? 'Y' : 'X'
  const B = axis === 'y' ? 'X' : 'Y'
  const a = calcTranslate(slideIndex, currentSlide, dim, currentDrag, overflowMode)
  const rotation = calcRotate(dim, slideIndex, currentSlide, currentDrag) 
  const isDragging = rotation !== 0

  return {
    config: { friction: 30 },
    transform: `translateZ(${isDragging ? 90 : 100}vh) translate${A}(${a}px) scale(${isDragging ? .9 : 1}) rotate${B}(${rotation}deg)`, // eslint-disable-line
  }
}

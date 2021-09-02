import React from 'react'
import Link from '~/src/components/link'
import Picture from '~/src/components/picture'
import styles from './thumb.component.module.css'

const Thumb = ({
  blank = null,
  image,
  url,
}) => {
  const C = blank ? 'a' : Link
  return (
    <C
      className={`${styles.thumb} block fill overflow-hidden`}
      href={url}
      tabIndex="0"
      target={blank ? '_blank' : null}
    >
      <Picture className={styles.picture} image={image} only="sm" />
      <div className={`${styles.overlay} fill`} />
      <div className={`${styles.border} fill`} />
    </C>
  )
}

export default Thumb
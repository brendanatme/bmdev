import React from 'react'
import * as layoutModel from '@/src/models/layout.model'
import LogoSvg from '@/src/svgs/logo.svg'
import styles from './page-transition.component.module.css'

const PageTransition = () => {
  const pageTransitionIsOpen = layoutModel.select.pageTransitionIsOpen()
  const initialLoad = layoutModel.select.initialLoad()
  const state = initialLoad
    ? 'initial'
    : pageTransitionIsOpen
      ? 'start'
      : 'end'

  return (
    <>
      <div className={`${styles.bg} ${styles[`bg--${state}`]}`} />
      <LogoSvg className={`${styles.logo} ${styles[`logo--${state}`]} fixed m-auto inset-0`} />
    </>
  )
}

export default PageTransition

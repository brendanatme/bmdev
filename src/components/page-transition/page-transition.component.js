import React from 'react'
import { useSelector } from 'react-redux'
import layoutModel from '@/src/models/layout.model'
import LogoSvg from '@/src/svgs/logo.svg'
import styles from './page-transition.component.module.css'

const PageTransition = () => {
  const { pageTransitionIsOpen } = useSelector(layoutModel.selectors.item)
  const state = pageTransitionIsOpen ? 'start' : 'end'

  return (
    <>
      <div className={`${styles.bg} ${styles[`bg--${state}`]}`} />
      <LogoSvg className={`${styles.logo} ${styles[`logo--${state}`]} fixed m-auto inset-0`} />
    </>
  )
}

export default PageTransition

import React from 'react'
import * as layoutModel from '@/src/models/layout.model'
import LogoSvg from '@/src/svgs/logo.svg'
import styles from './page-transition.component.module.css'

const text = ['L', 'O', 'A', 'D', 'I', 'N', 'G']

const PageTransition = ({
  className = '',
}) => {
  const pageTransitionIsOpen = layoutModel.select.pageTransitionIsOpen()
  const initialLoad = layoutModel.select.initialLoad()
  const state = initialLoad
    ? 'initial'
    : pageTransitionIsOpen
      ? 'start'
      : 'end'

  return (
    <>
      <div className={`${className} ${styles.bg} ${styles[`bg--${state}`]}`} />
      <LogoSvg className={`${className} ${styles.logo} ${styles[`logo--${state}`]} fixed m-auto inset-0`} />
      <div className={`${className} ${styles.text} ${styles[`text--${state}`]} fixed m-auto inset-0`}>
        {text.map((char, i) => (
          <span className={`inline-block opacity-0 ${styles[`char${i}`]}`} key={char}>{char}</span>
        ))}
      </div>
    </>
  )
}

export default PageTransition

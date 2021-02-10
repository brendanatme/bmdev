/**
 * base.screen
 * 
 * base component for all pages ("screens") to use
 * 
 * when screen is mounted, end page transition
 */
import Head from 'next/head'
import { useEffect } from 'react'
import * as layoutModel from '~/src/models/layout.model'
import styles from './base.screen.module.css'

const Screen = ({
  children,
  className = '',
  description = '',
  title,
}) => {
  useEffect(layoutModel.trigger.endPageTransition)
  
  return (
    <div className={`fullscreen ${className}`}>
      <Head>
        <title>{title} | bm.dev</title>
        <meta name="description" content={description} />
      </Head>
      <div className={`fullscreen ${styles.bg}`} />
      {children}
    </div>
  )
}

export default Screen

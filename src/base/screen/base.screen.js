/**
 * base.screen
 * 
 * base component for all pages ("screens") to use
 * 
 * when screen is mounted, end page transition
 */
import Head from 'next/head'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import layoutModel from '@/src/models/layout.model'
import styles from './base.screen.module.css'

const Screen = ({
  children,
  className = '',
  title,
}) => {
  const dispatch = useDispatch()

  useEffect(() => dispatch(layoutModel.actions.EndPageTransition()))
  
  return (
    <div className={`fullscreen ${className}`}>
      <Head>
        <title>{title} | bm.dev</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={`fullscreen ${styles.bg}`} />
      {children}
    </div>
  )
}

export default Screen

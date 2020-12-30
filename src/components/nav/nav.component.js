import React, { useRef } from 'react'
import { useSelector } from 'react-redux'
import { animated, useChain, useSpring, useTransition } from '@react-spring/web'
import { clients, projects } from '@/src/data'
import layoutModel from '@/src/models/layout.model'
import Link from '@/src/components/link'
import styles from './nav.component.module.css'
import Picture from '../picture'

const EMPTY_ARRAY = []
const OPACITY_0 = { opacity: 0 }
const OPACITY_1 = { opacity: 1 }

const experiments = [
  { bgClass: 'bg-gray-50' },
]

const Nav = () => {
  const { navIsOpen } = useSelector(layoutModel.selectors.item)
  const bg1Ref = useRef()
  const bg1 = useSpring({
    ref: bg1Ref,
    transform: navIsOpen
      ? `translateX(0%)`
      : `translateX(100%)`,
  })

  const bg2Ref = useRef()
  const bg2 = useSpring({
    ref: bg2Ref,
    transform: navIsOpen
      ? `rotateZ(-10deg) translateY(0%)`
      : `rotateZ(-10deg) translateY(-100%)`,
  })

  const text0Ref = useRef()
  const text0 = useSpring({
    ref: text0Ref,
    opacity: navIsOpen ? 1 : 0,
    transform: navIsOpen
      ? 'translateX(0px)'
      : 'translateX(-10px)',
  })

  const text1Ref = useRef()
  const text1 = useSpring({
    ref: text1Ref,
    opacity: navIsOpen ? 1 : 0,
    transform: navIsOpen
      ? 'translateX(0px)'
      : 'translateX(-10px)',
  })

  const tiles1Ref = useRef()
  const tiles1 = useTransition(navIsOpen ? projects : EMPTY_ARRAY, {
    ref: tiles1Ref,
    trail: 400 / projects.length,
    from: OPACITY_0,
    enter: OPACITY_1,
    leave: OPACITY_0,
  })

  const text2Ref = useRef()
  const text2 = useSpring({
    ref: text2Ref,
    opacity: navIsOpen ? 1 : 0,
    transform: navIsOpen
      ? 'translateX(0px)'
      : 'translateX(-10px)',
  })

  const tiles2Ref = useRef()
  const tiles2 = useTransition(navIsOpen ? clients : EMPTY_ARRAY, {
    ref: tiles2Ref,
    trail: 400 / clients.length,
    from: OPACITY_0,
    enter: OPACITY_1,
    leave: OPACITY_0,
  })

  const text3Ref = useRef()
  const text3 = useSpring({
    ref: text3Ref,
    opacity: navIsOpen ? 1 : 0,
    transform: navIsOpen
      ? 'translateX(0px)'
      : 'translateX(-10px)',
  })

  const tiles3Ref = useRef()
  const tiles3 = useTransition(navIsOpen ? experiments : EMPTY_ARRAY, {
    ref: tiles3Ref,
    trail: 400 / experiments.length,
    from: OPACITY_0,
    enter: OPACITY_1,
    leave: OPACITY_0,
  })

  useChain(
    navIsOpen
      ? [bg1Ref, bg2Ref, text0Ref, text1Ref, tiles1Ref, text2Ref, tiles2Ref, text3Ref, tiles3Ref]
      : [tiles3Ref, text3Ref, tiles2Ref, text2Ref, tiles1Ref, text1Ref, text0Ref, bg2Ref, bg1Ref],
    navIsOpen
      ? [0, 0.2, 0.4, 0.45, 0.5, 0.65, 0.7, 0.85, 0.9]
      : [0, 0.05, 0.1, 0.2, 0.25, 0.35, 0.4, 0.45, 0.55]
  )
  
  return (
    <div className={`fullscreen flex items-center justify-center ${styles.nav} ${styles[navIsOpen ? 'open' : 'closed']}`}>
      <animated.div
        className={`fullscreen ${styles.bg1}`}
        style={bg1}
      />
      <animated.div
        className={`fixed ${styles.bg2}`}
        style={bg2}
      />
      <div className={`${styles.body} container p-5`}>
        <animated.h2 className="text-copy-1" style={text0}>Menu</animated.h2>
        <section className="my-10">
          <animated.h3 className="text-copy-2" style={text1}>Projects</animated.h3>
          <nav className="my-2">
            <ul className="flex flex-wrap items-left h-32 md:h-64 lg:h-32">
              {tiles1((style, project) => (
                <animated.li className="w-16 md:w-32 h-16 md:h-32 relative" style={style}>
                  <Link href={`/projects/${project.id}`}>
                    <Picture image={project.images.banner} />
                  </Link>
                </animated.li>
              ))}
            </ul>
          </nav>
        </section>
        <section className="my-10">
          <animated.h3 className="text-copy-2" style={text2}>Clients &amp; Employers</animated.h3>
          <nav className="my-2">
            <ul className="flex flex-wrap items-left h-16 md:h-32">
              {tiles2((style, item, _, i) => (
                <animated.li
                  className={`w-16 md:w-32 h-16 md:h-32 bg-gray-${i + 1}00`}
                  style={style}
                />
              ))}
            </ul>
          </nav>
        </section>
        <section className="my-10">
          <animated.h3 className="text-copy-2" style={text3}>Experiments</animated.h3>
          <nav className="my-2">
            <ul className="flex flex-wrap items-left h-16 md:h-32">
              {tiles3((style, item) => (
                <animated.li
                  className={`w-16 md:w-32 h-16 md:h-32 ${item.bgClass}`}
                  style={style}
                />
              ))}
            </ul>
          </nav>
        </section>
      </div>
    </div>
  )
}

export default Nav

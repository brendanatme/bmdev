import React, { useRef } from 'react'
import { animated, useChain, useSpring, useTransition } from '@react-spring/web'
import { experiments, projects } from '~/src/data'
import * as layoutModel from '~/src/models/layout.model'
import Link from '~/src/components/link'
import Picture from '~/src/components/picture'
import styles from './nav.component.module.css'

const EMPTY_ARRAY = []
const OPACITY_0 = { opacity: 0 }
const OPACITY_1 = { opacity: 1 }

const Nav = ({
  className = '',
}) => {
  const navIsOpen = layoutModel.select.navIsOpen()
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
  const tiles2 = useTransition(navIsOpen ? experiments : EMPTY_ARRAY, {
    ref: tiles2Ref,
    trail: 400 / experiments.length,
    from: OPACITY_0,
    enter: OPACITY_1,
    leave: OPACITY_0,
  })

  useChain(
    navIsOpen
      ? [bg1Ref, bg2Ref, text0Ref, text1Ref, tiles1Ref, text2Ref, tiles2Ref]
      : [tiles2Ref, text2Ref, tiles1Ref, text1Ref, text0Ref, bg2Ref, bg1Ref],
    navIsOpen
      ? [0, 0.2, 0.4, 0.45, 0.5, 0.65, 0.7]
      : [0, 0.05, 0.1, 0.2, 0.25, 0.35, 0.4]
  )
  
  return (
    <div className={`${className} fullscreen flex items-center justify-center text-white ${styles[navIsOpen ? 'open' : 'closed']}`}>
      <animated.div
        className="fullscreen bg-dblue z-0 opacity-70"
        style={bg1}
      />
      <animated.div
        className={`fixed bg-dblue z-10 ${styles.bg2}`}
        style={bg2}
      />
      <div className="absolute z-20 container p-5">
        <animated.h2 className="text-display-1" style={text0}>Menu</animated.h2>
        <section className="my-6 md:my-10">
          <animated.h3 className="text-display-2" style={text1}>Projects</animated.h3>
          <nav className="my-2" aria-label="Projects">
            <ul className="flex flex-wrap items-left h-48 md:h-64 lg:h-32">
              {tiles1((style, project) => (
                <animated.li className="w-24 h-24 md:w-32 md:h-32 relative" style={style}>
                  <Link className="block fill" href={`/projects/${project.id}`} tabIndex="0">
                    <Picture image={project.images.banner} only="sm" />
                  </Link>
                </animated.li>
              ))}
            </ul>
          </nav>
        </section>
        <section className="my-6 md:my-10">
          <animated.h3 className="text-display-2" style={text2}>Experiments</animated.h3>
          <nav className="my-2" aria-label="Experiments">
            <ul className="flex flex-wrap items-left h-24 md:h-32">
              {tiles2((style, experiment) => (
                <animated.li
                  className="relative w-24 h-24 md:w-32 md:h-32"
                  style={style}
                >
                  <a className="block fill focusable" href={experiment.url} target="_blank">
                    <Picture image={experiment.images.thumb} only="sm" />
                  </a>
                </animated.li>
              ))}
            </ul>
          </nav>
        </section>
      </div>
    </div>
  )
}

export default Nav

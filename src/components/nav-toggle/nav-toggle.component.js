import React from 'react'
import * as layoutModel from '~/src/models/layout.model'
import KeyHandler, { ESC } from '~/src/components/key-handler'
import LiveIcon from '~/src/components/live-icon'
import styles from './nav-toggle.component.module.css'

const KEYS = [ESC]

const NavToggle = ({
  className = '',
  tabIndex = null,
}) => {
  const navIsOpen = layoutModel.select.navIsOpen()
  
  return (
    <>
      <KeyHandler
        handleFocusableElements
        handleKeys={KEYS}
        onKeyEvent={() => navIsOpen ? layoutModel.trigger.closeNav() : null}
      />
      <span className={`${className} fixed top-6 right-6 md:top-10 md:right-10`}>
        <button
          aria-label="Main Navigation Toggle"
          aria-expanded={navIsOpen ? 'true' : 'false'}
          className={`focusable ${styles.object}`}
          onClick={layoutModel.trigger.toggleNav}
          tabIndex={tabIndex}
        >
          <LiveIcon
            color="white"
            hover
            size="l"
            type={navIsOpen ? 'X' : 'Hamburger'}
          />
        </button>
      </span>
    </>
  )
}

export default NavToggle

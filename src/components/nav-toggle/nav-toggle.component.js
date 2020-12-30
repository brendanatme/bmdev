import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import layoutModel from '@/src/models/layout.model'
import KeyHandler, { ESC } from '@/src/components/key-handler'
import LiveIcon from '@/src/components/live-icon'
import styles from './nav-toggle.component.module.css'

const KEYS = [ESC]

const NavToggle = () => {
  const { navIsOpen } = useSelector(layoutModel.selectors.item)
  const dispatch = useDispatch()
  
  return (
    <>
      <KeyHandler
        handleFocusableElements
        handleKeys={KEYS}
        onKeyEvent={() => navIsOpen ? dispatch(layoutModel.actions.CloseNav()) : null}
      />
      <span className="fixed z-10 top-6 right-6 md:top-10 md:right-10">
        <button
          className={styles.object}
          onClick={() => dispatch(layoutModel.actions.ToggleNav())}
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

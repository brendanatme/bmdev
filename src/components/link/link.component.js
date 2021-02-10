/**
 * components/link
 * 
 * custom link component
 * 
 * why not nextjs' link component?
 * we want to display a page transition overlay
 * that "wipes" away the page
 * we'll achieve that by delaying route changes
 * until the transition overlay has animated in
 * 
 * ideally we could just hook into the router,
 * but we don't have any "before" hook
 */
import { useState } from 'react'
import useRouter from 'next/router'
import { wait } from '@brendanatme/utils'
import KeyHandler, { ENTER } from '~/src/components/key-handler'
import * as layoutModel from '~/src/models/layout.model'

const KEYS = [ENTER]
const NOOP = () => null

const Link = ({
  children,
  className = '',
  href,
  tabIndex = null,
}) => {
  const [isFocused, setFocus] = useState(false)
  const router = useRouter
  const navIsOpen = layoutModel.select.navIsOpen()

  const handleClick = async (e) => {
    if (navIsOpen) {
      layoutModel.trigger.closeNav()
    }
    
    if (href === router.pathname) {
      return
    }

    layoutModel.trigger.startPageTransition()

    await wait(1)

    router.push(href)
  }

  return (
    <span
      className={`focusable cursor-pointer ${className}`}
      onBlur={() => setFocus(false)}
      onClick={handleClick}
      onFocus={() => setFocus(true)}
      tabIndex={tabIndex}
    >
      <KeyHandler
        handleFocusableElements
        handleKeys={KEYS}
        onKeyEvent={isFocused ? handleClick : NOOP}
      />
      {children}
    </span>
  )
}

export default Link

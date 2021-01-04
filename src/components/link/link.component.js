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
import useRouter from 'next/router'
import { wait } from '@brendanatme/utils'
import * as layoutModel from '@/src/models/layout.model'

const Link = ({
  children,
  className = '',
  href,
}) => {
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
    <span className={`cursor-pointer ${className}`} onClick={handleClick}>
      {children}
    </span>
  )
}

export default Link

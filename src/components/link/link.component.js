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
import { useDispatch, useSelector } from 'react-redux'
import { wait } from '@brendanatme/utils'
import layoutModel from '@/src/models/layout.model'

const Link = ({
  children,
  className = '',
  href,
}) => {
  const router = useRouter
  const dispatch = useDispatch()
  const { navIsOpen } = useSelector(layoutModel.selectors.item)

  const handleClick = async (e) => {
    if (navIsOpen) {
      dispatch(layoutModel.actions.CloseNav())
    }
    
    if (href === router.pathname) {
      return
    }

    dispatch(layoutModel.actions.StartPageTransition())

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

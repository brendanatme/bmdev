/**
 * base.screen
 * 
 * base component for all screens to use
 * 
 * when screen is mounted, end page transition
 */
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import layoutModel from '@/src/models/layout.model'

const Screen = ({
  children,
  className = '',
}) => {
  const dispatch = useDispatch()

  useEffect(() => dispatch(layoutModel.actions.EndPageTransition()))
  
  return (
    <div className={`fullscreen ${className}`}>
      {children}
    </div>
  )
}

export default Screen

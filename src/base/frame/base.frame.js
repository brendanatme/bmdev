/**
 * base.frame
 * 
 * within each fullscreen carousel,
 * use this frame as the direct children
 * 
 * 
 * when screen is mounted, end page transition
 */
const Frame = ({
  children,
  className = '',
}) => {
  return (
    <div className={`fill flex items-center justify-center bg-white bg-opacity-5 select-none ${className}`}>
      {children}
    </div>
  )
}

export default Frame

import SvgIcon from '~/src/components/svg-icon'

const IconWithText = ({
  className = '',
  heading: [first, second],
  icon,
  text,
}) => {
  return (
    <div
      className={`my-2 md:w-1/3 md:pr-20 ${className}`}
    >
      <div className="flex md:block">
        <SvgIcon
          className="square-80 xs:square-100 fill-current text-yellow-300 ml-2 mr-2 md:ml-0"
          type={icon}
        />
        <h3 className="mt-2 md:mt-1 font-sans font-medium text-2xl md:text-3xl">
          {first}<br />{second}
        </h3>
      </div>
      <p className="hidden md:block text-display-3 my-5">{text}</p>
    </div>
  )
}

export default IconWithText

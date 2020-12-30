
const Title = ({
  children,
  className = '',
}) => (
  <div className={`${className} w-full h-16 md:h-24 absolute left-0 top-3 text-center flex flex-col items-center justify-center fade-in`}>
    <h2 className={`leading-none text-white font-sans font-medium text-xl md:text-3xl select-none`}>
      {children}
    </h2>
  </div>
)

export default Title

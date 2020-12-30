import styles from './svg-icon.component.module.css'

const SvgIcon = ({
  className = '',
  type,
}) => (
  <svg className={`${styles[type]} ${className}`}>
    <use xlinkHref={`#icons_svg__${type}`} />
  </svg>
)

export default SvgIcon

import LogoSvg from '@/src/svgs/logo.svg'
import Link from '@/src/components/link'
import styles from './logo.component.module.css'

const Logo = ({
  className = '',
  tabIndex = null
}) => (
  <Link
    className={`fixed left-6 top-6 md:left-10 md:top-10 ${className} ${styles.link}`}
    href="/"
    tabIndex={tabIndex}
  >
    <LogoSvg className={styles.logo} />
  </Link>
)

export default Logo

import LogoSvg from '@/src/svgs/logo.svg'
import Link from '@/src/components/link'
import styles from './logo.component.module.css'

const Logo = () => (
  <Link className={`fixed z-10 left-6 top-6 md:left-10 md:top-10 ${styles.link}`} href="/">
    <LogoSvg className={styles.logo} />
  </Link>
)

export default Logo

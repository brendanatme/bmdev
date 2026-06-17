import Link from '~/src/components/link'
import styles from './experiment.component.module.css'

const ExperimentThumb = ({ experiment }) => (
  <div className="fill flex items-center justify-center">
    <Link href={`/experiments/${experiment.id}`}>
      <div className={`${styles.experiment} rounded overflow-hidden relative`}>
        <img
          alt={experiment.images.banner.alt}
          className={styles.logo}
          draggable="false"
          src={experiment.images.banner.lg[0].src}
        />
        <div className={`fill ${styles.overlay} flex items-center justify-center`}>
          <div className={`${styles.name} text-white text-display-1`}>
            {experiment.name}
          </div>
        </div>
      </div>
    </Link>
  </div>
)

export default ExperimentThumb

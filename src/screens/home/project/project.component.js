import Link from '@/src/components/link'
import Picture from '@/src/components/picture'
import styles from './project.component.module.css'

const ProjectThumb = ({ project }) => {
  return (
    <div className="fill flex items-center justify-center">
      <Link href={`/projects/${project.id}`}>
        <div className={`${styles.project} rounded overflow-hidden relative`}>
          <Picture className={styles.bg} image={project.images.banner} />
          <div className={`fill ${styles.overlay}`} />
          <div className={`absolute bottom-0 left-0 py-2 px-3 md:py-5 md:px-10 w-full`}>
            <div className={`${styles.metaBg} bg-gray-50 fill`} />
            <div className={`text-gray-700 text-display-1 my-1 md:my-2 flex-1 leading-none ${styles.name}`}>{project.name}</div>
            <div className={`text-gray-700 text-display-2 my-1 md:my-2 flex-initial ${styles.client}`}>{project.thumbClient}</div>
            <div className={`text-gray-700 text-display-2 my-1 md:my-2 flex-initial ${styles.date}`}>{project.date}</div>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default ProjectThumb

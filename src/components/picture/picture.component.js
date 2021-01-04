/**
 * components/picture
 * 
 * accept an image object
 * and render a picture tag
 */
import styles from './picture.component.module.css'

const LARGE = 'lg'
const SMALL = 'sm'

const Picture = ({
  className = '',
  image,
  only = '',
}) => {
  return (
    <picture>
      <>
        {only !== LARGE ? image.sm.map((img, i) => (
          <source
            key={`sm${i}`}
            media={only !== SMALL ? '(max-width: 768px)' : null}
            srcSet={img.src}
            type={`image/${img.type}`}
          />
        )) : ''}
      </>
      <>
        {only !== SMALL ? image.lg.map((img, i) => (
          <source
            key={`lg${i}`}
            media={only !== LARGE ? '(min-width: 769px)' : null}
            srcSet={img.src}
            type={`image/${img.type}`}
          />
        )) : ''}
      </>
      <img
        alt={image.alt}
        className={`fill select-none ${styles.picture} ${className}`}
        draggable="false"
        src={image.sm[image.sm.length - 1].src}
      />
    </picture>
  )
}

export default Picture

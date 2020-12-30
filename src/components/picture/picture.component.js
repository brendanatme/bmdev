/**
 * components/picture
 * 
 * accept an image object
 * and render a picture tag
 */
import styles from './picture.component.module.css'

const Picture = ({
  className = '',
  image
}) => {
  return (
    <picture>
      <>
        {image.sm.map((img, i) => (
          <source
            key={`sm${i}`}
            media="(max-width: 768px)"
            srcSet={img.src}
            type={`image/${img.type}`}
          />
        ))}
      </>
      <>
        {image.lg.map((img, i) => (
          <source
            key={`lg${i}`}
            media="(min-width: 769px)"
            srcSet={img.src}
            type={`image/${img.type}`}
          />
        ))}
      </>
      <img
        alt=""
        className={`fill ${styles.picture} ${className}`}
        src={image.sm[image.sm.length - 1].src}
      />
    </picture>
  )
}

export default Picture

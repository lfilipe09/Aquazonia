import styles from './styles.module.scss'
import { format } from 'date-fns'
import { ptBR } from 'date-fns/locale'

export type EyeProps = {
  text: string
  author: string
  img?: string
  caption?: string
  captionDate?: Date
  imagePosition?: 'left' | 'right'
  captionPosition?: 'side' | 'below'
  color?: 'primary' | 'secondary'
}

const Eye = ({
  author,
  text,
  caption,
  captionDate,
  captionPosition = 'side',
  imagePosition = 'right',
  color = 'primary',
  img
}: EyeProps) => (
  <section
    className={`${styles['eye__wrapper']} ${
      !img ? styles['eye__only-text'] : ''
    }`}
  >
    <div
      data-testid={'eye-image'}
      className={`${styles['eye__image-wrapper']} ${
        captionPosition === 'below' ? styles['eye__caption-below'] : ''
      } ${imagePosition === 'left' ? styles['eye__image-left'] : ''}  `}
    >
      <div
        data-testid={'eye-text-wrapper'}
        className={`${styles['eye__text-wrapper']} ${
          color === 'secondary' ? styles['eye--text-wrapper-secondary'] : ''
        }`}
      >
        <p>{text}</p>
        <span>{author}</span>
      </div>
      {img && (
        <>
          <div
            style={{ backgroundImage: `url(${img})` }}
            className={styles['eye__image']}
          />
          {caption && (
            <p>
              {caption}
              {captionDate && (
                <span>
                  {format(captionDate, 'dd/MMM/yyyy', {
                    locale: ptBR
                  })}
                </span>
              )}
            </p>
          )}
        </>
      )}
    </div>
  </section>
)

export default Eye

import { Author } from '@/types/posts'
import { useEffect, useRef, useState } from 'react'
import Button from '../Button'
import { RiverPrimary } from '../Icons'
import RiverSecondary from '../Icons/RiverSecondary'
import Logo from '../Logo'
import styles from './styles.module.scss'
import '@/styles/variables.scss'
import Divider from '../Divider'
import TextContainer from '../TextContainer'

export type HeroBannerProps = {
  title: string
  subtitle: string
  authors: Author[]
  description?: string
}

const HeroBanner = ({
  authors,
  subtitle,
  title,
  description
}: HeroBannerProps) => {
  const heroBannerRef = useRef<HTMLDivElement>(null)
  const [dividerMode, setDividerMode] = useState<'primary' | 'secondary'>(
    'primary'
  )

  useEffect(() => {
    const handleScroll = () => {
      /* istanbul ignore next */
      if (heroBannerRef.current) {
        const heroBannerHeight = heroBannerRef.current.offsetHeight
        const scrollY = window.scrollY
        const scrollThreshold = heroBannerHeight * 0.1 // change this value to adjust the scroll threshold

        if (scrollY >= scrollThreshold) {
          heroBannerRef.current.classList.add(styles['wrapper--secondary'])
          heroBannerRef.current.classList.remove(styles['wrapper--primary'])
          setDividerMode('secondary')
        } else {
          heroBannerRef.current.classList.remove(styles['wrapper--secondary'])
          heroBannerRef.current.classList.add(styles['wrapper--primary'])
          setDividerMode('primary')
        }
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <>
      <section
        ref={heroBannerRef}
        data-testid={'hero-banner-wrapper'}
        className={`${styles['hero-banner__wrapper']} ${styles['wrapper--primary']}`}
      >
        <div className={styles['hero-banner__main-wrapper']}>
          <div className={styles['hero-banner__logo-wrapper']}>
            <Logo company="Ambiental Media" />
            <Logo company="Serrapilheira" />
          </div>
          <div className={styles['hero-banner__content-wrapper']}>
            <div>
              <h1>{title}</h1>
              <h2>{subtitle}</h2>
            </div>
            <div className={styles['hero-banner__authors-wrapper']}>
              {authors.map((author) => (
                <p key={author.id}>
                  <b>{author.field}: </b>
                  {author.name}
                </p>
              ))}
            </div>
            <div className={styles['hero-banner__language-wrapper']}>
              <Button url="#" mode="selected">
                PT
              </Button>
              <Button url="#" mode="minimalist">
                EN
              </Button>
            </div>
          </div>
        </div>
        {description && (
          <TextContainer>
            <div className={styles['hero-banner__description']}>
              {description}
            </div>
          </TextContainer>
        )}
        <RiverPrimary className={styles['hero-banner__svg-primary']} />
        <RiverSecondary className={styles['hero-banner__svg-secondary']} />
      </section>
      <Divider height="200px" mode={dividerMode} />
    </>
  )
}

export default HeroBanner

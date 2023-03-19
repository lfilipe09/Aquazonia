import { MenuNav, RecommendedNav } from '@/types/posts'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import Button from '../Button'
import {
  Dot,
  DotAndLine,
  Plus,
  HamburgerMenu,
  ArrowLeft,
  X,
  Arrow
} from '../Icons'
import LanguageSwitcher from '../LanguageSwitcher'

import styles from './styles.module.scss'

export type MenuProps = {
  items: MenuNav[]
  recommendations: RecommendedNav[]
}

const Menu = ({ items, recommendations }: MenuProps) => {
  const ulRef = useRef<HTMLUListElement>(null)
  const [activeBullet, setActiveBullet] = useState(items[0]?.height)
  const [visible, setVisible] = useState(true)
  const [linkMenuOpened, setLinkMenuOpened] = useState(false)
  const [navMenuOpened, setNavMenuOpened] = useState(false)

  // Use a ref to store the previous scroll position
  const prevScrollPosRef = useRef(0)

  items.sort((a, b) => a.height - b.height)

  useEffect(() => {
    const handleScroll = () => {
      //make the bar grow
      const heights = items.map((item) => item.height).sort((a, b) => a - b)
      const maxHeight = heights.reduce(
        (max, height) => (height > max ? height : max),
        heights[0]
      )
      /* istanbul ignore next */
      const percentage =
        window.scrollY / maxHeight >= 0.94
          ? 94
          : (window.scrollY / maxHeight) * 100 - 10
      ulRef.current?.style.setProperty('--after-height', `${percentage}%`)

      //change the active if reach the height of the element
      const smallestHeight = heights
        .filter((height) => height <= window.scrollY)
        .reduce((max, height) => (height > max ? height : max), 0)
      setActiveBullet(smallestHeight)
      // toggle visibility of HamburgerMenu based on scroll direction
      const currentScrollPos = window.pageYOffset
      // istanbul ignore next
      /* eslint-disable */
      if (currentScrollPos <= 0) {
        setVisible(true) // scrolled to top, show menu
      } else {
        /* istanbul ignore next */
        // toggle visibility of HamburgerMenu based on scroll direction
        if (currentScrollPos < prevScrollPosRef.current) {
          setVisible(true) // scrolling up, show menu
        } else if (currentScrollPos > prevScrollPosRef.current) {
          setVisible(false) // scrolling down, hide menu
        }
      }
      /* eslint-enable */

      // Update the ref value with the current scroll position
      prevScrollPosRef.current = currentScrollPos
    }
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <aside
        data-testid={'menu-wrapper'}
        className={`${styles['menu-line__wrapper']} small-hide`}
      >
        <ul ref={ulRef}>
          {items.map((item) => (
            <a
              key={item.id}
              data-testid={'menu-item'}
              className={
                item.height === activeBullet ? styles['link--active'] : ''
              }
            >
              <li>
                <DotAndLine className={styles['menu-line__active']} />
                <Dot
                  className={`${styles['menu-line__disabled']} ${
                    item.height < activeBullet ? styles['dot--highlighted'] : ''
                  }`}
                />
                <p>{item.title}</p>
              </li>
            </a>
          ))}
        </ul>
        <button
          data-testid={'plus-button'}
          onClick={() => {
            setNavMenuOpened(true)
          }}
        >
          <Plus />
        </button>
      </aside>
      <button
        className={`${styles['menu-hamburguer']} medium-hide ${
          /* istanbul ignore next */
          visible ? '' : styles['menu-hamburguer--hidden']
        }`}
        onClick={() => {
          setLinkMenuOpened(true)
        }}
        data-testid={'hamburger-menu-button'}
      >
        <HamburgerMenu />
      </button>
      <div
        data-testid={'full-menu'}
        className={`${styles['menu-full']} ${
          navMenuOpened ? styles['menu-full--open'] : styles['menu-full--close']
        }`}
      >
        <header>
          <Button
            icon={<ArrowLeft />}
            iconPosition={'left'}
            mode={'minimalist'}
            onClick={() => {
              setNavMenuOpened(false)
            }}
            data-testid={'back-button'}
          >
            voltar
          </Button>
          <button
            className={styles['btn-close']}
            onClick={() => {
              setNavMenuOpened(false)
            }}
            data-testid={'close-button'}
          >
            <X className={'medium-hide'} />
          </button>
        </header>
        <div>
          <h6>OUTRAS HISTÓRIAS</h6>
          <ul>
            {recommendations.map((recommentation) => (
              <li key={recommentation.url}>
                <Link href={recommentation.url}>{recommentation.title}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div
        data-testid={'link-menu'}
        className={`${styles['menu-second-full']} ${
          linkMenuOpened
            ? styles['menu-second-full--open']
            : styles['menu-second-full--close']
        }`}
      >
        <ul>
          <div>
            <LanguageSwitcher mode="PT" negative />
            <button
              className={styles['button-close-link-menu']}
              onClick={() => {
                setLinkMenuOpened(false)
              }}
              data-testid={'link-menu-close-button'}
            >
              <X className={'medium-hide'} />
            </button>
          </div>
          {items.map((item) => (
            <a key={item.id}>
              <li>
                <p>{item.title}</p>
              </li>
            </a>
          ))}
          <Button
            icon={<Arrow />}
            onClick={() => {
              /* istanbul ignore next */
              setNavMenuOpened(true)
            }}
          >
            outras histórias
          </Button>
        </ul>
      </div>
    </>
  )
}

export default Menu

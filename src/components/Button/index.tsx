import Link from 'next/link'
import { AnchorHTMLAttributes } from 'react'
import styles from './styles.module.scss'

export type ButtonProps = {
  icon?: JSX.Element
  url: string
} & AnchorHTMLAttributes<HTMLAnchorElement>

const Button = ({ children, icon, url, ...props }: ButtonProps) => (
  <Link href={url} className={styles.link} {...props} passHref>
    {!!children && <span>{children}</span>}
    {!!icon && icon}
  </Link>
)

export default Button

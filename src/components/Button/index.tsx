import Link from 'next/link'
import { AnchorHTMLAttributes } from 'react'
import styles from './styles.module.scss'

export type ButtonProps = {
  icon?: JSX.Element
  url: string
  mode?: 'default' | 'minimalist' | 'selected'
} & AnchorHTMLAttributes<HTMLAnchorElement>

const Button = ({
  children,
  icon,
  url,
  mode = 'default',
  ...props
}: ButtonProps) => (
  <Link
    href={url}
    className={`${styles.link} ${mode !== 'default' && styles[`btn-${mode}`]}`}
    {...props}
    passHref
  >
    {!!children && <span>{children}</span>}
    {!!icon && icon}
  </Link>
)

export default Button

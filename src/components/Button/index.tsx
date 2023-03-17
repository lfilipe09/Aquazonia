import { AnchorHTMLAttributes } from 'react'
import styles from './styles.module.scss'

export type ButtonProps = {
  icon?: JSX.Element
  url: string
} & AnchorHTMLAttributes<HTMLAnchorElement>

const Button = ({ children, icon, url, ...props }: ButtonProps) => (
  <a href={url} className={styles.link} {...props}>
    {!!children && <span>{children}</span>}
    {!!icon && icon}
  </a>
)

export default Button

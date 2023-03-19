import { ButtonHTMLAttributes, AnchorHTMLAttributes } from 'react'
import Link, { LinkProps } from 'next/link'
import styles from './styles.module.scss'

export type ButtonProps = {
  icon?: JSX.Element
  iconPosition?: 'left' | 'right'
  url?: string
  mode?: 'default' | 'minimalist' | 'selected'
  as?: LinkProps['as']
  negative?: boolean
} & ButtonHTMLAttributes<HTMLButtonElement> &
  AnchorHTMLAttributes<HTMLAnchorElement>

const Button = ({
  children,
  icon,
  iconPosition = 'right',
  url,
  mode = 'default',
  as,
  negative,
  ...props
}: ButtonProps) => {
  if (url) {
    return (
      <Link
        href={url}
        passHref
        className={`${styles.link} ${
          mode !== 'default' && styles[`btn-${mode}`]
        } ${negative && styles.negative} ${
          iconPosition === 'left' && styles['btn-icon-left']
        }`}
        {...props}
        as={as}
      >
        {!!icon && iconPosition === 'left' && icon}
        {!!children && <span>{children}</span>}
        {!!icon && iconPosition === 'right' && icon}
      </Link>
    )
  }

  return (
    <button
      type="button"
      className={`${styles.link} ${
        mode !== 'default' && styles[`btn-${mode}`]
      } ${iconPosition === 'left' && styles['btn-icon-left']} ${
        negative && styles.negative
      }`}
      {...props}
    >
      {!!icon && iconPosition === 'left' && icon}
      {!!children && <span>{children}</span>}
      {!!icon && iconPosition === 'right' && icon}
    </button>
  )
}

export default Button

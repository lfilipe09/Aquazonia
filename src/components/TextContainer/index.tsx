import styles from './styles.module.scss'

export type TextContainerProps = {
  children: React.ReactNode
}

const TextContainer = ({ children }: TextContainerProps) => (
  <div className={styles.section}>{children}</div>
)

export default TextContainer

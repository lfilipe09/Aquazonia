import Heading from '../Heading'
import styles from './styles.module.scss'

export type TextContentProps = {
  title?: string
  capitular?: boolean
  content: string
  dataTestId?: string
}

const TextContent = ({
  content,
  capitular,
  title,
  dataTestId
}: TextContentProps) => (
  <section
    className={`${styles['text-content__section']} ${
      capitular ? styles['text-content--capitular'] : ''
    }`}
  >
    {!!title && <Heading>{title}</Heading>}
    <div
      data-testid={dataTestId}
      dangerouslySetInnerHTML={{ __html: content }}
    />
  </section>
)

export default TextContent

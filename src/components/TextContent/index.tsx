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
  <section className={styles['text-content__section']}>
    {!!title && <Heading>{title}</Heading>}
    <div
      data-testid={dataTestId}
      className={capitular ? 'text-content--capitular' : ''}
      dangerouslySetInnerHTML={{ __html: content }}
    />
  </section>
)

export default TextContent

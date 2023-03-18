import { RecommendedPost } from '@/types/posts'
import Image from 'next/image'
import Link from 'next/link'
import styles from './styles.module.scss'

export type RecommendedContentProps = {
  title: string
  items: RecommendedPost[]
}

const RecommendedContent = ({ items, title }: RecommendedContentProps) => (
  <section
    className={styles['recommended-content__wrapper']}
    data-testid="section-recommended-content"
  >
    <h6>{title}</h6>
    {items.map((item) => (
      <Link key={item.id} href={item.url}>
        <div>
          <Image
            src={item.img.src}
            alt={item.img.alt}
            width={116}
            height={67}
            layout="fixed"
          />
          <p>{item.description}</p>
        </div>
      </Link>
    ))}
  </section>
)

export default RecommendedContent

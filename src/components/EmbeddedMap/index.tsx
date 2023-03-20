import React from 'react'
import styles from './styles.module.scss'

export type EmbeddedMapProps = {
  descriptions?: string[]
  height?: number
  embeddedUrl: string
}

export default function EmbeddedMap({
  descriptions,
  height,
  embeddedUrl
}: EmbeddedMapProps) {
  const multiplier = descriptions ? descriptions.length : 1
  const sectionHeight = height ? height : 100 * multiplier

  return (
    <section
      style={{ height: `${sectionHeight}vh` }}
      className={styles['map-container']}
      data-testid={'map-container'}
    >
      {descriptions && (
        <>
          {descriptions.map((description, index) => (
            <aside
              data-testid={'descriptions-map'}
              style={{
                top: `${
                  (sectionHeight / descriptions.length) * (index + 1) - 60
                }vh`
              }}
              key={`${description.slice(0, 8)}-${index}`}
            >
              {description}
            </aside>
          ))}
        </>
      )}
      <div
        dangerouslySetInnerHTML={{ __html: embeddedUrl }}
        className={styles['map-wrapper']}
        data-testid={'map-wrapper'}
      ></div>
    </section>
  )
}

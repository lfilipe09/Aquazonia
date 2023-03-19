import { CartoLayer, MAP_TYPES, setDefaultCredentials } from '@deck.gl/carto'
import React from 'react'
import { StaticMap } from 'react-map-gl'
import DeckGL from '@deck.gl/react'
import styles from './styles.module.scss'

export type MapProps = {
  descriptions?: string[]
  height?: number
}

export default function Map({ descriptions, height }: MapProps) {
  const INITIAL_VIEW_STATE = {
    longitude: 0,
    latitude: 0,
    zoom: 2
  }

  const multiplier = descriptions ? descriptions.length : 1
  const sectionHeight = height ? height : 100 * multiplier

  setDefaultCredentials({
    username: 'public',
    apiKey: 'default_public'
  })

  const layer = new CartoLayer({
    type: MAP_TYPES.QUERY,
    data: `SELECT * FROM world_population_2015 `,
    pointRadiusMinPixels: 6,
    getLineColor: [0, 0, 0, 0.75],
    getFillColor: [238, 77, 90],
    lineWidthMinPixels: 1
  })

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
      <div className={styles['map-wrapper']}>
        <DeckGL
          width="100%"
          height="100%"
          initialViewState={INITIAL_VIEW_STATE}
          controller={false}
          layers={[layer]}
          data-testid="deckgl"
        >
          <StaticMap
            reuseMaps
            mapStyle="https://basemaps.cartocdn.com/gl/positron-gl-style/style.json"
            preventStyleDiffing
          />
        </DeckGL>
      </div>
    </section>
  )
}

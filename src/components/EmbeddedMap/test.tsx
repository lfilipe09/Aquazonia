import React from 'react'
import { render, screen } from '@testing-library/react'
import EmbeddedMap, { EmbeddedMapProps } from '.'

describe('EmbeddedMap', () => {
  const defaultProps: EmbeddedMapProps = {
    descriptions: ['Description 1', 'Description 2'],
    embeddedUrl:
      '<iframe width="100%" height="100%" src="https://clausa.app.carto.com/map/70d7a99b-8e62-42e0-937d-c9be04c05791"></iframe>'
  }

  it('renders without error', () => {
    render(<EmbeddedMap {...defaultProps} />)
    const mapContainer = screen.getByTestId('map-container')
    expect(mapContainer).toBeInTheDocument()
  })

  it('renders the descriptions', () => {
    render(<EmbeddedMap {...defaultProps} />)
    const descriptions = screen.getAllByTestId('descriptions-map')
    expect(descriptions).toHaveLength(2)
    expect(descriptions[0]).toHaveTextContent('Description 1')
    expect(descriptions[1]).toHaveTextContent('Description 2')
  })

  it('renders the with no descriptions', () => {
    render(
      <EmbeddedMap embeddedUrl='<iframe width="100%" height="100%" src="https://clausa.app.carto.com/map/70d7a99b-8e62-42e0-937d-c9be04c05791"></iframe>' />
    )
    const descriptions = screen.queryAllByTestId('descriptions-map')
    expect(descriptions).toHaveLength(0)
  })

  it('applies the height style', () => {
    const height = 500
    render(<EmbeddedMap {...defaultProps} height={height} />)
    const mapContainer = screen.getByTestId('map-container')
    expect(mapContainer).toHaveStyle(`height: ${height}vh`)
  })
})

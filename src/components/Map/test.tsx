import { render, screen } from '@testing-library/react'
import Map from './index'
import { CartoLayer, MAP_TYPES, setDefaultCredentials } from '@deck.gl/carto'

jest.mock('@deck.gl/carto', () => ({
  CartoLayer: jest.fn(),
  MAP_TYPES: {
    QUERY: 'QUERY'
  },
  setDefaultCredentials: jest.fn()
}))

describe('Map', () => {
  beforeEach(() => {
    CartoLayer.mockClear()
    setDefaultCredentials.mockClear()
  })

  test('renders the map component', () => {
    render(<Map />)
    const mapSection = screen.getByTestId('map-container')
    expect(mapSection).toBeInTheDocument()
  })

  test('sets default credentials', () => {
    render(<Map />)
    expect(setDefaultCredentials).toHaveBeenCalledWith({
      username: 'public',
      apiKey: 'default_public'
    })
  })

  test('renders the carto layer', () => {
    render(<Map />)
    expect(CartoLayer).toHaveBeenCalledWith({
      type: MAP_TYPES.QUERY,
      data: `SELECT * FROM world_population_2015 `,
      pointRadiusMinPixels: 6,
      getLineColor: [0, 0, 0, 0.75],
      getFillColor: [238, 77, 90],
      lineWidthMinPixels: 1
    })
  })

  test('renders descriptions if provided', () => {
    const descriptions = ['First description', 'Second description']
    render(<Map descriptions={descriptions} />)
    descriptions.forEach((description) => {
      const descriptionElement = screen.getByText(description)
      expect(descriptionElement).toBeInTheDocument()
    })
  })

  test('sets section height based on descriptions length', () => {
    const descriptions = ['First description', 'Second description']
    render(<Map descriptions={descriptions} />)
    const mapSection = screen.getByTestId('map-container')
    expect(mapSection).toHaveStyle(`height: ${descriptions.length * 100}vh`)
  })

  test('sets section height based on provided height', () => {
    const height = 500
    render(<Map height={height} />)
    const mapSection = screen.getByTestId('map-container')
    expect(mapSection).toHaveStyle(`height: ${height}vh`)
  })
})

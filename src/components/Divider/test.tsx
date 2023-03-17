import { render, screen } from '@testing-library/react'

import Divider from '.'

describe('<Divider />', () => {
  it('should render the divider with correct colors', () => {
    render(
      <Divider
        backgroundColor="#CEC5AF"
        dividerColor="#FFFFFF"
        height="100px"
      />
    )

    expect(screen.getByTestId('section-divider')).toHaveStyle(`
      background-color: rgb(206, 197, 175)
    `)

    expect(screen.getByTestId('svg-path-divider')).toHaveAttribute(
      'fill',
      '#FFFFFF'
    )
  })

  it('should render the divider with correct height', () => {
    render(
      <Divider
        backgroundColor="#CEC5AF"
        dividerColor="#FFFFFF"
        height="100px"
      />
    )

    expect(screen.getByTestId('section-divider')).toHaveStyle(`
      height: 100px
    `)
  })
})

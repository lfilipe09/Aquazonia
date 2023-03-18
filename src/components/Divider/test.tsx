import { render, screen } from '@testing-library/react'

import Divider from '.'

describe('<Divider />', () => {
  it('should render the divider with correct colors', () => {
    render(<Divider mode="secondary" height="100px" />)

    expect(screen.getByTestId('svg-path-divider')).toHaveAttribute(
      'fill',
      '#FFFFFF'
    )
  })

  it('should render the divider with correct height', () => {
    render(<Divider height="100px" />)

    expect(screen.getByTestId('section-divider')).toHaveStyle(`
      height: 100px
    `)
  })
})

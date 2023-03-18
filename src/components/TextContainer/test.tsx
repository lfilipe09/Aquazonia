import { render, screen } from '@testing-library/react'

import TextContainer from '.'

describe('<TextContainer />', () => {
  it('should render the heading', () => {
    render(<TextContainer>Example Text</TextContainer>)

    expect(screen.getByText(/Example Text/i)).toBeInTheDocument()
  })
})

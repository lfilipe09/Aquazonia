import { render, screen } from '@testing-library/react'

import Logo from '.'

describe('<Logo />', () => {
  it('should render ambiental media logo', () => {
    render(<Logo company="Ambiental Media" />)
    expect(screen.getByLabelText(/ambiental media/i)).toBeInTheDocument()
  })

  it('should render serrapilheira logo', () => {
    render(<Logo company="Serrapilheira" />)
    expect(screen.getByAltText(/serrapilheira/i)).toBeInTheDocument()
  })

  it('should render ambiental media medium logo by default', () => {
    render(<Logo />)
    expect(screen.getByLabelText(/ambiental media/i)).toBeInTheDocument()
  })

  it('should render image with specific medium width and height', () => {
    render(<Logo company="Serrapilheira" />)
    expect(screen.getByAltText(/serrapilheira/i)).toHaveStyle(`
      width: '200px',
      height: '35px'
    `)
  })
})

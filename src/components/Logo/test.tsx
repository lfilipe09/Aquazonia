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

  it('should render a bigger logo', () => {
    render(<Logo size="large" />)
    expect(screen.getByTestId(/logo-wrapper/i)).toHaveStyle(`
      width: '20rem',
    `)
  })

  it('should render a medium logo', () => {
    render(<Logo size="medium" />)
    expect(screen.getByTestId(/logo-wrapper/i)).toHaveStyle(`
      width: '15rem',
    `)
  })

  it('should render ambiental media medium logo by default', () => {
    render(<Logo />)
    expect(screen.getByLabelText(/ambiental media/i)).toBeInTheDocument()
    expect(screen.getByTestId(/logo-wrapper/i)).toHaveStyle(`
      width: '15rem',
    `)
  })

  it('should render image with specific medium width and height', () => {
    render(<Logo company="Serrapilheira" />)
    expect(screen.getByAltText(/serrapilheira/i)).toHaveStyle(`
      width: '150px',
      height: '24px'
    `)
  })

  it('should render image with specific big width and height', () => {
    render(<Logo company="Serrapilheira" size="large" />)
    expect(screen.getByAltText(/serrapilheira/i)).toHaveStyle(`
      width: '200px',
      height: '35px'
    `)
  })
})

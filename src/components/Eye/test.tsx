import { render, screen } from '@testing-library/react'
import Eye, { EyeProps } from '.'

describe('Eye component', () => {
  it('renders author and text', () => {
    const props = {
      author: 'John Doe',
      text: 'Hello, World!'
    }
    render(<Eye {...props} />)
    expect(screen.getByText(props.author)).toBeInTheDocument()
    expect(screen.getByText(props.text)).toBeInTheDocument()
  })

  it('renders image if img prop is provided', () => {
    const props = {
      author: 'John Doe',
      text: 'Hello, World!',
      img: 'http://example.com/image.jpg'
    }
    render(<Eye {...props} />)
    expect(screen.getByTestId('eye-image')).toBeInTheDocument()
  })

  it('renders caption if caption prop is provided', () => {
    const props = {
      author: 'John Doe',
      text: 'Hello, World!',
      img: 'http://example.com/image.jpg',
      caption: 'Caption text',
      captionDate: new Date()
    }
    render(<Eye {...props} />)
    expect(screen.getByText(props.caption)).toBeInTheDocument()
    expect(
      screen.getByText(/[\d]{2}\/[a-zA-Z]{3}\/[\d]{4}/)
    ).toBeInTheDocument()
  })

  it('renders caption below the image if captionPosition prop is "below"', () => {
    const props: EyeProps = {
      author: 'John Doe',
      text: 'Hello, World!',
      img: 'http://example.com/image.jpg',
      caption: 'Caption text',
      captionDate: new Date(),
      captionPosition: 'below'
    }
    render(<Eye {...props} />)
    expect(screen.getByTestId('eye-image')).toHaveClass('eye__caption-below')
  })

  it('renders image on the left if imagePosition prop is "left"', () => {
    const props: EyeProps = {
      author: 'John Doe',
      text: 'Hello, World!',
      img: 'http://example.com/image.jpg',
      imagePosition: 'left'
    }
    render(<Eye {...props} />)
    expect(screen.getByTestId('eye-image')).toHaveClass('eye__image-left')
  })

  it('renders with secondary color if color prop is "secondary"', () => {
    const props: EyeProps = {
      author: 'John Doe',
      text: 'Hello, World!',
      color: 'secondary'
    }
    render(<Eye {...props} />)
    expect(screen.getByTestId('eye-text-wrapper')).toHaveClass(
      'eye--text-wrapper-secondary'
    )
  })

  it('renders without image if img prop is not provided', () => {
    const props = {
      author: 'John Doe',
      text: 'Hello, World!'
    }
    const { container } = render(<Eye {...props} />)
    // eslint-disable-next-line testing-library/no-node-access
    expect(container.firstChild).toHaveClass('eye__only-text')
  })
})

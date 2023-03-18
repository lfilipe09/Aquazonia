import { render, screen } from '@testing-library/react'
import styles from './styles.module.scss'

import Button from '.'
import { Arrow } from '../Icons'

describe('<Button />', () => {
  it('should render the button', () => {
    render(<Button url={'#'}>Buy now</Button>)

    expect(screen.getByText(/Buy now/i)).toBeInTheDocument()
    expect(screen.getByRole('link')).toHaveClass(styles.link)
  })

  it('should render an icon version', () => {
    render(
      <Button url={'#'} icon={<Arrow dataTestId="icon" />}>
        Buy now
      </Button>
    )

    expect(screen.getByText(/buy now/i)).toBeInTheDocument()
    expect(screen.getByTestId('icon')).toBeInTheDocument()
  })

  it('should render a minimalist version', () => {
    render(
      <Button mode="minimalist" url={'#'} icon={<Arrow dataTestId="icon" />}>
        Buy now
      </Button>
    )

    expect(screen.getByRole('link')).toHaveClass(styles['btn-minimalist'])
  })

  it('should render a selected version', () => {
    render(
      <Button mode="selected" url={'#'} icon={<Arrow dataTestId="icon" />}>
        Buy now
      </Button>
    )

    expect(screen.getByRole('link')).toHaveClass(styles['btn-selected'])
  })
})

import { render, screen } from '@testing-library/react'
import styles from './styles.module.scss'
import Arrow from '../Icons'

import Button from '.'

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
})

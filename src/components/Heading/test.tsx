import { render, screen } from '@testing-library/react'
import './styles.module.scss'

import Heading from '.'

describe('<Heading />', () => {
  it('should render heading', () => {
    render(<Heading>Aquazonia</Heading>)
    expect(
      screen.getByRole('heading', { name: /aquazonia/i })
    ).toBeInTheDocument()
  })
})

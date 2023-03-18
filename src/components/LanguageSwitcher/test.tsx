import { render, screen } from '@testing-library/react'

import LanguageSwitcher from '.'

describe('<LanguageSwitcher />', () => {
  it('should render the LanguageSwitcher', () => {
    render(<LanguageSwitcher mode="PT" />)

    expect(screen.getByTestId('language-switcher-wrapper')).toBeInTheDocument()
  })

  it('should render the PT selected button', () => {
    render(<LanguageSwitcher mode="PT" />)

    // eslint-disable-next-line testing-library/no-node-access
    expect(screen.getByText(/PT/i).parentElement).toHaveClass('btn-selected')
    // eslint-disable-next-line testing-library/no-node-access
    expect(screen.getByText(/EN/i).parentElement).toHaveClass('btn-minimalist')
  })
})

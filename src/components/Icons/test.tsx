import React from 'react'
import { render, screen } from '@testing-library/react'
import { Arrow } from './index'

describe('<Arrow />', () => {
  it('should render the arrow icon', () => {
    render(<Arrow dataTestId="arrow-icon" />)
    expect(screen.getByTestId('arrow-icon')).toBeInTheDocument()
  })
})

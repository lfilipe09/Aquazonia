import React from 'react'
import { render, screen } from '@testing-library/react'
import Home from '.'

jest.mock('components/HeroBanner', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Mock Hero Banner"></div>
    }
  }
})

jest.mock('components/DataWithLine', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Mock Data With Line"></div>
    }
  }
})

jest.mock('components/EmbeddedMap', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Mock Embedded Map"></div>
    }
  }
})

jest.mock('components/Eye', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Mock Eye"></div>
    }
  }
})

describe('Home component', () => {
  it('renders without error', () => {
    render(<Home />)

    expect(screen.getByTestId('Mock Hero Banner')).toBeInTheDocument()
    expect(screen.getByTestId('Mock Data With Line')).toBeInTheDocument()
    expect(screen.getByTestId('Mock Embedded Map')).toBeInTheDocument()
    expect(screen.getByTestId('Mock Eye')).toBeInTheDocument()
  })
})

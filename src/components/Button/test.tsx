import { render, screen } from '@testing-library/react'
import Button from './index'

test('renders Example Button', () => {
  render(<Button />)
  const linkElement = screen.getByText(/Example/i)
  expect(linkElement).toBeInTheDocument()
})

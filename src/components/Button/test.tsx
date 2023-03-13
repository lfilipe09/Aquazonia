import { render, screen } from '@testing-library/react'
import Button from '.'
import styles from './styles.module.scss'

test('renders Example Button', () => {
  render(<Button />)
  const linkElement = screen.getByText(/Example/i)
  expect(linkElement).toBeInTheDocument()

  // eslint-disable-next-line testing-library/no-debugging-utils
  expect(linkElement).toHaveClass(styles.btn)
})

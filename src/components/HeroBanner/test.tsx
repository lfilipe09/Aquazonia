import { render, screen } from '@testing-library/react'
import { authorsMock } from './mock'

import HeroBanner from '.'
import { act } from 'react-dom/test-utils'

describe('<HeroBanner />', () => {
  it('should change class on scroll event', () => {
    render(
      <HeroBanner
        authors={authorsMock}
        title="Aquazônia"
        subtitle="A FLORESTA ÁGUA"
      />
    )

    const wrapper = screen.getByTestId('hero-banner-wrapper')

    expect(wrapper.classList.contains('wrapper--primary')).toBe(true)
    expect(wrapper.classList.contains('wrapper--secondary')).toBe(false) // should change class on scroll down event

    // simulate scrolling
    act(() => {
      window.scrollY = 100
      window.dispatchEvent(new Event('scroll'))
    })

    expect(wrapper.classList.contains('wrapper--primary')).toBe(false)
    expect(wrapper.classList.contains('wrapper--secondary')).toBe(true) // should change class on scroll down event

    // simulate scrolling back
    act(() => {
      window.scrollY = -100
      window.dispatchEvent(new Event('scroll'))
    })

    expect(wrapper.classList.contains('wrapper--primary')).toBe(true)
    expect(wrapper.classList.contains('wrapper--secondary')).toBe(false) // should change class on scroll down event
  })

  it('should render a custom description', () => {
    render(
      <HeroBanner
        authors={authorsMock}
        title="Aquazônia"
        subtitle="A FLORESTA ÁGUA"
        description="example description"
      />
    )

    expect(screen.getByText(/example description/i)).toBeInTheDocument()
  })
})

import { render, fireEvent, screen } from '@testing-library/react'
import Menu, { MenuProps } from '.'

const items: MenuProps['items'] = [
  { id: '1', title: 'First Item', height: 0 },
  { id: '2', title: 'Second Item', height: 100 },
  { id: '3', title: 'Third Item', height: 200 }
]

const recommendations: MenuProps['recommendations'] = [
  { url: '/recommendation-1', title: 'Recommendation 1' },
  { url: '/recommendation-2', title: 'Recommendation 2' }
]

describe('Menu', () => {
  it('renders without crashing', () => {
    render(<Menu items={items} recommendations={recommendations} />)
    expect(screen.getByTestId('menu-wrapper')).toBeInTheDocument()
  })

  it('displays the correct number of items', () => {
    render(<Menu items={items} recommendations={recommendations} />)
    const menuItems = screen.getAllByTestId('menu-item')
    expect(menuItems).toHaveLength(items.length)
  })

  it('sets the active bullet correctly on scroll', () => {
    render(<Menu items={items} recommendations={recommendations} />)
    const menuWrapper = screen.getByTestId('menu-wrapper')
    fireEvent.scroll(window, { target: { scrollY: 150 } })
    // eslint-disable-next-line testing-library/no-node-access
    expect(menuWrapper.querySelector('.link--active')).toHaveTextContent(
      'Second Item'
    )
  })

  it('opens the full menu when the plus button is clicked', () => {
    render(<Menu items={items} recommendations={recommendations} />)
    const plusButton = screen.getByTestId('plus-button')
    fireEvent.click(plusButton)
    expect(screen.getByTestId('full-menu')).toHaveClass('menu-full--open')
  })

  it('opens the link menu when the hamburger menu button is clicked', () => {
    render(<Menu items={items} recommendations={recommendations} />)
    const hamburgerMenuButton = screen.getByTestId('hamburger-menu-button')
    fireEvent.click(hamburgerMenuButton)
    expect(screen.getByTestId('link-menu')).toHaveClass(
      'menu-second-full--open'
    )
  })

  it('closes the full menu when the back button or close button is clicked', () => {
    render(<Menu items={items} recommendations={recommendations} />)
    const plusButton = screen.getByTestId('plus-button')
    fireEvent.click(plusButton)
    const backButton = screen.getByTestId('back-button')
    const closeButton = screen.getByTestId('close-button')
    fireEvent.click(backButton)
    expect(screen.getByTestId('full-menu')).toHaveClass('menu-full--close')
    fireEvent.click(plusButton)
    fireEvent.click(closeButton)
    expect(screen.getByTestId('full-menu')).toHaveClass('menu-full--close')
  })

  it('closes the link menu when the close button is clicked', () => {
    render(<Menu items={items} recommendations={recommendations} />)
    const hamburgerMenuButton = screen.getByTestId('hamburger-menu-button')
    fireEvent.click(hamburgerMenuButton)
    const closeButton = screen.getByTestId('link-menu-close-button')
    fireEvent.click(closeButton)
    expect(screen.getByTestId('link-menu')).toHaveClass(
      'menu-second-full--close'
    )
  })

  it('closes the full menu when the back button or close button is clicked', () => {
    render(<Menu items={items} recommendations={recommendations} />)
    const plusButton = screen.getByTestId('plus-button')
    fireEvent.click(plusButton)
    const backButton = screen.getByTestId('back-button')
    const closeButton = screen.getByTestId('close-button')

    fireEvent.click(backButton)
    expect(screen.getByTestId('full-menu')).toHaveClass('menu-full--close')

    fireEvent.click(plusButton)
    fireEvent.click(closeButton)
    expect(screen.getByTestId('full-menu')).toHaveClass('menu-full--close')
  })
})

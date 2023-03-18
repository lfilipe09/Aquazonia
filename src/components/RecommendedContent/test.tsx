import { render, screen } from '@testing-library/react'
import styles from './styles.module.scss'
import RecommendedContent from '.'
import { RecommendedMock } from './mock'

describe('<RecommendedContent />', () => {
  it('should render Recommended Content with correct title', () => {
    render(<RecommendedContent items={RecommendedMock} title="example" />)

    expect(
      screen.getByRole('heading', { name: /example/i })
    ).toBeInTheDocument()
    expect(screen.getByTestId('section-recommended-content')).toHaveClass(
      styles['recommended-content__wrapper']
    )
  })

  it('should render Recommended Content items', () => {
    render(<RecommendedContent items={RecommendedMock} title="example" />)

    expect(screen.getByAltText(RecommendedMock[0].img.alt)).toBeInTheDocument()
    expect(screen.getByText(RecommendedMock[0].description)).toBeInTheDocument()
  })
})

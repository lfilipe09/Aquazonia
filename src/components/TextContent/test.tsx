import { render, screen } from '@testing-library/react'

import TextContent from '.'
import { textContentMock } from './mock'

describe('<TextContent />', () => {
  it('should render the TextContent', () => {
    render(
      <TextContent
        title={textContentMock.title}
        content={textContentMock.content}
      />
    )

    expect(
      screen.getByRole('heading', { name: textContentMock.title })
    ).toBeInTheDocument()
  })

  it('should render a Capitular Text', () => {
    render(
      <TextContent
        title={textContentMock.title}
        content={textContentMock.content}
        capitular
        dataTestId={'capitular-test'}
      />
    )

    expect(screen.getByTestId(/capitular-test/i)).toBeInTheDocument()
  })
})

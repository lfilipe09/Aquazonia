import React from 'react'
import { render, screen } from '@testing-library/react'
import DataWithLine, { DataWithLineProps, Statistics } from '.'

describe('DataWithLine component', () => {
  const testStatistics: Statistics[] = [
    {
      highlight: 'Test Statistic 1',
      description: 'Test Description 1'
    },
    {
      highlight: 'Test Statistic 2',
      description: 'Test Description 2'
    }
  ]

  const testProps: DataWithLineProps = {
    title: 'Test Title',
    statistics: testStatistics
  }

  it('renders the title', () => {
    render(<DataWithLine {...testProps} />)
    const titleElement = screen.getByText(testProps.title)
    expect(titleElement).toBeInTheDocument()
  })

  it('renders the statistics', () => {
    render(<DataWithLine {...testProps} />)
    testStatistics.forEach((statistic) => {
      const highlightElement = screen.getByText(statistic.highlight)
      const descriptionElement = screen.getByText(statistic.description)
      expect(highlightElement).toBeInTheDocument()
      expect(descriptionElement).toBeInTheDocument()
    })
  })

  it('renders the horizontal curved line', () => {
    render(<DataWithLine {...testProps} />)
    const curvedLineElement = screen.getByTestId('horizontal-curved-line')
    expect(curvedLineElement).toBeInTheDocument()
  })
})

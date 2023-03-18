import { Meta, StoryFn } from '@storybook/react'
import RecommendedContent, { RecommendedContentProps } from '.'
import { RecommendedMock } from './mock'

export default {
  title: 'RecommendedContent',
  component: RecommendedContent
} as Meta

export const Basic: StoryFn<RecommendedContentProps> = (args) => (
  <RecommendedContent {...args} />
)

Basic.args = {
  items: RecommendedMock,
  title: 'OUTRAS HISTÓRIAS'
}

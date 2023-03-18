import { Meta, StoryFn } from '@storybook/react'
import TextContent, { TextContentProps } from '.'
import TextContainer from '../TextContainer'
import { textContentMock } from './mock'

export default {
  title: 'TextContent',
  component: TextContent
} as Meta

export const Basic: StoryFn<TextContentProps> = (args) => (
  <TextContainer>
    <TextContent {...args} />
  </TextContainer>
)

Basic.args = {
  capitular: true,
  title: textContentMock.title,
  content: textContentMock.content
}

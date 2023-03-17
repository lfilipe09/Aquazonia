import { Meta, StoryFn } from '@storybook/react'
import Heading, { HeadingProps } from '.'

export default {
  title: 'Heading',
  component: Heading
} as Meta

export const Basic: StoryFn<HeadingProps> = (args) => (
  <Heading>{args.children}</Heading>
)
Basic.args = {
  children: 'example'
}

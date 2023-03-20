import { Meta, StoryFn } from '@storybook/react'
import Divider, { DividerProps } from '.'

export default {
  title: 'Divider',
  component: Divider
} as Meta

export const Basic: StoryFn<DividerProps> = (args) => <Divider {...args} />

Basic.args = {
  height: '100px'
}

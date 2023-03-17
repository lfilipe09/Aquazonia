import { Meta, StoryFn } from '@storybook/react'
import Button, { ButtonProps } from '.'
import Arrow from '../Icons'

export default {
  title: 'Button',
  component: Button
} as Meta

export const Basic: StoryFn<ButtonProps> = (args) => (
  <div style={{ marginTop: '1rem' }}>
    <Button {...args} />
  </div>
)

Basic.args = {
  icon: <Arrow />,
  url: '#',
  children: 'outras histórias'
}

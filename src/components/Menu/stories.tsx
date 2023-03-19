import { Meta, StoryFn } from '@storybook/react'
import Menu, { MenuProps } from '.'
import { menuMock, recommendationMock } from './mock'

export default {
  title: 'Menu',
  component: Menu
} as Meta

export const Basic: StoryFn<MenuProps> = (args) => (
  <div style={{ height: '2500px' }}>
    <Menu {...args} />
  </div>
)

Basic.args = {
  items: menuMock,
  recommendations: recommendationMock
}

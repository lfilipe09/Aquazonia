import { Meta, StoryFn } from '@storybook/react'
import Map, { MapProps } from '.'
import { descriptions } from './mock'

export default {
  title: 'Map',
  component: Map
} as Meta

export const Basic: StoryFn<MapProps> = (args) => <Map {...args} />

Basic.args = {
  descriptions
}

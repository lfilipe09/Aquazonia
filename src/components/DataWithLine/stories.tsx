import { Meta, StoryFn } from '@storybook/react'
import DataWithLine, { DataWithLineProps } from '.'
import { dataWithLineMock } from './mock'

export default {
  title: 'DataWithLine',
  component: DataWithLine
} as Meta

export const Basic: StoryFn<DataWithLineProps> = (args) => (
  <DataWithLine {...args} />
)

Basic.args = {
  statistics: dataWithLineMock,
  title: 'A Bacia Hidrográfica Amazônica representa:'
}

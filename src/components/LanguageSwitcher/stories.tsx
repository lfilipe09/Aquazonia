import { Meta, StoryFn } from '@storybook/react'
import LanguageSwitcher, { LanguageSwitcherProps } from '.'

export default {
  title: 'LanguageSwitcher',
  component: LanguageSwitcher
} as Meta

export const Basic: StoryFn<LanguageSwitcherProps> = (args) => (
  <LanguageSwitcher {...args} />
)

Basic.args = {
  mode: 'PT'
}

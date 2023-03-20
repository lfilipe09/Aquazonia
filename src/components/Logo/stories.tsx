import { Meta, StoryFn } from '@storybook/react'
import Logo, { LogoProps } from '.'

export default {
  title: 'Logo',
  component: Logo
} as Meta

export const AmbientalMedia: StoryFn<LogoProps> = (args) => <Logo {...args} />
AmbientalMedia.args = {
  company: 'Ambiental Media'
}

export const Serrapilheira: StoryFn<LogoProps> = (args) => <Logo {...args} />
Serrapilheira.args = {
  company: 'Serrapilheira'
}

import { Meta, StoryFn } from '@storybook/react'
import Eye, { EyeProps } from '.'

export default {
  title: 'Eye',
  component: Eye
} as Meta

export const Basic: StoryFn<EyeProps> = (args) => <Eye {...args} />

Basic.args = {
  author: 'Cecília, consultora científica',
  caption: 'Descrição da foto, nome do fotógrafo,',
  captionDate: new Date('2019-02-22'),
  img: 'https://source.unsplash.com/user/marekpiwnicki/1042x580',
  text: '“Mesmo que a maioria dos impactos aferidos no índice esteja acontecendo na terra, o nosso olhar voltou-se para a localização, a intensidade e a escala da pressão que exercem sobre os corpos hídricos, em cada microbacia”'
}

export const Secondary: StoryFn<EyeProps> = (args) => <Eye {...args} />

Secondary.args = {
  author: 'Cecília, consultora científica',
  caption: 'Descrição da foto, nome do fotógrafo,',
  captionDate: new Date('2019-02-22'),
  img: 'https://source.unsplash.com/user/marekpiwnicki/1042x580',
  text: '“Mesmo que a maioria dos impactos aferidos no índice esteja acontecendo na terra, o nosso olhar voltou-se para a localização, a intensidade e a escala da pressão que exercem sobre os corpos hídricos, em cada microbacia”',
  color: 'secondary',
  captionPosition: 'below'
}

export const ImageLeft: StoryFn<EyeProps> = (args) => <Eye {...args} />

ImageLeft.args = {
  author: 'Cecília, consultora científica',
  caption: 'Descrição da foto, nome do fotógrafo,',
  captionDate: new Date('2019-02-22'),
  img: 'https://source.unsplash.com/user/marekpiwnicki/1042x580',
  text: '“Mesmo que a maioria dos impactos aferidos no índice esteja acontecendo na terra, o nosso olhar voltou-se para a localização, a intensidade e a escala da pressão que exercem sobre os corpos hídricos, em cada microbacia”',
  imagePosition: 'left',
  captionPosition: 'below'
}

export const OnlyText: StoryFn<EyeProps> = (args) => <Eye {...args} />

OnlyText.args = {
  author: 'Cecília, consultora científica',
  text: '“Mesmo que a maioria dos impactos aferidos no índice esteja acontecendo na terra, o nosso olhar voltou-se para a localização, a intensidade e a escala da pressão que exercem sobre os corpos hídricos, em cada microbacia”',
  color: 'secondary'
}

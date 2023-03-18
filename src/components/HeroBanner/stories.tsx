import { Meta, StoryFn } from '@storybook/react'
import HeroBanner, { HeroBannerProps } from '.'
import { authorsMock } from './mock'

export default {
  title: 'HeroBanner',
  component: HeroBanner
} as Meta

export const Basic: StoryFn<HeroBannerProps> = (args) => (
  <div style={{ height: '200vh' }}>
    <HeroBanner {...args} />
  </div>
)

Basic.args = {
  title: 'Aquazônia',
  subtitle: 'A FLORESTA ÁGUA',
  authors: authorsMock,
  description:
    'Desmatamento e fogo têm sido os principais indicadores da degradação da Floresta Amazônica. Mas qual o efeito acumulado das ações humanas em rios, lagos, planícies inundáveis? Quais as ameaças à dinâmica das águas da maior bacia hidrográfica do planeta? Este índice inédito sintetiza dados de monitoramento e pesquisa para apontar as áreas mais vulneráveis, com opiniões de um time de especialistas. Eles alertam: é preciso com urgência olhar para os corpos aquáticos da Amazônia - e dividir o foco dos esforços de conservação.'
}

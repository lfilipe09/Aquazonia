import Image from 'next/image'

import DataWithLine from '../../components/DataWithLine'
import { dataWithLineMock } from '../../components/DataWithLine/mock'
import HeroBanner from '../../components/HeroBanner'
import Menu from '../../components/Menu'
import TextContainer from '../../components/TextContainer'
import TextContent from '../../components/TextContent'
import { descriptions } from '../../components/Map/mock'
import EmbeddedMap from '../../components/EmbeddedMap'
import Eye from '../../components/Eye'

import { authorsMock } from '../../components/HeroBanner/mock'
import { recommendationMock } from '../../components/Menu/mock'
import { HomeTextMock } from './mock'
import styles from './styles.module.scss'

import riverAmazonas from '/public/img/amazonas-river.png'
import RecommendedContent from '../../components/RecommendedContent'
import { RecommendedMock } from '../../components/RecommendedContent/mock'
import { useEffect, useRef, useState } from 'react'
import { MenuNav } from '../../types/posts'

const Home = () => {
  const refs = [
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null)
  ]

  const [menuData, setMenuData] = useState<MenuNav[]>([
    {
      height: 0,
      id: '#data-water-aquazonia',
      title: 'A Bacia Hidrográfica Amazônica representa'
    },
    {
      height: 0,
      id: '#intensity-aquazonia',
      title: 'A intensidade das ameaças à bacia'
    },
    {
      height: 0,
      id: '#data-aquazonia',
      title: 'Lacunas de dados num mundo de águas'
    }
  ])

  useEffect(() => {
    const positions = refs.map((ref) => {
      /* istanbul ignore next */
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect()
        const scrollTop =
          window.pageYOffset || document.documentElement.scrollTop
        return rect.top + scrollTop - 400
      }
      /* istanbul ignore next */
      return null
    })
    setMenuData(
      positions.map((position, index) => ({
        ...menuData[index],
        height: position as number
      }))
    )
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <main className={styles['home-main']}>
      <HeroBanner
        title="Aquazônia"
        subtitle="A FLORESTA ÁGUA"
        authors={authorsMock}
        description={
          'Desmatamento e fogo têm sido os principais indicadores da degradação da Floresta Amazônica. Mas qual o efeito acumulado das ações humanas em rios, lagos, planícies inundáveis? Quais as ameaças à dinâmica das águas da maior bacia hidrográfica do planeta? Este índice inédito sintetiza dados de monitoramento e pesquisa para apontar as áreas mais vulneráveis, com opiniões de um time de especialistas. Eles alertam: é preciso com urgência olhar para os corpos aquáticos da Amazônia - e dividir o foco dos esforços de conservação.'
        }
      />
      <Menu items={menuData} recommendations={recommendationMock} />
      <div ref={refs[0]} id="data-water-aquazonia">
        <TextContainer>
          <TextContent capitular content={HomeTextMock.firstSection} />
        </TextContainer>
      </div>
      <div>
        <DataWithLine
          statistics={dataWithLineMock}
          title={'A Bacia Hidrográfica Amazônica representa:'}
        />
      </div>
      <Image
        src={riverAmazonas}
        width={1441}
        height={741}
        alt={'Amazonas River'}
      />
      <div ref={refs[1]} id="intensity-aquazonia">
        <TextContainer>
          <TextContent
            capitular
            content={HomeTextMock.secondSection}
            title={'A intensidade das ameaças à bacia'}
          />
        </TextContainer>
      </div>
      <EmbeddedMap
        descriptions={descriptions}
        embeddedUrl={
          '<iframe width="100%" height="100%" src="https://clausa.app.carto.com/map/70d7a99b-8e62-42e0-937d-c9be04c05791"></iframe>'
        }
      />
      <TextContainer>
        <TextContent content={HomeTextMock.thirdSection} />
      </TextContainer>
      <Eye
        author={'Cecília, consultora científica'}
        caption={'Descrição da foto, nome do fotógrafo,'}
        captionDate={new Date('2019-02-22')}
        img={'https://source.unsplash.com/user/marekpiwnicki/1042x580'}
        text={
          '“Mesmo que a maioria dos impactos aferidos no índice esteja acontecendo na terra, o nosso olhar voltou-se para a localização, a intensidade e a escala da pressão que exercem sobre os corpos hídricos, em cada microbacia”'
        }
      />
      <div ref={refs[2]} id="data-aquazonia">
        <TextContainer>
          <TextContent
            content={HomeTextMock.forthSection}
            capitular
            title="Lacunas de dados num mundo de águas"
          />
        </TextContainer>
      </div>
      <TextContainer>
        <RecommendedContent
          items={RecommendedMock}
          title={'OUTRAS HISTÓRIAS'}
        />
      </TextContainer>
    </main>
  )
}

export default Home

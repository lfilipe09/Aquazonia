import HorizontalCurvedLine from '../Icons/HorizontalCurvedLine'
import styles from './styles.module.scss'

export type Statistics = {
  highlight: string
  description: string
}

export type DataWithLineProps = {
  title: string
  statistics: Statistics[]
}

const DataWithLine = ({ statistics, title }: DataWithLineProps) => (
  <section className={styles['data-with-line__wrapper']}>
    <h2>{title}</h2>
    <ul>
      <HorizontalCurvedLine dataTestId="horizontal-curved-line" />
      {statistics.map((statistic) => (
        <li key={statistic.highlight}>
          <h6>{statistic.highlight}</h6>
          <p>{statistic.description}</p>
        </li>
      ))}
    </ul>
  </section>
)

export default DataWithLine

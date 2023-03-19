import Button from '../Button'
import styles from './styles.module.scss'

export type LanguageSwitcherProps = {
  mode: 'PT' | 'EN'
  negative?: boolean
}

const LanguageSwitcher = ({
  mode,
  negative = false
}: LanguageSwitcherProps) => (
  <div
    className={styles['language-switcher__wrapper']}
    data-testid="language-switcher-wrapper"
  >
    <Button mode={mode === 'PT' ? 'selected' : 'minimalist'} url="#">
      PT
    </Button>
    <Button
      mode={mode === 'EN' ? 'selected' : 'minimalist'}
      url="#"
      negative={negative}
    >
      EN
    </Button>
  </div>
)

export default LanguageSwitcher

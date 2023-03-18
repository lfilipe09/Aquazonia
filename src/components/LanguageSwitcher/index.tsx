import Button from '../Button'
import styles from './styles.module.scss'

export type LanguageSwitcherProps = {
  mode: 'PT' | 'EN'
}

const LanguageSwitcher = ({ mode }: LanguageSwitcherProps) => (
  <div
    className={styles['language-switcher__wrapper']}
    data-testid="language-switcher-wrapper"
  >
    <Button mode={mode === 'PT' ? 'selected' : 'minimalist'} url="#">
      PT
    </Button>
    <Button mode={mode === 'EN' ? 'selected' : 'minimalist'} url="#">
      EN
    </Button>
  </div>
)

export default LanguageSwitcher

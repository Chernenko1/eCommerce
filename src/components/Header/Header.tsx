import styles from './header.module.css'
import shopLogo from '@assets/logo.svg'

import HeaderTop from './components/HeaderTop/HeaderTop'

export const Header = () => {
  return (
    <header className={styles.mainHeader}>
      <HeaderTop />
    </header>
  )
}

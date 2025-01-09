import styles from './header.module.css'
import shopLogo from '@assets/logo.svg'

import HeaderTop from './components/HeaderTop/HeaderTop'
import HeaderCenter from './components/HeaderCenter/HeaderCenter'

export const Header = () => {
  return (
    <header className={styles.container}>
      <HeaderTop />
      <HeaderCenter />
    </header>
  )
}

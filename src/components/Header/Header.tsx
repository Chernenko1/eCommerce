import styles from './header.module.css'
import shopLogo from '@assets/logo.svg'

import HeaderTop from './components/HeaderTop/HeaderTop'
import HeaderCenter from './components/HeaderCenter/HeaderCenter'
import PhoneHeader from './components/PhoneHeader/PhoneHeader'

export const Header = () => {
  return (
    <header className={styles.container}>
      <div className={styles.normalScreenHeader}>
        <HeaderTop />
        <HeaderCenter />
      </div>
      <div className={styles.phoneHeader}>
        <PhoneHeader />
      </div>
    </header>
  )
}

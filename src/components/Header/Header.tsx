import { IoCartOutline, IoHeartOutline, IoPersonOutline, IoSearchOutline } from 'react-icons/io5'
import HeaderUserTools from '@components/HeaderLinks/HeaderUserTools'

import { NavLink } from 'react-router-dom'
import shopLogo from '@assets/logo.svg'
import styles from './header.module.css'

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.headerLogo}>
        <img src={shopLogo} className={styles.shopLogo} />
        <p className={styles.headerName}>Furniro</p>
      </div>

      <nav className={styles.navWrapper}>
        <ul className={styles.navigationItems}>
          <li>
            <NavLink to={'/'}>Home</NavLink>
          </li>
          <li>
            <NavLink to={'/shop'}>Shop</NavLink>
          </li>
          <li>
            <NavLink to={'/about'}>About</NavLink>
          </li>
          <li>
            <NavLink to={'/contacts'}>Contacts</NavLink>
          </li>
        </ul>
      </nav>

      <div className={styles.headerUserToolsWrapper}>
        <HeaderUserTools IconComponent={IoPersonOutline} size={28} />
        <HeaderUserTools IconComponent={IoHeartOutline} size={28} />
        <HeaderUserTools IconComponent={IoSearchOutline} size={28} />
        <HeaderUserTools IconComponent={IoCartOutline} size={28} />
      </div>
    </header>
  )
}

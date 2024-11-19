import { IoCartOutline, IoHeartOutline, IoPersonOutline, IoSearchOutline } from 'react-icons/io5'
import shopLogo from '@assets/logo.svg'
import styles from './header.module.css'
import { useState } from 'react'

export const Header = () => {
  const [hambergerOpen, setHamburgerOpen] = useState(false)

  const toggleHamburger = () => {
    setHamburgerOpen(!hambergerOpen)
  }

  return (
    <header className={styles.header}>
      <div className={styles.headerLogo}>
        <img src={shopLogo} className={styles.shopLogo} />
        <p className={styles.headerName}>Furniro</p>
      </div>

      <nav className={styles.navWrapper}>
        <ul className={styles.navigationItems}>
          <li>Home</li>
          <li>Shop</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>

      <div className={styles.shopItemsWrapper}>
        <ul className={styles.shopItems}>
          <li>
            <a>
              <IoPersonOutline size={28} />
            </a>
          </li>
          <li>
            <a>
              <IoHeartOutline size={28} />
            </a>
          </li>
          <li>
            <a>
              <IoSearchOutline size={28} />
            </a>
          </li>
          <li>
            <a>
              <IoCartOutline size={28} />
            </a>
          </li>
        </ul>
      </div>
      {/* <div className={styles.hamburger} onClick={toggleHamburger}>
        <HamburgerMenu />
      </div> */}
    </header>
  )
}

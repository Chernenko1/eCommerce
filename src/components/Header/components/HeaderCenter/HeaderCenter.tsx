import { Link, NavLink } from 'react-router-dom'
import styles from './style.module.css'

import LogoSVG from '@assets/logo.png'
import { IoCartOutline, IoPersonOutline, IoSearchOutline } from 'react-icons/io5'

export default function HeaderCenter() {
  return (
    <div className={styles.headerCenterContainer}>
      <div className={styles.logoContainer}>
        <Link to={'#'}>
          <img alt='Logo' src={LogoSVG} className={styles.logo} />
        </Link>
      </div>
      <search className={styles.headerSearchContainer}>
        <form className={styles.headerSearch}>
          <input type='text' name='search' placeholder='Поиск товаров' />
          <button type='submit' className={styles.searchButton}>
            {' '}
            <IoSearchOutline size={28} color='black' />
          </button>
        </form>
      </search>
      <div className={styles.catalogButton}>
        <NavLink to={'#'}>Каталог</NavLink>
      </div>
      <div className={styles.userItems}>
        <NavLink to={'#'}>
          <IoCartOutline size={28} />
        </NavLink>
        <NavLink to={'#'}>
          <IoPersonOutline size={28} />
        </NavLink>
      </div>
    </div>
  )
}

import React from 'react'

import { IoCallOutline, IoCartOutline, IoMenuOutline, IoSearchOutline } from 'react-icons/io5'

import LogoIMG from '@assets/logo.png'
import styles from './style.module.css'
import { Link } from 'react-router-dom'
import BurgerMenu from '../BurgerMenu/BurgerMenu'

export default function PhoneHeader() {
  return (
    <div className={styles.phoneHeaderContainer}>
      <div className={styles.phoneHeaderIcons}>
        <Link to={'#'}>
          <IoMenuOutline size={35} className={styles.icon} />
        </Link>
        <Link to={'#'}>
          <IoSearchOutline size={35} className={styles.icon} />
        </Link>
      </div>
      <img src={LogoIMG} />
      <div className={styles.phoneHeaderIcons}>
        <Link to={'#'}>
          <IoCartOutline size={35} className={styles.icon} />
        </Link>
        <Link to={'#'}>
          <IoCallOutline size={35} className={styles.icon} />
        </Link>
      </div>
      <div>
        <BurgerMenu />
      </div>
    </div>
  )
}

import React from 'react'

import styles from './style.module.css'
import { Link } from 'react-router-dom'
import { IoPersonOutline } from 'react-icons/io5'

export default function () {
  return (
    <div className={styles.container}>
      <div>
        <Link to={'#'}>
          <IoPersonOutline size={28} />
          <p>Личный кабинет</p>
        </Link>
      </div>
      <div className={styles.navigationContainer}>
        <div className={styles.bigNavigation}>
          <nav>
            <Link to={'#'}>Каталог</Link>
            <Link to={'#'}>Товары в наличии</Link>
            <Link to={'#'}>Товары со скидками</Link>
          </nav>
        </div>
        <nav>
          <Link to={'#'}>Доставка</Link>
          <Link to={'#'}>Оплата</Link>
          <Link to={'#'}>Гарантия и возврат</Link>
          <Link to={'#'}>Конктакты</Link>
        </nav>
      </div>
      <div>
        <Link to={'#'}>+375 (33) 333 23 23</Link>
      </div>
    </div>
  )
}

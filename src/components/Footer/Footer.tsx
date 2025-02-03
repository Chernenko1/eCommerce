import React from 'react'
import { NavLink } from 'react-router-dom'

import styles from './index.module.css'

export default function Footer() {
  return (
    <footer className={styles.footerWrapper}>
      <div className={styles.footerContainer}>
        <section>
          <h2>@Name@</h2>
          <p className={styles.footerCopyrights}>
            Все права защищены © 2025
            <br />
            интернет-магазин @Name@ Беларусь
          </p>
        </section>
        <section className={styles.footerSections}>
          <h4>Меню</h4>
          <ul>
            <li>
              <NavLink to={'#'}>Каталог</NavLink>
            </li>
            <li>
              <NavLink to={'#'}>Товары в наличии</NavLink>
            </li>
            <li>
              <NavLink to={'#'}>Доставка</NavLink>
            </li>
          </ul>
        </section>
        <section className={styles.footerSections}>
          <h4>Help</h4>
          <ul>
            <li>
              <NavLink to={'#'}>Гарантия и возвраты</NavLink>
            </li>
            <li>
              <NavLink to={'#'}>Контакты</NavLink>
            </li>
            <li>
              <NavLink to={'#'}>Оплата</NavLink>
            </li>
          </ul>
        </section>
      </div>
      <div className={styles.footerRights}>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, nulla veniam. Repellat quis ab a quibusdam
          tenetur, possimus suscipit expedita nobis blanditiis maxime deleniti accusantium minima aspernatur ipsum
          cumque autem?
        </p>
      </div>
    </footer>
  )
}

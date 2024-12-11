import React from 'react'
import { NavLink } from 'react-router-dom'

import styles from './index.module.css'

export default function Footer() {
  return (
    <footer className={styles.footerWrapper}>
      <div className={styles.footerContainer}>
        <section className={styles.footerSections}>
          <h2>Funiro</h2>
          <p className={styles.footerCopyrights}>
            400 University Drive Suite 200 Coral Gables, <br />
            FL 33134 USA
          </p>
        </section>
        <section className={styles.footerSections}>
          <h4>Links</h4>
          <ul>
            <li>
              <NavLink to={'/'}>Home</NavLink>
            </li>
            <li>
              <NavLink to={'/Shop'}>Shop</NavLink>
            </li>
            <li>
              <NavLink to={'/About'}>About</NavLink>
            </li>
            <li>
              <NavLink to={'/Contact'}>Contact</NavLink>
            </li>
          </ul>
        </section>
        <section className={styles.footerSections}>
          <h4>Help</h4>
          <ul>
            <li>
              <NavLink to={'#'}>Payment Options</NavLink>
            </li>
            <li>
              <NavLink to={'/Shop'}>Returns</NavLink>
            </li>
            <li>
              <NavLink to={'/About'}>Privacy Pulicies</NavLink>
            </li>
          </ul>
        </section>
        <section className={styles.footerSections}>
          <h4>Newsletters</h4>
          <form className={styles.footerForm}>
            <input type='email' placeholder='Enter Your Email Address' />
            <button type='button'>SUBSCRIBE</button>
          </form>
        </section>
      </div>
      <div className={styles.footerRights}>
        <p>2023 furino. All rights reverved</p>
      </div>
    </footer>
  )
}

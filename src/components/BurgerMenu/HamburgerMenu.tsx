import React from 'react'
import styles from './hamburgerMenu.module.css'

interface Props {
  children?: React.ReactNode
}

export const HamburgerMenu = ({ children }: Props) => {
  return (
    <>
        <div className={styles.hamburger}>
            <div className={styles.burger}></div>
            <div className={styles.burger}></div>
            <div className={styles.burger}></div>
        </div>
    </>
  )
}

import React from 'react'
import { Link } from 'react-router-dom'

import styles from './style.module.css'

interface ICategoryCard {
  img: string
  title: string
  link: string
}

export default function CategoryCard({ img, title, link }: ICategoryCard) {
  return (
    <section className={styles.categoryPopularCard}>
      <Link to={link}>
        <img src={img} />
        <p>{title}</p>
      </Link>
    </section>
  )
}

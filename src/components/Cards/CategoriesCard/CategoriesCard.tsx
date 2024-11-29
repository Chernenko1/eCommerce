import React from 'react'

import styles from './categoriescard.module.css'

interface ICategoriesCard {
  title: string
  img: string
}

export default function CategoriesCard({ title, img }: ICategoriesCard) {
  return (
    <section className={styles.cardWrapper} onClick={() => {}}>
      <img src={img} alt={title} className={styles.image} />
      <p className={styles.title}>{title}</p>
    </section>
  )
}

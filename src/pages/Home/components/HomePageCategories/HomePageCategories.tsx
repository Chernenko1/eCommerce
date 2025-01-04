import { useRef } from 'react'

import CategoriesCard from '@components/Cards/CategoriesCard/CategoriesCard'

import DiningImg from '@assets/images/Categories/Dining.png'
import LivingImg from '@assets/images/Categories/Living.png'
import BedroomImg from '@assets/images/Categories/Bedroom.png'

import styles from './hpcat.module.css'

export default function HomePageCategories() {
  const targetRef = useRef<HTMLDivElement>(null)

  return (
    <section className={styles.categoriesWrapper} ref={targetRef}>
      <header className={styles.categoriesHeader}>
        <h1>Browse The Range</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
      </header>
      <div className={styles.categoriesContainer}>
        <CategoriesCard title='Dining' img={DiningImg} />
        <CategoriesCard title='Living' img={LivingImg} />
        <CategoriesCard title='Bedroom' img={BedroomImg} />
      </div>
    </section>
  )
}

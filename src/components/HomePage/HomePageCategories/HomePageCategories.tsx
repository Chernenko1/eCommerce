import React, { useLayoutEffect, useRef, useState } from 'react'

import CategoriesCard from '@components/Cards/CategoriesCard/CategoriesCard'

import DiningImg from '@assets/images/Categories/Dining.png'
import LivingImg from '@assets/images/Categories/Living.png'
import BedroomImg from '@assets/images/Categories/Bedroom.png'

import styles from './hpcat.module.css'

interface Dimension {
  width: number
  height: number
}

export default function HomePageCategories() {
  const targetRef = useRef<HTMLDivElement>(null)
  const [dimension, setDimensions] = useState({ width: 0, height: 0 })

  useLayoutEffect(() => {
    if (targetRef.current) {
      setDimensions({
        width: targetRef.current.offsetWidth,
        height: targetRef.current.offsetHeight,
      })
    }
  }, [])

  console.log(dimension.height, dimension.width)
  return (
    <section className={styles.categoriesWrapper} ref={targetRef}>
      <header className={styles.categoriesHeader}>
        <h1>Browse The Range</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
      </header>
      {dimension.width > 900 ? (
        <div className={styles.categoriesContainer}>
          <CategoriesCard title='Dining' img={DiningImg} />
          <CategoriesCard title='Living' img={LivingImg} />
          <CategoriesCard title='Bedroom' img={BedroomImg} />
        </div>
      ) : dimension.width > 600 ? (
        <div className={styles.categoriesContainer}>
          <CategoriesCard title='Dining' img={DiningImg} />
          <CategoriesCard title='Living' img={LivingImg} />
        </div>
      ) : (
        <div className={styles.categoriesContainer}>
          <CategoriesCard title='Dining' img={DiningImg} />
        </div>
      )}
    </section>
  )
}

import React from 'react'
import { Link, NavLink } from 'react-router-dom'

import styles from './style.module.css'
import CategoryCard from '../Cards/CategoryCard/CategoryCard'
import StockImg from '@assets/images/Categories/213.jpeg'

export default function () {
  return (
    <section className={styles.popularCategoriesContainer}>
      <div className={styles.categoriesTitle}>
        <h1>Популярные категории</h1>
        <Link to={'#'}>Все категории</Link>
      </div>
      <div className={styles.popularCategories}>
        <CategoryCard img={StockImg} link='#' title='Title' />
        <CategoryCard img={StockImg} link='#' title='Title' />
        <CategoryCard img={StockImg} link='#' title='Title' />
        <CategoryCard img={StockImg} link='#' title='Title' />
        <CategoryCard img={StockImg} link='#' title='Title' />
        <CategoryCard img={StockImg} link='#' title='Title' />
        <CategoryCard img={StockImg} link='#' title='Title' />
        <CategoryCard img={StockImg} link='#' title='Title' />
      </div>
    </section>
  )
}

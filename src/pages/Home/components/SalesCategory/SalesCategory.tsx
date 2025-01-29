import React from 'react'
import { Link } from 'react-router-dom'

import ProductCard from '@components/Cards/ProductCard/ProductCard'

import styles from './styles.module.css'
import { SALEPRODUCTS } from '@utils/FakeData/products'

export default function SalesCategory() {
  let dataget = new Promise((res, rej) => setTimeout(() => res(SALEPRODUCTS), 5000))

  async function fakeGET() {
    let resolve = await dataget
    console.log(resolve)
  }

  fakeGET()

  return (
    <div>
      <div className={styles.categoriesTitle}>
        <h1>Скидки</h1>
        <Link to={'#'}>Все товары со скидками</Link>
      </div>
      <div className={styles.productsContainer}>
        {SALEPRODUCTS.map((item) => (
          <ProductCard
            description={item.description}
            img={item.img}
            price={item.price}
            shortDescription={item.shortDescription}
            title={item.title}
          />
        ))}
      </div>
    </div>
  )
}

import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import ProductCard from '@components/Cards/ProductCard/ProductCard'
import { IPRODUCTS, SALEPRODUCTS } from '@utils/FakeData/products'

import I from '@assets/images/Products/toy.jpg'
import styles from './styles.module.css'

export default function SalesCategory() {
  const [saleProd, setSaleProd] = useState<IPRODUCTS>()

  let dataget = new Promise((res) => setTimeout(() => res(SALEPRODUCTS), 5000))

  async function fakeGET() {
    let resolve: IPRODUCTS = (await dataget) as IPRODUCTS
    setSaleProd(resolve)
  }

  useEffect(() => {
    fakeGET()
  }, [])

  return (
    <div>
      <div className={styles.categoriesTitle}>
        <h1>Скидки</h1>
        <Link to={'#'}>Все товары со скидками</Link>
      </div>
      {saleProd ? (
        <div className={styles.productsContainer}>
          {SALEPRODUCTS.map((item, index) => (
            <ProductCard
              key={index}
              description={item.description}
              img={I}
              price={item.price}
              salePrice={item.salePrice}
              shortDescription={item.shortDescription}
              title={item.title}
            />
          ))}
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  )
}

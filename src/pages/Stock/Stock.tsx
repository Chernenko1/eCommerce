import React, { useEffect, useState } from 'react'

import { IPRODUCTS, SALEPRODUCTS } from '@utils/FakeData/products'
import ProductCard from '@components/Cards/ProductCard/ProductCard'

import I from '@assets/images/Products/toy.jpg'
import styles from './style.module.css'

export default function Stock() {
  const [saleProd, setSaleProd] = useState<IPRODUCTS>()

  let dataget = new Promise((res) => setTimeout(() => res(SALEPRODUCTS), 1000))

  async function fakeGET() {
    let resolve: IPRODUCTS = (await dataget) as IPRODUCTS
    setSaleProd(resolve)
  }

  useEffect(() => {
    fakeGET()
  }, [])

  return (
    <div>
      <header className={styles.stockHeader}>
        <h1>Гарантия и возврат</h1>
      </header>
      <section>
        {saleProd ? (
          <div className={styles.productsWrapper}>
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
            <div className={styles.productsButton}>
              <button>Все товары со скидками</button>
            </div>
          </div>
        ) : (
          <div>Loading...</div>
        )}
      </section>
    </div>
  )
}

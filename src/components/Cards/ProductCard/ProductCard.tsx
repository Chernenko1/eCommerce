import React, { useState } from 'react'

import styles from './style.module.css'
import { IoAdd, IoAddCircleOutline, IoRemove, IoRemoveCircleOutline } from 'react-icons/io5'
import { BsCartPlus } from 'react-icons/bs'

interface IProductCard {
  img: string | null
  title: string
  shortDescription?: string
  description: string
  price: number
  salePrice?: number
}

export default function ProductCard({ description, img, price, salePrice, title, shortDescription }: IProductCard) {
  const [hover, setHover] = useState(true)

  return (
    <section className={styles.container} onMouseMove={() => setHover(true)}>
      <div className={styles.headerContainer}>
        <img src={!img ? '@assets/images/Products/nopicture.jpg' : img} />
        <header className={styles.cardHeader}>
          <h1>{title}</h1>
          <h4>{shortDescription}</h4>
          <p>{description}</p>
        </header>
        <div className={styles.priceContainer}>
          <p className={styles.price}>{price} Br</p>
          <p className={styles.salePrice}>{salePrice} Br</p>
        </div>
      </div>
      <div style={{ display: hover ? 'flex' : 'none' }} className={styles.cartContainer}>
        <form>
          <button type='button'>
            <IoRemove size={24} />
          </button>
          <input placeholder='0'></input>
          <button type='button'>
            <IoAdd size={24} />
          </button>
        </form>
        <button className={styles.cartButton}>
          <BsCartPlus size={24} />
        </button>
      </div>
    </section>
  )
}

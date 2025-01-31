import React, { useEffect, useState } from 'react'

import styles from './style.module.css'
import { IoAdd, IoRemove } from 'react-icons/io5'
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
  const [hover, setHover] = useState(false)
  const [count, setCount] = useState(0)
  const [width, setWidth] = useState(window.innerWidth)

  function updateProductQuantity(action: '+' | '-') {
    switch (action) {
      case '+':
        setCount((prev) => prev + 1)
        break
      case '-':
        setCount((prev) => prev - 1)
        break
      default:
        setCount(count)
    }
  }

  function hoverCheck() {
    if (width > 999) {
      setHover(!hover)
    }
  }

  useEffect(() => {
    if (width < 999) setHover(true)
  }, [])

  return (
    <section className={styles.container} onMouseEnter={hoverCheck} onMouseLeave={hoverCheck}>
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
          <button type='button' onClick={() => updateProductQuantity('-')} disabled={count <= 0 ? true : false}>
            <IoRemove size={24} />
          </button>
          <input type='number' value={count} onChange={(e) => setCount(+e.target.value)} disabled />
          <button type='button' onClick={() => updateProductQuantity('+')}>
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

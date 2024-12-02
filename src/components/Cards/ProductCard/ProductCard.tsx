import { useState } from 'react'
import { IoShareSocialOutline, IoSwapHorizontalOutline, IoHeartOutline } from 'react-icons/io5'

import CardCircle from '@components/SaleCircle/CardCircle'

import styles from './productCard.module.css'

interface IProductCard {
  title: string
  description: string
  price: number
  currency: string
  image: string
  oldPrice?: number
  circleText?: string
  circleColor?: '#E97171' | '#2EC1AC'
}

export default function ProductCard({
  currency,
  description,
  price,
  title,
  image,
  oldPrice,
  circleText,
  circleColor,
}: IProductCard) {
  const [hovered, setHovered] = useState(false)

  return (
    <div className={styles.wrapper} onMouseMove={() => setHovered(true)} onMouseOut={() => setHovered(false)}>
      <div className={styles.circle}>{circleText ? <CardCircle text={circleText} color={circleColor} /> : null}</div>
      <img className={styles.image} src={image} />
      <div className={styles.container}>
        <header className={styles.header}>
          <h2>{title}</h2>
          <p>{description}</p>
        </header>
        <div className={styles.price}>
          <p>{currency}</p>
          <p>{price}</p>
          {oldPrice ? <p className={styles.oldPrice}>{oldPrice}</p> : null}
        </div>
      </div>
      {hovered && (
        <div className={styles.hoverOptions}>
          <button>Add to Cart</button>
          <div className={styles.links}>
            <a href='#'>
              <IoShareSocialOutline /> Share
            </a>

            <a href='#'>
              <IoSwapHorizontalOutline color='white' /> Compare
            </a>

            <a href='#'>
              <IoHeartOutline color='white' /> Like
            </a>
          </div>
        </div>
      )}
    </div>
  )
}

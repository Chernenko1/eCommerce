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
  return (
    <div className={styles.wrapper}>
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
    </div>
  )
}

import styles from './cardcircle.module.css'

interface ICardCircle {
  text: string
  color: string | undefined
}

export default function CardCircle({ text, color }: ICardCircle) {
  return (
    <div className={styles.wrapper} style={{ backgroundColor: color }}>
      {text}
    </div>
  )
}

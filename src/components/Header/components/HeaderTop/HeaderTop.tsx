import { Link, NavLink } from 'react-router-dom'
import styles from './style.module.css'

export default function HeaderTop() {
  return (
    <div className={styles.topHeaderContainer}>
      <nav className={styles.headerNavigation}>
        <Link to={'#'}>Каталог</Link>
        <Link to={'#'}>Товары в наличии</Link>
        <Link to={'#'}>Доставка</Link>
        <Link to={'#'}>Оплата</Link>
        <Link to={'#'}>Гарантия и возвраты</Link>
        <Link to={'#'}>Контакты</Link>
      </nav>
      <div className={styles.headerSupport}>
        <button>Заказать звонок</button>
        <button className={styles.supBth}>+375 (33) 333 23 23</button>
      </div>
    </div>
  )
}

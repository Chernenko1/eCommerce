import React from 'react'

import styles from '@pages/Delivery/style.module.css'

export default function Payment() {
  return (
    <div className={styles.deliveryContainer}>
      <header className={styles.dlCnHeader}>
        <h1>Оплата</h1>
      </header>
      <section className={styles.deliverySection}>
        <div className={styles.sectionDescp}>
          <p>
            Итоговая сумма заказа формируется из стоимости товаров в заказе, курьерских услуг за доставку со склада в
            Минске до места назначения.
          </p>
        </div>
      </section>
      <section className={styles.deliverySection}>
        <h4>Доставка по Беларуси</h4>
        <div className={styles.sectionDescp}>
          <ul>
            <li>Наличными курьеру</li>
            <li>Безналичный расчет курьеру</li>
            <li>Безналичный перевод на расчетный счет для юр. лиц.</li>
          </ul>
        </div>
      </section>
    </div>
  )
}

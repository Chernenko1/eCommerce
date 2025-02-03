import styles from './style.module.css'

export default function Delivery() {
  return (
    <div className={styles.deliveryContainer}>
      <header className={styles.dlCnHeader}>
        <h1>Доставка</h1>
      </header>
      <section className={styles.deliverySection}>
        <div className={styles.sectionDescp}>
          <p>
            Товары, представленные в каталоге, имеют один из двух статусов доступности: “Под заказ” и “В наличии”. Сроки
            и возможность оформления товара "Под заказ" можно уточнить у менеджера.
          </p>
        </div>
      </section>
      <section className={styles.deliverySection}>
        <h4>Условия доставки мебели</h4>
        <div className={styles.sectionDescp}>
          <p>Доставка мебели временно приостановлена</p>
          <p>
            Возможен бесплатный самовывоз из розничных магазинов г. Минск, г. Молодечно, г. Могилёв, г. Новополоцк, г.
            Бобруйск
          </p>
        </div>
      </section>
      <section className={styles.deliverySection}>
        <h4>Сроки доставки</h4>
        <div className={styles.sectionDescp}>
          <p>В течении 7 дней при условии, что товар есть в наличии</p>
        </div>
      </section>
      <section className={styles.deliverySection}>
        <h4>Доставка по Беларуси</h4>
        <div className={styles.sectionDescp}>
          <ol>
            <li>
              Отправляем заказы через ЗАО "Европочта", в города, где есть пункты выдачи заказов (ПВЗ). Стоимость
              доставки - по тарифам ЗАО "Европочта" для юридических лиц. Срок доставки 3-5 рабочих дня.
            </li>
            <li>Мебель и товары из стекла и керамики не отправляем ЗАО "Европочта".</li>
            <li>
              Оплата за товар происходит в момент получения (наложенный платеж). Оплата за доставку осуществляется
              покупателем также в момент получения по тарифам ЗАО "Европочта".
            </li>
          </ol>
        </div>
      </section>
    </div>
  )
}

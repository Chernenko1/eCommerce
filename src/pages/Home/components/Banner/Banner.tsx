import styles from './banner.module.css'

export const Banner = () => {
  return (
    <section className={styles.bannerWrapper}>
      <div className={styles.container}>
        <div className={styles.containerContent}>
          <p>New Arriaval</p>
          <h2>Discover Our New Collection</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>
          <div className={styles.button}>
            <button type='button'>BUY NOW</button>
          </div>
        </div>
      </div>
    </section>
  )
}

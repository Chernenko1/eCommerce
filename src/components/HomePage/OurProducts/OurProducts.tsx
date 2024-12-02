import ProductCard from '@components/Cards/ProductCard/ProductCard'

import styles from './ourproducts.module.css'

import Syltherine from '@assets/images/Products/Syltherine.png'
import Leviosa from '@assets/images/Products/Leviosa.png'
import Lolito from '@assets/images/Products/Lolito.png'
import Respira from '@assets/images/Products/Respira.png'
import Grifo from '@assets/images/Products/Grifo.png'
import Muggo from '@assets/images/Products/Muggo.png'
import Pingky from '@assets/images/Products/Pingky.png'
import Potty from '@assets/images/Products/Potty.png'

export default function OurProducts() {
  return (
    <article className={styles.wrapper}>
      <h2 className={styles.title}>Our Products</h2>
      <section className={styles.container}>
        <ProductCard currency='BY' title='Syltherine' price={200} description='Stylish cafe chair' image={Syltherine} />
        <ProductCard currency='BY' title='Leviosa' price={300} description='Stylish cafe chair' image={Leviosa} />
        <ProductCard
          currency='BY'
          title='Lolito'
          price={487}
          description='Luxury big sofa'
          image={Lolito}
          oldPrice={537}
          circleText='-10%'
          circleColor='#E97171'
        />
        <ProductCard
          currency='BY'
          title='Respira'
          price={357}
          description='Outdoor bar table and stool'
          image={Respira}
        />
        <ProductCard currency='BY' title='Grifo' price={875} description='Night lamp' image={Grifo} />
        <ProductCard currency='BY' title='Muggo' price={731} description='Small mug' image={Muggo} />
        <ProductCard
          currency='BY'
          title='Pingky'
          price={812}
          description='Cute bed set'
          image={Pingky}
          circleText='New'
          circleColor='#2EC1AC'
        />
        <ProductCard currency='BY' title='Potty' price={974} description='Minimalist flower pot' image={Potty} />
      </section>
      <button className={styles.wrpBtn}>Show more</button>
    </article>
  )
}

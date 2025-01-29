import React from 'react'

interface IProductCard {
  img: string | null
  title: string
  shortDescription?: string
  description: string
  price: number
  salePrice?: number
}

export default function ProductCard({ description, img, price, salePrice, title, shortDescription }: IProductCard) {
  return (
    <section>
      <img src={!img ? img : '@assets/images/Products/nopicture.jpg'} />
      <header>
        <h2>{title}</h2>
        <h4>{shortDescription}</h4>
        <p>{description}</p>
      </header>
      <div>
        <p>{price}</p>
        <p>{salePrice}</p>
      </div>
    </section>
  )
}

import { Banner } from '@components/HomePage/Banner/Banner'
import { Header } from '@components/Header/Header'
import HomePageCategories from '@components/HomePage/HomePageCategories/HomePageCategories'
import OurProducts from '@components/HomePage/OurProducts/OurProducts'

export const HomePage = () => {
  return (
    <>
      <Header />
      <Banner />
      <HomePageCategories />
      <OurProducts />
    </>
  )
}

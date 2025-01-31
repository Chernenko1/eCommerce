import Banners from './components/Banners/Banners'
import PopularCategories from './components/PopularCategories/PopularCategories'
import SalesCategory from './components/SalesCategory/SalesCategory'

export const HomePage = () => {
  return (
    <main style={{ justifyContent: 'center' }}>
      <PopularCategories />
      <SalesCategory />
      <Banners />
    </main>
  )
}

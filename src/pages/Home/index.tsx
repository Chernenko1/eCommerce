import PopularCategories from './components/PopularCategories/PopularCategories'
import SalesCategory from './components/SalesCategory/SalesCategory'

export const HomePage = () => {
  return (
    <main style={{ justifyContent: 'center' }}>
      <PopularCategories />
      <SalesCategory />
    </main>
  )
}

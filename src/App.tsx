import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Shop from '@pages/Shop/Shop.tsx'
import About from '@pages/About/About.tsx'
import Contact from '@pages/Contact/Contact.tsx'
import Layout from './Layout/Layout'
import { HomePage } from '@pages/Home'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path='shop' element={<Shop />} />
          <Route path='contact' element={<Contact />} />
          <Route path='about' element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App

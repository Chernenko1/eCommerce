import { BrowserRouter, Route, Routes } from 'react-router-dom'
import About from '@pages/About/About.tsx'
import Contact from '@pages/Contact/Contact.tsx'
import Layout from './Layout/Layout'
import { HomePage } from '@pages/Home'
import Delivery from '@pages/Delivery/Delivery'
import Payment from '@pages/Payment/Payment'
import WarrantyRefund from '@pages/Warranty and Refund/WarrantyRefund'
import Stock from '@pages/Stock/Stock'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path='stock' element={<Stock />} />
          <Route path='contact' element={<Contact />} />
          <Route path='delivery' element={<Delivery />} />
          <Route path='payment' element={<Payment />} />
          <Route path='warranty' element={<WarrantyRefund />} />
          <Route path='about' element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App

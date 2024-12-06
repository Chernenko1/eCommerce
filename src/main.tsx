import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './fonts.css'
import App from './App.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { HomePage } from '@pages/Home/HomePage.tsx'
import Shop from '@pages/Shop/Shop.tsx'
import About from '@pages/About/About.tsx'
import Contact from '@pages/Contact/Contact.tsx'

const router = createBrowserRouter([
  { path: '/', element: <HomePage /> },
  { path: '/shop', element: <Shop /> },
  { path: '/contact', element: <Contact /> },
  { path: '/about', element: <About /> },
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)

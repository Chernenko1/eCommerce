import { Banner } from '@components/Banner/Banner'
import { Header } from '@components/Header/Header'
import HomePageCategories from '@components/HomePageCategories/HomePageCategories'
import React from 'react'

export const HomePage = () => {
  return (
    <>
      <Header />
      <Banner />
      <HomePageCategories />
    </>
  )
}

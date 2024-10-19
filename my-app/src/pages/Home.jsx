import React from 'react'
import Header from '../components/Header'
import Banner from '../components/Banner'
import Testimonials from '../components/Testimonials'
import ServicesPage from '../components/ServicesPage'


const Home = () => {
  return (
    <div>
        <Header/>
        <ServicesPage/>
        <Testimonials/>
        <Banner/>
    </div>
  )
}

export default Home
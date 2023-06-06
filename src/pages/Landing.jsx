import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero'
import Clients from '../components/Clients'
import Works from '../components/Works'
import Reviews from '../components/Reviews'
import Services from '../components/Services'
import Footer from '../components/Footer'

const Landing = () => {
  return (
    <div>
      <Header/>
      <Hero/>
      <Clients/>
      <Works/>
      <Reviews/>
      <Services/>
      <Footer/>
    </div>
  )
}

export default Landing
import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero'
import Works from '../components/Works'
import Services from '../components/Services'
import Footer from '../components/Footer'

const Landing = () => {
  return (
    <div>
      <Header/>
      <Hero/>
      <Works/>
      <Services/>
      <Footer/>
    </div>
  )
}

export default Landing
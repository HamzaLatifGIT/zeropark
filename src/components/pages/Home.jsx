// Home.jsx
import React from 'react'

//Components
import Navbar from '../Navbar'
import Brands from '../Brands'
import HeroSection from '../HeroSection'
import ContactUs from '../ContactUs'
import Footer from '../Footer'
import BrandsShowcase from '../BrandsShowCase'
import AffiliateNetworks from '../AffiliateNetworks'
import TransparencyOfDemand from '../TransparencyofDemand'
import CommerceMedia from '../Growth'
import Testimonials from '../Testimonials'
import SliderComponent from '../BussinessBenifits'
import SocialBrand from '../SocialBrand'


function Home() {
  return (
    <>
      
      <HeroSection />
      <Brands />
      <SocialBrand />
      <BrandsShowcase />
      <TransparencyOfDemand />
      <AffiliateNetworks />
      <CommerceMedia />
      <Testimonials />
      <SliderComponent />
      <ContactUs />
    

    </>
  )
}

export default Home
import React from 'react'
import HeroSection from '../../HeroSection'
import Brands from './Brands'
import BrandsConnect from './BrandsConnect'
import AdvertisingSolution from './AdvertisingSolution'
import HeadOfMedia from './HeadOfMedia'
import BrandAdvertising from './BrandAdvertising'
import CustomSlider from '../../CustomSlider'
import BrandSlider from './BrandSlider'

function Brandandagencies() {
  return (
    <> 
    <HeroSection title={<h1>Drive efficient sales <br/> to your brand</h1>} text={"🚀 Commerce media solutions... no cookies involved!"} />
    <Brands/>
    <BrandsConnect/>
    <AdvertisingSolution/>
    <HeadOfMedia/>
    <BrandSlider/>
    <CustomSlider/>
    <BrandAdvertising/>
    </>
  )
}

export default Brandandagencies
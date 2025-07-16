/* eslint-disable no-unused-vars */
import React from 'react'
import ServicesHero from '../components/ServicesSection/ServicesHero'
import WhatWeDo from '../components/ServicesSection/WhatWeDo'
import MainServices from '../components/ServicesSection/MainServices'
import ServicesFooter from '../components/ServicesSection/ServicesFooter'

const Services = () => {
    return (
        <div>
            <div className='pt-[70px] md:pt-[80px] lg:pt-[92px]'>
                <ServicesHero />
                <WhatWeDo />
                <MainServices />
                <ServicesFooter />
            </div>
        </div>
    )
}

export default Services
/* eslint-disable no-unused-vars */
import React from 'react'
import HeroSection from '../components/homesections/HeroSection'
import NumSection from '../components/homesections/NumSection'
import ServiceSection from '../components/homesections/ServiceSection'
import PortfolioSection from '../components/homesections/PortfolioSection'
import Testimonial from '../components/homesections/Testimonial'
import Partners from '../components/homesections/Partners'
import HomeInsight from '../components/homesections/HomeInsight'
import NewsLetter from '../components/homesections/NewsLetter'

const Home = () => {
    return (
        <div className='overflow-hidden pt-[70px] md:pt-[80px] lg:pt-[92px]'>
            <section>
                <HeroSection />
                <NumSection />
                <ServiceSection />
                <PortfolioSection />
                <Testimonial />
                <Partners />
                <HomeInsight />
                <NewsLetter />
            </section>
        </div>
    )
}

export default Home
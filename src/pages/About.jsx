/* eslint-disable no-unused-vars */
import React from 'react'
import AboutNum from '../components/AboutSection/AboutNum'
import StorySection from '../components/AboutSection/StorySection'
import PromiseSection from '../components/AboutSection/PromiseSection'
import ValueSection from '../components/AboutSection/ValueSection'
import AboutTeam from '../components/AboutSection/AboutTeam'
import AboutBottom from '../components/AboutSection/AboutBottom'

const About = () => {
    return (
        <div>
            <div className='pt-[70px] md:pt-[80px] lg:pt-[92px]'>
                <AboutNum />
                <StorySection />
                <PromiseSection />
                <ValueSection />
                <AboutTeam />
                <AboutBottom />
            </div>
        </div>
    )
}

export default About
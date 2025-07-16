/* eslint-disable no-unused-vars */
import React from 'react'
import bg from "../../assets/about/aboutbtn.png"
import shade from "../../assets/about/shade.png"


const AboutBottom = () => {
    return (
        <div>
            <div className='relative'>
                <img
                    src={bg}
                    alt="background vector"
                    loading="lazy"
                    className="w-full object-cover"
                />

                <img
                    src={shade}
                    alt="background vector"
                    loading="lazy"
                    className="absolute lg:bottom-[300px] bottom-10 left-4 lg:left-[150px] 4xl:left-[200px] lg:w-[355px] h-[44px] object-cover z-10"
                />

                <div className='absolute lg:bottom-[190px] bottom-5 left-4 lg:left-[150px] 4xl:left-[200px] z-20 text-white'>
                    <h2 className='lg:h-[168px] lg:w-[553px] font-medium text-2xl md:text-[48px] md:leading-[56px] tracking-[-3%]'>Based in <span className='text-[#DE5334]'>Kanda</span> and working around
                        the world</h2>
                </div>
            </div>
        </div>
    )
}

export default AboutBottom
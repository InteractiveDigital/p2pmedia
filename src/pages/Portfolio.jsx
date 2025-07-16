/* eslint-disable no-unused-vars */
import React from 'react'
import portfoliobg from "../assets/portfolio/portfoliobg.png"
import MainPortfolio from '../components/MainPortfolio/MainPortfolio'

const Portfolio = () => {
    return (
        <div className='pt-[70px] md:pt-[80px] lg:pt-[92px]'>
            <div className="relative">
                <img
                    src={portfoliobg}
                    alt="portfolio bg"
                    className="w-full h-auto object-cover"
                    loading="lazy"
                />

                <div
                    className="
      absolute top-[30%] md:top-[40%]
      left-4 lg:left-[150px]
      w-full md:w-[654px]
      h-auto md:h-[190px]
      flex flex-col items-start justify-between
      px-4 md:px-0
    "
                >
                    <div className="border rounded-[32px] w-[113px] h-[34px] flex items-center justify-center text-white">
                        PORTFOLIO
                    </div>
                    <div
                        className="
        font-semibold
        text-[24px] md:text-[48px]
        leading-[32px] md:leading-[56px]
        tracking-[-3%]
        text-white
      "
                    >
                        Media <span className="text-[#DE5334]">Projects</span> That Made a <span className="text-[#DE5334]">Difference</span>
                    </div>
                </div>
            </div>



            {/* Latest Projects Section */}
            <MainPortfolio />
        </div>
    )
}

export default Portfolio
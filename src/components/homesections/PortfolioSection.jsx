/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react'
import vector1 from '../../assets/service/vector1.png'
import vector2 from '../../assets/service/vector2.png'
import { ArrowUpRight } from 'lucide-react'
import project1 from "../../assets/num/img1.png"
import project2 from "../../assets/num/img2.png"
import project3 from "../../assets/num/img1.png"
import { Link } from 'react-router-dom'

const PortfolioSection = () => {
    const [animate, setAnimate] = useState(false)

    useEffect(() => {
        const timer = setTimeout(() => setAnimate(true), 100)
        return () => clearTimeout(timer)
    }, [])

    const delayStyle = (idx) => ({ transitionDelay: `${idx * 200}ms` })

    return (
        <div>
            <div className='relative bg-[#f7f4f4] w-full h-[2400px] md:h-[1700px] 4xl:h-[1090px] lg:h-[1050px] overflow-hidden'>
                {/* Background vectors */}
                <img
                    src={vector1}
                    alt="background vector"
                    loading="lazy"
                    className="absolute inset-0 object-cover"
                />
                <img
                    src={vector2}
                    alt="background vector"
                    loading="lazy"
                    className="absolute bottom-0 right-0 object-cover"
                />

                {/* Content */}
                <div className="px-4 sm:px-8 lg:px-[150px] 4xl:px-[200px] absolute inset-0 flex flex-col justify-start pt-14 md:pt-[80px]">
                    {/* Header */}
                    <div className="flex flex-col md:flex-row items-start sm:items-center justify-between mb-8">
                        <div className="w-full sm:w-auto">
                            <button
                                style={delayStyle(0)}
                                className={`mb-4 sm:mb-14 text-xs sm:text-sm uppercase font-medium text-[#25295C] border border-[#25295C] rounded-full w-[113px] h-[34px] flex items-center justify-center transform transition-all duration-700 ease-out ${animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                                    }`}
                            >
                                PORTFOLIO
                            </button>

                            <h2
                                style={delayStyle(1)}
                                className={`text-2xl sm:text-4xl md:text-5xl font-bold text-[#25295C] leading-tight transform transition-all duration-700 ease-out ${animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                                    }`}
                            >
                                Media <span className="text-[#EA4335]">Projects</span><br />
                                <span className="text-[#EA4335]">That Made a </span> Difference
                            </h2>
                        </div>

                        <Link to="/portfolio"
                            style={delayStyle(2)}
                            className={`mt-4 md:mt-20 bg-[#EA4335] text-white flex items-center justify-center font-medium rounded-full w-[140px] h-[48px] transform transition-all duration-700 ease-out ${animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                                }`}
                        >
                            View Portfolio
                        </Link>
                    </div>

                    {/* Cards grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full overflow-hidden">
                        {/* Card 1 */}
                        <div
                            style={delayStyle(3)}
                            className={`transform transition-all duration-700 ease-out ${animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                                }`}
                        >
                            <img
                                src={project1}
                                alt="Reconnecting Ghana’s Youth with Brand X"
                                className="w-full h-[509px] object-cover rounded-[40px]
                           transform transition-transform duration-300 hover:scale-105"
                                loading='lazy'
                            />
                            <div className="w-full h-[171px] pt-6 flex flex-col justify-between">
                                <h3 className="text-[13px] uppercase font-semibold text-[#EA4335]">
                                    Reconnecting Ghana’s Youth with Brand X
                                </h3>
                                <div className='flex items-center justify-between auto'>
                                    <p className="text-[15px] leading-[30px] text-[#25295C] w-[320px] ">
                                        We partnered with Brand X to reignite their presence in the Ghanaian market through a nationwide ATL and BTL campaign.
                                    </p>
                                    <button className="border border-[#EA4335] text-[#EA4335] rounded-full p-2">
                                        <ArrowUpRight className="w-4 h-4" />
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Card 2 */}
                        <div
                            style={delayStyle(4)}
                            className={`transform transition-all duration-700 ease-out ${animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                                }`}
                        >
                            <img
                                src={project2}
                                alt="Creating an Experience for AfriSoft"
                                className="w-full h-[509px] object-cover rounded-[40px]
                           transform transition-transform duration-300 hover:scale-105"
                                loading='lazy'
                            />
                            <div className="w-full h-[171px] pt-6 flex flex-col justify-between">
                                <h3 className="text-[13px] uppercase font-semibold text-[#EA4335]">
                                    Creating an Experience for AfriSoft
                                </h3>
                                <div className='flex items-center justify-between h-auto'>
                                    <p className="text-[15px] leading-[30px] text-[#25295C] w-[320px]">
                                        When AfriSoft introduced its new app, they wanted more than awareness — they wanted excitement.
                                    </p>
                                    <button className="border border-[#EA4335] text-[#EA4335] rounded-full p-2">
                                        <ArrowUpRight className="w-4 h-4" />
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Card 3 */}
                        <div
                            style={delayStyle(5)}
                            className={`transform transition-all duration-700 ease-out ${animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                                }`}
                        >
                            <img
                                src={project3}
                                alt="A Multichannel Campaign for Sipz"
                                className="w-full h-[509px] object-cover rounded-[40px]
                           transform transition-transform duration-300 hover:scale-105"
                                loading='lazy'
                            />
                            <div className="w-full h-[191px] pt-6 flex flex-col justify-between">
                                <h3 className="text-[13px] uppercase font-semibold text-[#EA4335]">
                                    A Multichannel Campaign for Sipz
                                </h3>
                                <div className='flex items-center justify-between h-auto'>
                                    <p className="text-[15px] leading-[30px] text-[#25295C] w-[320px]">
                                        To position Sipz as the go-to lifestyle drink for Gen Z, we designed a multichannel campaign that lived where they do — on the streets, on their phones, and in their world.
                                    </p>
                                    <button className="border border-[#EA4335] text-[#EA4335] rounded-full p-2">
                                        <ArrowUpRight className="w-4 h-4" />
                                    </button>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default PortfolioSection

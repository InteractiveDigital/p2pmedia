/* eslint-disable no-unused-vars */
import React from 'react';
import "./Main.css"
import vector from '../../assets/service/vector.png'
import frame1 from "../../assets/service/frame1.png"
import frame2 from "../../assets/service/frame2.png"
import frame3 from "../../assets/service/frame3.png"

import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const ServiceSection = () => {
    const cards = [
        { title: 'Digital Media Services' },
        { title: 'Traditional Media Services' },
        { title: 'Media Analytics & Insight' }
    ];

    return (
        <div className=''>
            <div className="relative bg-[#25295C] w-full rsm:h-[1800px] xxsm:h-[1700px] h-[1600px] md:h-[1200px] lg:h-[830px] 4xl:h-[900px] overflow-hidden">
                {/* Background vector graphic */}
                <img
                    src={vector}
                    alt="background vector"
                    loading="lazy"
                    className="absolute inset-0 object-cover"
                />

                {/* Overlay content */}
                <div className="px-4 sm:px-8 lg:px-[150px] 4xl:px-[200px] absolute inset-0 flex flex-col justify-start pt-14 md:pt-[80px]">
                    {/* Header */}
                    <div className="flex flex-col md:flex-row items-start sm:items-center justify-between mb-8">
                        <div className="w-full sm:w-auto">
                            <button className="mb-4 sm:mb-14 text-xs sm:text-sm uppercase font-medium text-white border border-white rounded-full w-[113px] h-[34px] flex items-center justify-center">
                                Services
                            </button>
                            <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
                                Place <span className="text-[#EA4335]">Your Brand</span><br />
                                <span className="text-[#EA4335]">Everywhere</span> That Matters.
                            </h2>
                        </div>
                        <Link to="/services" className="mt-4 md:mt-20 bg-white  hover:bg-[#EA4335] hover:text-white text-[#EA4335] font-medium rounded-full w-[140px] h-[48px] flex items-center justify-center transition-colors duration-300 ease-in-out">
                            View All
                        </Link>
                    </div>

                    {/* Static Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                        {/* Card 1 */}
                        <Link to='/digital' className="relative flex shadow-lg rounded-[40px] overflow-hidden transition-transform duration-300 hover:scale-105 fade-up delay-100">
                            <img
                                src={frame1}
                                alt="Digital Media Services"
                                loading="lazy"
                                className="object-cover w-full transition-transform duration-300 hover:scale-105"
                            />
                            <div className="absolute items-center bottom-6 left-1/4 flex gap-3 sm:gap-4">
                                <span className="text-sm sm:text-base text-white font-medium">
                                    Digital Media Services
                                </span>
                                <button className="bg-white rounded-full p-2">
                                    <ArrowUpRight className="w-4 h-4 text-[#F25F3A]" />
                                </button>
                            </div>
                        </Link>

                        {/* Card 2 */}
                        <div className="relative flex shadow-lg rounded-[40px] overflow-hidden
             transition-transform duration-300 hover:scale-105
             fade-up delay-200">
                            <img
                                src={frame2}
                                alt="Traditional Media Services"
                                loading="lazy"
                                className="object-cover w-full transition-transform duration-300 hover:scale-105"
                            />
                            <div className="absolute items-center bottom-6 left-1/4 flex gap-3 sm:gap-4">
                                <span className="text-sm sm:text-base text-white font-medium">
                                    Traditional Media Services
                                </span>
                                <button className="bg-white rounded-full p-2">
                                    <ArrowUpRight className="w-4 h-4 text-[#F25F3A]" />
                                </button>
                            </div>
                        </div>

                        {/* Card 3 */}
                        <div className="relative flex shadow-lg rounded-[40px] overflow-hidden
             transition-transform duration-300 hover:scale-105
             fade-up delay-300">
                            <img
                                src={frame3}
                                alt="Media Analytics & Insight"
                                loading="lazy"
                                className="object-cover w-full transition-transform duration-300 hover:scale-105"
                            />
                            <div className="absolute items-center bottom-6 left-1/4 flex gap-3 sm:gap-4">
                                <span className="text-sm sm:text-base text-white font-medium">
                                    Media Analytics & Insight
                                </span>
                                <button className="bg-white rounded-full p-2">
                                    <ArrowUpRight className="w-4 h-4 text-[#F25F3A]" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default ServiceSection;

/* eslint-disable no-unused-vars */
import React from 'react';
import "../homesections/Main.css";
import vector from '../../assets/service/vector.png';
import frame1 from "../../assets/service/frame1.png";
import frame2 from "../../assets/service/frame2.png";
import frame3 from "../../assets/service/frame3.png";
import frame4 from "../../assets/service/frame4.png";
import frame5 from "../../assets/service/frame5.png";
import frame6 from "../../assets/service/frame6.png";

import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const MainServices = () => {
    const cards = [
        {
            title: 'Digital Media Services',
            image: frame1,
            delay: 'delay-100',
            link: "/digital",
        },
        {
            title: 'Traditional Media Services',
            image: frame2,
            delay: 'delay-200',
        },
        {
            title: 'Media Analytics & Insight',
            image: frame3,
            delay: 'delay-300',
        },
        {
            title: 'Media Analytics & Insight',
            image: frame4,
            delay: 'delay-400',
        },
        {
            title: ' Campaign Excellence',
            image: frame5,
            delay: 'delay-600',
        },
        {
            title: 'Creative Innovation Hub',
            image: frame6,
            delay: 'delay-800',
        },
    ];

    return (
        <div>
            <div className="relative bg-[#25295C] w-full rsm:h-[3200px] xxsm:h-[2000px] h-[1900px] md:h-[1200px] lg:h-[1300px] 4xl:h-[1100px] overflow-hidden">
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
                                We Offer a <span className="text-[#EA4335]">Full Scale</span> of Service <br />
                                to Meet Your Needs
                            </h2>
                        </div>
                    </div>

                    {/* Dynamic Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                        {cards.map((card, index) => (
                            <div
                                key={index}
                                className={`relative flex shadow-lg rounded-[40px] overflow-hidden transition-transform duration-300 hover:scale-105 fade-up ${card.delay}`}
                            >
                                <img
                                    src={card.image}
                                    alt={card.title}
                                    loading="lazy"
                                    className="object-cover w-full"
                                />
                                <div className="absolute items-center bottom-6 left-1/4 flex gap-3 sm:gap-4">
                                    <Link to={card.link} className="text-sm sm:text-base text-white font-medium">
                                        {card.title}
                                    </Link>
                                    <button className="bg-white rounded-full p-2">
                                        <ArrowUpRight className="w-4 h-4 text-[#F25F3A]" />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MainServices;

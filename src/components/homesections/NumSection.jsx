/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import Img1 from "../../assets/num/img1.png"
import Img2 from "../../assets/num/img2.png"
import { Link } from 'react-router-dom';


const NumSection = () => {
    const [activeStep, setActiveStep] = useState(1);
    const [animate, setAnimate] = useState(false);

    // Online image URLs
    const circleImages = [
        'https://images.unsplash.com/photo-1511367461989-f85a21fda167?crop=faces&fit=crop&w=80&h=80',
        'https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?crop=faces&fit=crop&w=80&h=80',
        'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?crop=faces&fit=crop&w=80&h=80',
        'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?crop=faces&fit=crop&w=80&h=80',
        'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?crop=faces&fit=crop&w=80&h=80'


    ];
    const personImageUrl = Img1;
    const cameraImageUrl = Img2;

    const stepContent = {
        1: "When it comes to media strategy, we don't gamble on guesswork. We buy smart, optimise, sharper, and own every results.",
        2: 'Step 2 content goes here.',
        3: 'Step 3 content goes here.'
    };

    // Trigger animation on mount
    useEffect(() => {
        const timer = setTimeout(() => setAnimate(true), 100);
        return () => clearTimeout(timer);
    }, []);

    // Helper to compute inline delay style
    const delayStyle = (index) => ({ transitionDelay: `${index * 200}ms` });

    return (
        <section className="pt-[38px] pb-[30px] bg-[#F7F6F3]">


            {/* Main Content Grid */}
            <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-8 px-4 lg:px-[150px] 4xl:px-[200px]">
                {/* Left Side */}
                <div className="md:w-[692px] space-y-6">
                    {/* WHO WE ARE Button inside Left Side */}
                    <div
                        style={delayStyle(0)}
                        className={`transform transition-all duration-700 ease-out ${animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                            }`}
                    >
                        <button className="mb-6 text-sm uppercase font-medium text-[#F25F3A] border border-[#F25F3A] rounded-full px-4 py-1">
                            Who we are
                        </button>
                    </div>
                    {/* Heading */}
                    <div
                        style={delayStyle(1)}
                        className={`transform transition-all duration-700 ease-out ${animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                            }`}
                    >
                        <h2 className="md:text-[49px] text-[28px] font-medium text-[#25295C] md:leading-[56px] tracking-[-3%]">
                            Efficient. <span className="text-[#F25F3A]">Impactful,</span><br />
                            <span className="text-[#F25F3A]">Unforgettable.</span> This is how we tell <span className="text-[#F25F3A]">your story</span>
                        </h2>
                    </div>

                    {/* Overlapping Circles */}
                    <div
                        style={delayStyle(2)}
                        className={`flex items-center mt-4 transform transition-all duration-700 ease-out ${animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                            }`}
                    >
                        {circleImages.map((src, idx) => (
                            <img
                                key={idx}
                                src={`${src}&auto=format&dpr=2`}
                                alt={`circle-${idx}`}
                                className={`w-12 h-12 rounded-full border-2 border-white ${idx !== 0 ? '-ml-4' : ''}`}
                            />
                        ))}
                    </div>

                    {/* Learn More Button */}
                    <div
                        style={delayStyle(3)}
                        className={`transform transition-all duration-700 ease-out ${animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                            }`}
                    >
                        <Link to="/about" className="mt-6 inline-flex items-center bg-[#F25F3A] hover:bg-[#e14f2d] text-white font-medium rounded-full px-6 py-3 shadow-md transition">
                            Learn More
                        </Link>
                    </div>
                </div>

                {/* Right Side */}
                <div className="lg:h-[400px] md:w-[450px] flex flex-col items-start justify-center">
                    {/* Step Indicators */}
                    <div
                        style={delayStyle(4)}
                        className={` flex justify-start space-x-8 mb-4 transform transition-all duration-700 ease-out ${animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                            }`}
                    >
                        {[1, 2, 3].map(num => (
                            <button
                                key={num}
                                onClick={() => setActiveStep(num)}
                                className={`group relative pb-1 w-[35px] text-left text-[14px] font-medium transition-colors duration-300 ${activeStep === num ? 'text-[#F25F3A]' : 'text-gray-400'
                                    }`}
                            >
                                {num < 10 ? `0${num}` : num}
                                <span
                                    className={`absolute left-0 bottom-0 h-[2px] w-full transition-all duration-300 ${activeStep === num
                                        ? 'bg-[#F25F3A] scale-x-100'
                                        : 'bg-[#F25F3A] scale-x-0 group-hover:scale-x-100'
                                        } origin-left`}
                                ></span>
                            </button>

                        ))}
                    </div>
                    <div
                        style={delayStyle(5)}
                        className={`pt-4 transform transition-all duration-700 ease-out ${animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                            }`}
                    >
                        <p className="text-[16px] font-normal leading-[30px] text-[#25295C] max-w-md">
                            {stepContent[activeStep]}
                        </p>
                    </div>
                </div>
            </div>

            {/* Bottom Images */}
            <div className="flex flex-col lg:flex-row mt-8 gap-0">
                <div
                    style={delayStyle(6)}
                    className={`w-full lg:w-1/2 h-[428px] transform transition-all duration-700 ease-out ${animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                        }`}
                >
                    <img
                        src={personImageUrl}
                        alt="Person filming"
                        className="w-full h-full object-cover"
                    />
                </div>
                <div
                    style={delayStyle(7)}
                    className={`w-full lg:w-1/2 h-[428px] transform transition-all duration-700 ease-out ${animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                        }`}
                >
                    <img
                        src={cameraImageUrl}
                        alt="Camera closeup"
                        className="w-full h-full object-cover"
                    />
                </div>
            </div>
        </section>
    );
};

export default NumSection;

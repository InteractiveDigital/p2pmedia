/* eslint-disable no-unused-vars */
import React from 'react';
import { motion } from 'framer-motion';
import servicebg from "../../assets/service/servicebg.png";
import logo from "../../assets/logo.png";
import shade2 from "../../assets/service/shade2.png"; // Brush stroke or underline image

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const ServicesFooter = () => {
    return (
        <div className="relative w-full h-auto">
            {/* Background Image */}
            <img
                src={servicebg}
                alt="background vector"
                loading="lazy"
                className="w-full h-full object-cover"
            />

            {/* Glass Card Overlay */}
            <div className="absolute bottom-2 lg:bottom-32 left-4  md:left-4 lg:left-[150px] flex items-center justify-center px-4 md:px-0">
                <div className="relative bg-white/10 backdrop-blur-xl rounded-xl p-4 md:p-6 border border-white/20 shadow-lg w-full max-w-[689px] h-auto md:h-[261px] text-left text-[#091242] overflow-hidden">

                    {/* Top-Right Logo */}
                    <motion.div
                        className="absolute top-4 right-4 md:top-6 md:right-6"
                        variants={itemVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        <img src={logo} alt="Logo" className="w-16 md:w-24 object-contain" />
                    </motion.div>

                    {/* Badge */}
                    <motion.div
                        className="mb-3 md:mb-4"
                        variants={itemVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        <span className="inline-block px-4 py-1 rounded-full text-xs md:text-sm font-medium text-white bg-white/20 border border-white/30 backdrop-blur-sm">
                            Why Us
                        </span>
                    </motion.div>

                    {/* Heading Text */}
                    <motion.h2
                        className="text-xl md:text-5xl font-semibold leading-snug mb-3 md:mb-4 relative max-w-[600px] z-40"
                        variants={itemVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        You’ll Know What <br />
                        <span className="relative text-white font-bold inline-block">
                            <img
                                src={shade2}
                                alt="Underline"
                                className="absolute -bottom-1 left-0 w-full h-[1.5em] object-contain z-0"
                            />
                            <span className="relative z-10">You Are Getting</span>
                        </span>
                    </motion.h2>

                    {/* Subtext */}
                    <motion.p
                        className="text-xs md:text-base text-[#091242] mt-1 md:mt-2"
                        variants={itemVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        We Are Transparent Like That. No Gimmicks
                    </motion.p>
                </div>
            </div>
        </div>
    );
};

export default ServicesFooter;

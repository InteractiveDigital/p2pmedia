/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from 'react';
import { motion } from 'framer-motion';
import digibg from "../../assets/service/digibg.png"
import DigitalCategories from './DigitalCategories';
import LatestProjects from './LatestProjects';
import Testimonial from '../homesections/Testimonial';
import Partners from '../homesections/Partners';
import ServicesFooter from '../ServicesSection/ServicesFooter';

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.25,
            delayChildren: 0.2,
        },
    },
};

const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const containerVariants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.3,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

export default function DigitalServices() {
    return (
        <motion.div>
            <motion.div
                className="w-full px-4 lg:px-[150px] 4xl:px-[200px] py-12"
                variants={container}
                initial="hidden"
                animate="show"
            >
                {/* Service Overview Badge */}
                <motion.div className="mb-8" variants={fadeInUp}>
                    <span className="inline-block px-4 py-2 text-sm font-medium text-orange-500 border border-orange-200 rounded-full bg-orange-50">
                        SERVICE OVERVIEW
                    </span>
                </motion.div>

                {/* Main Heading */}
                <motion.h1
                    className="text-3xl md:text-5xl font-normal leading-tight mb-8"
                    variants={fadeInUp}
                >
                    <span className="text-[#DE5334]">Digital Media </span>
                    <span className="text-slate-800">Services</span>

                </motion.h1>

                {/* Professional Image */}
                <motion.div
                    className="rounded-2xl overflow-hidden"
                    variants={fadeInUp}
                >
                    <motion.img
                        src={digibg}
                        alt="Professional hands working on laptop"
                        className="w-full h-auto object-cover"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.3 }}
                    />
                </motion.div>


                <section className="bg-white py-10">
                    <motion.div
                        className="max-w-7xl"
                        variants={containerVariants}
                        initial="hidden"
                        animate="show"
                    >
                        {/* What We Do Tag */}
                        <motion.div className="mb-12" variants={itemVariants}>
                            <span className="inline-block px-4 py-2 text-sm font-medium text-[#25295C] bg-gray-100 rounded-full border">
                                OUR PHILOSOPHY
                            </span>
                        </motion.div>

                        {/* Content Section */}
                        <div className="flex flex-col lg:flex-row items-start justify-between">
                            <motion.div className="lg:w-[664px] mt-0 md:mt-14" variants={itemVariants}>
                                <h1 className="text-3xl md:text-[48px] font-normal md:leading-[56px] tracking-[-3%] text-[#091242]">
                                    Our <span className="text-[#DE5334]">Interactive</span> Approach{" "}
                                </h1>
                            </motion.div>

                            <motion.div className="lg:pt-2 lg:w-[500px]" variants={itemVariants}>
                                <p className="text-[#25295C] text-[16px] leading-[28px] tracking-[-3%]">
                                    Smart targeting with real results. From social media to search and programmatic ads, our digital media services put your brand right where your audience and the conversations are. Smart targeting with real results.
                                </p>
                            </motion.div>
                        </div>


                    </motion.div>
                </section>

                <DigitalCategories />

            </motion.div>
            <LatestProjects />
            <Testimonial />
            <Partners />
            <ServicesFooter />
        </motion.div>

    );
}

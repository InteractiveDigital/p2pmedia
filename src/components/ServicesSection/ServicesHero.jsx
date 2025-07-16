/* eslint-disable no-unused-vars */
import React from 'react';
import { motion } from 'framer-motion';
import servicehero from "../../assets/service/serviceshero.png"

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

export default function ServicesHero() {
    return (
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
                <span className="text-slate-800">We Craft </span>
                <span className="text-[#DE5334]">Impactful Outcomes</span>
                <br />
                <span className="text-slate-800">For You And Your Business</span>
            </motion.h1>

            {/* Professional Image */}
            <motion.div className="rounded-2xl overflow-hidden" variants={fadeInUp}>
                <img
                    src={servicehero}
                    alt="Professional hands working on laptop"
                    className="w-full h-auto object-cover"
                />
            </motion.div>
        </motion.div>
    );
}

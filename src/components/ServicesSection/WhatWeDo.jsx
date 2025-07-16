/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { motion } from 'framer-motion';

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

export default function WhatWeDo() {
    return (
        <section className="bg-white py-16 px-4 lg:px-[150px] 4xl:px-[200px]">
            <motion.div
                className="max-w-7xl mx-auto"
                variants={containerVariants}
                initial="hidden"
                animate="show"
            >
                {/* What We Do Tag */}
                <motion.div className="mb-12" variants={itemVariants}>
                    <span className="inline-block px-4 py-2 text-sm font-medium text-[#25295C] bg-gray-100 rounded-full border">
                        WHAT WE DO
                    </span>
                </motion.div>

                {/* Content Section */}
                <div className="flex flex-col lg:flex-row items-start justify-between">
                    <motion.div className="lg:w-[664px] mb-4 md:mb-0" variants={itemVariants}>
                        <h1 className="text-3xl md:text-[48px] font-normal md:leading-[56px] tracking-[-3%] text-[#091242]">
                            Empowering <span className="text-[#DE5334]">Brands</span> Through{" "}
                            <span className="text-[#DE5334]">Strategy, Execution,</span> and Creative{" "}
                            <span className="text-[#DE5334]">Precision</span>
                        </h1>
                    </motion.div>

                    <motion.div className="lg:pt-2 lg:w-[500px]" variants={itemVariants}>
                        <p className="text-[#25295C] text-[16px] leading-[28px] tracking-[-3%]">
                            We help brands grow by combining smart planning, hands-on work, and creative attention to detail. Whether
                            it's a big campaign, an on-ground activation, or a digital ad, we make sure every idea is clear,
                            well-executed, and delivers real results. From start to finish, we focus on doing great work that connects
                            with people and helps brands stand out.
                        </p>
                    </motion.div>
                </div>

                {/* Statistics Section */}
                <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
                    {/* Stat 1 */}
                    <motion.div variants={itemVariants}>
                        <div className="text-3xl md:text-4xl font-bold text-[#DE5334] mb-2">
                            2.1<br />million+
                        </div>
                        <div className="text-sm text-[#98A2B3] uppercase tracking-wide">Total Campaign Reach</div>
                    </motion.div>

                    {/* Stat 2 */}
                    <motion.div variants={itemVariants}>
                        <div className="text-3xl md:text-4xl font-bold text-[#DE5334] mb-8">4.2x</div>
                        <div className="text-sm text-[#98A2B3] uppercase tracking-wide">
                            Return On Ad Spend<br />(ROAS)
                        </div>
                    </motion.div>

                    {/* Stat 3 */}
                    <motion.div variants={itemVariants}>
                        <div className="text-3xl md:text-4xl font-bold text-[#DE5334] mb-8">12.8%</div>
                        <div className="text-sm text-[#98A2B3] uppercase tracking-wide">Engagement Rate</div>
                    </motion.div>

                    {/* Stat 4 */}
                    <motion.div variants={itemVariants}>
                        <div className="text-3xl md:text-4xl font-bold text-[#DE5334] mb-8">10,000</div>
                        <div className="text-sm text-[#98A2B3] uppercase tracking-wide">Video Views</div>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
}

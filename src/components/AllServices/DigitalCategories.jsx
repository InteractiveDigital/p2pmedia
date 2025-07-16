/* eslint-disable no-unused-vars */
import React from 'react'
import { motion } from 'framer-motion';
import cardbg from "../../assets/service/cardbg.png"

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
            delayChildren: 0.2,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const Cards = [
    {
        id: 1,
        category: "01",
        title: "Programmatic Buying & Optimization",
        description:
            "Automated, data-driven ad buying reaches the right people at the right time, with real-time optimization to boost performance and reduce waste.",
    },
    {
        id: 2,
        category: "02",
        title: "Social Media Advertising (Meta, TikTok, Linkedln)",
        description: `We run sharp, targeted ads on Meta, TikTok, and LinkedIn to grab attention, spark engagement, and drive real, measurable results for brands looking to stand out in a crowded digital landscape.`,
    },
    {
        id: 3,
        category: "03",
        title: `Search Marketing(SEM/ SEO)`,
        description:
            "We help your brand show up on Google through paid search ads (SEM) and organic rankings (SEO). More visibility. More traffic. Better leads.",
    },
    {
        id: 4,
        category: "04",
        title: "Display & Video Advertising",
        description:
            "Get noticed with display and video ads that convert. Grab attention across digital screens with ads that drive clicks, views, and conversions.",
    },
    {
        id: 5,
        category: "05",
        title: "Mobile Marketing And App Advertising",
        description:
            "We run mobile-first campaigns that reach users on the go, from in-app ads to location-based targeting and app installs.",
    },
    {
        id: 6,
        category: "06",
        title: "Performance Marketing & Analytics",
        description:
            "Performance you can prove. With real-time insights and smart analytics, we optimize your digital campaigns to drive the best outcomes faster.",
    },
];

const DigitalCategories = () => {
    return (
        <div>
            <section className="bg-white py-10">
                <motion.div
                    className="max-w-7xl "
                    variants={container}
                    initial="hidden"
                    animate="show"
                >
                    {/* Section Header */}
                    <motion.div className="mb-8" variants={itemVariants}>
                        <span className="inline-block px-4 py-2 text-sm font-medium text-[#25295C] bg-gray-100 rounded-full border">
                            OUR CATEGORIES
                        </span>
                    </motion.div>
                    <motion.div className="flex flex-col lg:flex-row items-start justify-between" variants={itemVariants}>
                        <div className="lg:w-[664px] mt-0 md:mt-14">
                            <h1 className="text-3xl md:text-[48px] font-normal md:leading-[56px] tracking-[-3%] text-[#091242]">
                                How Can Our Team Help You to Reach <span className="text-[#DE5334]">Your Goals</span>
                            </h1>
                        </div>
                    </motion.div>
                </motion.div>
            </section>
            <section className="py-10">
                <motion.div
                    className="max-w-7xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 4xl:gap-20"
                    variants={container}
                    initial="hidden"
                    animate="show"
                >
                    {Cards.map(card => (
                        <motion.div
                            key={card.id}
                            className=" relative w-full h-[500px] rounded-[38px] border shadow-lg overflow-hidden cursor-pointer transform transition-transform duration-300 hover:scale-105 hover:shadow-2x "
                            variants={itemVariants}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            {/* Background Pattern */}
                            <img
                                src={cardbg}
                                alt="Card background pattern"
                                className="absolute inset-0 w-full h-full object-cover"
                            />

                            {/* Card Content */}
                            <div className="relative z-10 flex flex-col justify-between h-full p-8">
                                {/* Number Badge */}
                                <span className="flex items-center justify-center w-12 h-12 rounded-full bg-[#DE5334] text-white text-lg font-semibold">
                                    {card.category}
                                </span>

                                {/* Content Box */}
                                <div className="w-full md:w-[320px] max-w-[320px] h-[289px] bg-[#25295C] rounded-[50px] p-6 text-white flex flex-col items-center justify-center">
                                    <h2 className="text-xl font-semibold mb-4 text-center w-full">
                                        {card.title}
                                    </h2>
                                    <p className="text-[14px] leading-[24px] flex-1">
                                        {card.description}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </section>

        </div>
    )
}

export default DigitalCategories

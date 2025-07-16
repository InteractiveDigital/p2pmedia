
/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import imgbg from "../../assets/num/img1.png";
import logo from "../../assets/logo.png";

export default function StorySection() {
    const controls = useAnimation();
    const [ref, inView] = useInView({ threshold: 0.2 });

    React.useEffect(() => {
        if (inView) {
            controls.start("visible");
        }
    }, [inView, controls]);

    const containerVariants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.3,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
    };

    return (
        <section ref={ref} className="w-full bg-gray-50 py-16 px-4 lg:px-[150px] 4xl:px-[200px]">
            <motion.div
                className=""
                variants={containerVariants}
                initial="hidden"
                animate={controls}
            >
                <div className="md:w-[627px] md:h-[144px] flex flex-col  justify-between">
                    {/* Our Story Badge */}
                    <motion.div className="mb-8" variants={itemVariants}>
                        <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium text-[#DE5334] bg-white border border-[#DE5334]">
                            OUR STORY
                        </span>
                    </motion.div>

                    {/* Main Heading */}
                    <motion.h1
                        className="text-4xl md:text-5xl font-medium text-[#25295C] mb-8 md:leading-[56px] tracking-[-3%]"
                        variants={itemVariants}
                    >
                        From <span className="text-[#DE5334]">Passion</span> To <span className="text-[#DE5334]">Impact</span>
                    </motion.h1>
                </div>

                {/* Hero Image with Overlay */}
                <motion.div
                    className="relative rounded-[40px] overflow-hidden group"
                    variants={itemVariants}
                >
                    <img
                        src={imgbg}
                        alt="Professional man with glasses in creative workspace"
                        className="w-full h-[600px] md:h-[500px] lg:h-[600px] object-cover grayscale transition duration-700 ease-in-out group-hover:grayscale-0"
                    />

                    {/* Dark Overlay */}
                    <div className="absolute inset-0 bg-black/50 opacity-60 z-10 transition duration-700 ease-in-out group-hover:opacity-40"></div>

                    {/* Overlay Content */}
                    <div className="absolute left-0 bottom-6 md:bottom-0 md:left-4 lg:left-[150px] w-full md:w-[542px] lg:w-[742px] md:h-[249px] z-20">
                        <div className="bg-white/20 backdrop-blur-md rounded-lg p-4 relative border border-white/30 shadow-xl">
                            {/* Small Logo - Top Right Corner */}
                            <motion.div className="absolute top-6 right-4" variants={itemVariants}>
                                <div className="">
                                    <img
                                        src={logo}
                                        alt="Logo"
                                        className="w-[80px] object-cover"
                                    />
                                </div>
                            </motion.div>

                            {/* Journey Badge */}
                            <motion.div className="mb-4" variants={itemVariants}>
                                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium text-white bg-white/20 border border-white/30 backdrop-blur-sm">
                                    Our Journey
                                </span>
                            </motion.div>

                            {/* Overlay Heading */}
                            <motion.h2 className="text-2xl md:text-3xl font-bold text-white mb-4 drop-shadow-sm" variants={itemVariants}>
                                Our Small Beginnings
                            </motion.h2>

                            {/* Overlay Text */}
                            <motion.p
                                className="text-white/90 drop-shadow-sm lg:w-[485px] lg:h-[84px] font-medium lg:leading-[28px] tracking-[-2%]"
                                variants={itemVariants}
                            >
                                What started as a spark of passion has grown into a powerhouse of precision, creativity, and results
                                that speak for themselves. We don't just buy media, we build momentum.
                            </motion.p>
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </section>
    );
}

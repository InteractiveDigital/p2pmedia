/* eslint-disable no-unused-vars */
import React from 'react'
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import project1 from "../../assets/service/project1.png"
import project2 from "../../assets/service/project2.png"
import vector1 from "../../assets/service/vector1.png"
import vector2 from "../../assets/service/vector2.png"

export default function LatestProjects() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3,
            },
        },
    }

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.9 } },
    }

    return (
        <motion.div className="relative w-full py-12 md:py-24 lg:py-16 px-4 lg:px-[150px] 4xl:px-[200px] bg-white">
            {/* Background vectors */}
            <img
                src={vector1}
                alt="background vector"
                loading="lazy"
                className=" absolute top-[200px] left-0 object-cover"
            />
            <img
                src={vector2}
                alt="background vector"
                loading="lazy"
                className=" absolute bottom-[18px] right-0 object-cover"
            />

            <div className="container px-4 md:px-6 mx-auto">
                <h2 className="text-4xl font-bold tracking-tight mb-12">
                    Latest <span className="text-[#DE5334]">Projects</span>
                </h2>

                <motion.div
                    className="flex flex-col items-center"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 w-full">
                        {/* Project Card 1 */}
                        <motion.div
                            className="flex flex-col mt-[60px] md:mt-[120px] h-auto md:h-[838px]"
                            variants={itemVariants}
                        >
                            <motion.div
                                className="relative w-full overflow-hidden mb-6 h-[300px] md:h-[632px]"
                                whileHover={{ scale: 1.05 }}
                                transition={{ duration: 0.3 }}
                            >
                                <img
                                    src={project1}
                                    alt="Social Media Advertising Project"
                                    className="object-cover w-full h-full rounded-[40px]"
                                />
                            </motion.div>

                            <div className="w-full max-w-full md:max-w-[428px]">
                                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                                    Social Media Advertising
                                </h3>
                                <div className="flex items-center justify-between mb-4">
                                    <p className="text-gray-600 pr-4 flex-1">
                                        P2P specializes in creating immersive brand experiences that engage audiences on a deeper level.
                                    </p>
                                    <a
                                        href="#"
                                        className="flex-shrink-0 w-10 h-10 rounded-full bg-[#FCEEEB] border border-[#DE5334] flex items-center justify-center text-[#DE5334] hover:bg-[#C2472E] transition-colors"
                                    >
                                        <ArrowUpRight className="h-5 w-5" />
                                    </a>
                                </div>
                            </div>
                        </motion.div>

                        {/* Project Card 2 */}
                        <motion.div
                            className="flex flex-col h-auto md:h-[908px]"
                            variants={itemVariants}
                        >
                            <motion.div
                                className="relative w-full overflow-hidden mb-6 h-[300px] md:h-[702px]"
                                whileHover={{ scale: 1.05 }}
                                transition={{ duration: 0.6 }}
                            >
                                <img
                                    src={project2}
                                    alt="Search Marketing Project"
                                    className="object-cover w-full h-full rounded-[40px]"
                                />
                            </motion.div>

                            <div className="w-full max-w-full md:max-w-[428px]">
                                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                                    Search Marketing
                                </h3>
                                <div className="flex items-center justify-between mb-4">
                                    <p className="text-gray-600 pr-4 flex-1">
                                        P2P specializes in creating immersive brand experiences that engage audiences on a deeper level.
                                    </p>
                                    <a
                                        href="#"
                                        className="flex-shrink-0 w-10 h-10 rounded-full bg-[#FCEEEB] border border-[#DE5334] flex items-center justify-center text-[#DE5334] hover:bg-[#C2472E] transition-colors"
                                    >
                                        <ArrowUpRight className="h-5 w-5" />
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* View All Work Button */}
                    <motion.div className="flex justify-center mt-8 md:mt-0" variants={itemVariants}>
                        <button className="bg-[#DE5334] hover:bg-[#C2472E] text-white px-6 md:px-8 py-3 rounded-[30px] text-base md:text-lg font-medium shadow-xl transition-colors">
                            View All Work
                        </button>
                    </motion.div>
                </motion.div>
            </div>
        </motion.div>
    )
}

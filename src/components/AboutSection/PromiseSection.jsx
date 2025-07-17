/* eslint-disable no-unused-vars */
import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import frame1 from "../../assets/about/frame2.png";
import frame2 from "../../assets/about/frame1.png";

export default function PromiseSection() {
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
        <div ref={ref} className=" bg-gray-50 px-4 lg:px-[150px] 4xl:px-[200px]">
            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate={controls}
            >
                {/* Header */}
                <motion.header
                    className="flex justify-between items-center py-4"
                    variants={itemVariants}
                >
                    <div className="flex items-center">
                        <div className="border border-orange-400 rounded-full px-4 py-1 text-sm text-orange-600">
                            P2P PROMISE
                        </div>
                    </div>
                </motion.header>

                {/* Main Content */}
                <main className="py-12">
                    {/* Hero Section */}
                    <motion.div className="mb-16" variants={itemVariants}>
                        <h1 className="text-3xl lg:text-5xl font-medium leading-[56px] tracking-[-3%] text-[#25295C]">
                            Driven by <span className="text-orange-500">Vision</span>. Guided
                            <br />
                            by <span className="text-orange-500">Purpose</span>.
                        </h1>
                    </motion.div>

                    {/* Content Grid */}
                    <div className="flex flex-col lg:flex-row items-start md:justify-between 4xl:gap-10 w-full">
                        {/* Left Column */}
                        <div className="space-y-8 md:w-[677px] mb-4 md:mb-8 lg:mb-0">
                            <motion.p
                                className="text-gray-700 text-lg leading-relaxed md:w-[677px]"
                                variants={itemVariants}
                            >
                                To exceed client expectations by fostering meaningful connections and creating ATL and BTL brand
                                experiences that resonate with audiences.
                            </motion.p>

                            <motion.img
                                src={frame1}
                                alt="3D Blue Block Design"
                                className="md:w-[670px] md:h-[562px] rounded-[40px] shadow-lg object-cover"
                                loading="lazy"
                                variants={itemVariants}
                            />
                        </div>

                        {/* Right Column - Vision Card */}
                        <motion.div className="md:w-[452px] relative" variants={itemVariants}>
                            <img
                                src={frame2}
                                alt="Vision Card - Premier choice for exceptional campaigns"
                                className="w-full md:h-[655px] rounded-[40px] shadow-lg object-cover"
                                loading="lazy"
                            />
                            <div className="absolute inset-0">
                                <div className="flex flex-col items-start justify-between h-[215px] p-4">
                                    <div className="border border-white rounded-[32px] w-[148px] h-[34px] text-[12px] font-medium flex items-center justify-center text-white">
                                        VISION
                                    </div>

                                    <motion.p
                                        className="text-white text-lg leading-[30px] font-medium md:w-full"
                                        variants={itemVariants}
                                    >
                                        To become the premier choice for exceptional Through the Line (ATL &
                                        BTL) campaigns, activations and brand experiences that push beyond thelimits of imagination in Africa.
                                    </motion.p>
                                </div>

                            </div>
                        </motion.div>
                    </div>
                </main>
            </motion.div>
        </div>
    );
}

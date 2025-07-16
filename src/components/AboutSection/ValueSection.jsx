/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import Creative1 from "../../assets/about/creative1.png";
import Creative2 from "../../assets/about/creative2.png";
import Creative3 from "../../assets/about/creative3.png";

const valuesData = [
    {
        id: 1,
        title: "Charismatic",
        description: "Our presence is not loud, just undeniable.",
        image: Creative1,
        alt: "Charismatic illustration",
    },
    {
        id: 2,
        title: "Impactful",
        description: "Work that leaves a mark long after it's done.",
        image: Creative2,
        alt: "Impactful illustration",
    },
    {
        id: 3,
        title: "Elegant",
        description: "Grace in execution and delivery.",
        image: Creative3,
        alt: "Elegant illustration",
    },
    {
        id: 4,
        title: "Creative",
        description: "Fueled by imagination driven by insight.",
        image: Creative1,
        alt: "Creative illustration",
    },
    {
        id: 5,
        title: "Unique",
        description: "Distinct. Original. Unmatched.",
        image: Creative2,
        alt: "Unique illustration",
    },
    {
        id: 6,
        title: "Unforgettable",
        description: "Because ordinary fades, we build what lingers.",
        image: Creative3,
        alt: "Unforgettable illustration",
    },
];

const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.2,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

function ValueCard({ title, description, image, alt }) {
    return (
        <motion.div
            className="bg-[#25295C] rounded-2xl p-8 text-white relative overflow-hidden h-[555px] grid grid-rows-[1fr_auto] hover:bg-[#181b44] transition-colors duration-300"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}

        >
            {/* Middle image section */}
            <div className="flex items-center justify-center">
                <img src={image || "/placeholder.svg"} alt={alt} className="object-contain" />
            </div>

            {/* Bottom text section */}
            <div>
                <h3 className="text-2xl font-bold mb-3">{title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{description}</p>
            </div>
        </motion.div>
    );
}

ValueCard.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string,
    alt: PropTypes.string,
};

export default function ValueSection() {
    const controls = useAnimation();
    const [ref, inView] = useInView({ threshold: 0.2 });

    useEffect(() => {
        if (inView) {
            controls.start("visible");
        }
    }, [inView, controls]);

    return (
        <div ref={ref} className="bg-white px-2 lg:px-[150px] 4xl:px-[200px]">
            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate={controls}
            >
                {/* Header */}
                <div className="container mx-auto pt-8" />

                {/* Hero Section */}
                <motion.div className="container mx-auto px-2 py-16" variants={itemVariants}>
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="flex flex-col h-[130px] md:h-[180px] items-start justify-between">
                            <div className="border border-[#DE5334] rounded-[32px] w-[148px] h-[34px] text-[12px] font-medium flex items-center justify-center text-[#DE5334]">
                                VALUES
                            </div>
                            <div>
                                <h1 className="text-3xl md:text-5xl font-medium text-[#25295C] md:leading-[56px] tracking-[-3%]">
                                    Creative at <span className="text-[#DE5334]">Heart</span>. Grounded in{" "}
                                    <span className="text-[#DE5334]">Values</span>.
                                </h1>
                            </div>
                        </div>
                        <div className="space-y-2 md:space-x-4 md:mt-12 mt-0">
                            <blockquote className="text-lg text-gray-700 leading-relaxed">
                                "You won't find our values on a poster. You'll find them in how we work, lead, and learn."
                            </blockquote>
                            <div className="space-y-1">
                                <p className="text-[#DE5334] font-medium">Davida Ozato</p>
                                <p className="text-gray-500 text-sm">Head of Creatives</p>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Values Grid */}
                <motion.div
                    className="container mx-auto px-2 pb-16 grid md:grid-cols-2 lg:grid-cols-3 gap-6"
                    variants={containerVariants}
                >
                    {valuesData.map((value) => (
                        <ValueCard
                            key={value.id}
                            title={value.title}
                            description={value.description}
                            image={value.image}
                            alt={value.alt}
                        />
                    ))}
                </motion.div>
            </motion.div>
        </div>
    );
}

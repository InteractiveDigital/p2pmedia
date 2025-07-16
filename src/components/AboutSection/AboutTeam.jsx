/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import vector from "../../assets/service/vector1.png"

export default function AboutTeam() {
    const [ref, inView] = useInView({ threshold: 0.2 });
    const controls = useAnimation();

    const teamMembers = [
        {
            id: 1,
            name: "Rebecca Foy",
            role: "HEAD OF CREATIVES",
            imageUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=687&h=916",
        },
        {
            id: 2,
            name: "Marcus Johnson",
            role: "LEAD DESIGNER",
            imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=687&h=916",
        },
        {
            id: 3,
            name: "David Chen",
            role: "SENIOR DEVELOPER",
            imageUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=687&h=916",
        },
        {
            id: 4,
            name: "Sarah Williams",
            role: "UX RESEARCHER",
            imageUrl: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=687&h=916",
        },
        {
            id: 5,
            name: "Alex Rodriguez",
            role: "MARKETING DIRECTOR",
            imageUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=687&h=916",
        },
        {
            id: 6,
            name: "Emma Thompson",
            role: "PROJECT MANAGER",
            imageUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=687&h=916",
        },
    ];

    useEffect(() => {
        if (inView) {
            controls.start("visible");
        }
    }, [inView, controls]);

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
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" },
        },
    };

    return (
        <section ref={ref} className="relative py-16 px-4 lg:px-[170px] 4xl:px-[220px]">
            <img
                src={vector}
                alt="background vector"
                loading="lazy"
                className="absolute inset-0 object-cover"
            />
            {/* Header Badge */}
            <div className="mb-8">
                <span className="inline-block px-4 py-2 text-sm font-medium text-[#DE5334] bg-orange-50 rounded-full border border-[#DE5334">
                    OUR TEAM
                </span>
            </div>

            {/* Main Heading */}
            <div className="mb-12">
                <h1 className="text-2xl md:text-5xl lg:text-6xl font-medium md:leading-[56px] tracking-[-3%] text-[#25295C] mb-2">
                    We're More <span className="text-[#DE5334]">Than a Team</span>
                </h1>
                <h2 className="text-2xl md:text-5xl lg:text-6xl font-medium md:leading-[56px] tracking-[-3%] text-[#25295C]">
                    We're a <span className="text-[#DE5334]">Collective</span>
                </h2>
            </div>

            {/* Team Cards */}
            <motion.div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                variants={containerVariants}
                initial="hidden"
                animate={controls}
            >
                {teamMembers.map((member) => (
                    <motion.div
                        key={member.id}
                        className="group"
                        variants={itemVariants}
                    >
                        <div className="relative overflow-hidden rounded-3xl aspect-[3/4] mb-4">
                            <img
                                src={member.imageUrl}
                                alt={`${member.name}, ${member.role}`}
                                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                            />
                        </div>
                        <div className="space-y-1">
                            <p className="text-sm font-medium text-[#DE5334] tracking-wide uppercase">
                                {member.role}
                            </p>
                            <h3 className="text-xl font-semibold text-gray-900">{member.name}</h3>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
}

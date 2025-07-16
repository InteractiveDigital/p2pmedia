/* eslint-disable no-unused-vars */
import React, { useState, useMemo } from "react"
import { motion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"
import { categories, projects } from "../../data.js"
import portfolio5 from "../../assets/portfolio/portfolio5.png"
import { Link } from "react-router-dom"

export default function MainPortfolio() {
    const [activeCategory, setActiveCategory] = useState("all-media")

    const mainProject = useMemo(() => {
        if (activeCategory === "all-media") {
            return projects.find((p) => p.id === "project-1")
        } else if (activeCategory === "photography") {
            return projects.find((p) => p.id === "project-2")
        }
        return null
    }, [activeCategory])

    const filteredProjectsForGrid = useMemo(() => {
        let current =
            activeCategory === "all-media"
                ? projects
                : projects.filter((p) => p.category === activeCategory)

        if (mainProject) {
            current = current.filter((p) => p.id !== mainProject.id)
        }
        return current
    }, [activeCategory, mainProject])

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.3 },
        },
    }
    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.9 } },
    }

    return (
        <div className="min-h-screen bg-white text-gray-900 relative pb-20 px-4 lg:px-[150px] 4xl:px-[200px]">
            {/* Header */}
            <header className="container mx-auto px-4 py-6 flex items-center justify-between">
                <div className="relative pb-1">
                    <button
                        onClick={() => setActiveCategory("all-media")}
                        className={`text-[14px] font-normal ${activeCategory === "all-media"
                            ? "text-[#E54D2E]"
                            : "text-gray-600"
                            }`}
                    >
                        All Media
                    </button>
                    <div
                        className={`absolute bottom-0 left-0 w-1/2 h-0.5 ${activeCategory === "all-media" ? "bg-[#E54D2E]" : "bg-transparent"
                            }`}
                    />
                </div>
                <nav className="hidden md:flex items-center text-[14px] font-normal text-[#25295C]">
                    {categories
                        .filter((c) => c.id !== "all-media")
                        .map((cat) => (
                            <div
                                key={cat.id}
                                className="
                  relative
                  pb-1
                  px-8
                  border-r border-gray-300
                  last:border-none
                "
                            >
                                <button
                                    onClick={() => setActiveCategory(cat.id)}
                                    className={
                                        activeCategory === cat.id ? "text-[#E54D2E]" : "text-[#25295C]"
                                    }
                                >
                                    {cat.name}
                                </button>
                                <div
                                    className={`
                    absolute bottom-0 left-0 w-full h-0.5
                    ${activeCategory === cat.id
                                            ? "bg-[#E54D2E]"
                                            : "bg-transparent"
                                        }
                  `}
                                />
                            </div>
                        ))}
                </nav>
            </header>

            {/* Main Content with staggered reveal */}
            <motion.main
                className="container mx-auto px-4 mt-8"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                {mainProject && (
                    <Link to={mainProject.link}>
                        {/* Main Image */}
                        <motion.div
                            variants={itemVariants}
                            className="relative w-full aspect-[16/9] rounded-xl overflow-hidden shadow-lg"
                        >
                            <img
                                src={mainProject.imageSrc || "/placeholder.svg"}
                                alt={mainProject.title}
                                className="w-full h-full object-cover rounded-xl"
                            />
                        </motion.div>

                        {/* Title, Description & Arrow */}
                        <motion.div
                            variants={itemVariants}
                            className="mt-8 grid md:grid-cols-2 gap-8 items-start"
                        >
                            <div className="space-y-4">
                                <h2 className="text-[#E54D2E] text-sm font-semibold uppercase tracking-wider">
                                    {mainProject.title}
                                </h2>
                                <p className="text-gray-700 leading-relaxed max-w-lg">
                                    {mainProject.description}
                                </p>
                            </div>
                            <div className="justify-self-end mt-8">
                                <button className="w-[44px] h-[44px] border border-[#E54D2E] bg-[#FCEEEB] text-[#E54D2E] rounded-full flex items-center justify-center shadow-md">
                                    <ArrowUpRight className="" />
                                </button>
                            </div>
                        </motion.div>
                    </Link>
                )}

                {/* Project Grid */}
                <motion.section
                    variants={itemVariants}
                    className={mainProject ? "mt-16" : "mt-0"}
                >
                    <h3 className="sr-only">Projects</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredProjectsForGrid.map((project) => (
                            <Link to={project.link}
                                key={project.id}
                                className="bg-white rounded-xl shadow-md overflow-hidden h-[714px] w-[374px] transform transition-transform duration-300 hover:scale-105 hover:shadow-lg"
                            >
                                <div className="relative w-full rounded-t-xl overflow-hidden">
                                    <img
                                        src={project.imageSrc || "/placeholder.svg"}
                                        alt={project.title}
                                        className="w-full h-[539px] object-cover rounded-[40px] transform transition-transform duration-300 hover:scale-105"
                                    />
                                </div>
                                <div className="p-2 space-y-4 h-[171px] w-full">
                                    <h4 className="text-[#E54D2E] text-xs font-semibold uppercase tracking-wider">
                                        {project.title}
                                    </h4>
                                    <div className="flex flex-row items-end justify-between gap-5">
                                        <p className="text-gray-700 text-[16px] leading-[28px] line-clamp-3 flex-grow w-[300px]">
                                            {project.description}
                                        </p>
                                        <button className="w-[44px] h-[44px] border border-[#E54D2E] bg-[#FCEEEB] text-[#E54D2E] rounded-full flex items-center justify-center shadow-md">
                                            <ArrowUpRight className="" />
                                        </button>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>

                    {mainProject && (
                        <Link to={mainProject.link}>
                            <motion.div
                                variants={itemVariants}
                                className="relative w-full aspect-[16/9] rounded-xl overflow-hidden shadow-lg mt-10"
                            >
                                <img
                                    src={portfolio5}
                                    alt={mainProject.title}
                                    className="w-full h-full object-cover rounded-xl"
                                />
                            </motion.div>

                            <motion.div
                                variants={itemVariants}
                                className="mt-12 grid md:grid-cols-2 gap-8 items-start"
                            >
                                <div className="space-y-4">
                                    <h2 className="text-[#E54D2E] text-sm font-semibold uppercase tracking-wider">
                                        CREATING CULTURE WITH VIBECITY FESTIVAL
                                    </h2>
                                    <p className="text-gray-700 leading-relaxed max-w-lg">
                                        As the official brand experience partner for VibeCity, we curated
                                        a campaign that celebrated youth creativity, music, and identity.
                                        From pre-event digital activations to on-ground immersive zones,
                                        our work turned a regular festival into a cultural moment.
                                    </p>
                                </div>
                                <div className="justify-self-end mt-12">
                                    <button className="w-[44px] h-[44px] border border-[#E54D2E] bg-[#FCEEEB] text-[#E54D2E] rounded-full flex items-center justify-center shadow-md">
                                        <ArrowUpRight className="" />
                                    </button>
                                </div>
                            </motion.div>
                        </Link>
                    )}

                    {filteredProjectsForGrid.length === 0 && !mainProject && (
                        <div className="mt-8 text-center text-xl font-semibold text-gray-500">
                            No projects found for this category.
                        </div>
                    )}
                </motion.section>

                {/* Load More Button */}
                {filteredProjectsForGrid.length > 0 && (
                    <motion.div
                        variants={itemVariants}
                        className="mt-12 text-center"
                    >
                        <button className="px-8 py-3 bg-[#E54D2E] text-white font-medium rounded-md shadow-md hover:bg-opacity-90 transition-colors">
                            Load More
                        </button>
                    </motion.div>
                )}
            </motion.main>
        </div>
    )
}

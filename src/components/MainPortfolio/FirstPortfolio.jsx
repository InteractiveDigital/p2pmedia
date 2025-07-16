/* eslint-disable no-unused-vars */
import React, { useEffect, useRef, useState } from 'react'
import { ArrowUpRight, Pause, VolumeX, Volume2 } from 'lucide-react';
import { MdOutlinePlayCircleOutline } from "react-icons/md";
import { motion } from 'framer-motion';
import portfoliobg from "../../assets/portfolio/portfoliobg.png"
import detail1 from "../../assets/portfolio/detail1.png"
import detail2 from "../../assets/portfolio/detail2.png"
import detail3 from "../../assets/portfolio/detail3.png"
import detail4 from "../../assets/portfolio/detail4.png"
import detail5 from "../../assets/portfolio/detail5.png"
import Awards from '../Awards';



const FirstPortfolio = () => {

    const heroVideoUrl = 'https://www.w3schools.com/html/mov_bbb.mp4';
    const [muted, setMuted] = useState(true);
    const [isPlaying, setIsPlaying] = useState(true);
    const sectionRef = useRef(null);
    const videoRef = useRef(null);



    // Sync mute state
    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.muted = muted;
        }
    }, [muted]);

    // Sync play/pause state
    useEffect(() => {
        if (videoRef.current) {
            if (isPlaying) {
                videoRef.current.play();
            } else {
                videoRef.current.pause();
            }
        }
    }, [isPlaying]);

    // Scroll-driven zoom
    useEffect(() => {
        const handleScroll = () => {
            if (!sectionRef.current || !videoRef.current) return;
            const rect = sectionRef.current.getBoundingClientRect();
            const progress = Math.min(Math.max(-rect.top / rect.height, 0), 1);
            const scale = 1 + progress * 0.2;
            videoRef.current.style.transform = `scale(${scale})`;
        };
        window.addEventListener('scroll', handleScroll);
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    return (
        <div>
            <div className="relative">
                <img
                    src={portfoliobg}
                    alt="portfolio bg"
                    className="w-full h-[400px] md:h-auto object-cover"
                    loading="lazy"
                />

                <div
                    className="
      absolute top-[30%] md:top-[30%]
      left-0 lg:left-[25%] px-4 md:px-0
      w-full md:w-[754px]
      flex flex-col items-center justify-between gap-8
    
    "
                >
                    <div className="border rounded-[32px] w-[113px] h-[34px] flex items-center justify-center text-white">
                        PORTFOLIO
                    </div>
                    <div
                        className="
        font-semibold
        text-[20px] md:text-[48px]
        leading-[24px] md:leading-[56px]
        tracking-[-3%]
        text-white text-center
      "
                    >
                        Driving B2B Lead Generation with<span className="text-[#DE5334]">Content Marketing</span>
                    </div>

                    <div
                        className="
        font-normal
        text-[12px] md:text-[16px]
        leading-[24px] md:leading-[24px]
        tracking-[-3%]
        text-white text-center
      "
                    >
                        We’re a staff of smart, friendly professionals dedicated to anticipating your needs and making your life easier
                    </div>
                </div>
            </div>


            <section className="w-full py-8 px-4 lg:px-[150px] 4xl:px-[200px] bg-white">
                <div className="container grid md:grid-cols-3 gap-8 px-0 md:px-6 lg:gap-12">
                    {/* 1) Heading */}
                    <motion.div
                        className="flex flex-col items-start"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0 }}
                    >
                        <h2 className="text-sm font-normal uppercase text-orange-600 tracking-wider">
                            PROVIDED SERVICES
                        </h2>
                    </motion.div>

                    {/* 2) Two‑column list wrapper */}
                    <div className="grid gap-4 md:grid-cols-2 md:col-span-2">
                        {/* First column */}
                        <motion.div
                            className="space-y-2"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            <p className="text-slate-700">Conversion‑Rate Optimization</p>
                            <p className="text-slate-700">UX/UI Design</p>
                            <p className="text-slate-700">Content Marketing</p>
                        </motion.div>

                        {/* Second column */}
                        <motion.div
                            className="space-y-2"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                        >
                            <p className="text-slate-700">Search Engine Optimization</p>
                            <p className="text-slate-700">Social Advertising</p>
                        </motion.div>
                    </div>
                </div>

                {/* 3) Divider */}
                <motion.div
                    className="mt-12 border-b border-gray-200 w-full"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                />
            </section>

            <section className="container mx-auto px-4 lg:px-[150px] 4xl:px-[200px] py-2">
                {/* — Header — */}
                <div className="flex flex-col lg:flex-row justify-between items-start gap-4">
                    <motion.h2
                        className="text-[32px] lg:text-[48px] font-normal leading-[40px] lg:leading-[56px] tracking-normal lg:tracking-[-5%]"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0 }}
                    >
                        <span className="text-[#1E2A5B]">The</span>
                        <span className="text-[#F05A28] ml-2">Project</span>
                    </motion.h2>

                    <motion.div
                        className="w-full lg:w-[600px] text-[16px] font-normal leading-[28px] text-gray-700 py-4 border-b-2"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <p>
                            Brand X needed to relaunch their flagship product in Ghana after a 2‑year market
                            absence. They wanted to reconnect with youth audiences, rebuild loyalty, and drive
                            nationwide visibility — fast.
                        </p>
                        <p className="mt-2 font-semibold">Highlight:</p>
                        <ul className="list-disc list-inside mt-1 space-y-1">
                            <li>Business problem, Market context, Target audience</li>
                        </ul>
                    </motion.div>
                </div>

                {/* — Images & “Load More” button — */}
                <div className="relative flex flex-col lg:flex-row items-center lg:items-start gap-6 mt-4">
                    <motion.div
                        className="w-full lg:w-[461px] h-auto lg:h-[609px] rounded-[40px] overflow-hidden"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                    >
                        <img
                            src={detail1}
                            alt="Content Marketing"
                            className="object-cover w-full h-full transform transition-transform duration-300 ease-in-out hover:scale-105"
                        />
                    </motion.div>

                    <motion.button
                        className="mt-4 lg:mt-0 lg:absolute left-[35%] top-[30%]
                     bg-[#F05A28] hover:bg-[#d94b20]
                     text-white font-medium
                     w-24 h-24 z-20
                     rounded-full flex items-center justify-center shadow-lg"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                    >
                        Load More
                    </motion.button>

                    <motion.div
                        className="w-full lg:w-[660px] h-auto lg:h-[943px] rounded-2xl overflow-hidden"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.8 }}
                    >
                        <img
                            src={detail2}
                            alt="Analysis"
                            className="object-cover w-full h-full transform transition-transform duration-300 ease-in-out hover:scale-105"
                        />
                    </motion.div>
                </div>
            </section>

            <section className="container mx-auto px-4 lg:px-[150px] 4xl:px-[200px] pt-12">
                {/* — Header — */}
                <div className="flex flex-col lg:flex-row justify-between items-start gap-4">
                    <motion.h2
                        className="text-[32px] lg:text-[48px] font-normal leading-[40px] lg:leading-[56px] tracking-normal lg:tracking-[-5%]"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0 }}
                    >
                        <span className="text-[#1E2A5B]">The</span>
                        <span className="text-[#F05A28] ml-2">Challenge</span>
                    </motion.h2>

                    <motion.div
                        className="w-full lg:w-[600px] text-[16px] font-normal leading-[28px] text-gray-700 py-4 border-b-2"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <p>
                            Brand X needed to relaunch their flagship product in Ghana after a 2-year market absence. They wanted to reconnect with youth audiences, rebuild loyalty, and drive nationwide visibility — fast.
                        </p>
                        <p className="mt-2 font-semibold">Highlight:</p>
                        <ul className="list-disc list-inside mt-1 space-y-1">
                            <li>Business problem, Market context, Target audience</li>
                        </ul>
                    </motion.div>
                </div>

                {/* Media Panel with Fixed Height */}
                <div className="relative mt-8 rounded-3xl overflow-hidden shadow-xl h-[698px]">
                    <video
                        ref={videoRef}
                        src={heroVideoUrl}
                        className="w-full h-full object-cover transform transition-transform duration-200"
                        autoPlay
                        loop
                        playsInline
                    />

                    {/* Play/Pause Toggle */}
                    <button
                        onClick={() => setIsPlaying(prev => !prev)}
                        className="absolute bottom-4 left-4 bg-white p-3 rounded-full shadow-md hover:bg-gray-100 transition"
                    >
                        {isPlaying ? (
                            <Pause className="w-6 h-6 text-[#F25F3A]" />
                        ) : (
                            <MdOutlinePlayCircleOutline className="w-8 h-8 text-[#F25F3A]" />
                        )}
                    </button>

                    {/* Mute/Unmute Toggle */}
                    <button
                        onClick={() => setMuted(prev => !prev)}
                        className="absolute bottom-4 right-4 bg-white p-3 rounded-full shadow-md hover:bg-gray-100 transition"
                    >
                        {muted ? (
                            <VolumeX className="w-6 h-6 text-[#F25F3A]" />
                        ) : (
                            <Volume2 className="w-6 h-6 text-[#F25F3A]" />
                        )}
                    </button>
                </div>

            </section>

            <section className="pt-12">
                {/* — Header — */}
                <div className="container mx-auto flex flex-col lg:flex-row justify-between items-start gap-4 px-4 lg:px-[150px] 4xl:px-[200px]">
                    <motion.h2
                        className="text-[32px] lg:text-[48px] font-normal leading-[40px] lg:leading-[56px] tracking-normal lg:tracking-[-5%]"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0 }}
                    >
                        <span className="text-[#1E2A5B]">The</span>
                        <span className="text-[#F05A28] ml-2">Solution</span>
                    </motion.h2>

                    <motion.div
                        className="w-full lg:w-[600px] text-[16px] font-normal leading-[28px] text-gray-700 py-4 border-b-2"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <p>
                            Brand X needed to relaunch their flagship product in Ghana after a 2-year market absence. They wanted to reconnect with youth audiences, rebuild loyalty, and drive nationwide visibility — fast.
                        </p>
                        <p className="mt-2 font-semibold">Highlight:</p>
                        <ul className="list-disc list-inside mt-1 space-y-1">
                            <li>Business problem, Market context, Target audience</li>
                        </ul>
                    </motion.div>
                </div>

                {/* grid media*/}

                <div className='bg-[#25295C] w-full h-auto px-4 lg:px-[150px] 4xl:px-[200px] py-12'>
                    <div className="flex flex-col gap-8 pb-8 md:flex-row">
                        {/* left stack */}
                        <div className="flex flex-col gap-8">
                            <div className="w-full md:w-[461px] h-auto md:h-[590px]">
                                <img
                                    src={detail3}
                                    alt="Content Marketing"
                                    className="object-cover w-full h-full rounded-[40px] transform transition-transform duration-300 ease-in-out hover:scale-105"
                                />
                            </div>
                            <div className="w-full md:w-[461px] h-auto md:h-[590px]">
                                <img
                                    src={detail4}
                                    alt="Content Marketing"
                                    className="object-cover w-full h-full rounded-[40px] transform transition-transform duration-300 ease-in-out hover:scale-105"
                                />
                            </div>
                        </div>

                        {/* right single */}
                        <div className="w-full md:w-auto h-auto">
                            <img
                                src={detail5}
                                alt="Content Marketing"
                                className="object-cover w-full h-full rounded-[40px] transform transition-transform duration-300 ease-in-out
                   hover:scale-105"
                            />
                        </div>
                    </div>

                    {/* Media Panel with Fixed Height */}
                    <div className="relative mt-8 rounded-3xl overflow-hidden shadow-xl h-[698px]">
                        <video
                            ref={videoRef}
                            src={heroVideoUrl}
                            className="w-full h-full object-cover transform transition-transform duration-200"
                            autoPlay
                            loop
                            playsInline
                        />

                        {/* Play/Pause Toggle */}
                        <button
                            onClick={() => setIsPlaying(prev => !prev)}
                            className="absolute bottom-4 left-4 bg-white p-3 rounded-full shadow-md hover:bg-gray-100 transition"
                        >
                            {isPlaying ? (
                                <Pause className="w-6 h-6 text-[#F25F3A]" />
                            ) : (
                                <MdOutlinePlayCircleOutline className="w-8 h-8 text-[#F25F3A]" />
                            )}
                        </button>

                        {/* Mute/Unmute Toggle */}
                        <button
                            onClick={() => setMuted(prev => !prev)}
                            className="absolute bottom-4 right-4 bg-white p-3 rounded-full shadow-md hover:bg-gray-100 transition"
                        >
                            {muted ? (
                                <VolumeX className="w-6 h-6 text-[#F25F3A]" />
                            ) : (
                                <Volume2 className="w-6 h-6 text-[#F25F3A]" />
                            )}
                        </button>
                    </div>
                </div>


            </section>
            <section className="px-4 lg:px-[150px] 4xl:px-[200px] py-12 ">
                {/* full‑bleed yellow background */}
                <div className="w-full ">
                    {/* content stays in the normal padded column */}
                    <div className="">
                        <div className="mb-8">
                            <h2 className="text-sm font-medium text-[#DE5334] uppercase tracking-wide">
                                RESULTS
                            </h2>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 lg:gap-24">
                            <div>
                                <div className="text-[28px] lg:text-[36px] font-semibold text-[#DE5334] mb-2">
                                    1.2M+
                                </div>
                                <div className="text-gray-600 text-sm">Total Reach</div>
                            </div>

                            <div>
                                <div className="text-[28px] lg:text-[36px] font-semibold text-[#DE5334] mb-2">
                                    18%
                                </div>
                                <div className="text-gray-600 text-sm">Engagement Rate</div>
                            </div>

                            <div>
                                <div className="text-[28px] lg:text-[36px] font-semibold text-[#DE5334] mb-2">
                                    25,000+
                                </div>
                                <div className="text-gray-600 text-sm">
                                    Keywords Achieved
                                    <br />
                                    Top 20 Ranking in The
                                    <br />
                                    First Month
                                </div>
                            </div>

                            <div>
                                <div className="text-[28px] lg:text-[36px] font-semibold text-[#DE5334] mb-2">
                                    +34%
                                </div>
                                <div className="text-gray-600 text-sm">
                                    Keywords Achieved
                                    <br />
                                    Top 20 Ranking in The
                                    <br />
                                    First Month
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Awards />

        </div>
    )
}

export default FirstPortfolio
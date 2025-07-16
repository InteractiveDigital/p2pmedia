/* eslint-disable no-unused-vars */
import React, { useState, useRef, useEffect } from 'react';
import { ArrowUpRight, Pause, VolumeX, Volume2 } from 'lucide-react';
import { MdOutlinePlayCircleOutline } from "react-icons/md";
import { Link } from 'react-router-dom';


const HeroSection = () => {
    const heroVideoUrl = 'https://www.w3schools.com/html/mov_bbb.mp4';
    const [muted, setMuted] = useState(true);
    const [isPlaying, setIsPlaying] = useState(true);
    const [headingVisible, setHeadingVisible] = useState(false);
    const sectionRef = useRef(null);
    const videoRef = useRef(null);

    // Trigger heading animation on mount
    useEffect(() => {
        const timer = setTimeout(() => setHeadingVisible(true), 100);
        return () => clearTimeout(timer);
    }, []);

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
        <section ref={sectionRef} className="w-full px-4 lg:px-[150px] 4xl:px-[200px] py-12 bg-white">
            {/* Top Row: Heading & CTA Button */}
            <div className="flex flex-wrap items-center justify-between">
                <h1
                    className={`lg:w-[1008px] text-[28px] md:text-[64px] w-full font-semibold text-[#25295C] md:leading-[74px] tracking-[-3%] transform transition-all duration-700 ease-in-out ${headingVisible
                        ? 'translate-y-0 opacity-100 scale-100'
                        : 'translate-y-10 opacity-0 scale-75'
                        }`}
                >
                    Don’t Just Be <span className="text-[#DE5334]">Seen,</span><br />
                    Be <span className="text-[#DE5334]">Unforgettable.</span>
                </h1>
                <Link to="#" className="mt-6 lg:mt-0 inline-flex items-center bg-[#DE5334] hover:bg-[#e14f2d] text-white font-medium rounded-full px-6 py-3 shadow-md transition">
                    Let’s get Started
                    <ArrowUpRight className="ml-2 w-5 h-5" />
                </Link>
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
    );
};

export default HeroSection;

/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useRef } from "react";
import Slider from "react-slick";
import { ArrowDownLeft, ArrowUpRight } from "lucide-react";
import Img1 from "../../assets/num/img1.png";
import Img2 from "../../assets/num/img2.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonials = [
    {
        id: 1,
        text: "Working with the team was seamless. They understood our brand vision from day one and translated it into an activation that exceeded our expectations. Their professionalism and attention to detail truly stood out.",
        image: Img1,
        author: "Sarah Johnson",
        position: "Marketing Director",
    },
    {
        id: 2,
        text: "The creative approach and strategic thinking they brought to our project was exceptional. Every detail was carefully considered and executed flawlessly. I couldn't be happier with the results.",
        image: Img2,
        author: "Michael Chen",
        position: "Brand Manager",
    },
    {
        id: 3,
        text: "From concept to completion, the entire process was smooth and collaborative. They delivered beyond our expectations and created something truly remarkable for our brand.",
        image: Img1,
        author: "Emily Rodriguez",
        position: "Creative Director",
    },
];

export default function Testimonial() {
    const sliderRef = useRef(null);

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 5000,
    };

    const goToPrev = () => sliderRef.current?.slickPrev();
    const goToNext = () => sliderRef.current?.slickNext();

    return (
        <div className="bg-gray-50 border-b-2 lg:px-[150px] 4xl:px-[200px]">
            <div className="container mx-auto px-4 lg:px-0 py-8 md:py-16">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
                    {/* Left Content */}
                    <div className="space-y-4 md:space-y-6">
                        <span className="inline-block text-sm font-medium text-gray-600 bg-white px-4 py-2 rounded-full border">
                            TESTIMONIALS
                        </span>
                        <h1 className="text-2xl sm:text-3xl lg:text-5xl font-medium text-gray-900 md:leading-[56px] md:tracking-[-3%] md:w-[599px] md:h-[132px]">
                            Client <span className="text-orange-500">Experiences</span> That Speak for Themselves
                        </h1>
                    </div>

                    {/* Right Slider */}
                    <div className="relative">
                        <div className="overflow-hidden rounded-2xl">
                            <Slider ref={sliderRef} {...settings}>
                                {testimonials.map((t) => (
                                    <div key={t.id} className="relative">
                                        <div className="relative h-64 sm:h-80 md:h-96 lg:h-[500px] overflow-hidden rounded-2xl">
                                            {/* Background Image */}
                                            <div
                                                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                                                style={{ backgroundImage: `url(${t.image})` }}
                                            />

                                            {/* Overlay */}
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

                                            {/* Content */}
                                            <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 lg:p-8">
                                                <div className="bg-[#B2422A]/40 backdrop-blur-sm rounded-xl p-4 sm:p-6 lg:p-8 border border-white/20">
                                                    <blockquote className="text-white text-sm sm:text-base lg:text-lg leading-relaxed mb-3 sm:mb-4">
                                                        "{t.text}"
                                                    </blockquote>
                                                    <div className="text-white/90 text-xs sm:text-sm">
                                                        <div className="font-semibold">{t.author}</div>
                                                        <div className="text-white/70">{t.position}</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </Slider>
                        </div>

                        {/* Custom Navigation Arrows */}
                        <button
                            type="button"
                            onClick={goToPrev}
                            className="
                absolute
                bottom-6 lg:bottom-12
                right-6 lg:right-32
                z-10
                bg-white backdrop-blur-sm hover:bg-white/30
                text-white border border-white/20
                rounded-full w-9 h-9 sm:w-10 sm:h-10
                flex items-center justify-center
              "
                        >
                            <ArrowDownLeft className="w-4 h-4 sm:w-5 sm:h-5 text-[#DE5334]" />
                        </button>

                        <button
                            type="button"
                            onClick={goToNext}
                            className="
                absolute
                bottom-6 lg:bottom-12
                right-20 lg:right-16
                z-10
                bg-white backdrop-blur-sm hover:bg-white/30
                text-white border border-white/20
                rounded-full w-9 h-9 sm:w-10 sm:h-10
                flex items-center justify-center
              "
                        >
                            <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 text-[#DE5334]" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

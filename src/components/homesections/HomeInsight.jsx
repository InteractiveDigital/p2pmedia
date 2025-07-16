// eslint-disable-next-line no-unused-vars
import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import { ArrowUpRight } from "lucide-react";
import Img1 from "../../assets/num/img1.png";
import Img2 from "../../assets/num/img2.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";

export default function HomeInsight() {
    const sectionRef = useRef(null);
    const sliderRef = useRef(null);

    const [badgeVisible, setBadgeVisible] = useState(false);
    const [titleVisible, setTitleVisible] = useState(false);
    const [buttonVisible, setButtonVisible] = useState(false);
    const [card1Visible, setCard1Visible] = useState(false);
    const [card2Visible, setCard2Visible] = useState(false);
    const [card3Visible, setCard3Visible] = useState(false);

    const articles = [
        {
            id: 1,
            image: Img1,
            title: "Why Brand Activations Are Still the Most Powerful Form",
            description:
                "In an age of digital overload, physical brand experiences still create the deepest connections. Whether it's a street campaign...",
        },
        {
            id: 2,
            image: Img2,
            title: "5 Ways to Maximize ROI on Your Next Campaign",
            description:
                "Great campaigns don't just look good — they perform. From smart channel planning to aligning creative with clear objectives, these five strategies....",
        },
        {
            id: 3,
            image: Img1,
            title: "The Future of BTL Marketing in Africa",
            description:
                "With rising youth populations, increased mobile usage, and a shift in cultural engagement, BTL marketing in Africa is undergoing a transformation.",
        },
    ];

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

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setTimeout(() => setBadgeVisible(true), 200);
                    setTimeout(() => setTitleVisible(true), 500);
                    setTimeout(() => setButtonVisible(true), 800);
                    setTimeout(() => setCard1Visible(true), 1300);
                    setTimeout(() => setCard2Visible(true), 1800);
                    setTimeout(() => setCard3Visible(true), 2300);
                }
            },
            { threshold: 0.1 }
        );

        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, []);

    return (
        <section
            ref={sectionRef}
            className="w-full bg-gray-50 py-16"
        >
            <div className="w-full px-4 lg:px-[150px] 4xl:px-[200px] mx-auto">
                {/* Header Section */}
                <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between mb-6 gap-6 lg:gap-0">
                    <div className="flex flex-col gap-8 w-full lg:w-[753px] h-auto lg:h-[190px]">
                        <span
                            className={`flex items-center justify-center text-sm font-medium text-gray-700 border border-black bg-white w-[113px] h-[34px] rounded-[32px] transition-all duration-700 ${badgeVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                                }`}
                        >
                            INSIGHTS
                        </span>
                        <h1
                            className={`text-[24px] md:text-4xl lg:text-5xl w-full h-auto lg:h-[132px] font-medium md:leading-[56px] md:tracking-[-3%] text-[#25295C] transition-all duration-700 ${titleVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                                }`}
                        >
                            Our Take On{" "}
                            <span className="text-[#DE5334]">Media,Tech</span>, and{" "}
                            <span className="text-[#DE5334]">Creativity</span>
                        </h1>
                    </div>
                    <Link to="/insights"
                        type="button"
                        className={`bg-[#DE5334] hover:bg-orange-600 text-white px-6 py-2 rounded-full transition-all duration-700 ${buttonVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                            }`}
                        onClick={() => { }}
                    >
                        More Insights
                    </Link>
                </div>

                {/* Articles Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <Slider ref={sliderRef} {...settings} className="absolute hidden" />
                    {articles.map((article, index) => {
                        const isVisibleCard =
                            index === 0 ? card1Visible : index === 1 ? card2Visible : card3Visible;
                        return (
                            <div
                                key={article.id}
                                className={`group cursor-pointer bg-white p-4 w-full md:w-[390px] 4xl:w-[470px] h-auto md:h-[539px] rounded-xl overflow-hidden shadow-lg transform transition-all duration-700 hover:scale-105 hover:shadow-xl ${isVisibleCard ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
                                    }`}
                            >
                                <div className="relative overflow-hidden rounded-[30px] mb-4 4xl:mb-8">
                                    <img
                                        src={article.image}
                                        alt={article.title}
                                        className="w-full h-48 md:h-[309px] 4xl:w-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                </div>
                                <div className="space-y-4 4xl:space-y-8">
                                    <h3 className="text-[#DE5334] font-bold text-[12px] 4xl:text-[16px] uppercase tracking-wide group-hover:text-orange-600 transition-colors duration-300">
                                        {article.title}
                                    </h3>
                                    <div className="flex items-start justify-between gap-4">
                                        <p className="text-slate-700 text-base leading-relaxed flex-1 group-hover:text-slate-800 transition-colors duration-300">
                                            {article.description}
                                        </p>
                                        <div className="w-8 h-8 rounded-full border border-[#DE5334] flex items-center mt-8 bg-[#FCEEEB] justify-center group-hover:bg-[#DE5334] group-hover:scale-110 transition-all duration-300 flex-shrink-0">
                                            <ArrowUpRight className="w-4 h-4 text-[#DE5334] group-hover:text-white transition-all duration-300 group-hover:rotate-45" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

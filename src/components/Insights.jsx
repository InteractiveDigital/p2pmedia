
import { useState } from 'react';
import insightsData from '../data';
import InsightCard from './InsightCard';
import Article from './Article';

export default function Insights() {

    // Number of items to show initially and per "load more" click
    const INITIAL_COUNT = 3;
    const [visibleCount, setVisibleCount] = useState(INITIAL_COUNT);

    const handleLoadMore = () => {
        if (visibleCount < insightsData.length) {
            setVisibleCount((prev) => Math.min(prev + INITIAL_COUNT, insightsData.length));
        }
    };

    const allLoaded = visibleCount >= insightsData.length;

    return (
        <section className="relative bg-gray-50 py-16 pt-[90px] md:pt-[80px] lg:pt-[150px] px-4 lg:px-[150px] 4xl:px-[200px]">
            {/* You can add background SVG or image shapes here */}
            <div className="container mx-auto ">
                {/* Pill Label */}
                <span className="inline-block px-4 py-1 mb-4 border border-[#091242] text-[#091242] rounded-full text-xs font-medium uppercase">
                    Insights
                </span>

                {/* Headline */}
                <h2 className="text-2xl md:text-[56px] font-medium text-[#091242] mb-12 md:leading-[47px] tracking-[-3%]">
                    Get To Know More <span className="text-orange-600">Directly</span> <br />
                    From <span className="text-orange-600">P2P Experts</span>
                </h2>

                {/* Grid of Cards */}
                <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                    {insightsData.map((item) => (
                        <InsightCard key={item.id} insight={item} />
                    ))}
                </div>

                {/* Load More Button (always visible) */}
                <div className="mt-8 text-center">
                    <button
                        onClick={handleLoadMore}
                        disabled={allLoaded}
                        className="px-6 py-2 bg-orange-600 text-white rounded-full transition hover:bg-orange-700 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        {allLoaded ? 'All Loaded' : 'Load More'}
                    </button>
                </div>
            </div>

            <Article />
        </section>
    );
}

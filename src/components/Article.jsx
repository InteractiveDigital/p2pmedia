import { useState } from 'react';
import article from "../assets/insights/article.png"
import vector3 from "../assets/service/vector3.png"

export default function Article() {
    const [email, setEmail] = useState('');
    const handleSubmit = e => {
        e.preventDefault();
        // integrate subscription logic here
        console.log('Subscribed:', email);
    };

    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto flex flex-col md:flex-row justify-between gap-8 items-center">
                {/* Left Image */}
                <div className="w-full md:w-[898px] h-auto md:h-[672px]">
                    <img
                        src={article}
                        alt="Media Analysis Report"
                        className="rounded-2xl w-full h-full object-cover"
                    />
                </div>

                {/* Right Card */}
                <div className="relative bg-[#25295C] text-white rounded-2xl px-4 py-8 overflow-hidden
                    w-full md:w-[438px] h-auto md:h-[672px] flex flex-col justify-between">
                    {/* background vector behind */}
                    <img
                        src={vector3}
                        alt="background vector"
                        loading="lazy"
                        className="absolute bottom-0 right-0  object-cover z-10"
                    />

                    {/* Header */}
                    <div className="relative z-10">
                        <span className="inline-flex items-center justify-center w-[165px] h-[34px] mb-4
                         border border-white text-white rounded-full text-xs uppercase">
                            Downloadable Article
                        </span>
                        <h2 className="text-2xl md:text-[32px] font-medium leading-snug tracking-[-0.03em] mb-8 md:mb-0">
                            Latest Media Analysis Report From <span className="text-orange-600">P2P Experts</span>
                        </h2>
                    </div>

                    {/* Body & Form */}
                    <div className="relative z-10">
                        <p className="text-[16px] md:text-[16px] font-normal leading-[28px] mb-6 text-[#E9EAEF]">
                            P2P specializes in creating immersive brand experiences that engage audiences on a deeper level. Subscribe to our newsletter to get the report.
                        </p>
                        <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4">
                            <input
                                type="email"
                                required
                                placeholder="Email Address"
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                                className="w-full sm:flex-1 px-4 py-2 rounded-full text-gray-900"
                            />
                            <button
                                type="submit"
                                className="w-full sm:w-auto px-6 py-2 bg-orange-600 rounded-full text-white font-medium hover:bg-orange-700 transition"
                            >
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>

    );
}

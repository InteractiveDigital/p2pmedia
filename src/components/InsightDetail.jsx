// src/components/InsightDetail.jsx
import { useParams, Link } from 'react-router-dom';
import insightsData from '../data';
import { X, Facebook, Linkedin, Instagram } from 'lucide-react';
import CommentsSection from './CommentsSection';


export default function InsightDetail() {
    const { id } = useParams();

    // since your data uses numeric IDs, coerce useParams.id → number
    const insight = insightsData.find(item => item.id === Number(id));

    if (!insight) {
        return (
            <div className="container mx-auto px-4 py-12 text-center pt-[70px]">
                <p className="text-gray-500">Insight not found.</p>
                <Link to="/insights" className="text-orange-600 hover:underline mt-4 block">
                    ← Back to Insights
                </Link>
            </div>
        );
    }

    return (
        <section className="bg-white py-16 px-4 lg:px-[150px] 4xl:px-[200px] pt-[90px] md:pt-[80px] lg:pt-[150px]">
            <div className="text-center max-w-3xl mx-auto">
                <span className="inline-block px-4 py-1 mb-4 border border-[#091242] text-[#091242] rounded-full text-xs font-medium uppercase">
                    {insight.category}
                </span>
                <h1 className="text-3xl md:text-[56px] font-medium text-[#091242] mb-2 leading-[1.1] tracking-[-3%]">
                    {insight.title}
                </h1>
                <p className="text-sm text-gray-500 mb-8">{insight.date}</p>
            </div>

            <div className="mb-12 overflow-hidden rounded-2xl aspect-video">
                <img
                    src={insight.image}
                    alt={insight.title}
                    className="w-full h-full object-cover"
                />
            </div>

            <article className="prose prose-lg mx-auto max-w-3xl">
                {insight.content.split('\n').map((para, i) => (
                    <p key={i}>{para}</p>
                ))}
            </article>


            {/* — Tags & Share */}
            <div className="mt-12 border-t pt-8 flex flex-col md:flex-row md:justify-between md:items-center space-y-4 md:space-y-0">
                {/* Tags */}
                <div className="flex items-center flex-wrap gap-2">
                    <span className="text-sm font-medium text-gray-700 mr-2">Tags:</span>
                    {insight.tags.map(tag => (
                        <span
                            key={tag}
                            className="px-3 py-1 bg-[#FAE5E1] text-[#DE5334] rounded-full text-xs uppercase"
                        >
                            {tag}
                        </span>
                    ))}
                </div>

                {/* Share */}
                <div className="flex items-center space-x-4">
                    <span className="text-sm font-medium text-gray-700">Share:</span>
                    <a href="#" aria-label="Share on X" className="hover:text-orange-600">
                        <X size={18} />
                    </a>
                    <a href="#" aria-label="Share on Facebook" className="hover:text-orange-600">
                        <Facebook size={18} />
                    </a>
                    <a href="#" aria-label="Share on LinkedIn" className="hover:text-orange-600">
                        <Linkedin size={18} />
                    </a>
                    <a href="#" aria-label="Share on Instagram" className="hover:text-orange-600">
                        <Instagram size={18} />
                    </a>
                </div>
            </div>

            <CommentsSection />

            <div className="mt-12 text-center">
                <Link to="/insights" className="text-orange-600 hover:underline">
                    ← Back to Insights
                </Link>
            </div>
        </section>
    );
}

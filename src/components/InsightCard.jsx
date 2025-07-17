// src/components/InsightCard.jsx
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { ArrowUpRight } from 'lucide-react';


export default function InsightCard({ insight }) {
    return (
        <Link
            to={`/insights/${insight.id}`}
            className="block bg-white h-[469px] rounded-2xl overflow-hidden shadow hover:shadow-lg transition-shadow relative p-6"
        >
            {/* Image */}
            <div className="h-56 md:h-64 overflow-hidden">
                <img
                    src={insight.image}
                    alt={insight.title}
                    className="w-full h-full object-cover rounded-[40px] transform hover:scale-105 transition-transform"
                />
            </div>

            {/* Content */}
            <div className="pt-8">

                <h3 className="text-[12px] font-normal text-[#DE5334] mb-3 leading-tight">
                    {insight.title}
                </h3>

                <div className='flex flex-row'>
                    <p className="text-gray-600 text-sm mb-6">
                        {insight.excerpt}
                    </p>
                    {/* Read More Button */}
                    <div className="flex items-center text-orange-600 font-medium">
                        <ArrowUpRight className="w-5 h-5" />
                    </div>
                </div>

            </div>
        </Link>
    );
}

InsightCard.propTypes = {
    insight: PropTypes.shape({
        id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
        image: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        category: PropTypes.string.isRequired,
        excerpt: PropTypes.string.isRequired,
    }).isRequired,
};


import Portfolio1 from "./assets/portfolio/portfolio1.png"
import Portfolio2 from "./assets/portfolio/portfolio2.png"
import Portfolio3 from "./assets/portfolio/portfolio3.png"
import Portfolio4 from "./assets/portfolio/portfolio4.png"


import Insight1 from "./assets/insights/insight1.png"
import Insight2 from "./assets/insights/insight2.png"


export const categories = [
    { id: "all-media", name: "All Media" },
    { id: "motion-graphics", name: "Motion Graphics" },
    { id: "photography", name: "Photography" },
    { id: "videography", name: "Videography" },
    { id: " ", name: "Branding" },
    { id: "graphic-designing", name: "Graphic Designing" },
]

export const projects = [
    {
        id: "project-1",
        imageSrc: Portfolio1,
        title: "RECONNECTING GHANA'S YOUTH WITH BRAND X",
        description:
            "We partnered with Brand X to reignite their presence in the Ghanaian market through a nationwide ATL and BTL campaign.",
        link: "/firstportfolio",
        category: "branding",
    },
    {
        id: "project-2",
        imageSrc: Portfolio2,
        title: "CREATING AN EXPERIENCE FOR AFRISOFT",
        description: "When AfriSoft introduced its new app, they wanted more than awareness — they wanted excitement.",
        link: "/secondportfolio",
        category: "motion-graphics",
    },
    {
        id: "project-3",
        imageSrc: Portfolio3,
        title: "A MULTICHANNEL CAMPAIGN FOR SIPZ",
        description:
            "To position Sipz as the go-to lifestyle drink for Gen Z, we designed a multichannel campaign that lived where they do — on the streets, on ..",
        link: "/thirdportfolio",
        category: "videography",
    },
    {
        id: "project-4",
        imageSrc: Portfolio4,
        title: "THE 7-DAY IMMERSIVE ROADSHOW THAT ELEVATED CLARITEA",
        description:
            "ClariTea wanted to engage health-conscious millennials with something fresh. We delivered a 7-day roadshow across 3 cities, blending mindfulness workshops, wellness product sampling, and branded entertainment.",
        link: "/fourthportfolio",
        category: "photography",
    },

    // {
    //     id: "project-5",
    //     imageSrc: Portfolio4,
    //     title: "CREATING CULTURE WITH VIBECITY FESTIVAL",
    //     description:
    //         "As the official brand experience partner for VibeCity, we curated a campaign that celebrated youth creativity, music, and identity. From pre-event digital activations to on-ground immersive zones, our work turned a regular festival into a cultural moment.",
    //     category: "photography",
    // },

]



// src/data/insightsData.js
const insightsData = [
    {
        id: 1,
        title: 'Why Brand Activations Are Still The Most Powerful Form',
        category: 'Insights',
        image: Insight1,
        date: "February 24, 2025",
        excerpt: 'In an age of digital overload, physical brand experiences still create the deepest connections...',
        content: `Full article content goes here…`,
        tags: ['Newsletter', 'P2P Experts', 'Media Works']

    },
    {
        id: 2,
        title: '5 Ways to Maximize ROI On Your Next Campaign',
        category: 'Insights',
        image: Insight2,
        date: "March 24, 2025",
        excerpt: 'Great campaigns don’t just look good — they perform. From smart channel planning to aligning creative…',
        content: `Full article content goes here…`,
            tags: ['Newsletter', 'P2P Experts', 'Media Works']

    },
    {
        id: 3,
        title: 'The Future of BTL Marketing in Africa',
        category: 'Insights',
        image: Insight1,
        date: "April 24, 2025",
        excerpt: 'With rising youth populations, increased mobile usage, and a shift in cultural engagement…',
        content: `Full article content goes here…`,
        tags: ['Newsletter', 'P2P Experts', 'Media Works']

    },
];

export default insightsData;


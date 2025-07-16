import Portfolio1 from "./assets/portfolio/portfolio1.png"
import Portfolio2 from "./assets/portfolio/portfolio2.png"
import Portfolio3 from "./assets/portfolio/portfolio3.png"
import Portfolio4 from "./assets/portfolio/portfolio4.png"


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

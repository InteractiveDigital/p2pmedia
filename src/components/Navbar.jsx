/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import logo from "../assets/logo.png"
import { Link, useLocation } from 'react-router-dom'
import { Search, Menu, X } from 'lucide-react'

export default function Navbar() {
    const [open, setOpen] = useState(false)
    const location = useLocation()
    const currentPath = location.pathname

    return (
        <nav className="fixed top-0 left-0 right-0 w-full border-b-2 bg-white z-50">
            <div className="
        flex items-center justify-between
        h-[70px] px-4
        md:h-[80px] md:px-8
        lg:h-[92px] lg:px-[150px] 4xl:px-[200px]
      ">
                {/* logo */}
                <img
                    src={logo}
                    alt="logo"
                    className="w-[127px] h-[23px] md:h-8 lg:auto"
                />

                {/* desktop links @ lg+ */}
                <ul className="hidden lg:flex items-center justify-around md:gap-6 lg:gap-[24px] lg:w-[617px] h-[43px]">
                    <Link to="/"><li className={`text-[#25295C] ${currentPath === '/' ? 'text-[#DE5334] underline underline-offset-[6px] decoration-2' : ''}`}>Home</li></Link>
                    <Link to="/about"><li className={`text-[#25295C] ${currentPath === '/about' ? 'text-[#DE5334] underline underline-offset-[6px] decoration-2' : ''}`}>About Us</li></Link>
                    <Link to="/services"><li className={`text-[#25295C] ${currentPath === '/services' ? 'text-[#DE5334] underline underline-offset-[6px] decoration-2' : ''}`}>Services</li></Link>
                    <Link to="/portfolio"><li className={`text-[#25295C] ${currentPath === '/portfolio' ? 'text-[#DE5334] underline underline-offset-[6px] decoration-2' : ''}`}>Portfolio</li></Link>
                    <Link to="/insights"><li className={`text-[#25295C] ${currentPath === '/insights' ? 'text-[#DE5334] underline underline-offset-[6px] decoration-2' : ''}`}>Insights</li></Link>
                    <Link to="/contact"><li className={`text-[#25295C] ${currentPath === '/contact' ? 'text-[#DE5334] underline underline-offset-[6px] decoration-2' : ''}`}>Contact Us</li></Link>
                </ul>

                {/* hamburger @ sm/md, search icon @ lg+ */}
                <div className="flex items-center gap-4">
                    <button className="lg:hidden p-2" onClick={() => setOpen(o => !o)}>
                        {open
                            ? <X className="w-6 h-6 text-[#25295C]" />
                            : <Menu className="w-6 h-6 text-[#25295C]" />
                        }
                    </button>
                    <div className="hidden lg:flex w-[43px] h-[44px] items-center justify-center rounded-full bg-[#E9EAEF]">
                        <Search className="text-[#DE5334]" />
                    </div>
                </div>
            </div>

            {/* sliding panel menu on sm/md */}
            <div className={`
        fixed top-0 left-0 h-full
        w-3/4 max-w-xs
        transform transition-transform duration-300 ease-in-out
        ${open ? 'translate-x-0' : '-translate-x-full'}
        bg-white/30 backdrop-blur-lg
        border-r-2 border-gray-200
        lg:hidden z-40
      `}>
                <ul className="flex flex-col mt-[70px] space-y-6 px-6">
                    <Link to="/">
                        <li
                            onClick={() => setOpen(false)}
                            className={`text-[#25295C] px-3 py-2 rounded-lg ${currentPath === '/' ? 'bg-white/40 backdrop-blur-md text-[#DE5334]' : ''}`}
                        >
                            Home
                        </li>
                    </Link>
                    <Link to="/about">
                        <li
                            onClick={() => setOpen(false)}
                            className={`text-[#25295C] px-3 py-2 rounded-lg ${currentPath === '/about' ? 'bg-white/40 backdrop-blur-md text-[#DE5334]' : ''}`}
                        >
                            About Us
                        </li>
                    </Link>
                    <Link to="/services">
                        <li
                            onClick={() => setOpen(false)}
                            className={`text-[#25295C] px-3 py-2 rounded-lg ${currentPath === '/services' ? 'bg-white/40 backdrop-blur-md text-[#DE5334]' : ''}`}
                        >
                            Services
                        </li>
                    </Link>
                    <Link to="/portfolio">
                        <li
                            onClick={() => setOpen(false)}
                            className={`text-[#25295C] px-3 py-2 rounded-lg ${currentPath === '/portfolio' ? 'bg-white/40 backdrop-blur-md text-[#DE5334]' : ''}`}
                        >
                            Portfolio
                        </li>
                    </Link>
                    <Link to="/insights">
                        <li
                            onClick={() => setOpen(false)}
                            className={`text-[#25295C] px-3 py-2 rounded-lg ${currentPath === '/insights' ? 'bg-white/40 backdrop-blur-md text-[#DE5334]' : ''}`}
                        >
                            Insights
                        </li>
                    </Link>
                    <Link to="/contact">
                        <li
                            onClick={() => setOpen(false)}
                            className={`text-[#25295C] px-3 py-2 rounded-lg ${currentPath === '/contact' ? 'bg-white/40 backdrop-blur-md text-[#DE5334]' : ''}`}
                        >
                            Contact Us
                        </li>
                    </Link>
                    <Link to="/search">
                        <li
                            onClick={() => setOpen(false)}
                            className="flex items-center gap-2 text-[#25295C]"
                        >
                            <Search className="w-5 h-5 text-[#DE5334]" />
                            <span>Search</span>
                        </li>
                    </Link>
                </ul>
            </div>

            {/* backdrop */}
            {open && (
                <div
                    className="fixed inset-0 bg-black/20 lg:hidden z-30"
                    onClick={() => setOpen(false)}
                />
            )}
        </nav>
    )
}


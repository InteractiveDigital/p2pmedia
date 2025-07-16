/* eslint-disable no-unused-vars */
import React from "react";
import logo from "../assets/logo.png";
import { ArrowUpRight, Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
    return (
        <div>
            {/* Main Content */}
            <main className="w-full h-auto lg:h-[482px] bg-[#F6F5F2] px-6 py-8 md:py-16 lg:px-[150px] 4xl:px-[200px]">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
                    {/* Left Section */}
                    <div className="space-y-8">
                        <div className="flex items-center">
                            <img src={logo} alt="P2P Logo" className="h-[23px]" loading="lazy" />
                        </div>
                        <div className="space-y-4 w-full md:w-[753px] h-auto md:h-[170px] flex flex-col">
                            <h1 className="text-[24px] md:text-4xl lg:text-5xl font-medium md:leading-[56px] tracking-[-3%]">
                                <span className="text-[#25295C]">{"We've Cleared "}</span>
                                <span className="text-[#DE5334]">Our Schedule</span>
                                <br />
                                <span className="text-[#DE5334]">(Just For You)</span>
                                <span className="text-[#25295C]">. Contact Us.</span>
                            </h1>
                            <p className="text-slate-600 text-lg md:text-xl">
                                We Look Forward To Assisting You With Your Media Works
                            </p>
                        </div>
                        <button className="bg-[#DE5334] hover:bg-orange-600 text-white px-6 py-3 rounded-full text-lg font-medium inline-flex items-center">
                            Lets get Started
                            <ArrowUpRight className="ml-2 h-5 w-5" />
                        </button>
                    </div>

                    {/* Right Section - Contact Info */}
                    <div className="space-y-8 mt-12 lg:mt-32 ml-0 lg:ml-40">
                        <h2 className="text-[#25295C] font-bold text-xl mb-6">CONTACT US</h2>
                        <div className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <h3 className="text-[#25295C] font-semibold mb-2">Our Phone</h3>
                                    <p className="text-[#DE5334] font-medium">+233 24 522 4993</p>
                                </div>
                                <div>
                                    <h3 className="text-[#25295C] font-semibold mb-2">Mon-Fri:</h3>
                                    <p className="text-[#DE5334] font-medium">8:30am-5:30pm</p>
                                </div>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <h3 className="text-[#25295C] font-semibold mb-2">Our Email</h3>
                                    <p className="text-[#DE5334] font-medium">office@p2p.com</p>
                                </div>
                                <div>
                                    <h3 className="text-[#25295C] font-semibold mb-2">Kanda,</h3>
                                    <p className="text-[#DE5334] font-medium">1140 2244 St, AC 94103</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            {/* Footer */}
            <footer className="px-6 md:px-8 py-8 mt-2 lg:px-[150px] 4xl:px-[200px]">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                    <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
                        <p className="text-slate-600 text-sm">P2P © 2023. All rights reserved.</p>
                        <div className="flex space-x-4 text-sm">
                            <a href="#" className="text-slate-600 hover:text-[#25295C]">Terms &#38; Conditions</a>
                            <a href="#" className="text-slate-600 hover:text-[#25295C]">Privacy Policy</a>
                            <a href="#" className="text-slate-600 hover:text-[#25295C]">Support</a>
                        </div>
                    </div>
                    <div className="flex space-x-4">
                        <a href="#" className="text-slate-600 hover:text-[#DE5334]"><Twitter className="h-5 w-5" /></a>
                        <a href="#" className="text-slate-600 hover:text-[#DE5334]"><Facebook className="h-5 w-5" /></a>
                        <a href="#" className="text-slate-600 hover:text-[#DE5334]"><Linkedin className="h-5 w-5" /></a>
                        <a href="#" className="text-slate-600 hover:text-[#DE5334]"><Instagram className="h-5 w-5" /></a>
                    </div>
                </div>
            </footer>
        </div>
    );
}

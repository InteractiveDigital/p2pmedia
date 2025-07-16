/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { MapPin, Phone, Mail } from "lucide-react";
import vector from "../assets/service/vector2.png"
import contactbg from "../assets/contactbg.png"

export default function Contact() {
    return (
        <div className="relative w-full bg-white overflow-hidden pt-[70px] md:pt-[80px] lg:pt-[92px]">
            {/* Background geometric shapes */}
            <img
                src={vector}
                alt="background vector"
                loading="lazy"
                className="absolute top-0 right-0 object-cover"
            />

            <div className="container mx-auto px-4 lg:px-[150px] 4xl:px-[200px] py-16">
                {/* Heading */}
                <div className="mb-6">
                    <h2 className="text-5xl font-bold">
                        <span className="text-[#2d3252]">Let's </span>
                        <span className="text-[#e85a37]">Connect</span>
                    </h2>
                    <p className="text-[#2d3252] mt-4 text-lg">We Look Forward To Learning About Your Media Goals.</p>
                </div>

                {/* Contact Information */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                    {/* Location */}
                    <div className="flex items-center">
                        <div className="bg-[#2d3252] rounded-full p-5 flex items-center justify-center w-16 h-16">
                            <MapPin className="text-white" size={24} />
                        </div>
                        <div className="ml-4">
                            <h3 className="text-[#e85a37] font-medium">Kanda</h3>
                            <p className="text-[#2d3252]">1140 2244 St, AC 94103</p>
                        </div>
                    </div>

                    {/* Phone */}
                    <div className="flex items-center">
                        <div className="bg-[#2d3252] rounded-full p-5 flex items-center justify-center w-16 h-16">
                            <Phone className="text-white" size={24} />
                        </div>
                        <div className="ml-4">
                            <h3 className="text-[#e85a37] font-medium">Our Phone</h3>
                            <p className="text-[#2d3252]">+1(122)800 88 08</p>
                        </div>
                    </div>

                    {/* Email */}
                    <div className="flex items-center">
                        <div className="bg-[#2d3252] rounded-full p-5 flex items-center justify-center w-16 h-16">
                            <Mail className="text-white" size={24} />
                        </div>
                        <div className="ml-4">
                            <h3 className="text-[#e85a37] font-medium">Our Email</h3>
                            <p className="text-[#2d3252]">1140 2244@gmail.com</p>
                        </div>
                    </div>
                </div>



                <div className="mt-20 rounded-[40px] overflow-hidden bg-white shadow-lg">
                    <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[600px] relative">
                        {/* Left side - Form */}
                        <div className="relative z-10 bg-[#3d4466] rounded-[40px] p-4 lg:p-12 text-white lg:-mr-20 lg:shadow-2xl">
                            {/* Contact Us Button */}
                            <button
                                className="rounded-full border border-white/30 text-white hover:bg-white hover:text-[#3d4466] mb-8 bg-transparent px-6 py-2"
                            >
                                CONTACT US
                            </button>

                            {/* Heading */}
                            <div className="mb-8">
                                <h2 className="text-4xl lg:text-5xl font-bold">
                                    <span className="text-white">Get in </span>
                                    <span className="text-[#e85a37]">Touch</span>
                                </h2>
                                <p className="text-white/80 mt-4 text-lg">
                                    Whether it's a campaign, an event, or a bold rebrand we're all ears.
                                </p>
                            </div>

                            {/* Form */}
                            <form className="space-y-4 lg:space-y-8 4xl:space-y-10">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <input
                                        type="text"
                                        placeholder="your name"
                                        className="w-full px-4 py-3 rounded-full bg-white/90 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#e85a37]"
                                    />
                                    <input
                                        type="email"
                                        placeholder="email"
                                        className="w-full px-4 py-3 rounded-full bg-white/90 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#e85a37]"
                                    />
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="relative">
                                        <div className="flex items-center bg-white/90 rounded-full px-4 py-3">
                                            <div className="flex items-center mr-2">
                                                <span className="text-lg mr-1 text-gray-500">🇬🇭</span>
                                                <span className="text-gray-500">↓</span>
                                            </div>
                                            <input
                                                type="tel"
                                                placeholder="+233 24 522 4993"
                                                className="flex-1 bg-transparent text-gray-800 placeholder-gray-500 focus:outline-none"
                                            />
                                        </div>
                                    </div>
                                    <input
                                        type="text"
                                        placeholder="company name"
                                        className="w-full px-4 py-3 rounded-full bg-white/90 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#e85a37]"
                                    />
                                </div>

                                <textarea
                                    placeholder="your message..."
                                    rows={6}
                                    className="w-full px-4 py-3 rounded-2xl bg-white/90 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#e85a37] resize-none"
                                ></textarea>

                                <div className="flex justify-end pt-4">
                                    <button
                                        type="submit"
                                        className="bg-[#e85a37] hover:bg-[#d14a2a] text-white px-8 py-3 rounded-full font-medium"
                                    >
                                        Next
                                    </button>
                                </div>
                            </form>
                        </div>

                        {/* Right side - Image */}
                        <div className="relative bg-gray-100">
                            <img
                                src={contactbg}
                                alt="Person working at audio mixing console"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute lg:w-[441px] bottom-6 left-6 lg:left-28 right-6">
                                <div className="backdrop-blur-md bg-white/20 border border-white/30 rounded-2xl p-6 shadow-lg">
                                    <p className="text-white text-sm leading-relaxed font-medium">
                                        Tell us what you're working on, what you're dreaming of, or what challenges you're facing. We're
                                        here to listen, collaborate, and help bring your ideas to life with strategy, creativity, and
                                        impact.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <div className="flex flex-col gap-10 bg-gray-50 px-4 lg:px-[150px] 4xl:px-[200px] py-10">
                {/* Address Tag */}
                <span className="flex items-center justify-center uppercase text-[10px] font-semibold text-[#f15a29] border border-[#f15a29] rounded-full w-[113px] h-[34px] tracking-wide  lg:mx-0">
                    Address
                </span>

                {/* Content Wrapper */}
                <div className="flex flex-col lg:flex-row w-full">
                    {/* Map Section */}
                    <div className="rounded-t-[40px] lg:rounded-l-[40px] lg:rounded-tr-none overflow-hidden shadow-lg w-full lg:w-[927px] h-[300px] sm:h-[400px] md:h-[500px] lg:h-[681px]">
                        <iframe
                            title="Kanda Estates Map"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3970.9283425599324!2d-0.1979086252547874!3d5.577611894402988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf7577c30e7581%3A0xbaefbc6089a05a78!2sKanda%20estate!5e0!3m2!1sen!2sgh!4v1752178272662!5m2!1sen!2sgh"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>

                    {/* Text Section */}
                    <div className="text-center lg:text-left space-y-4 w-full lg:w-[300px] bg-white rounded-b-[40px] lg:rounded-r-[40px] lg:rounded-bl-none flex flex-col items-start justify-center px-0 md:px-6 py-8">
                        {/* Location Tag */}
                        <span className="inline-block uppercase text-[9px] font-semibold text-[#3f3f3f] bg-white border border-gray-300 px-2 py-1 rounded-full tracking-wide shadow-sm">
                            Accra - Ghana
                        </span>

                        {/* Address Details */}
                        <p className="text-[16px] font-medium text-[#1f2754] leading-relaxed">
                            <span className="text-[#f15a29] font-semibold">Kanda Estates</span>, Accra, <br />
                            Greater Accra, Ghana
                        </p>

                        {/* Button */}
                        <a
                            href="https://maps.app.goo.gl/5U6GhCLMEve7LtbY8"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block bg-[#f15a29] text-white text-[12px] font-medium px-5 py-2 rounded-full hover:bg-[#e04d1f] transition-colors duration-200 shadow-md hover:shadow-lg"
                        >
                            View Google Maps
                        </a>
                    </div>
                </div>
            </div>


        </div>
    );
}





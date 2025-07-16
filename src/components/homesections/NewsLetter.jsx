/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import news from "../../assets/news.png"
import vector from "../../assets/service/vector.png"

export default function NewsLetter() {
    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState("");

    // simple email regex
    const validateEmail = (value) =>
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

    const handleEmailChange = (e) => {
        const value = e.target.value;
        setEmail(value);

        if (!value || validateEmail(value)) {
            setEmailError("");
        } else {
            setEmailError("Please enter a valid email address");
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!validateEmail(email)) {
            setEmailError("Please enter a valid email address");
            return;
        }
        // Valid email — no further action
    };
    return (
        <section className="w-full">
            <div className="grid lg:grid-cols-2 min-h-[400px]">
                {/* Left side - Newsletter signup */}
                <div className="relative bg-[#25295C] px-4 py-12 lg:px-[150px] 4xl:px-[200px] lg:py-20 flex flex-col justify-center">
                    {/* Background vector graphic */}
                    <img
                        src={vector}
                        alt="background vector"
                        loading="lazy"
                        className="absolute inset-0 object-cover"
                    />
                    <div className="max-w-md">
                        {/* Latest News Badge */}
                        <div className="inline-block mb-8">
                            <span className="px-4 py-2 text-sm font-medium text-white border border-white/20 rounded-full opacity-0 animate-fade-in-up delay-[200ms]">
                                LATEST NEWS
                            </span>
                        </div>

                        {/* Heading */}
                        <h1 className="text-[24px] md:text-4xl lg:text-5xl md:w-[573px] md:h-[112px] font-medium text-white mb-8 md:leading-[56px] tracking-[-3%] opacity-0 animate-fade-in-up delay-[500ms]">
                            Get All The <span className="text-orange-500">Latest News</span>
                            <br />
                            & <span className="text-orange-500">Resources</span>
                        </h1>

                        {/* Email signup form */}
                        <form
                            onSubmit={handleSubmit}
                            className="flex flex-col md:flex-row gap-4  opacity-0 animate-fade-in-up delay-[700ms]"
                            noValidate
                        >
                            <div className="flex-1 flex flex-col ">
                                <input
                                    type="email"
                                    value={email}
                                    onChange={handleEmailChange}
                                    placeholder="Email Address"
                                    className="flex-1 bg-white border-0 px-6 py-3 text-gray-900 placeholder:text-gray-500 rounded-full h-12"
                                    required
                                />
                                {emailError && (
                                    <p className="mt-2 text-sm text-red-500">{emailError}</p>
                                )}
                            </div>

                            <button
                                type="submit"
                                // disabled={!email || emailError}
                                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full h-12 font-medium disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>

                {/* Right side - Workspace image */}
                <div className="relative h-full overflow-hidden opacity-0 animate-fade-in-up delay-[900ms]">
                    <img
                        src={news}
                        alt="Modern workspace with iMac showing 'DO MORE.' on screen, wooden desk with office supplies and shelving"
                        className="object-cover w-full h-full"
                    />
                </div>
            </div>
        </section>
    );
}

/* eslint-disable no-unused-vars */
import React from 'react'
import award from "../assets/award.png"

export default function Awards() {
    return (
        <section className="px-4 lg:px-[150px] 4xl:px-[200px] py-12 bg-[#F7F6F3]">
            {/* pill */}
            <div>
                <span className="inline-block px-4 py-1 border border-orange-500 rounded-full text-orange-500 uppercase text-xs font-medium">
                    Awards
                </span>
            </div>

            {/* heading */}
            <h2 className="mt-4 text-3xl lg:text-4xl font-bold text-[#25295C]">
                Awards <span className="text-orange-500">& Recognition</span>
            </h2>

            {/* cards */}
            <div className="mt-8 flex flex-col md:flex-row items-center justify-between gap-8">
                {/* MTN Awards */}
                <div className="flex items-center gap-4 text-left">
                    <img
                        src={award}
                        alt="MTN Awards Trophy"
                        className="w-32 h-auto"
                    />
                    <div className="flex flex-col">
                        <span className="text-xs uppercase text-orange-500 tracking-wide font-medium mb-1">
                            MTN Awards
                        </span>
                        <span className="text-sm text-[#25295C]">
                            Mtn Creatives
                        </span>
                    </div>
                </div>

                {/* Pitcher Awards */}
                <div className="flex items-center gap-4 text-left">
                    <img
                        src={award}
                        alt="Pitcher Awards Trophy"
                        className="w-28 h-auto"
                    />
                    <div className="flex flex-col">
                        <span className="text-xs uppercase text-orange-500 tracking-wide font-medium mb-1">
                            Pitcher Awards
                        </span>
                        <span className="text-sm text-[#25295C]">
                            Best Visual Effects
                        </span>
                    </div>
                </div>

                {/* Brandcom Awards */}
                <div className="flex items-center gap-4 text-left">
                    <img
                        src={award}
                        alt="Brandcom Awards Trophy"
                        className="w-24 h-auto"
                    />
                    <div className="flex flex-col">
                        <span className="text-xs uppercase text-orange-500 tracking-wide font-medium mb-1">
                            Brandcom Awards
                        </span>
                        <span className="text-sm text-[#25295C]">
                            Best Radio Ad
                        </span>
                    </div>
                </div>
            </div>
        </section>
    )
}

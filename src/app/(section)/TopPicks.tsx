'use client'
import Image from "next/image"
import { useEffect } from "react"
import gsap from "gsap"
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const TopPicks = ({ }) => {
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger)
        const mm = gsap.matchMedia();

        mm.add("(max-width:690px)", () => {
            gsap.to(".move-top", {
                scrollTrigger: {
                    trigger: ".move-top",
                    toggleActions: 'restart none none none',
                },
                y: -10, // Adjust the zoom scale as per your need
                duration: 2
            });
        })

        mm.add("(min-width:691px)", () => {
            gsap.to(".move-top", {
                scrollTrigger: {
                    trigger: ".move-top",
                    toggleActions: 'restart none none none',
                },
                y: -100, // Adjust the zoom scale as per your need
                duration: 2
            });
        })

    }, [])
    return (
        <section className="relative flex h-full w-full items-center justify-center py-8 md:py-24" id="menu"
            style={{
                backgroundImage: " url('/images/home/leaf-skeleton.png')",
                backgroundPosition: "center bottom",
                backgroundSize: "8%",
                backgroundRepeat: "no-repeat"
            }}
        >
            <div className="lines">
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
            </div>
            <div className="flex h-full w-full flex-col items-center justify-center gap-8 md:gap-24 "
                style={{
                    backgroundImage: "url('/images/home/lemonslice.png'),url('/images/home/branch.png'),url('/images/home/leaf-down.png')",
                    backgroundPosition: "left top, right top , left bottom",
                    backgroundSize: "8%, 8%, 6%",
                    backgroundRepeat: "no-repeat, no-repeat, no-repeat"
                }}
            >
                <div className="flex flex-col gap-3 justify-center items-center">
                    <p className="w-full text-center text-[#040404] font-playfair text-lg">Our top picks</p>
                    <p className="w-full text-center text-[#040404] font-italiana text-5xl md:text-7xl">Monthly Highlights</p>
                </div>
                <div
                    style={{
                        backgroundImage: "url('/images/home/aboutbg.png')",
                        backgroundSize: "contai",
                        backgroundRepeat: "repeat"
                    }}
                    className="w-full px-3 md:px-12 py-12 flex justify-center"
                >
                    <div className="max-w-[1300px] flex flex-col md:flex-row gap-6 justify-center md:justify-between items-center">
                        <div className="move-top flex flex-col justify-center items-center gap-4">
                            <Image
                                src='/images/home/adanakebab.png'
                                width={312}
                                height={397}
                                alt="adanakebab"
                            />
                            <p className="text-black font-italiana text-xl tracking-[4px] font-semibold">Adana Kebab</p>
                        </div>
                        <div className="flex flex-col justify-center items-center gap-4">
                            <Image
                                src='/images/home/mezeplatter.png'
                                width={312}
                                height={397}
                                alt="mezeplatter"
                            />
                            <p className="text-black font-italiana text-xl tracking-[4px] font-semibold">Meze Platter</p>
                        </div>
                        <div className="move-top flex flex-col justify-center items-center gap-4">
                            <Image
                                src='/images/home/becklava.png'
                                width={312}
                                height={397}
                                alt="beklava"
                            />
                            <p className="text-black font-italiana text-xl tracking-[4px] font-semibold">Becklava</p>
                        </div>
                        <div className="flex flex-col justify-center items-center gap-4">
                            <Image
                                src='/images/home/kebabplatter.png'
                                width={312}
                                height={397}
                                alt="kebabplatter"
                            />
                            <p className="text-black font-italiana text-xl tracking-[4px] font-semibold">Kebab Platter</p>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    )
}

export default TopPicks
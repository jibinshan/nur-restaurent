'use client'
import Image from "next/image"
import Link from "next/link"
import { useEffect } from "react"
import gsap from "gsap"
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const Menu = ({ }) => {
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger)
        gsap.to(".zoom-scroll", {
            scrollTrigger: {
                trigger: ".zoom-scroll",
                toggleActions: 'restart none none none',
            },
            scale: 1, // Adjust the zoom scale as per your need
            duration: 2
        });

        gsap.to(".zoom-scroll-two", {
            scrollTrigger: {
                trigger: ".zoom-scroll",
                toggleActions: 'restart none none none',
            },
            scale: 1, // Adjust the zoom scale as per your need
            duration: 2
        });

        gsap.to(".zoom-scroll-three", {
            scrollTrigger: {
                trigger: ".zoom-scroll",
                toggleActions: 'restart none none none',
            },
            scale: 1, // Adjust the zoom scale as per your need
            duration: 2
        });

        gsap.to(".zoom-scroll-four", {
            scrollTrigger: {
                trigger: ".zoom-scroll",
                toggleActions: 'restart none none none',
            },
            scale: 1, // Adjust the zoom scale as per your need
            duration: 2
        });
    }, [])
    return (
        <section className="relative flex h-full w-full items-center justify-center py-8 md:py-24" id="menu"
            style={{
                backgroundImage: " url('/images/home/leaf-skeleton.png')",
                backgroundPosition: "center bottom",
                backgroundSize: " 10%",
                backgroundRepeat: "no-repeat"
            }}
        >
            <div className="flex h-full w-full flex-col items-center justify-center gap-8 "
                style={{
                    backgroundImage: "url('/images/home/leaf-down.png')",
                    backgroundPosition: "left top",
                    backgroundSize: "6%",
                    backgroundRepeat: "no-repeat"
                }}
            >
                <div className="flex flex-col gap-3 justify-center items-center">
                    <p className="w-full text-center text-[#040404] font-playfair text-lg">Menu</p>
                    <p className="w-full text-center text-[#040404] font-italiana text-5xl md:text-7xl">Explore Our Menu</p>
                </div>
                <div
                    style={{
                        backgroundImage: "url('/images/home/aboutbg.png')",
                        backgroundSize: "contain",
                        backgroundRepeat: "repeat"
                    }}
                    className="w-full px-3 md:px-12 py-12 flex justify-center"
                >
                    <div className="max-w-[1300px] flex flex-col md:flex-row gap-6 justify-center md:justify-between items-center">
                        <div className="flex flex-col justify-center items-center gap-4">
                            <Image
                                src='/images/home/breakfast.png'
                                width={330}
                                height={330}
                                alt="breakfast"
                                className="zoom-scroll"
                                style={{
                                    transform: 'scale(0.8)',
                                }}
                            />
                            <p className="text-black font-italiana text-xl tracking-[4px] font-semibold">Breakfast</p>
                            <Link href="/menu" className="text-[#202020] border-b-[1px] border-b-[#202020] font-playfair text-lg">view menu</Link>
                        </div>
                        <div className="flex flex-col justify-center items-center gap-4">
                            <Image
                                src='/images/home/brunch.png'
                                width={330}
                                height={330}
                                alt="brunch"
                                className="zoom-scroll-two"
                                style={{
                                    transform: 'scale(0.8)',
                                }}
                            />
                            <p className="text-black font-italiana text-xl tracking-[4px] font-semibold">Brunch</p>
                            <Link href="/menu" className="text-[#202020] border-b-[1px] border-b-[#202020] font-playfair text-lg">view menu</Link>
                        </div>
                        <div className="flex flex-col justify-center items-center gap-4">
                            <Image
                                src='/images/home/lunch.png'
                                width={330}
                                height={330}
                                alt="lunch"
                                className="zoom-scroll-three"
                                style={{
                                    transform: 'scale(0.8)',
                                }}
                            />
                            <p className="text-black font-italiana text-xl tracking-[4px] font-semibold">Lunch</p>
                            <Link href="/menu" className="text-[#202020] border-b-[1px] border-b-[#202020] font-playfair text-lg">view menu</Link>
                        </div>
                        <div className="flex flex-col justify-center items-center gap-4">
                            <Image
                                src='/images/home/coffee.png'
                                width={330}
                                height={330}
                                alt="coffee"
                                className="zoom-scroll-four"
                                style={{
                                    transform: 'scale(0.8)',
                                }}
                            />
                            <p className="text-black font-italiana text-xl tracking-[4px] font-semibold">Coffee</p>
                            <Link href="/menu" className="text-[#202020] border-b-[1px] border-b-[#202020] font-playfair text-lg">view menu</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    )
}

export default Menu
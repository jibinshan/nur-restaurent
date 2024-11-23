'use client'
import Image from "next/image"
import Link from "next/link"
import { useEffect } from "react"
import gsap from "gsap"
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const Contact = ({ }) => {
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger)
        gsap.to(".zoom-scrolls", {
            scrollTrigger: {
                trigger: ".zoom-scrolls",
                toggleActions: 'restart none none none',
            },
            scale: 1, // Adjust the zoom scale as per your need
            duration: 2.5
        });
        gsap.to(".zoom-scrolls-two", {
            scrollTrigger: {
                trigger: ".zoom-scrolls-two",
                toggleActions: 'restart none none none',
            },
            scale: 1, // Adjust the zoom scale as per your need
            duration: 2.5
        });
    }, [])
    return (
        <section className="relative flex flex-col md:flex-row  md:items-end md:justify-between gap-6 h-full md:h-[100vh] w-full items-center justify-center bg-[#240e0d] py-12 pb-6 px-3 md:px-12" id="contact">
            <div className="lines">
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
            </div>
            <Image
                src="/images/home/contact-one.png"
                width={524}
                height={686}
                alt="contact"
                className="zoom-scrolls w-full md:w-1/3 md:h-4/5 z-30"
                style={{
                    transform: 'scale(0.5)',
                }}
            />
            <div
                className="relative h-full w-full md:w-1/3 bg-primary py-24 px-6 rounded-t-full z-30">
                <div className="absolute left-0 top-0 h-full w-full overflow-hidden rounded-t-full"
                    style={{
                        backgroundImage: "url('/images/home/frame.png')",
                        backgroundSize: "cover",
                        backgroundRepeat: "repeat"
                    }}
                >
                </div>
                <div className="flex flex-col items-center justify-center gap-6 z-40">
                    <div className="flex flex-col gap-2 items-center justify-center">
                        <p className="text-[#F7F4ED] font-playfair text-lg">Connect</p>
                        <p className="text-[#F7F4ED] font-italiana text-5xl md:text-6xl">Contact us</p>
                    </div>
                    <div className="flex flex-col gap-2 items-center justify-center">
                        <p className="text-[#B57978] font-inter text-lg">Booking request</p>
                        <Link href="tel:+44 1234 567890" className="text-[#FFE9B6] font-inter text-xl">+44 1234 567890</Link>
                        <Link href="mailto:info@nurcafe.co.uk" className="text-[#FFE9B6] font-inter text-xl">info@nurcafe.co.uk</Link>
                    </div>
                    <div className="flex flex-col gap-2 items-center justify-center">
                        <p className="text-[#B57978] font-inter text-lg">Location</p>
                        <Link href="tel:+44 1234 567890" className="text-[#FFE9B6] font-inter text-xl">45 Deansgate, Manchester,<br /> United Kingdom, M3 2AY.</Link>
                    </div>
                    <div className="flex flex-col gap-2 items-center justify-center">
                        <p className="text-[#B57978] font-inter text-lg">Opening Hours</p>
                        <p className="text-[#FFE9B6] font-inter text-xl">Monday-Friday: 8:00 AM - 10:00 PM</p>
                        <p className="text-[#FFE9B6] font-inter text-xl">Saturday-Sunday: 9:00 AM - 11:00 PM</p>
                    </div>
                </div>
            </div>
            <Image
                src="/images/home/contact-two.png"
                width={524}
                height={686}
                alt="contact"
                className="zoom-scrolls-two w-full md:w-1/3 md:h-4/5 z-30"
                style={{
                    transform: 'scale(0.5)',
                }}
            />
        </section >
    )
}

export default Contact
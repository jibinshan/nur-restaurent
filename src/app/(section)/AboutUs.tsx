'use client'
import { Icons } from "@/components/Icon"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { useEffect } from "react"
import gsap from "gsap"
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const AboutUs = ({ }) => {

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger)

        gsap.to('.section-one', {
            scrollTrigger: {
                trigger: ".section-one",
                toggleActions: 'restart none none none',
                // start: "top 80%", // When the top of the .title enters 80% of the viewport
                // end: "top 50%",   // When the top of the .title reaches 50% of the viewport
                // scrub: true
            },
            y: -100,
            duration: 2

        })

        gsap.to('.left-container', {
            scrollTrigger: {
                trigger: ".section-one",
                toggleActions: 'restart none none none',
                // start: "top 80%", // When the top of the .title enters 80% of the viewport
                // end: "top 50%",   // When the top of the .title reaches 50% of the viewport
                // scrub: true
            },
            x: -100,
            duration: 2

        })

        const layers = document.querySelectorAll('.move');
        const speedFactor = 120;

        const onScroll = () => {
            const scrollY = window.scrollY;

            layers.forEach(layer => {
                const speed = parseFloat(layer.getAttribute('data-speed') ?? "0");

                // Calculate the movement based on scroll position
                const x = (window.innerWidth - scrollY * speed) / speedFactor;
                const y = (window.innerHeight - scrollY * speed) / speedFactor;

                // Apply the transform using GSAP
                gsap.to(layer, {
                    x,
                    y,
                    ease: "power1.out",
                });
            });
        };

        window.addEventListener("scroll", onScroll);
        return () => {
            window.removeEventListener("scroll", onScroll);
        };

    }, [])
    return (
        <section className="relative flex h-full md:h-[100vh] w-full items-center justify-center px-3 md:px-6 py-8 md:py-24" id="menu"
            style={{
                backgroundImage: "url('/camel.svg')",
                backgroundPosition: "right bottom",
                backgroundSize: "20%",
                backgroundRepeat: "no-repeat"
            }}
        >
            <div className="flex h-full w-full max-w-[1300px] flex-col md:flex-row items-center justify-center gap-8 z-30"
                style={{
                    backgroundImage: "url('/images/home/leaf-skeleton.png'),url('/images/home/leaf-top.png'), url('/images/home/leaf-down.png'), url('/images/home/leafs-skeleton.png')",
                    backgroundPosition: "left top, left bottom,right top,center center",
                    backgroundSize: "8%, 6%, 6%, 10%",
                    backgroundRepeat: "no-repeat,no-repeat,no-repeat,no-repeat"
                }}
            >
                <div className="relative section-one w-full md:w-1/2 flex items-center justify-center p-6 mt-[200px]"
                    style={{
                        backgroundImage: "url('/images/home/menubg.png')",
                        backgroundPosition: "center center",
                        backgroundSize: "contain",
                        backgroundRepeat: "no-repeat"
                    }}
                >
                    <Image
                        src='/images/home/menu.png'
                        width={570}
                        height={667}
                        alt="menu"
                        className="w-full md:w-2/3"
                    />
                    <div className="move absolute bottom-20 right-5 -rotate-12" data-speed='-3'>
                        <p className="font-saint text-5xl text-[#040404]">For the best memories</p>
                    </div>
                </div>
                <div className="w-full md:w-1/2 flex items-center justify-start md:justify-center">
                    <div className="left-container flex flex-col gap-4 md:-mr-[250px]">
                        <p className="text-[#040404] uppercase font-playfair">About us</p>
                        <p className="text-[#040404] font-italiana text-5xl md:text-7xl md:leading-[70px] font-[400]">Welcome<br />
                            to NuR Cafe</p>
                        <p className="text-[#262626] font-roboto w-full md:w-[500px]">NUR Cafe brings Arabian warmth to Manchester with hearty breakfasts, French-inspired pastries, and halal dishes crafted with care. A luxurious experience awaits, whether for coffee or a full meal.</p>
                        <Link href="/menu">
                            <Button className="flex font-playfair items-center justify-center gap-3 font-semibold px-6 py-7 rounded-full hover:bg-secondary">
                                View Menu
                                <Icons.rightArrow className="duration-300 ease-in-out group-hover:translate-x-1" />
                            </Button>
                        </Link>
                    </div>
                </div>
            </div >
        </section >
    )
}

export default AboutUs
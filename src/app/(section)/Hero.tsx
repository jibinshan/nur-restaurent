'use client'
import { Icons } from "@/components/Icon";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useEffect } from "react";
import gsap from 'gsap'


const Hero = ({ }) => {
    useEffect(() => {

        const tl = gsap.timeline()
        tl.from('.head-container', 2, {
            y: 50,
            opacity: 1,
            ease: 'power4.out'
        }).from('.head-hero', 1.5, {
            x: 200,
            opacity: 0,
            delay: -2
        }).from('.hero-button', 1.5, {
            y: 100,
            opacity: 0,
            ease: "power4.out",
            delay: -2
        })

        tl.fromTo(
            '.table-button',
            {
                opacity: 0, // Start invisible
                scale: 0.5, // Start smaller for a "pop-in" effect
            },
            {
                opacity: 1, // Fully visible
                scale: 1, // Restore to original size
                duration: 1, // Duration for fade-in and scale effect
                ease: 'power3.out', // Smooth easing effect
            }
        );

        // Rotation animation
        tl.to('.table-button', {
            rotation: 360,   // Full rotation
            duration: 10,     // Time for one rotation
            ease: 'linear',  // Consistent rotation speed
            repeat: -1,      // Infinite rotation
        });
    }, [])
    return (
        <section id="hero" className="relative flex w-full items-center justify-center">
            <div className="flex min-h-[100vh] w-full items-center justify-center bg-black">
                <div className="absolute left-0 top-0 z-10 h-full w-full bg-black/50"></div>
                <div className="absolute left-0 top-0 h-full w-full overflow-hidden">
                    <video
                        className="min-h-full min-w-full object-cover"
                        style={{ objectPosition: "center" }}
                        src="/video/home/hero.mp4"
                        autoPlay
                        loop
                        muted
                        playsInline
                    // poster="https://foodo-web-videos.s3.eu-west-2.amazonaws.com/istanbul-liverpool-banner.png"
                    ></video>
                </div>
                {/* <div className="z-50 flex h-full w-full max-w-[1300px] items-center justify-center">
                <div className="flex w-fit flex-col items-center justify-center gap-7">
                    <h1 className="text-center font-oswald text-5xl font-semibold text-[#fff4e3] sm:text-5xl md:text-8xl lg:leading-[110px]">
                        Welcome To
                        <br /> Istanbul Restaurent
                        <br />
                        Blackburn
                    </h1>
                    <Link href="/menu">
                        <Button className="flex items-center justify-center gap-3 rounded-full px-6 py-7">
                            View Menu <MoveRight />
                        </Button>
                    </Link>
                </div>
            </div> */}
                <div className="relative w-full z-50 flex md:h-[80vh] max-w-[1300px] items-center justify-center md:justify-start">
                    <div className="head-container flex w-full md:w-2/3 h-full  flex-col  justify-center items-start gap-7 px-3 md:px-0">
                        <h1 className="head-hero font-italiana text-5xl w-full sm:text-5xl md:text-8xl md:leading-[110px] text-center md:text-start text-background">
                            The Love <br />Language of <br />Arabian Hospitality
                        </h1>
                        <div className="w-full flex justify-center md:justify-start gap-4">
                            <Link href="/menu">
                                <Button className="hero-button flex font-playfair items-center justify-center gap-3 font-semibold px-6 py-7 uppercase bg-white text-black rounded-full hover:bg-[#9c5249] hover:text-white">
                                    View Menu
                                    <Icons.rightArrow className="duration-300 ease-in-out group-hover:translate-x-1" />
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="hidden absolute top-3 right-0 md:flex w-0 md:w-1/3 md:justify-center md:items-center">
                <Button
                    asChild
                    className="table-button z-50 flex aspect-square h-[240px] flex-col items-center font-inter font-thin justify-center rounded-full bg-[#1D1D1D] border-[2px] border-[#b58c67] px-0 py-0 text-center text-3xl uppercase text-[#b58c67] hover:bg-[#1D1D1D]"
                >
                    <Link href="/table-booking">
                        <Icons.dining color="#b58c67" className="w-24" />
                        Table<br /> Booking
                    </Link>
                </Button>
            </div>
        </section>
    );
};

export default Hero;

// <section id="hero" className="flex mt-24 md:mt-0 flex-col h-fit md:min-h-[100vh] w-full justify-end">
//     <div className="flex flex-col md:flex-row gap-3 w-full items-end justify-center">

//         <div className="w-full z-50 flex md:h-[80vh] max-w-[1300px] items-center justify-center md:justify-start">
//             <div className="flex w-fit h-full  flex-col  justify-center items-start gap-7 px-3 md:px-0">
//                 <h1 className="font-forum text-5xl w-full md:w-[550px] sm:text-5xl md:text-8xl md:leading-[80px] text-center md:text-start">
//                     Experience
//                     Authentic Flavors of
//                     Turkey
//                 </h1>
//                 <div className="w-full flex justify-center md:justify-start gap-4">
//                     <Link href="/menu">
//                         <Button className="flex font-bai items-center justify-center gap-3 md:py-5 rounded-2xl px-6 uppercase">
//                             ORDER NOW </Button>
//                     </Link>
//                     <Link href="/table-booking">
//                         <Button className="flex font-bai items-center justify-center gap-3 md:py-5 rounded-2xl px-6 uppercase">
//                             Book Table
//                         </Button>
//                     </Link>
//                 </div>
//             </div>
//         </div>
//         <div className="w-full md:w-1/2 flex items-center justify-center">
//             <Image src='/images/home/hero.png' alt="hero" width={720} height={728} className="w-full md:w-8/12" />
//         </div>
//     </div>
//     <div className="w-full flex items-end overflow-x-hidden">
//         <Image src='/images/home/herobottom.png' alt="hero" width={966} height={96} className="w-full md:w-7/12" />
//         <Image src='/images/home/herobottom.png' alt="hero" width={966} height={96} className="w-full md:w-7/12" />
//     </div>
// </section >
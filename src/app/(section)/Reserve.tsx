import { Icons } from "@/components/Icon"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { useEffect } from "react"
import gsap from "gsap"
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const Reserve = ({ }) => {
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger)
        gsap.to(".zoomin-scroll", {
            scrollTrigger: {
                trigger: ".zoomin-scroll",
                toggleActions: 'restart none none none',
            },
            scale: 1, // Adjust the zoom scale as per your need
            duration: 2.5
        });
    }, [])
    return (
        <section className="relative flex h-full w-full items-center justify-center bg-primary pt-8 md:pt-24" id="reserve">
            <div className="lines">
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
            </div>
            <div className="absolute left-0 top-0 h-full w-full overflow-hidden"
                style={{
                    backgroundImage: "url('/images/home/frame.png')",
                    backgroundSize: "contain",
                    backgroundRepeat: "repeat"
                }}
            >
            </div>
            <div className="flex h-full w-full max-w-[1300px] flex-col md:flex-row items-center justify-center gap-8 z-40">
                <div className="w-full md:w-1/2 flex items-center justify-center p-6 pb-0">
                    <Image
                        src='/images/home/reserve.png'
                        width={570}
                        height={667}
                        alt="menu"
                        className="zoomin-scroll w-full md:w-2/3"
                        style={{
                            transform: "scale(0.8)"
                        }}
                    />
                </div>
                <div className="w-full md:w-1/2 flex items-center justify-start md:justify-center">
                    <div className="flex flex-col gap-4 px-3 md:px-0 pb-12 md:pb-0">
                        <p className="text-[#F7F4ED] uppercase font-playfair">Booking</p>
                        <p className="text-[#F7F4ED] font-italiana text-5xl md:text-7xl md:leading-[70px] font-[400]">Reserve Your<br />
                            Table at Nur Cafe</p>
                        <p className="text-[#F7F4ED] font-roboto w-full md:w-[500px]">Experience the charm of Arabian hospitality. Book your table now for a memorable dining experience filled with flavorful dishes and warm ambiance.</p>
                        <Link href="/table-booking">
                            <Button className="flex font-playfair items-center justify-center gap-3 font-semibold px-6 py-7 rounded-full text-black bg-white hover:bg-secondary z-30">
                                Book Now
                                <Icons.rightArrow className="duration-300 ease-in-out group-hover:translate-x-1" />
                            </Button>
                        </Link>
                    </div>
                </div>
            </div >
        </section>
    )
}

export default Reserve
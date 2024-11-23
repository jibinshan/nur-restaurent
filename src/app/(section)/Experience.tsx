'use client'
import { MoveDownLeft, MoveUpRight } from "lucide-react"
import Image from "next/image"
import { useState } from "react"

const Experience = ({ }) => {
    const [item, setItem] = useState<string>('food')
    return (
        <section className="relative flex flex-col h-full w-full items-center justify-center px-3 py-12 lg:py-24 bg-primary gap-7">
            <p className="w-full text-[#fffdf1] font-forum text-5xl text-center tracking-widest md:text-9xl md:text-end font-[400] md:tracking-[106px] uppercase">ISTANBUL</p>
            <div className="relative max-w-[1300px] flex flex-col md:flex-row gap-4">
                <div className="w-full h-full md:w-1/2">
                    <p className="relative text-5xl md:text-8xl font-forum text-[#fffdf1] uppercase text-center md:text-start z-50">we offer
                        Unforgettable
                        Dining Experience</p>
                </div>
                <Image src='/images/home/offer.png' width={524} height={524} alt="offer" className="hidden md:flex md:absolute -top-[50px] left-[450px] z-10" />
                <div className="relative w-full h-full md:w-1/2 md:pl-24 flex flex-col items-end z-50">
                    <div className="w-full md:w-2/3 border-b-[1px] border-b-[#fffdf1] flex flex-col gap-2 py-4" onMouseOver={() => setItem('food')}>
                        <p className="w-full flex justify-between items-center text-[#fffdf1] text-5xl font-forum py-3"><span className="uppercase">Food</span> {item === "food" ? <MoveUpRight /> : <MoveDownLeft />}</p>
                        {item === "food" && (
                            <p className="w-full text-[#fffdf1] font-bai">Our menu features an exquisite blend of flavors, crafted with the finest ingredients to bring you the essence of authentic Turkish cuisine.</p>
                        )}
                    </div>
                    <div className="w-full md:w-2/3 border-b-[1px] border-b-[#fffdf1] flex flex-col gap-2 py-4" onMouseOver={() => setItem('drink')}>
                        <p className="w-full flex justify-between items-center text-[#fffdf1] text-5xl font-forum py-3"><span className="uppercase">Drinks</span> {item === "drink" ? <MoveUpRight /> : <MoveDownLeft />}</p>
                        {item === "drink" && (
                            <p className="w-full text-[#fffdf1] font-bai">Complement your meal with our curated selection of refreshing beverages, from traditional Turkish teas to handcrafted cocktails.</p>
                        )}
                    </div>
                    <div className="w-full md:w-2/3 flex flex-col gap-2 py-4" onMouseOver={() => setItem('atmosphere')}>
                        <p className="w-full flex justify-between items-center text-[#fffdf1] text-5xl font-forum py-3"><span className="uppercase">Atmosphere</span> {item === "atmosphere" ? <MoveUpRight /> : <MoveDownLeft />}</p>
                        {item === "atmosphere" && (
                            <p className="w-full text-[#fffdf1] font-bai">Immerse yourself in the warm, inviting ambiance where Moorish elegance meets modern comfort for an unforgettable dining experience.</p>
                        )}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Experience
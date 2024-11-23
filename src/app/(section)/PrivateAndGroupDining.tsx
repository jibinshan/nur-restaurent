'use client'
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";


const PrivateAndGroupDining = ({ }) => {
    return (
        <section className="relative flex h-screen w-full items-center justify-center px-3 py-12 lg:py-24">
            <div className="flex h-full w-full max-w-[1300px] flex-col items-center justify-center gap-4 md:flex-row">
                <div className="flex h-full w-full md:w-1/2 flex-col items-start justify-center gap-[2.5rem] p-6 lg:px-32">
                    <Image src='/images/home/privateandgroup.png' width={758} height={793} alt="private" />
                </div>
                <div className="flex h-full w-full md:w-1/2 flex-col items-start justify-center gap-[2.5rem] p-6">
                    <h3 className="font-bai uppercase">Booking</h3>
                    <h1 className="max-w-[500px] font-forum text-6xl sm:text-7xl md:text-start">
                        Private &<br />
                        Group Dining
                    </h1>
                    <p className="max-w-[500px] font-light leading-[160%] md:text-start">
                        Our private and group dining options offer an intimate setting for any occasion, from celebrations to business gatherings. Each space is designed to provide privacy and comfort, allowing you to enjoy every moment with your guests. With personalized service and tailored menus, we ensure a seamless and memorable dining experience for groups of all sizes.
                    </p>
                    <Link href='/table-booking'>
                        <Button className="flex items-center font-bai justify-center gap-3 px-6 py-5 rounded-2xl">Book Table</Button>
                    </Link>
                </div >
            </div >
        </section >
    );
};

export default PrivateAndGroupDining;
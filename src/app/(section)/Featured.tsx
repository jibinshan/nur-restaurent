import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Featured = ({ }) => {
    return (
        <section className="relative flex h-full w-full items-center justify-center  px-6" id="menu">
            <div className="flex h-full w-full flex-col items-center justify-center gap-8 py-8 md:py-24">
                <div className="w-full flex flex-col items-start justify-start">

                    <h3 className="font-mono uppercase flex gap-2 items-center justify-center">
                        <span
                            className="text-lg font-bai uppercase leading-[80%] tracking-[5px]">Dishes</span>
                    </h3>
                    <h1 className="text-4xl font-medium font-forum uppercase leading-[50px] tracking-[5px] text-center">
                        Featured Dishes</h1>
                </div>

                <div className="w-full flex flex-col lg:flex-row items-center gap-5 mt-5">
                    <div
                        className="hidden lg:w-[58px] lg:h-[58px] shrink-0 rounded-full lg:flex lg:justify-center lg:items-center rotate-180">
                        <ArrowRight />
                    </div>
                    <div className="w-full lg:w-11/12 flex flex-col items-center justify-center lg:flex-row gap-4 lg:gap-8">
                        <div className="flex flex-col gap-5">
                            <Image src="/images/home/adanakebab.png" alt="adanakebab" width={360} height={458} />
                            <div>
                                <h1 className="text-xl font-medium font-forum uppercase leading-[30px] tracking-[3px] text-center"                                >
                                    Adana Kebab</h1>
                                {/* <h1 className="text-lg font-light font-mono uppercase text-[#DCCF90] tracking-[5px]"
                                        style=" font-family: 'Marcellus SC' , serif;">
                                        € 120</h1> */}
                            </div>
                        </div>
                        <div className="flex flex-col gap-5">
                            <Image src="/images/home/mezeplatter.png" alt="adanakebab" width={360} height={458} />
                            <div>
                                <h1 className="text-xl font-medium font-forum uppercase leading-[30px] tracking-[3px] text-center"                                >
                                    Meze platter</h1>
                                {/* <h1 className="text-lg font-light font-mono uppercase text-[#DCCF90] tracking-[5px]"
                                        style=" font-family: 'Marcellus SC' , serif;">
                                        € 120</h1> */}
                            </div>
                        </div>
                        <div className="flex flex-col gap-5">
                            <Image src="/images/home/beklava.png" alt="adanakebab" width={360} height={458} />
                            <div>
                                <h1 className="text-xl font-medium font-forum uppercase leading-[30px] tracking-[3px] text-center"                                >
                                    baklava</h1>
                                {/* <h1 className="text-lg font-light font-mono uppercase text-[#DCCF90] tracking-[5px]"
                                        style=" font-family: 'Marcellus SC' , serif;">
                                        € 120</h1> */}
                            </div>
                        </div>
                        <div className="flex flex-col gap-5">
                            <Image src="/images/home/kebabplatter.png" alt="adanakebab" width={360} height={458} />
                            <div>
                                <h1 className="text-xl font-medium font-forum uppercase leading-[30px] tracking-[3px] text-center"                                >
                                    Kebab platter</h1>
                                {/* <h1 className="text-lg font-light font-mono uppercase text-[#DCCF90] tracking-[5px]"
                                        style=" font-family: 'Marcellus SC' , serif;">
                                        € 120</h1> */}
                            </div>
                        </div>
                    </div>
                    <div
                        className="hidden lg:w-[58px] lg:h-[58px] shrink-0 rounded-full lg:flex lg:justify-center lg:items-center">
                        <ArrowRight />
                    </div>
                </div>
                <div className="flex flex-col lg:flex-row gap-4 lg:gap-7">
                    <Link className=" px-6 py-4 flex w-fit h-fit items-center gap-3 bg-primary text-[#fffdf0] border-[1px] lg:mt-12
                border-primary transition-colors uppercase text-sm tracking-[1.96px] font-[600]" href="">
                        <span> View our main menu</span>
                    </Link>
                    <Link className=" px-6 py-4 flex w-fit h-fit items-center gap-3 bg-primary text-[#fffdf0] border-[1px] lg:mt-12
                border-primary transition-colors uppercase text-sm tracking-[1.96px] font-[600]" href="">
                        <span> View our Drinks menu</span>
                    </Link>
                </div>
            </div >
        </section >
    );
};

export default Featured;
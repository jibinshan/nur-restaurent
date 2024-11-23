"use client";
import EmblaCarousel from "@/app/(section)/(special)/MenuCarousel";
import { Icons } from "@/components/Icon";
import { Button } from "@/components/ui/button";
import type { EmblaOptionsType } from "embla-carousel";
import Image from "next/image";

const OPTIONS: EmblaOptionsType = { loop: true };

const slideData: {
  modelUrl: string;
  price: string;
  name: string;
}[] = [
    {
      name: "Chicken Shish",
      price: "40",
      modelUrl: "/models/chicken-shish.glb",
    },
    {
      name: "Grilled Sea Bass",
      price: "50",
      modelUrl: "/models/grilled-sea-bass-(levrek).glb",
    },
    {
      name: "Lamb Doner",
      price: "60",
      modelUrl: "/models/lamb-doner.glb",
    },
    {
      name: "Lamb Kofte Beyti",
      price: "80",
      modelUrl: "/models/lamb-kofte-beyti.glb",
    },
    {
      name: "Lamb Shank",
      price: "100",
      modelUrl: "/models/lamb-shank.glb",
    },
    {
      name: "Mix Kebab",
      price: "100",
      modelUrl: "/models/mix-kebab-for-one.glb",
    },
    {
      name: "Mix Platter",
      price: "100",
      modelUrl: "/models/mix-platter-for-2.glb",
    },
  ];
const Special = ({ }) => {
  return (
    <section className="relative flex h-full w-full justify-center bg-primary">
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
      <div className="flex h-full w-full max-w-[1300px] flex-col items-center justify-center gap-4 py-12">
        <div className="w-full flex flex-col md:flex-row gap-3 justify-between items-center">
          <div className="flex flex-col gap-2">
            <h3 className="font-playfair text-[#F7F4ED] text-center md:text-start">Specials</h3>
            <h1 className="max-w-[600px] text-center text-[#F7F4ED] text-5xl font-italiana md:text-7xl">
              Nur Specials
            </h1>
          </div>
          <Button
            className="flex font-playfair items-center justify-center gap-3 font-semibold px-6 py-7 uppercase bg-white text-black rounded-full hover:bg-black hover:text-white"
          >
            View Menu
            <Icons.rightArrow className="duration-300 ease-in-out group-hover:translate-x-1" />
          </Button>
        </div>
        <div className="relative z-20 flex min-h-[400px] w-full flex-col justify-center px-2">
          <EmblaCarousel slides={slideData} options={OPTIONS} />
        </div>
      </div>
    </section >
  );
};

export default Special;

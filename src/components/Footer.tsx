'use client'
import Image from "next/image";
import Link from "next/link";
import { Icons } from "./Icon";
import { Button } from "./ui/button";

const Footer = ({ }) => {
  return (
    <footer className="z-50 flex flex-col h-full w-full items-center justify-center gap-14 px-2 md:px-0 py-12 pt-0">
      <div className="w-full py-12 flex flex-col items-center justify-center"
        style={{
          backgroundImage: "url('/images/home/aboutbg.png')",
          backgroundSize: "contain",
          backgroundRepeat: "repeat"
        }}
      >
        <div className="w-fit flex flex-col gap-2 md:flex-row md:gap-12 items-center justify-center py-4">
          <Button
            asChild
            variant="link"
            className="px-0 uppercase text-accent font-semibold text-[#593710] font-playfair"
          >
            <Link href="/">Home</Link>
          </Button>
          <Button
            asChild
            variant="link"
            className="px-0 uppercase text-accent font-semibold text-[#593710] font-playfair"
          >
            <Link href="/menu">Menu</Link>
          </Button>
          {/* <Button
              asChild
              variant="link"
              className="px-0 uppercase text-accent"
            >
              <Link href="/about-us">About</Link>
            </Button> */}

          <Image
            src='/nur_footer.svg'
            width={114}
            height={68}
            alt="logo"
          />

          <Button
            asChild
            variant="link"
            className="px-0 uppercase text-accent font-semibold text-[#593710] font-playfair"
          >
            <Link href="#">About</Link>
          </Button>
          <Button
            asChild
            variant="link"
            className="px-0 uppercase text-accent font-semibold text-[#593710] font-playfair"
          >
            <Link href="/contact">Contact</Link>
          </Button>
        </div>

        <div className="w-full flex justify-center items-center gap-4">
          <Link href='https://g.co/kgs/eEdUrdK' target="_blank" className="text-[#593710] uppercase font-bai font-semibold tracking-[4px] text-sm"><Icons.google /> </Link>
          <Link href='https://www.tripadvisor.com/Restaurant_Review-g187069-d28003565-Reviews-Nur_Cafe-Manchester_Greater_Manchester_England.html' target="_blank" className="text-[#593710] uppercase font-bai font-semibold tracking-[4px] text-sm"><Icons.unknown /></Link>
          <Link href='https://www.instagram.com/nurcafemcr/?hl=en' target="_blank" className="text-[#593710] uppercase font-bai font-semibold tracking-[4px] text-sm"><Icons.instagram /></Link>
        </div>
      </div >
      <div className="flex w-full items-center justify-center">
        <p className="w-fit px-4 text-center text-xl">
          © 2024 Nur Cafe Manchester, All Rights Reserved | {" "}
          <Link
            href="https://foodo.ai"
            className="text-primary hover:underline"
            target="_blank"
          >
            Powered By Foodo
          </Link>
        </p>
      </div>
    </footer >
  );
};

export default Footer;

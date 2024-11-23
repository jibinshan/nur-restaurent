'use client'
import ViewMenu from "@/components/floating-buttons/ViewMenu";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Special from "./(section)/(special)/Special";
import Experience from "./(section)/Experience";
import Glimpse from "./(section)/Glimpse";
import Hero from "./(section)/Hero";
import Menu from "./(section)/Menu";
import PrivateAndGroupDining from "./(section)/PrivateAndGroupDining";
import Reviews from "./(section)/Review";
import AboutUs from "./(section)/AboutUs";
import Contact from "./(section)/Contact";
import Featured from "./(section)/Featured";
import TopPicks from "./(section)/TopPicks";
import Reserve from "./(section)/Reserve";
import { useEffect, useState } from "react";

export default function HomePage() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = document.getElementById("hero")?.offsetHeight ?? 0;
      setIsScrolled(window.scrollY > heroHeight);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <main className="relative flex h-full w-full overflow-hidden">
      <div className="flex h-full w-full flex-col items-center justify-center">
        <Navbar position="absolute" />
        <Hero />
        <AboutUs />
        <Menu />
        <Special />
        <TopPicks />
        <Reserve />
        <Reviews />
        <Contact />
        <Footer />
        {/*
        <Experience />
        <PrivateAndGroupDining />
         */}
      </div>
      {isScrolled &&
        <div className="fixed bottom-2 right-2 z-50 hidden md:flex">
          <ViewMenu />
        </div>
      }
    </main>
  );
}

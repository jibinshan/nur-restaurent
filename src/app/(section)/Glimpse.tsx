import { Icons } from "@/components/Icon";
import Image from "next/image";
import Link from "next/link";

const Glimpse = ({}) => {
  return (
    <section className="relative flex h-full flex-col items-start justify-center gap-7 bg-[#000000] py-10 pl-5 lg:flex-row lg:py-20 lg:pl-48">
      <div className="w-full lg:w-1/2">
        <div className="z-10 flex h-full w-full flex-col gap-5">
          <h3 className="font-oswald uppercase text-[#fff4e3]">Gallery</h3>
          <h1 className="font-oswald text-5xl font-bold text-[#fff4e3] sm:text-7xl md:text-start lg:leading-[80px]">
            A Glimpse
            <br />
            of Istanbul
          </h1>
          <Link
            href="https://www.instagram.com/istanbulrestaurantmanchester/?hl=en"
            className="mr-5 flex max-w-full items-center justify-center gap-2 rounded-full bg-[#0a0a0a] py-5 font-oswald font-bold leading-[160%] text-white md:text-start lg:mr-0 lg:max-w-[300px]"
          >
            <Icons.instagram className="text-primary" />
            Check out our instagram
          </Link>
        </div>
      </div>
      <div className="w-full lg:w-1/2">
        <Image
          src="/images/home/glimpse.jpeg"
          width={1360}
          height={564}
          alt="side-close-up"
          className="h-auto w-full rounded-xl"
        />
      </div>
    </section>
  );
};

export default Glimpse;

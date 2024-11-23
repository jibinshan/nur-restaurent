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
            <Link href="/about-us">About</Link>
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
          <Link href='https://in.search.yahoo.com/search;_ylt=AwrKEbVGvTlngQIAeua7HAx.;_ylc=X1MDMjExNDcyMzAwMwRfcgMyBGZyA21jYWZlZV9lLTI2ODYwXzNQQy12BGZyMgNzYi10b3AEZ3ByaWQDdmVyd1pwdWpTbTZxZU5RN2lEMjJOQQRuX3JzbHQDMARuX3N1Z2cDMARvcmlnaW4DaW4uc2VhcmNoLnlhaG9vLmNvbQRwb3MDMARwcXN0cgMEcHFzdHJsAzAEcXN0cmwDMzAEcXVlcnkDaXN0YW5idWwlMjBiYXIlMjBhbmQlMjBncmlsbCUyMHdvb2x0b24EdF9zdG1wAzE3MzE4MzcyNzE-?p=istanbul+bar+and+grill+woolton&fr=mcafee_e-26860_3PC-v&type=F210IN714G91841MNhJ%2BFSIbRCCvKdyV%2F2R5GgXXfvl%2BaCFyile5iUQkkoM%3D&fr2=sb-top' className="text-[#593710] uppercase font-bai font-semibold tracking-[4px] text-sm"><Icons.google /> </Link>
          <Link href='https://www.facebook.com/Istanbulwoolton/' className="text-[#593710] uppercase font-bai font-semibold tracking-[4px] text-sm"><Icons.facebook /></Link>
          <Link href='https://www.instagram.com/istanbulwoolton/' className="text-[#593710] uppercase font-bai font-semibold tracking-[4px] text-sm"><Icons.instagram /></Link>
        </div>
      </div >
      <p className="text-[#64615C]">© 2024 Istanbul <Link href="https://foodo.ai">Powered By Foodo</Link></p>
    </footer >
  );
};

export default Footer;

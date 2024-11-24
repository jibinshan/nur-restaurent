import "@/styles/globals.css";
import "@/styles/lines.css";
import "@/styles/ham.css";
import { cn } from "@/lib/utils";
import { type Metadata } from "next";
import { Oswald, Roboto, Playfair_Display, Italiana, Mrs_Saint_Delafield } from "next/font/google";
import Providers from "@/app/Providers";

export const metadata: Metadata = {
  title: "Nur Cafe | Best Cafe Manchester | Breakfast Lunch",
  description:
    "Nur Cafe Manchester was born from a passion for bringing the finest cuts of beef to the table, with a commitment to sustainability and premium quality.Best Cafe In Manchester",
  icons: [{ rel: "icon", url: "/Nur.svg" }],
};

const manrope = Oswald({
  subsets: ["latin"],
  variable: "--font-oswald",
  weight: ["200", "300", "400", "500", "600", "700"],
});

const roboto = Roboto({
  subsets: ["latin"],
  variable: "--font-roboto",
  weight: ["100", "300", "400", "500", "700", "900"],
});

const italiana = Italiana({
  subsets: ["latin"],
  variable: "--font-italiana",
  weight: ["400"],
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "500", "600", "700", "800", "900"],
});

const saint = Mrs_Saint_Delafield({
  subsets: ["latin"],
  variable: "--font-saint",
  weight: ["400"],
})
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "theme-custom flex min-h-screen font-forum antialiased",
          manrope.variable,
          roboto.variable,
          playfair.variable,
          italiana.variable,
          saint.variable,
        )}
      >
        <Providers>{children}</Providers>
      </body>
    </html >
  );
}

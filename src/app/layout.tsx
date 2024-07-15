import type { Metadata } from "next";
import "./globals.css";
import Image from "next/image";
import NavBar from "@/components/NavBar";
import InstagramLogo from "@/images/instagram.svg";
import LinkedInLogo from "@/images/linkedin.svg";
import XLogo from "@/images/x.svg";
import RedditLogo from "@/images/reddit.svg";
import SpotifyLogo from "@/images/spotify.svg";

export const metadata: Metadata = {
  title: "Asymmetric Club",
  description: "Official website of CIT Asymmetric Club",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <NavBar />
        {children}
        <footer className="w-full flex h-40 bg-gradient-to-r to-carribean-current from-tiffanyblue flex-row">
          
          <section className="w-96 h-full">
            <h1 className="text-5xl font-bold ml-4 mt-4">ASYMMETRIC</h1>
            <h1 className="text-xl ml-4 mt-2">About Us</h1>
            <h1 className="text-xl ml-4 mt-2">Contact Us</h1>
          </section>

          <section className="flex w-96 h-full flex-row gap-10 mx-auto">

          <Image
            alt="Instagram Logo"
            src={InstagramLogo}
            width={36}
            height={36}
            />

          <Image
            alt="LinkedIn Logo"
            src={LinkedInLogo}
            width={36}
            height={36}
            />

          <Image
            alt="X Logo"
            src={XLogo}
            width={36}
            height={36}
            />

          <Image
            alt="Reddit Logo"
            src={RedditLogo}
            width={36}
            height={36}
            />

          <Image
            alt="Spotify Logo"
            src={SpotifyLogo}
            width={36}
            height={36}
            />

          </section>

        </footer>
      </body>
    </html>
  );
}

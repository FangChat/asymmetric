import type { Metadata } from "next";
import "./globals.css";
import NavBar from "@/components/NavBar";
import LinkButton from "@/components/LinkButton";
import InstagramLogo from "@/images/instagram.svg";
import LinkedInLogo from "@/images/linkedin.svg";
import XLogo from "@/images/x.svg";
import RedditLogo from "@/images/reddit.svg";
import SpotifyLogo from "@/images/spotify.svg";
import YouTubeLogo from "@/images/youtube.svg";

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
        <footer className="w-full flex h-40 bg-gradient-to-r to-carribean-current from-tiffanyblue flex-row justify-around" id="myfoot">
          
          <section className="flex flex-col w-96 cursor-asymmetric">
            <h1 className="text-5xl font-bold ml-4 mt-4">ASYMMETRIC</h1>
            <h1 className="text-xl ml-4 mt-2">About Us</h1>
            <h1 className="text-xl ml-4 mt-2">Contact Us</h1>
          </section>

          <section className="flex w-96 flex-row gap-2">
            <LinkButton alt="Instagram Logo" src={InstagramLogo} link="https://www.instagram.com/clubasymmetric.cit?igsh=MTYyZnZvaHoxNDRoYw=="/>
            <LinkButton alt="LinkedIn Logo" src={LinkedInLogo} link="https://www.linkedin.com/in/asymmetric-club-cit-403025305/"/>
            <LinkButton alt="X Logo" src={XLogo} link="https://x.com/asymmetricclub?t=G2P4XQw5zcwmAy6PZvVv6g&s=08"/>
            <LinkButton alt="Youtube Logo" src={YouTubeLogo} link="https://youtube.com/@asymmetriclubcit?si=QSBFnZ12wmGgeWv1"/>
            <LinkButton alt="Reddit Logo" src={RedditLogo} link="https://www.reddit.com/u/asymmetricclub/s/Ui5HBvqUua"/>
            <LinkButton alt="Spotify Logo" src={SpotifyLogo} link="https://open.spotify.com/show/0iMKRNbZOWxKWIAUYD7T0C?si=0b48a7ddd7b94415"/>
          </section>

          <section className="flex w-96">
            <h1 className="font-bold font-tiltPrism text-5xl my-auto mx-auto">
            "ASYMMETRIC CLUB MASSU DA"
            </h1>
          </section>

        </footer>
      </body>
    </html>
  );
}

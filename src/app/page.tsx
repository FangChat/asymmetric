"use client";
import Video from "@/components/Video";
import Image from "next/image";
import AboutUsImage from "@/images/about.png";
import { useEffect, useRef, useState } from "react";

export default function Home() {

  const fadeRef = useRef(null);
  const [ isVisible, setVisibility ] = useState(false);

  useEffect( () => {
    const watcher = new IntersectionObserver(
      ([entry]) => {
        setVisibility(entry.isIntersecting);
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.5,
      }
    );

    if(fadeRef.current){
      watcher.observe(fadeRef.current);
    }

    return () => {
      if(fadeRef.current){
        watcher.unobserve(fadeRef.current);
      }
    }

  }
  , []);

  return (
    <main className="flex flex-col min-h-full bg-black cursor-[url('/cursor.png')]">
      <Video
        src="/bgvideo.mp4"
        type="video/mp4"
        classes="h-screen w-screen object-fill"
      />
      <section ref={fadeRef} className={`flex flex-row mt-10 bg-black opacity-0 ${isVisible ? 'animate-fadein opacity-100' : 'opacity-0'}`} style={{transition: 'opacity 0.5s ease, transform 0.5s ease',}} id="aboutus">
        <Image
          width={600}
          height={600}
          src={AboutUsImage}
          alt="About Us Image"
        />

        <div className="flex flex-col flex-wrap flex-shrink ml-6">
          <h1 className="text-white font-bold text-2xl text-justify max-w-3xl">
            Asymmetric, the technical club at our college dedicated to
            providing specialized content in cybersecurity and related fields.
            Our mission is to promote and enhance the understanding of the cyber
            realm through easily comprehensible content. We are committed to
            making our content engaging and accessible to everyone, fostering a
            deeper connection with our audience.
          </h1>

          <h1 className="text-white font-bold underline mt-10 text-3xl">
            WHAT WE DO & OUR UPCOMMING PLANS
          </h1>

          <h1 className="text-white font-bold mt-10 text-2xl max-w-3xl text-justify">
            Introducing our captivating ongoing series, "Tales of Threats,"
            where we journey into the world of cyber threats and their profound
            impact. We're organizing a big conference, inviting cyber geeks
            from social media to our college. We're excited to announce the
            upcoming launch of our new podcast series! In this series, we'll be
            inviting knowledgeable guests to join us for insightful and
            conversational episodes.
          </h1>
        </div>
      </section>
    </main>
  );
}

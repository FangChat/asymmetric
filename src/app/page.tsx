import Video from "@/components/Video";

export default function Home() {
  return (
    <main className="flex min-h-full bg-black cursor-[url('/cursor.png')]">
      <Video src="/bgvideo.mp4" type="video/mp4" classes="h-screen w-screen"/>
    </main>
  );
}

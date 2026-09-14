import Nav from "@/components/Nav";
import SiteIntro from "@/components/home/SiteIntro";
import Hero from "@/components/home/Hero";
import QuickIntro from "@/components/home/QuickIntro";
import SelectedWork from "@/components/home/SelectedWork";
import TechStreams from "@/components/home/TechStreams";
import TimelineArchive from "@/components/home/TimelineArchive";
import FinalCTA from "@/components/home/FinalCTA";

export default function Home() {
  return (
    <>
      <SiteIntro />
      <Nav />
      <main>
        <Hero />
        <QuickIntro />
        <SelectedWork />
        <TechStreams />
        <TimelineArchive />
        <FinalCTA />
      </main>
    </>
  );
}

import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import HowItWorks from "@/components/HowItWorks";
import MeetTheCats from "@/components/MeetTheCats";
import GamePreview from "@/components/GamePreview";
import Roadmap from "@/components/Roadmap";
import Solarious from "@/components/Solarious";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <HowItWorks />
        <MeetTheCats />
        <GamePreview />
        <Roadmap />
        <Solarious />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}

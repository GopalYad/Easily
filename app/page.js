import Image from "next/image";
import HeroSection from "../components/hero-section";
import Features from "../components/features-1";
import WallOfLoveSection from "../components/testimonials";
import StatsSection from "../components/stats-3";
import FAQsTwo from "../components/faqs-2";
import FooterSection from "../components/footer";
export default function Home() {
  return (
   <div>
    <HeroSection/>
    <Features/>
    <StatsSection/>
    <WallOfLoveSection/>
    <FAQsTwo/>
    <FooterSection/>
   </div>
  );
}

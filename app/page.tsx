import { HeroSection } from "@/app/components/hero-section";
import { DynamicIsland } from "@/app/components/dynamic-island";
import { ExperienceSection } from "@/app/components/experience-section";
import { FooterSection } from "@/app/components/footer-section";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <DynamicIsland />
      <ExperienceSection />
      <FooterSection />
    </main>
  );
}

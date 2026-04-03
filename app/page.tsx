import { HeroSection } from "@/app/components/hero-section";
import { DynamicIsland } from "@/app/components/dynamic-island";
import { ExperienceSectionA } from "@/app/components/experience-section-a";
import { FooterSection } from "@/app/components/footer-section";
import { getAllProjects } from "@/lib/content";

export default function Home() {
  const projects = getAllProjects();
  return (
    <main>
      <HeroSection />
      <DynamicIsland />
      <ExperienceSectionA projects={projects} />
      <FooterSection />
    </main>
  );
}

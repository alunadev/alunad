import { HeroSection } from "@/app/components/hero-section";
import { DynamicIsland } from "@/app/components/dynamic-island";
import { ExperienceSection } from "@/app/components/experience-section";
import { FooterSection } from "@/app/components/footer-section";
import { getAllProjects } from "@/lib/content";

export default function Home() {
  const projects = getAllProjects();
  return (
    <main>
      <HeroSection />
      <DynamicIsland />
      <ExperienceSection projects={projects} />
      <FooterSection />
    </main>
  );
}

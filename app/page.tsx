import { HeroSection } from "@/app/components/hero-section";
import { DynamicIsland } from "@/app/components/dynamic-island";
import { ExperienceSectionA } from "@/app/components/experience-section-a";
import { ExperienceSectionB } from "@/app/components/experience-section-b";
import { FooterSection } from "@/app/components/footer-section";

// 🔀 COMPARISON MODE — remove before shipping
// Scroll down to compare Option A (sticky panel) vs Option B (scroll animations)

function ComparisonLabel({ label, description }: { label: string; description: string }) {
  return (
    <div className="w-full flex items-center gap-6 px-8 py-4 bg-black sticky top-0 z-50">
      <span className="font-mono text-[11px] font-bold text-white tracking-[2px] uppercase shrink-0">
        {label}
      </span>
      <span className="font-mono text-[11px] text-[#888] tracking-[0.5px]">
        {description}
      </span>
    </div>
  );
}

export default function Home() {
  return (
    <main>
      <HeroSection />
      <DynamicIsland />

      <ComparisonLabel
        label="Option A"
        description="Sticky panel + collapsing list — Tanuja Shastri mechanic"
      />
      <ExperienceSectionA />

      <ComparisonLabel
        label="Option B"
        description="Current layout + scroll animations (separator draw, parallax, breathe-in)"
      />
      <ExperienceSectionB />

      <FooterSection />
    </main>
  );
}

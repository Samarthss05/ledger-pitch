import { Navigation, HeroSection, WhyLedgerSection, CREAM, DARK_GREEN, GREEN } from "@/components/sections";
import { FeaturesSection, ROICalculatorSection, ASEANMapSection, SocialProofSection, FAQSection, GetStartedSection, Footer } from "@/components/sections2";

const WaveTop = ({ color = "#FAFAF5" }) => (
  <div className="absolute top-0 left-0 w-full overflow-hidden leading-none z-10">
    <svg className="relative block w-full h-[50px] md:h-[80px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
      <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill={color}></path>
    </svg>
  </div>
);

const WaveBottom = ({ color = "#FAFAF5" }) => (
  <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-10 rotate-180">
    <svg className="relative block w-full h-[50px] md:h-[80px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
      <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill={color}></path>
    </svg>
  </div>
);

export default function Home() {
  return (
    <div className="min-h-screen relative" style={{ background: CREAM }}>
      <Navigation />

      {/* 1. Hero (Dark) */}
      <HeroSection />

      {/* 2. Why Ledger (Light) */}
      {/* Has its own top wave internally now */}
      <WhyLedgerSection />

      {/* 3. Features (Dark) */}
      <div className="relative">
        <WaveTop color="#FAFAF5" /> {/* Matches WhyLedger bg */}
        <FeaturesSection />
      </div>

      {/* 4. Social Proof (Light) */}
      <div className="relative">
        <WaveTop color={DARK_GREEN} /> {/* Matches Features bg */}
        <SocialProofSection />
      </div>

      {/* 5. ROI Calculator (Dark) */}
      <div className="relative">
        <WaveTop color={CREAM} /> {/* Matches SocialProof bg */}
        <ROICalculatorSection />
      </div>

      {/* 8. FAQ (Light) */}
      <div className="relative">
        <WaveTop color={DARK_GREEN} /> {/* Matches ROI Calculator bg */}
        <FAQSection />
      </div>

      {/* 9. Get Started (Dark) */}
      <div className="relative">
        <WaveTop color={CREAM} /> {/* Matches FAQ bg */}
        <GetStartedSection />
      </div>

      <Footer />
    </div>
  );
}

import { useEffect } from "react";
import { useLocation } from "wouter";
import { Navigation, CREAM, DARK_GREEN, GREEN } from "@/components/sections";
import { PricingSection, Footer, GetStartedSection } from "@/components/sections2";

const WaveTop = ({ color = "#FAFAF5" }) => (
    <div className="absolute top-0 left-0 w-full overflow-hidden leading-none z-10">
        <svg className="relative block w-full h-[50px] md:h-[80px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill={color}></path>
        </svg>
    </div>
);

export default function Pricing() {
    const [, setLocation] = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen relative" style={{ background: CREAM }}>
            <Navigation />

            {/* Green Header Bar (Matches Home Hero) */}
            <div className="h-20 w-full relative overflow-hidden" style={{ background: `linear-gradient(135deg, ${DARK_GREEN} 0%, ${GREEN} 55%, ${DARK_GREEN} 100%)` }}>
                <div className="absolute inset-0 pattern-grid opacity-30" />
            </div>

            {/* Pricing Section - FAQ removed as per request */}
            <div className="relative">
                <PricingSection />
            </div>

            {/* Get Started */}
            <div className="relative">
                <WaveTop color={CREAM} />
                <GetStartedSection />
            </div>

            <Footer />
        </div>
    );
}

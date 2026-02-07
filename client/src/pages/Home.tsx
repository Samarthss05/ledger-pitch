import { useEffect, useRef, useState } from "react";
import { motion, useInView, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { 
  Brain, 
  Gavel, 
  Store, 
  TrendingUp, 
  Users, 
  DollarSign,
  ArrowRight,
  ChevronDown,
  Zap,
  Shield,
  Globe,
  BarChart3,
  Rocket,
  Mail,
  ExternalLink,
  CheckCircle2,
  ArrowUpRight,
  Layers,
  Network,
  Wallet,
  FileText,
  Menu,
  X,
  Sparkles
} from "lucide-react";
import { Button } from "@/components/ui/button";

// CDN URLs
const HERO_BG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663315516774/ljxvPCuOuGVcnhAK.png";
const LEDGER_LOGO = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663315516774/YkcJiLsRGPhktgDh.png";

// Brand colors from logo
const GREEN = "#5B7B6A";
const DARK_GREEN = "#3D5A4A";
const CREAM = "#E8E4D9";
const SAGE = "#7A9B8A";
const GOLD = "#C7A477";

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
};

const fadeInLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8 } }
};

const fadeInRight = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 }
  }
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } }
};

// Animated counter component
function AnimatedCounter({ value, suffix = "", prefix = "" }: { value: number; suffix?: string; prefix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (!isInView) {
      return;
    }
    if (shouldReduceMotion) {
      setCount(value);
      return;
    }
    const duration = 2000;
    const steps = 60;
    const increment = value / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(current);
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [isInView, value, shouldReduceMotion]);

  return (
    <span ref={ref} className="font-semibold tabular-nums">
      {prefix}{Math.floor(count).toLocaleString()}{suffix}
    </span>
  );
}

// Research sources data
const researchSources = [
  {
    title: "e-Conomy SEA 2023",
    org: "Google, Temasek & Bain",
    url: "https://www.bain.com/insights/e-conomy-sea-2023/",
    description: "Digital economy in Southeast Asia"
  },
  {
    title: "B2B Ecosystem Disruption",
    org: "McKinsey & Company",
    url: "https://www.mckinsey.com/industries/consumer-packaged-goods/our-insights/staying-ahead-of-the-b2b-ecosystem-disruption-in-emerging-asia",
    description: "B2B disruption in emerging Asia"
  },
  {
    title: "SME Finance Gap",
    org: "International Finance Corporation",
    url: "https://www.ifc.org/en/insights-reports/2017/msme-finance-gap",
    description: "MSME financing gap globally"
  },
  {
    title: "Future of Retail",
    org: "Deloitte",
    url: "https://www2.deloitte.com/content/dam/Deloitte/sg/Documents/consumer-business/sea-cb-future-of-retail-in-asia-pacific.pdf",
    description: "Retail transformation in APAC"
  }
];

// Navigation
function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!mobileOpen) {
      return;
    }
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMobileOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [mobileOpen]);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const handleNavClick = (id: string) => {
    scrollToSection(id);
    setMobileOpen(false);
  };

  const navItems = [
    { id: "market", label: "Market" },
    { id: "problem", label: "Problem" },
    { id: "solution", label: "Solution" },
    { id: "pillars", label: "Pillars" },
    { id: "financials", label: "Financials" },
  ];

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled 
          ? "bg-white/95 backdrop-blur-xl shadow-lg shadow-green-900/5 border-b border-green-100" 
          : "bg-transparent"
      }`}
    >
      <div className="container relative flex items-center justify-between h-20">
        <motion.a 
          href="https://ledgersg.com" 
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 group"
        >
          <img 
            src={LEDGER_LOGO} 
            alt="Ledger" 
            className="w-10 h-10 rounded-lg object-contain"
          />
          <span 
            className="font-bold text-xl tracking-tight transition-colors"
            style={{ color: scrolled ? DARK_GREEN : "white" }}
          >
            Ledger
          </span>
        </motion.a>
        
        <div className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 ${
                scrolled 
                  ? "text-green-800 hover:text-green-900 hover:bg-green-50" 
                  : "text-white/80 hover:text-white hover:bg-white/10"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
        
        <motion.div className="hidden lg:block" whileHover={{ scale: 1.03 }}>
          <Button 
            onClick={() => scrollToSection("contact")}
            className="rounded-lg px-6 font-semibold shadow-lg shadow-green-900/20 hover:shadow-xl hover:shadow-green-900/30 transition-all duration-300"
            style={{ background: GREEN }}
          >
            Get in Touch
            <ArrowUpRight className="ml-2 w-4 h-4" />
          </Button>
        </motion.div>

        <div className="lg:hidden flex items-center gap-2">
          <Button
            variant="outline"
            size="icon"
            aria-expanded={mobileOpen}
            aria-label="Toggle navigation"
            onClick={() => setMobileOpen(prev => !prev)}
            className={`rounded-lg border transition-all ${
              scrolled
                ? "border-green-100 bg-white/80 text-green-900 hover:bg-white"
                : "border-white/20 bg-white/10 text-white hover:bg-white/20"
            }`}
          >
            {mobileOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </Button>
        </div>

        {mobileOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 mt-3 rounded-2xl border border-green-100 bg-white/95 shadow-xl shadow-green-900/10 backdrop-blur-xl">
            <div className="flex flex-col gap-2 p-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className="flex items-center justify-between rounded-xl px-4 py-3 text-sm font-medium text-green-900 hover:bg-green-50"
                >
                  {item.label}
                  <ArrowRight className="w-4 h-4 text-green-700" />
                </button>
              ))}
              <Button
                onClick={() => handleNavClick("contact")}
                className="mt-2 w-full rounded-xl py-5 text-base font-semibold shadow-md shadow-green-900/15"
                style={{ background: GREEN }}
              >
                Get in Touch
                <ArrowUpRight className="ml-2 w-4 h-4" />
              </Button>
            </div>
          </div>
        )}
      </div>
    </motion.nav>
  );
}

// Hero Section
function HeroSection() {
  const { scrollY } = useScroll();
  const shouldReduceMotion = useReducedMotion();
  const y = useTransform(scrollY, [0, 500], [0, 140]);
  const opacity = useTransform(scrollY, [0, 360], [1, 0.15]);
  const scale = useTransform(scrollY, [0, 400], [1, 1.08]);

  const heroStats = [
    { value: "50+", label: "Active Stores" },
    { value: "100+", label: "Stores on Waitlist" },
  ];

  const pulseItems = [
    {
      title: "Predictive Procurement",
      subtitle: "Using AI to predict demand, optimize reorders, and prevent stockouts.",
      icon: Zap,
      tint: GREEN,
      tag: "Live",
    },
    {
      title: "Demand Auctions",
      subtitle: "Suppliers bid on live demand",
      icon: Gavel,
      tint: SAGE,
      tag: "Next",
    },
    {
      title: "Embedded Credit",
      subtitle: "BNPL + growth finance",
      icon: Wallet,
      tint: DARK_GREEN,
      tag: "Coming Soon",
    },
  ];

  return (
    <section className="relative min-h-screen overflow-hidden" style={{ background: `linear-gradient(135deg, ${DARK_GREEN} 0%, ${GREEN} 55%, ${DARK_GREEN} 100%)` }}>
      {/* Animated background */}
      <motion.div 
        style={shouldReduceMotion ? undefined : { y, scale }}
        className="absolute inset-0 z-0"
      >
        <img 
          src={HERO_BG} 
          alt="" 
          className="w-full h-full object-cover opacity-25"
        />
        <div className="absolute inset-0" style={{ background: `linear-gradient(180deg, ${DARK_GREEN}95 0%, ${GREEN}75 50%, ${DARK_GREEN}98 100%)` }} />
      </motion.div>

      <div className="absolute inset-0 pattern-grid opacity-30" />
      <div
        className="absolute -top-40 -right-28 h-96 w-96 rounded-full blur-3xl opacity-40"
        style={{ background: `radial-gradient(circle, ${SAGE} 0%, transparent 70%)` }}
      />
      <div
        className="absolute -bottom-40 -left-32 h-[28rem] w-[28rem] rounded-full blur-3xl opacity-40"
        style={{ background: `radial-gradient(circle, ${GOLD} 0%, transparent 70%)` }}
      />
      
      {/* Content */}
      <div className="relative z-10 container pt-28 pb-24">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
          <motion.div
            style={{ opacity }}
            initial={{ y: 24, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="text-center lg:text-left"
          >
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-8">
              <Sparkles className="w-4 h-4 text-white/80" />
              <span className="text-sm font-medium text-white/90">Supercharging the backbone of ASEAN</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 tracking-tight text-white leading-tight">
              The Operating System
              <br />
              <span style={{ color: CREAM }}>for Neighborhood Retail</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white/70 max-w-2xl mx-auto lg:mx-0 mb-10 leading-relaxed">
              Not a marketplace. Not a SaaS tool.
              <span className="text-white font-medium"> The infrastructure layer</span> that will power
              ASEAN's S$1.1 Trillion traditional retail economy.
            </p>

            <div className="flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-4">
              <Button 
                size="lg"
                onClick={() => document.getElementById("solution")?.scrollIntoView({ behavior: "smooth" })}
                className="rounded-xl px-8 py-6 text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300"
                style={{ background: CREAM, color: DARK_GREEN }}
              >
                Explore the Vision
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button 
                size="lg"
                variant="outline"
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                className="rounded-xl px-8 py-6 text-lg font-semibold border-white/30 text-white hover:bg-white/10 hover:border-white/50 transition-all duration-300"
              >
                Request Deck
              </Button>
            </div>

          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.4 }}
            className="relative"
            style={shouldReduceMotion ? undefined : { y }}
          >
            <div className="absolute inset-0 rounded-3xl opacity-30 blur-2xl" style={{ background: `radial-gradient(circle, ${SAGE} 0%, transparent 65%)` }} />
            <div className="relative glass-card rounded-3xl p-6 md:p-8 text-white">
              <div className="flex items-start justify-between">
                <div>
                  <div className="text-xs uppercase tracking-[0.3em] text-white/60">The Vision</div>
                  <div className="text-lg font-semibold text-white">Ledger OS Modules</div>
                </div>
              </div>

              <div className="mt-6 space-y-4">
                {pulseItems.map((item) => (
                  <div
                    key={item.title}
                    className="group grid grid-cols-[auto_1fr_auto] items-start gap-3 rounded-2xl border border-white/10 bg-white/10 px-4 py-3 transition-all duration-300 hover:border-white/40 hover:bg-white"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl transition-colors duration-300" style={{ background: item.tint }}>
                      <item.icon className="w-5 h-5 text-white group-hover:text-white" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-sm font-semibold text-white group-hover:text-green-900">{item.title}</div>
                      <div className="text-xs text-white/60 group-hover:text-green-700">
                        {item.subtitle}
                      </div>
                    </div>
                    <span className="mt-0.5 whitespace-nowrap text-xs font-semibold text-white/70 group-hover:text-green-700">
                      {item.tag}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {heroStats.map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-2xl border border-white/15 bg-white/10 px-4 py-4 text-left shadow-lg shadow-green-900/10"
                  >
                    <div className="text-2xl font-semibold text-white">{stat.value}</div>
                    <div className="text-xs uppercase tracking-widest text-white/60">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="pointer-events-none absolute bottom-10 left-1/2 -translate-x-1/2">
        <motion.div
          animate={shouldReduceMotion ? undefined : { y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-xs font-medium text-white/50 uppercase tracking-widest">Scroll to explore</span>
          <ChevronDown className="w-6 h-6 text-white/50" />
        </motion.div>
      </div>
    </section>
  );
}

// Market Data Section
function MarketDataSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const marketStats = [
    { value: 9, suffix: "%", label: "CAGR", sublabel: "Market Growth Rate" },
    { value: 1.1, prefix: "S$", suffix: "tr", label: "TAM", sublabel: "Total Addressable Market" },
    { value: 600, prefix: "$", suffix: "bn", label: "SAM", sublabel: "Serviceable Market" },
  ];

  const aseanStats = [
    { value: 100, suffix: "+", label: "Stores Ready", sublabel: "to onboard" },
    { value: 4000, suffix: "+", label: "SMEs in Singapore", sublabel: "Target segment" },
    { value: 40, suffix: "M", label: "SMEs in ASEAN", sublabel: "Total opportunity" },
  ];

  const countryData = [
    { country: "Indonesia", gmv: 600, label: "~S$600B" },
    { country: "Thailand", gmv: 300, label: "~S$300B" },
    { country: "Vietnam", gmv: 250, label: "~S$250B" },
    { country: "Philippines", gmv: 180, label: "~S$180B" },
    { country: "Malaysia", gmv: 160, label: "~S$160B" },
    { country: "Singapore", gmv: 100, label: "~S$100B" },
  ];
  const maxGmv = Math.max(...countryData.map(item => item.gmv));

  return (
    <section id="market" className="py-24 relative" style={{ background: CREAM }}>
      <div className="absolute inset-0" style={{ background: `linear-gradient(180deg, ${CREAM} 0%, #F6F3EC 100%)` }} />
      <div className="absolute inset-0 pattern-grid opacity-40" />
      
      <div className="container relative z-10" ref={ref}>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-12"
        >
          <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-green-100 shadow-sm mb-6">
            <BarChart3 className="w-4 h-4" style={{ color: GREEN }} />
            <span className="text-sm font-medium" style={{ color: DARK_GREEN }}>Market Analysis</span>
          </motion.div>
          <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold mb-6" style={{ color: DARK_GREEN }}>
            What does <span style={{ color: GREEN }}>Market Data</span> say
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-xl max-w-2xl mx-auto" style={{ color: GREEN }}>
            A $1.1T retail market still runs on paper.
          </motion.p>
        </motion.div>
        
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left: Market Stats Card */}
          <motion.div
            variants={fadeInLeft}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="rounded-2xl p-8 text-white shadow-2xl shadow-green-900/15"
            style={{ background: `linear-gradient(135deg, ${GREEN} 0%, ${SAGE} 100%)` }}
          >
            <div className="flex items-center justify-between mb-6">
              <div>
                <div className="text-xs uppercase tracking-[0.3em] text-white/60">SME Market</div>
                <h3 className="text-2xl font-bold">ASEAN Opportunity</h3>
              </div>
              <div className="rounded-full border border-white/30 bg-white/10 px-3 py-1 text-xs uppercase tracking-widest text-white/70">
                ASEAN
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {marketStats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 16 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="group relative cursor-pointer overflow-hidden rounded-xl border border-white/15 bg-white/10 px-4 py-5 text-left transition-all duration-300 hover:-translate-y-1 hover:border-white/30 hover:bg-white/20 hover:shadow-xl hover:shadow-green-900/20"
                >
                  <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" style={{ background: "linear-gradient(135deg, rgba(255,255,255,0.18) 0%, rgba(255,255,255,0) 55%)" }} />
                  <div className="text-3xl font-bold mb-2">
                    <AnimatedCounter value={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
                  </div>
                  <div className="text-xs uppercase tracking-widest text-white/70">{stat.label}</div>
                  <div className="text-sm text-white/70">{stat.sublabel}</div>
                </motion.div>
              ))}
            </div>

            <div className="mt-6 border-t border-white/20 pt-6">
              <div className="grid grid-cols-3 gap-4">
                {aseanStats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 16 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    className="group relative cursor-pointer overflow-hidden rounded-xl border border-white/10 bg-white/10 px-3 py-4 text-left transition-all duration-300 hover:-translate-y-1 hover:border-white/30 hover:bg-white/20 hover:shadow-xl hover:shadow-green-900/15"
                  >
                    <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" style={{ background: "linear-gradient(135deg, rgba(255,255,255,0.16) 0%, rgba(255,255,255,0) 60%)" }} />
                    <div className="text-xl font-semibold">
                      <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                    </div>
                    <div className="text-xs uppercase tracking-widest text-white/70">{stat.label}</div>
                    <div className="text-[11px] text-white/50">{stat.sublabel}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right: Chart */}
          <motion.div
            variants={fadeInRight}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="bg-white rounded-2xl p-8 shadow-xl shadow-green-900/10 border border-green-100"
          >
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-lg font-semibold" style={{ color: DARK_GREEN }}>
                  Total Retail GMV by Country
                </h3>
                <p className="text-sm" style={{ color: SAGE }}>
                  Offline + online retail GMV (2023 est.)
                </p>
              </div>
              <div className="text-xs uppercase tracking-widest text-green-700">Retail GMV</div>
            </div>

            <div className="grid grid-cols-6 items-end gap-4 h-64">
              {countryData.map((item, index) => (
                <motion.div
                  key={item.country}
                  className="flex flex-col items-center"
                  initial={{ opacity: 0, scaleY: 0 }}
                  animate={isInView ? { opacity: 1, scaleY: 1 } : {}}
                  transition={{ delay: 0.5 + index * 0.1, duration: 0.6 }}
                  style={{ transformOrigin: "bottom" }}
                >
                  <div className="text-sm font-semibold mb-2" style={{ color: DARK_GREEN }}>
                    {item.label}
                  </div>
                  <div className="w-full rounded-xl bg-green-50 px-1 pb-1">
                    <div
                      className="w-full rounded-lg transition-all duration-300 hover:opacity-90"
                      style={{
                        height: `${Math.round((item.gmv / maxGmv) * 180 + 24)}px`,
                        background: `linear-gradient(180deg, ${GREEN} 0%, ${DARK_GREEN} 100%)`,
                      }}
                    />
                  </div>
                  <div className="mt-3 text-center text-[11px] font-semibold uppercase tracking-wider" style={{ color: GREEN }}>
                    {item.country}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
        
        {/* Research Sources */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mt-12 bg-white rounded-2xl p-8 shadow-lg shadow-green-900/5 border border-green-100"
        >
          <div className="flex items-center gap-3 mb-6">
            <FileText className="w-5 h-5" style={{ color: GREEN }} />
            <h3 className="text-lg font-semibold" style={{ color: DARK_GREEN }}>Supporting Research</h3>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {researchSources.map((source, index) => (
              <motion.a
                key={source.title}
                href={source.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.8 + index * 0.1 }}
                className="p-4 rounded-xl border border-green-100 hover:border-green-300 hover:shadow-md transition-all duration-300 group"
                style={{ background: `${CREAM}50` }}
              >
                <div className="flex items-start justify-between mb-2">
                  <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: GREEN }}>{source.org}</span>
                  <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" style={{ color: GREEN }} />
                </div>
                <div className="font-medium mb-1" style={{ color: DARK_GREEN }}>{source.title}</div>
                <div className="text-sm" style={{ color: SAGE }}>{source.description}</div>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// Problem Section
function ProblemSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const problems = [
    { 
      icon: Globe, 
      stat: "S$1.1T", 
      label: "Traditional Retail Market",
      desc: "Invisible to modern supply chains"
    },
    { 
      icon: Users, 
      stat: "40M+", 
      label: "SME Retailers",
      desc: "Operating on paper and WhatsApp"
    },
    { 
      icon: DollarSign, 
      stat: "40%", 
      label: "Trade Finance Rejection",
      desc: "Banks refuse SME applications"
    },
    { 
      icon: TrendingUp, 
      stat: "15-30%", 
      label: "Supply Chain Waste",
      desc: "From inefficient procurement"
    },
  ];

  return (
    <section id="problem" className="py-32 relative" style={{ background: "#FBFAF6" }}>
      <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, #FFFFFF 0%, #F5F2EA 100%)" }} />
      <div className="absolute inset-0 pattern-grid opacity-25" />
      <div className="container relative z-10" ref={ref}>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-50 border border-red-100 mb-6">
            <Shield className="w-4 h-4 text-red-500" />
            <span className="text-sm font-medium text-red-700">The Challenge</span>
          </motion.div>
          <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold mb-6" style={{ color: DARK_GREEN }}>
            The <span className="text-red-500">Invisible</span> Economy
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-xl max-w-2xl mx-auto" style={{ color: GREEN }}>
            Traditional retail in ASEAN is a massive market operating in the dark ages.
            No data. No credit. No efficiency.
          </motion.p>
        </motion.div>
        
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {problems.map((item, index) => (
            <motion.div
              key={item.label}
              variants={fadeInUp}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3 }}
              className="group relative overflow-hidden rounded-2xl border border-green-100 bg-white/70 p-6 shadow-lg shadow-green-900/5 transition-all duration-300 hover:border-green-300 hover:shadow-xl hover:shadow-green-900/15"
            >
              <div className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" style={{ background: "linear-gradient(135deg, rgba(91,123,106,0.12) 0%, rgba(255,255,255,0) 60%)" }} />
              <div className="relative">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ background: `${GREEN}20` }}>
                    <item.icon className="w-6 h-6" style={{ color: GREEN }} />
                  </div>
                  <div className="text-xs uppercase tracking-[0.2em]" style={{ color: SAGE }}>Signal {index + 1}</div>
                </div>
                <div className="text-3xl font-bold mb-2" style={{ color: GREEN }}>
                  {item.stat}
                </div>
                <div className="font-semibold mb-1" style={{ color: DARK_GREEN }}>{item.label}</div>
                <div className="text-sm" style={{ color: SAGE }}>{item.desc}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Why marketplaces fail */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mt-16 rounded-2xl border border-red-100 bg-white p-8 shadow-lg shadow-red-900/10"
        >
          <div className="flex items-start gap-6">
            <div className="w-14 h-14 rounded-xl bg-red-50 flex items-center justify-center shrink-0">
              <Shield className="w-7 h-7 text-red-500" />
            </div>
            <div>
              <div className="text-xs uppercase tracking-[0.3em] text-red-400">Structural issue</div>
              <h3 className="font-bold text-xl mb-3 text-red-700">
                Why B2B Marketplaces Fail
              </h3>
              <p className="leading-relaxed" style={{ color: DARK_GREEN }}>
                Commission-based models create a simple problem: <span className="font-semibold">disintermediation</span>. 
                Once a shop finds a good supplier, they exchange WhatsApp numbers and bypass the platform entirely. 
                You've spent money acquiring both sides, only to lose them after the first transaction.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// Solution Section
function SolutionSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const shouldReduceMotion = useReducedMotion();
  const osPillars = [
    {
      title: "Sentient OS",
      description: "AI autopilot for procurement + pricing.",
      icon: Brain,
      accent: GREEN,
    },
    {
      title: "Demand Auction",
      description: "Suppliers bid for guaranteed demand.",
      icon: Gavel,
      accent: SAGE,
    },
    {
      title: "Digital Cooperative",
      description: "Unified brand + private label + loyalty.",
      icon: Users,
      accent: GOLD,
    },
    {
      title: "Embedded Bank",
      description: "BNPL + supplier accelerator + growth fund.",
      icon: Wallet,
      accent: DARK_GREEN,
    },
  ];

  const flowSteps = [
    { label: "POS data", icon: Store },
    { label: "AI OS", icon: Brain },
    { label: "Demand auction", icon: Gavel },
    { label: "Embedded finance", icon: Wallet },
    { label: "Co-op brand", icon: Users },
  ];

  return (
    <section id="solution" className="py-32 relative" style={{ background: DARK_GREEN }}>
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10">
          <div className="w-full h-full" style={{ background: `radial-gradient(circle at 70% 30%, ${SAGE} 0%, transparent 50%)` }} />
        </div>
      </div>
      
      <div className="container relative z-10" ref={ref}>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
            <Layers className="w-4 h-4" style={{ color: CREAM }} />
            <span className="text-sm font-medium text-white/90">Our Approach</span>
          </motion.div>
          <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Not a Marketplace. <span style={{ color: CREAM }}>An Operating System.</span>
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-xl text-white/70 max-w-3xl mx-auto">
            Windows doesn't charge commission when you buy software. You pay for the OS license.
            <span className="text-white font-semibold"> That's our model.</span>
          </motion.p>
        </motion.div>
        
        {/* Supply chain OS diagram */}
        <motion.div
          variants={scaleIn}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 via-white/5 to-white/10 p-8 md:p-12"
        >
          <div
            className="absolute -top-28 -left-16 h-64 w-64 rounded-full opacity-25 blur-3xl"
            style={{ background: `radial-gradient(circle, ${SAGE} 0%, transparent 70%)` }}
          />
          <div
            className="absolute -bottom-32 -right-20 h-72 w-72 rounded-full opacity-25 blur-3xl"
            style={{ background: `radial-gradient(circle, ${GOLD} 0%, transparent 70%)` }}
          />

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="relative z-10 space-y-10"
          >
            <div className="relative">
              <motion.div
                className="absolute left-6 right-6 top-1/2 hidden h-px md:block"
                style={{ background: `linear-gradient(90deg, ${GREEN}00 0%, ${GREEN}80 30%, ${GREEN}80 70%, ${GREEN}00 100%)` }}
                animate={shouldReduceMotion ? undefined : { opacity: [0.25, 0.6, 0.25] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              />
              <div className="grid grid-cols-2 gap-4 md:grid-cols-5">
                {flowSteps.map((step, index) => (
                  <motion.div
                    key={step.label}
                    variants={fadeInUp}
                    className="relative z-10 flex flex-col items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-center shadow-lg shadow-green-900/10"
                  >
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl" style={{ background: `${CREAM}25` }}>
                      <step.icon className="h-5 w-5 text-white" />
                    </div>
                    <div className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/70">
                      {step.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="grid lg:grid-cols-[1fr_1.3fr_1fr] gap-6 items-stretch">
              {/* Retailers */}
              <motion.div
                variants={fadeInUp}
                className="rounded-2xl border border-white/10 bg-white/5 p-6 text-left shadow-lg shadow-green-900/10"
                whileHover={{ y: -3 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl shadow-lg" style={{ background: GREEN }}>
                    <Store className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <div className="text-[11px] uppercase tracking-[0.3em] text-white/50">Retailers</div>
                    <div className="text-lg font-semibold text-white">Ledger Network Stores</div>
                  </div>
                </div>
                <p className="text-sm text-white/60 mb-4">
                  POS data becomes the operating fuel for inventory, pricing, and credit.
                </p>
                <div className="space-y-2 text-sm text-white/70">
                  {["Real-time demand signals", "Autonomous procurement", "Margin lift autopilot"].map((item) => (
                    <div key={item} className="flex items-start gap-2">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 text-emerald-200" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Kernel */}
              <motion.div
                variants={fadeInUp}
                className="rounded-2xl border border-white/20 bg-white/10 p-6 text-center relative overflow-hidden shadow-xl shadow-green-900/20"
                whileHover={{ y: -3 }}
                transition={{ duration: 0.3 }}
              >
                <div className="absolute inset-0 opacity-30" style={{ background: `radial-gradient(circle at 50% 0%, ${SAGE} 0%, transparent 60%)` }} />
                <div className={`relative ${shouldReduceMotion ? "" : "float-slow"}`}>
                  <div
                    className="mx-auto mb-4 flex h-24 w-24 items-center justify-center rounded-2xl border border-white/30 shadow-2xl"
                    style={{ background: `linear-gradient(135deg, ${DARK_GREEN} 0%, ${GREEN} 100%)` }}
                  >
                    <img src={LEDGER_LOGO} alt="Ledger" className="w-14 h-14 object-contain" />
                  </div>
                  <div className="text-lg font-semibold text-white">Ledger OS Kernel</div>
                  <div className="text-sm text-white/60 mt-2">
                    Coordinating procurement, pricing, logistics, and capital across the network.
                  </div>
                </div>

                <div className="mt-6 grid grid-cols-2 gap-3 text-left">
                  {osPillars.map((pillar) => (
                    <motion.div
                      key={pillar.title}
                      variants={fadeInUp}
                      className="rounded-xl border border-white/10 bg-white/5 p-3 transition-all duration-300 hover:border-white/30 hover:bg-white/10"
                    >
                      <div className="flex items-center gap-2">
                        <div className="flex h-8 w-8 items-center justify-center rounded-lg" style={{ background: `${pillar.accent}35` }}>
                          <pillar.icon className="h-4 w-4 text-white" />
                        </div>
                        <div>
                          <div className="text-sm font-semibold text-white">{pillar.title}</div>
                          <div className="text-[11px] text-white/50">{pillar.description}</div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Suppliers */}
              <motion.div
                variants={fadeInUp}
                className="rounded-2xl border border-white/10 bg-white/5 p-6 text-left shadow-lg shadow-green-900/10"
                whileHover={{ y: -3 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl shadow-lg" style={{ background: SAGE }}>
                    <Network className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <div className="text-[11px] uppercase tracking-[0.3em] text-white/50">Suppliers</div>
                    <div className="text-lg font-semibold text-white">Guaranteed Demand Flow</div>
                  </div>
                </div>
                <p className="text-sm text-white/60 mb-4">
                  Suppliers compete for demand blocks and receive reliable, faster payment.
                </p>
                <div className="space-y-2 text-sm text-white/70">
                  {["Auctioned demand commitments", "Predictable logistics planning", "Early-pay accelerator"].map((item) => (
                    <div key={item} className="flex items-start gap-2">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 text-emerald-200" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="grid md:grid-cols-3 gap-6 border-t border-white/10 pt-8 text-left"
            >
              {[
                {
                  title: "Revenue model",
                  body: "Subscriptions + auction fees + finance spread. Zero marketplace commission.",
                },
                {
                  title: "Supply chain impact",
                  body: "Lower costs, faster replenishment, and guaranteed sell-through.",
                },
                {
                  title: "Lock-in effect",
                  body: "Data, brand, and credit history compound inside the OS.",
                },
              ].map((item) => (
                <motion.div
                  key={item.title}
                  variants={fadeInUp}
                  whileHover={{ y: -2 }}
                  transition={{ duration: 0.3 }}
                  className="rounded-2xl border border-white/10 bg-white/5 p-4 shadow-lg shadow-green-900/10"
                >
                  <div className="text-sm font-semibold text-white mb-2">{item.title}</div>
                  <div className="text-xs text-white/60">{item.body}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

// Pillars Section
function PillarsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const pillars = [
    {
      id: 1,
      title: "THE SENTIENT OS",
      subtitle: "AI That Runs the Shop",
      icon: Brain,
      description: "Don't give shops tools. Give them an autopilot.",
      features: [
        "AI predicts what to order before stock runs out",
        "Auto-generates purchase orders",
        "Optimizes pricing based on demand",
        "Automated procurement and pricing workflow"
      ],
      revenue: "OS subscription fee",
      lockin: "They'd have to fire their best employee (your AI)"
    },
    {
      id: 2,
      title: "THE DEMAND AUCTION",
      subtitle: "Suppliers Bid for Guaranteed Sales",
      icon: Gavel,
      description: "Flip the marketplace. Suppliers bid for aggregated demand.",
      features: [
        "AI aggregates demand across all shops",
        "Suppliers bid for guaranteed contracts",
        "Lower prices through competition",
        "No commission on goods"
      ],
      revenue: "Auction fees from winning suppliers",
      lockin: "Aggregated demand doesn't exist outside the platform"
    },
    {
      id: 3,
      title: "THE DIGITAL COOPERATIVE",
      subtitle: "Franchise Without Fees",
      icon: Store,
      description: "Turn shops into a unified brand with collective power.",
      features: [
        "Negotiate directly with manufacturers",
        "Private label products (40%+ margins)",
        "Consumer-facing loyalty app",
        "Shared marketing and branding"
      ],
      revenue: "Supplier rebates + private label margins",
      lockin: "They lose their identity, pricing power, and customers"
    },
    {
      id: 4,
      title: "THE EMBEDDED BANK",
      subtitle: "Financial Backbone of Retail",
      icon: Wallet,
      description: "Become the financial infrastructure for traditional retail.",
      features: [
        "B2B Buy Now, Pay Later (30/60/90 days)",
        "Supplier early payment (capture discount)",
        "Growth loans for expansion",
        "Alternative credit scoring via POS data"
      ],
      revenue: "2-5% fee per BNPL transaction + interest spread",
      lockin: "Credit history is platform-specific"
    }
  ];

  return (
    <section id="pillars" className="py-32 relative" style={{ background: CREAM }}>
      <div className="absolute inset-0" style={{ background: `linear-gradient(180deg, ${CREAM} 0%, #F7F4EE 100%)` }} />
      <div className="absolute inset-0 pattern-grid opacity-35" />
      
      <div className="container relative z-10" ref={ref}>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-green-100 shadow-sm mb-6">
            <Layers className="w-4 h-4" style={{ color: GREEN }} />
            <span className="text-sm font-medium" style={{ color: DARK_GREEN }}>Core Modules</span>
          </motion.div>
          <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold mb-6" style={{ color: DARK_GREEN }}>
            Four Pillars of <span style={{ color: GREEN }}>Dominance</span>
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-xl max-w-2xl mx-auto" style={{ color: GREEN }}>
            Each pillar creates value. Together, they create an unbreakable moat.
          </motion.p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-6">
          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.id}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.15, duration: 0.8 }}
              className="bg-white rounded-2xl overflow-hidden shadow-xl shadow-green-900/10 border border-green-100 hover:shadow-2xl hover:shadow-green-900/15 transition-all duration-500"
            >
              <div className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-xl flex items-center justify-center" style={{ background: GREEN }}>
                    <pillar.icon className="w-7 h-7 text-white" />
                  </div>
                  <div className="text-5xl font-bold" style={{ color: `${GREEN}20` }}>0{pillar.id}</div>
                </div>
                
                <h3 className="text-xl font-bold mb-1" style={{ color: DARK_GREEN }}>{pillar.title}</h3>
                <p className="mb-4" style={{ color: SAGE }}>{pillar.subtitle}</p>
                <p className="mb-6" style={{ color: GREEN }}>{pillar.description}</p>
                
                <div className="space-y-3 mb-6">
                  {pillar.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5" style={{ color: GREEN }} />
                      <span className="text-sm" style={{ color: DARK_GREEN }}>{feature}</span>
                    </div>
                  ))}
                </div>
                
                <div className="grid grid-cols-2 gap-4 pt-6 border-t border-green-100">
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-wider mb-1" style={{ color: SAGE }}>Revenue</div>
                    <div className="text-sm font-medium" style={{ color: GREEN }}>{pillar.revenue}</div>
                  </div>
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-wider mb-1" style={{ color: SAGE }}>Lock-in</div>
                    <div className="text-sm" style={{ color: DARK_GREEN }}>{pillar.lockin}</div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Financials Section
function FinancialsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const projections = [
    { year: "Year 1", shops: 50, gmv: "1M", revenue: "0.02M", ebitda: "-0.03M" },
    { year: "Year 2", shops: 250, gmv: "4M", revenue: "0.30M", ebitda: "-0.19M" },
    { year: "Year 3", shops: 800, gmv: "16M", revenue: "1.42M", ebitda: "-0.68M" },
    { year: "Year 4", shops: 2500, gmv: "58M", revenue: "5.24M", ebitda: "1.17M" },
    { year: "Year 5", shops: 6000, gmv: "159M", revenue: "13.65M", ebitda: "8.57M" },
  ];

  const isNegativeValue = (value: string) => value.trim().startsWith("-");

  const keyMetrics = [
    { value: 160, suffix: "x", label: "LTV:CAC Ratio", sublabel: "By Year 5" },
    { value: 69, suffix: "%", label: "Blended Margin", sublabel: "Across all pillars" },
    { value: 67, suffix: "%", label: "Revenue from Coop", sublabel: "Private label engine" },
  ];

  return (
    <section id="financials" className="py-32 relative" style={{ background: "#FBFAF7" }}>
      <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, #FFFFFF 0%, #F6F2EC 100%)" }} />
      <div className="absolute inset-0 pattern-grid opacity-20" />
      <div className="container relative z-10" ref={ref}>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-green-100 mb-6" style={{ background: CREAM }}>
            <TrendingUp className="w-4 h-4" style={{ color: GREEN }} />
            <span className="text-sm font-medium" style={{ color: DARK_GREEN }}>Financial Projections</span>
          </motion.div>
          <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold mb-6" style={{ color: DARK_GREEN }}>
            Path to <span style={{ color: GREEN }}>$136M Revenue</span>
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-xl max-w-2xl mx-auto" style={{ color: GREEN }}>
            Conservative projections based on proven unit economics.
          </motion.p>
        </motion.div>
        
        {/* Key metrics */}
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-3 gap-6 mb-12"
        >
          {keyMetrics.map((metric) => (
            <motion.div
              key={metric.label}
              variants={fadeInUp}
              className="rounded-2xl p-8 text-center text-white shadow-xl"
              style={{ background: `linear-gradient(135deg, ${GREEN} 0%, ${SAGE} 100%)` }}
            >
              <div className="text-5xl font-bold mb-2">
                <AnimatedCounter value={metric.value} suffix={metric.suffix} />
              </div>
              <div className="font-semibold text-lg">{metric.label}</div>
              <div className="text-white/70 text-sm">{metric.sublabel}</div>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Projections table */}
        <motion.div
          variants={scaleIn}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="bg-white rounded-2xl shadow-xl shadow-green-900/10 border border-green-100 overflow-hidden"
        >
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr style={{ background: DARK_GREEN }}>
                  <th className="px-6 py-5 text-left text-sm font-semibold text-white uppercase tracking-wider">Metric</th>
                  {projections.map((p) => (
                    <th key={p.year} className="px-6 py-5 text-right text-sm font-semibold text-white uppercase tracking-wider">
                      {p.year}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-green-100 hover:bg-green-50/50 transition-colors">
                  <td className="px-6 py-5 font-medium" style={{ color: DARK_GREEN }}>Total Shops</td>
                  {projections.map((p) => (
                    <td key={p.year} className="px-6 py-5 text-right font-semibold" style={{ color: DARK_GREEN }}>{p.shops.toLocaleString()}</td>
                  ))}
                </tr>
                <tr className="border-b border-green-100 hover:bg-green-50/50 transition-colors">
                  <td className="px-6 py-5 font-medium" style={{ color: DARK_GREEN }}>Total GMV</td>
                  {projections.map((p) => (
                    <td key={p.year} className="px-6 py-5 text-right font-semibold" style={{ color: DARK_GREEN }}>{p.gmv}</td>
                  ))}
                </tr>
                <tr className="border-b border-green-100 hover:bg-green-50/50 transition-colors">
                  <td className="px-6 py-5 font-medium" style={{ color: DARK_GREEN }}>Total Revenue</td>
                  {projections.map((p) => (
                    <td key={p.year} className="px-6 py-5 text-right font-bold" style={{ color: GREEN }}>{p.revenue}</td>
                  ))}
                </tr>
                <tr className="border-b border-green-100 hover:bg-green-50/50 transition-colors">
                  <td className="px-6 py-5 font-medium" style={{ color: DARK_GREEN }}>EBITDA</td>
                  {projections.map((p) => (
                    <td
                      key={p.year}
                      className={`px-6 py-5 text-right font-bold ${isNegativeValue(p.ebitda) ? "text-red-500" : ""}`}
                      style={{ color: isNegativeValue(p.ebitda) ? undefined : GREEN }}
                    >
                      {p.ebitda}
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// Contact Section
function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const allocation = [
    { label: "Technology & AI", percent: 40 },
    { label: "Go-to-Market", percent: 30 },
    { label: "Lending Capital", percent: 20 },
    { label: "Operations", percent: 10 },
  ];

  return (
    <section id="contact" className="py-32 relative" style={{ background: DARK_GREEN }}>
      <div className="absolute inset-0 pattern-grid opacity-10" />
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute bottom-0 left-0 w-1/2 h-full opacity-10">
          <div className="w-full h-full" style={{ background: `radial-gradient(circle at 30% 70%, ${SAGE} 0%, transparent 50%)` }} />
        </div>
      </div>
      
      <div className="container relative z-10" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: The Ask */}
          <motion.div
            variants={fadeInLeft}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
              <Rocket className="w-4 h-4" style={{ color: CREAM }} />
              <span className="text-sm font-medium text-white/90">Investment Opportunity</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              <span style={{ color: CREAM }}>$5M</span> Seed Round
            </h2>
            <p className="text-xl text-white/70 mb-8">
              Pre-seed team raising seed to reach 800 shops, $10M GMV, and launch embedded finance.
            </p>
            
            {/* Allocation bars */}
            <div className="space-y-5">
              {allocation.map((item, index) => (
                <div key={item.label}>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-white/80">{item.label}</span>
                    <span className="font-semibold text-white">{item.percent}%</span>
                  </div>
                  <div className="h-3 bg-white/10 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={isInView ? { width: `${item.percent}%` } : {}}
                      transition={{ delay: 0.5 + index * 0.1, duration: 1 }}
                      className="h-full rounded-full"
                      style={{ background: `linear-gradient(90deg, ${GREEN} 0%, ${SAGE} 100%)` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
          
          {/* Right: Contact Card */}
          <motion.div
            variants={fadeInRight}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="bg-white rounded-3xl p-8 shadow-2xl"
          >
            <div className="text-center mb-8">
              <img src={LEDGER_LOGO} alt="Ledger" className="w-20 h-20 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2" style={{ color: DARK_GREEN }}>Join the Revolution</h3>
              <p style={{ color: SAGE }}>Let's build the future of ASEAN retail together.</p>
            </div>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center justify-between p-4 rounded-xl" style={{ background: CREAM }}>
                <span style={{ color: SAGE }}>Contact</span>
                <a href="mailto:samarth_agarwal@ledgersg.com" className="font-semibold hover:underline" style={{ color: DARK_GREEN }}>
                  samarth_agarwal@ledgersg.com
                </a>
              </div>
              <div className="flex items-center justify-between p-4 rounded-xl" style={{ background: CREAM }}>
                <span style={{ color: SAGE }}>Website</span>
                <a href="https://ledgersg.com" target="_blank" rel="noopener noreferrer" className="font-semibold flex items-center gap-1 hover:underline" style={{ color: DARK_GREEN }}>
                  ledgersg.com
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
              <div className="flex items-center justify-between p-4 rounded-xl" style={{ background: CREAM }}>
                <span style={{ color: SAGE }}>Location</span>
                <span className="font-semibold" style={{ color: DARK_GREEN }}>Singapore</span>
              </div>
              <div className="flex items-center justify-between p-4 rounded-xl" style={{ background: CREAM }}>
                <span style={{ color: SAGE }}>Stage</span>
                <span className="font-semibold" style={{ color: GREEN }}>Seed</span>
              </div>
            </div>
            
            <motion.div whileHover={{ scale: 1.02 }}>
              <Button 
                asChild
                className="w-full rounded-xl py-6 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                style={{ background: GREEN }}
              >
                <a href="mailto:samarth_agarwal@ledgersg.com">
                  <Mail className="mr-2 w-5 h-5" />
                  Request Full Deck
                </a>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// Footer
function Footer() {
  return (
    <footer className="py-8 border-t" style={{ background: DARK_GREEN, borderColor: `${GREEN}50` }}>
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <a 
            href="https://ledgersg.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-3 group"
          >
            <img src={LEDGER_LOGO} alt="Ledger" className="w-8 h-8 rounded-lg" />
            <span className="font-bold text-white">Ledger</span>
          </a>
          <div className="text-sm text-white/60">
            The Operating System for Traditional Retail
          </div>
          <div className="text-sm text-white/40">
            © 2026 Ledger. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}

// Main Home Component
export default function Home() {
  return (
    <div className="min-h-screen" style={{ background: CREAM }}>
      <Navigation />
      <HeroSection />
      <MarketDataSection />
      <ProblemSection />
      <SolutionSection />
      <PillarsSection />
      <FinancialsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

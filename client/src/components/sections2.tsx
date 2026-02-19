import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import {
    Brain, Gavel, Users, ArrowRight, Zap, CheckCircle2, ArrowUpRight,
    Layers, Wallet, Sparkles, Star, LineChart, CreditCard, Package,
    HeartHandshake, MessageSquare, Mail, ChevronRight, Globe, ChevronDown,
    Calculator, MapPin, HelpCircle, Minus, Plus
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { AnimatedCounter, fadeInUp, fadeInLeft, fadeInRight, staggerContainer, scaleIn, GREEN, DARK_GREEN, CREAM, SAGE, GOLD, LEDGER_LOGO } from "./sections";

// ─── FEATURES SECTION (Interactive Tabs) ────────────────────────
export function FeaturesSection() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const [activeTab, setActiveTab] = useState(0);
    const features = [
        { tab: "Smart POS", icon: Brain, color: GREEN, title: "AI-Powered Point of Sale", desc: "More than a register — it's your store's brain. Ledger's POS captures every transaction and turns it into actionable intelligence.", items: ["Predictive demand forecasting", "Auto-generated purchase orders", "Dynamic pricing optimization", "Real-time margin tracking"], comingSoon: false, stats: [{ v: "94%", l: "Customer Retention" }, { v: "30%", l: "Less Waste" }, { v: "2.5×", l: "Revenue Insight" }, { v: "18%", l: "Better Pricing" }], testimonial: { quote: "Ledger cut our procurement time by 80%. We used to spend 3 hours a day on ordering — now it's fully automated.", author: "Mini-mart owner, Singapore" } },
        { tab: "Procurement", icon: Gavel, color: SAGE, title: "Demand Marketplace", desc: "Join forces with stores in your network. Ledger aggregates demand across the neighborhood to get you wholesale prices at any scale.", items: ["Aggregated demand for bulk pricing", "Suppliers compete for your business", "Automated order consolidation", "Transparent price comparison"], comingSoon: false, stats: [{ v: "22%", l: "Cost Savings" }, { v: "3×", l: "More Suppliers" }, { v: "80%", l: "Less Ordering Time" }, { v: "15%", l: "Better Margins" }], testimonial: { quote: "We save over $2,000 a month on inventory costs by pooling orders with neighboring stores through Ledger.", author: "Grocery store owner, Singapore" } },
        { tab: "Cooperative", icon: Users, color: GOLD, title: "Digital Cooperative", desc: "The power of a franchise without the fees. Access shared branding, bulk deals, and a consumer loyalty program that drives repeat visits.", items: ["Shared loyalty rewards program", "Private label products at 40%+ margins", "Co-branded marketing campaigns", "Network-wide promotions engine"], comingSoon: true, stats: [{ v: "40%+", l: "Private Label Margins" }, { v: "2×", l: "Repeat Visits" }, { v: "0", l: "Franchise Fees" }, { v: "50+", l: "Stores in Network" }], testimonial: { quote: "We're building the cooperative model because independent stores deserve the same advantages as franchise chains — without giving up their identity.", author: "Ledger Team" } },
        { tab: "Finance", icon: Wallet, color: DARK_GREEN, title: "Embedded Finance", desc: "Get the capital you need when you need it. Ledger uses your real sales data for instant credit — no paperwork, no bank visits.", items: ["Buy Now Pay Later for B2B orders", "Growth financing based on POS data", "Supplier early-payment discounts", "85% approval rate vs 40% at banks"], comingSoon: true, stats: [{ v: "85%", l: "Approval Rate" }, { v: "24h", l: "Funding Speed" }, { v: "0", l: "Paperwork Required" }, { v: "40%", l: "Lower Interest" }], testimonial: { quote: "Traditional banks reject most small retailers. With real POS data, we can offer better rates to the stores that need it most.", author: "Ledger Team" } },
    ];

    const active = features[activeTab];
    return (
        <section id="features" className="py-12 md:py-24 relative" style={{ background: DARK_GREEN }}>
            <div className="absolute inset-0 overflow-hidden"><div className="absolute top-0 right-0 w-1/2 h-full opacity-10"><div className="w-full h-full" style={{ background: `radial-gradient(circle at 70% 30%, ${SAGE} 0%, transparent 50%)` }} /></div></div>
            <div className="container relative z-10" ref={ref}>
                <motion.div variants={staggerContainer} initial="hidden" animate={isInView ? "visible" : "hidden"} className="text-center mb-8 md:mb-14">
                    <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 mb-6"><Layers className="w-4 h-4" style={{ color: CREAM }} /><span className="text-sm font-medium text-white/90">Product Features</span></motion.div>
                    <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-bold mb-4 md:mb-6 text-white">Everything You Need to <span style={{ color: CREAM }}>Grow</span></motion.h2>
                    <motion.p variants={fadeInUp} className="text-xl max-w-2xl mx-auto text-white/70">Four integrated modules that work together as one powerful system.</motion.p>
                </motion.div>
                <motion.div variants={fadeInUp} initial="hidden" animate={isInView ? "visible" : "hidden"} className="flex flex-wrap justify-center gap-2 md:gap-3 mb-6 md:mb-12">
                    {features.map((f, i) => (
                        <button key={f.tab} onClick={() => setActiveTab(i)} className={`relative flex items-center gap-1.5 md:gap-2 px-3 md:px-5 py-2 md:py-3 rounded-xl text-xs md:text-sm font-semibold transition-all duration-300 ${i === activeTab ? "bg-white text-green-900 shadow-lg scale-105" : "bg-white/10 text-white/70 hover:bg-white/20 border border-white/10"}`}>
                            <f.icon className="w-4 h-4" />{f.tab}
                            {f.comingSoon && (
                                <span className={`ml-1 px-1.5 py-0.5 rounded text-[9px] font-bold uppercase tracking-wide ${i === activeTab ? "bg-amber-100 text-amber-700" : "bg-amber-400/20 text-amber-300 border border-amber-400/30"}`}>Soon</span>
                            )}
                        </button>
                    ))}
                </motion.div>
                <motion.div key={activeTab} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="grid lg:grid-cols-2 gap-8 items-center">
                    <div className="rounded-2xl border border-white/20 bg-white/10 p-5 md:p-8 backdrop-blur-sm">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-14 h-14 rounded-xl flex items-center justify-center" style={{ background: active.color }}><active.icon className="w-7 h-7 text-white" /></div>
                            <div>
                                <div className="text-xs uppercase tracking-[0.2em] text-white/50">Module</div>
                                <div className="flex items-center gap-2">
                                    <div className="text-xl font-bold text-white">{active.title}</div>
                                    {active.comingSoon && <span className="px-2 py-0.5 rounded-md bg-amber-400/20 border border-amber-400/30 text-amber-300 text-[10px] font-bold uppercase tracking-wide">Coming Soon</span>}
                                </div>
                            </div>
                        </div>
                        <p className="text-white/70 mb-6 leading-relaxed">{active.desc}</p>
                        {active.comingSoon ? (
                            <div>
                                <div className="space-y-3">
                                    {active.items.map((item, i) => (<motion.div key={item} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.1 }} className="flex items-start gap-3"><Sparkles className="w-5 h-5 text-amber-300/70 shrink-0 mt-0.5" /><span className="text-sm text-white/70">{item}</span></motion.div>))}
                                </div>
                                <Button onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })} className="mt-8 rounded-xl px-6 py-3 font-semibold" style={{ background: GOLD, color: DARK_GREEN }}>Join Waitlist <ArrowRight className="ml-2 w-4 h-4" /></Button>
                            </div>
                        ) : (
                            <div>
                                <div className="space-y-3">
                                    {active.items.map((item, i) => (<motion.div key={item} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.1 }} className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-emerald-300 shrink-0 mt-0.5" /><span className="text-sm text-white/85">{item}</span></motion.div>))}
                                </div>
                                <Button onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })} className="mt-8 rounded-xl px-6 py-3 font-semibold" style={{ background: CREAM, color: DARK_GREEN }}>Get Started <ArrowRight className="ml-2 w-4 h-4" /></Button>
                            </div>
                        )}
                    </div>
                    <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-5 md:p-8">
                        <div className="grid grid-cols-2 gap-4">
                            {active.stats.map(s => (
                                <div key={s.l} className="rounded-xl border border-white/15 bg-white/10 p-3 md:p-5 text-center transition-all hover:bg-white/20 hover:border-white/30"><div className="text-2xl md:text-3xl font-bold text-white mb-1">{s.v}</div><div className="text-xs uppercase tracking-wider text-white/60">{s.l}</div></div>
                            ))}
                        </div>
                        <div className="mt-6 rounded-xl border border-white/10 bg-white/5 p-5">
                            <div className="flex items-center gap-2 mb-3"><Star className="w-4 h-4 text-yellow-400" /><span className="text-sm font-semibold text-white">{active.comingSoon ? "Why we're building this" : "What our users say"}</span></div>
                            <p className="text-sm text-white/70 italic">"{active.testimonial.quote}"</p>
                            <div className="mt-3 text-xs text-white/50">— {active.testimonial.author}</div>
                        </div>
                    </div>

                </motion.div>
            </div>
        </section>
    );
}

// ─── ROI CALCULATOR ─────────────────────────────────────────────
export function ROICalculatorSection() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const [mode, setMode] = useState<"shop" | "supplier">("shop");

    // Shop inputs
    const [revenue, setRevenue] = useState(30000);
    const [cogsPercent, setCogsPercent] = useState(65);
    const [staffCount, setStaffCount] = useState(3);
    const [procurementHours, setProcurementHours] = useState(12);

    // Supplier inputs
    const [monthlySales, setMonthlySales] = useState(80000);
    const [retailClients, setRetailClients] = useState(15);
    const [avgDeliveryCost, setAvgDeliveryCost] = useState(120);

    // ── Shop calculations ──
    const monthlyCOGS = revenue * (cogsPercent / 100);
    // Bulk Procurement: aggregated ordering saves ~12% on COGS (driven by revenue + cogsPercent)
    const procurementSavings = Math.round(monthlyCOGS * 0.12);
    // Waste Reduction: AI demand forecasting cuts spoilage ~4% of COGS (driven by revenue + cogsPercent)
    const wasteSavings = Math.round(monthlyCOGS * 0.04);
    // Procurement Automation: automates weekly ordering hours (driven by procurementHours)
    const laborSavings = Math.round(procurementHours * 8 * 4.3);
    // Staff Productivity: each staff saves ~10 hrs/month on inventory counts, stock checks, price updates (driven by staffCount)
    const staffProductivity = Math.round(staffCount * 10 * 8);
    const totalShopSavings = procurementSavings + wasteSavings + laborSavings + staffProductivity;
    const savingsPercent = revenue > 0 ? ((totalShopSavings / revenue) * 100).toFixed(1) : "0";
    const annualSavings = totalShopSavings * 12;

    // ── Supplier calculations ──
    const newStoresReached = Math.round(retailClients * 1.8);
    const revenueUplift = Math.round(newStoresReached * 500);
    const deliverySavings = Math.round(retailClients * avgDeliveryCost * 0.20);
    const cashflowImprovement = Math.round(monthlySales * 0.03);
    const totalSupplierBenefit = revenueUplift + deliverySavings + cashflowImprovement;
    const annualSupplierBenefit = totalSupplierBenefit * 12;

    return (
        <section id="roi-calculator" className="py-12 md:py-24 relative overflow-hidden" style={{ background: `linear-gradient(135deg, ${DARK_GREEN} 0%, #2D4438 100%)` }}>
            <div className="absolute inset-0 pattern-grid opacity-10" />
            <div className="container relative z-10" ref={ref}>
                <motion.div variants={staggerContainer} initial="hidden" animate={isInView ? "visible" : "hidden"} className="text-center mb-8 md:mb-14">
                    <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 mb-6">
                        <Calculator className="w-4 h-4 text-emerald-300" /><span className="text-sm font-medium text-white/90">ROI Calculator</span>
                    </motion.div>
                    <motion.h2 variants={fadeInUp} className="text-2xl md:text-5xl font-bold mb-4 md:mb-6 text-white">See What <span style={{ color: CREAM }}>Ledger Saves</span> You</motion.h2>
                    <motion.p variants={fadeInUp} className="text-xl max-w-2xl mx-auto text-white/70">Adjust your store's numbers. We'll show you exactly where the savings come from.</motion.p>
                </motion.div>

                {/* Mode toggle */}
                <motion.div variants={fadeInUp} initial="hidden" animate={isInView ? "visible" : "hidden"} className="flex justify-center mb-6 md:mb-10">
                    <div className="inline-flex rounded-xl bg-white/10 border border-white/20 p-1">
                        {(["shop", "supplier"] as const).map(m => (
                            <button key={m} onClick={() => setMode(m)} className={`px-5 py-2 rounded-lg text-sm font-semibold transition-all ${mode === m ? "bg-white text-green-900 shadow-lg" : "text-white/70 hover:text-white"}`}>
                                {m === "shop" ? "🏪 Shop Owner" : "📦 Supplier"}
                            </button>
                        ))}
                    </div>
                </motion.div>

                <motion.div initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {/* Sliders */}
                    <div className="rounded-2xl border border-white/20 bg-white/10 backdrop-blur-sm p-5 md:p-8">
                        <AnimatePresence mode="wait">
                            {mode === "shop" ? (
                                <motion.div key="shop" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="space-y-6">
                                    <div>
                                        <div className="flex justify-between mb-2"><span className="text-sm font-medium text-white/80">Monthly Revenue</span><span className="text-lg font-bold text-white">S${revenue.toLocaleString()}</span></div>
                                        <input type="range" min={5000} max={150000} step={1000} value={revenue} onChange={e => setRevenue(Number(e.target.value))} className="roi-slider w-full" />
                                        <div className="flex justify-between mt-1 text-xs text-white/40"><span>S$5,000</span><span>S$150,000</span></div>
                                    </div>
                                    <div>
                                        <div className="flex justify-between mb-2"><span className="text-sm font-medium text-white/80">Cost of Goods (% of Revenue)</span><span className="text-lg font-bold text-white">{cogsPercent}%</span></div>
                                        <input type="range" min={40} max={85} step={1} value={cogsPercent} onChange={e => setCogsPercent(Number(e.target.value))} className="roi-slider w-full" />
                                        <div className="flex justify-between mt-1 text-xs text-white/40"><span>40%</span><span>85%</span></div>
                                    </div>
                                    <div>
                                        <div className="flex justify-between mb-2"><span className="text-sm font-medium text-white/80">Staff Count</span><span className="text-lg font-bold text-white">{staffCount}</span></div>
                                        <input type="range" min={1} max={10} step={1} value={staffCount} onChange={e => setStaffCount(Number(e.target.value))} className="roi-slider w-full" />
                                        <div className="flex justify-between mt-1 text-xs text-white/40"><span>1</span><span>10</span></div>
                                    </div>
                                    <div>
                                        <div className="flex justify-between mb-2"><span className="text-sm font-medium text-white/80">Procurement Hours / Week</span><span className="text-lg font-bold text-white">{procurementHours}h</span></div>
                                        <input type="range" min={2} max={30} step={1} value={procurementHours} onChange={e => setProcurementHours(Number(e.target.value))} className="roi-slider w-full" />
                                        <div className="flex justify-between mt-1 text-xs text-white/40"><span>2h</span><span>30h</span></div>
                                    </div>
                                </motion.div>
                            ) : (
                                <motion.div key="supplier" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="space-y-6">
                                    <div>
                                        <div className="flex justify-between mb-2"><span className="text-sm font-medium text-white/80">Monthly Sales</span><span className="text-lg font-bold text-white">S${monthlySales.toLocaleString()}</span></div>
                                        <input type="range" min={10000} max={500000} step={5000} value={monthlySales} onChange={e => setMonthlySales(Number(e.target.value))} className="roi-slider w-full" />
                                        <div className="flex justify-between mt-1 text-xs text-white/40"><span>S$10,000</span><span>S$500,000</span></div>
                                    </div>
                                    <div>
                                        <div className="flex justify-between mb-2"><span className="text-sm font-medium text-white/80">Current Retail Clients</span><span className="text-lg font-bold text-white">{retailClients}</span></div>
                                        <input type="range" min={3} max={80} step={1} value={retailClients} onChange={e => setRetailClients(Number(e.target.value))} className="roi-slider w-full" />
                                        <div className="flex justify-between mt-1 text-xs text-white/40"><span>3</span><span>80</span></div>
                                    </div>
                                    <div>
                                        <div className="flex justify-between mb-2"><span className="text-sm font-medium text-white/80">Avg. Delivery Cost / Client</span><span className="text-lg font-bold text-white">S${avgDeliveryCost}</span></div>
                                        <input type="range" min={30} max={300} step={10} value={avgDeliveryCost} onChange={e => setAvgDeliveryCost(Number(e.target.value))} className="roi-slider w-full" />
                                        <div className="flex justify-between mt-1 text-xs text-white/40"><span>S$30</span><span>S$300</span></div>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    {/* Results */}
                    <div className="rounded-2xl border border-white/20 bg-white/10 backdrop-blur-sm p-5 md:p-8">
                        <div className="text-xs uppercase tracking-[0.2em] text-white/50 mb-5">Estimated Monthly Impact</div>
                        <AnimatePresence mode="wait">
                            {mode === "shop" ? (
                                <motion.div key="shop-r" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="space-y-4">
                                    <div className="rounded-xl border border-emerald-400/30 bg-emerald-400/15 p-5">
                                        <div className="text-xs text-emerald-200 uppercase tracking-wider mb-1">Total Monthly Savings</div>
                                        <div className="flex items-baseline gap-3">
                                            <motion.div key={totalShopSavings} initial={{ scale: 0.8 }} animate={{ scale: 1 }} className="text-4xl font-bold text-emerald-300">S${totalShopSavings.toLocaleString()}</motion.div>
                                            <span className="text-sm text-emerald-300/70">({savingsPercent}% of revenue)</span>
                                        </div>
                                    </div>
                                    {/* Breakdown */}
                                    {/* Breakdown */}
                                    <div className="space-y-2.5">
                                        <div className="text-[10px] uppercase tracking-[0.15em] text-white/40 mb-1">Savings Breakdown</div>
                                        <div className="flex items-center justify-between rounded-lg bg-white/5 border border-white/10 px-4 py-3">
                                            <div className="text-sm text-white/90 font-medium">Bulk Procurement</div>
                                            <motion.div key={procurementSavings} initial={{ scale: 0.8 }} animate={{ scale: 1 }} className="text-lg font-bold text-white ml-4 shrink-0">S${procurementSavings.toLocaleString()}</motion.div>
                                        </div>
                                        <div className="flex items-center justify-between rounded-lg bg-white/5 border border-white/10 px-4 py-3">
                                            <div className="text-sm text-white/90 font-medium">Waste Reduction</div>
                                            <motion.div key={wasteSavings} initial={{ scale: 0.8 }} animate={{ scale: 1 }} className="text-lg font-bold text-white ml-4 shrink-0">S${wasteSavings.toLocaleString()}</motion.div>
                                        </div>
                                        <div className="flex items-center justify-between rounded-lg bg-white/5 border border-white/10 px-4 py-3">
                                            <div className="text-sm text-white/90 font-medium">Labor Savings</div>
                                            <motion.div key={laborSavings} initial={{ scale: 0.8 }} animate={{ scale: 1 }} className="text-lg font-bold text-white ml-4 shrink-0">S${laborSavings.toLocaleString()}</motion.div>
                                        </div>
                                        <div className="flex items-center justify-between rounded-lg bg-white/5 border border-white/10 px-4 py-3">
                                            <div className="text-sm text-white/90 font-medium">Staff Productivity</div>
                                            <motion.div key={staffProductivity} initial={{ scale: 0.8 }} animate={{ scale: 1 }} className="text-lg font-bold text-white ml-4 shrink-0">S${staffProductivity.toLocaleString()}</motion.div>
                                        </div>
                                    </div>
                                    <div className="mt-4 rounded-lg bg-white/5 border border-white/10 px-4 py-3 flex items-center justify-between">
                                        <div className="text-sm text-white/60">Annual Savings</div>
                                        <div className="text-xl font-bold text-emerald-300">S${annualSavings.toLocaleString()}</div>
                                    </div>
                                    <p className="text-[10px] text-white/30 mt-1">* Based on avg. outcomes across Ledger pilot stores in Singapore</p>
                                </motion.div>
                            ) : (
                                <motion.div key="sup-r" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="space-y-4">
                                    <div className="rounded-xl border border-emerald-400/30 bg-emerald-400/15 p-5">
                                        <div className="text-xs text-emerald-200 uppercase tracking-wider mb-1">Total Monthly Benefit</div>
                                        <motion.div key={totalSupplierBenefit} initial={{ scale: 0.8 }} animate={{ scale: 1 }} className="text-4xl font-bold text-emerald-300">S${totalSupplierBenefit.toLocaleString()}</motion.div>
                                    </div>
                                    {/* Breakdown */}
                                    {/* Breakdown */}
                                    <div className="space-y-2.5">
                                        <div className="text-[10px] uppercase tracking-[0.15em] text-white/40 mb-1">Benefit Breakdown</div>
                                        <div className="flex items-center justify-between rounded-lg bg-white/5 border border-white/10 px-4 py-3">
                                            <div className="text-sm text-white/90 font-medium">New Store Revenue</div>
                                            <motion.div key={revenueUplift} initial={{ scale: 0.8 }} animate={{ scale: 1 }} className="text-lg font-bold text-white ml-4 shrink-0">S${revenueUplift.toLocaleString()}</motion.div>
                                        </div>
                                        <div className="flex items-center justify-between rounded-lg bg-white/5 border border-white/10 px-4 py-3">
                                            <div className="text-sm text-white/90 font-medium">Delivery Optimization</div>
                                            <motion.div key={deliverySavings} initial={{ scale: 0.8 }} animate={{ scale: 1 }} className="text-lg font-bold text-white ml-4 shrink-0">S${deliverySavings.toLocaleString()}</motion.div>
                                        </div>
                                        <div className="flex items-center justify-between rounded-lg bg-white/5 border border-white/10 px-4 py-3">
                                            <div className="text-sm text-white/90 font-medium">Faster Payments</div>
                                            <motion.div key={cashflowImprovement} initial={{ scale: 0.8 }} animate={{ scale: 1 }} className="text-lg font-bold text-white ml-4 shrink-0">S${cashflowImprovement.toLocaleString()}</motion.div>
                                        </div>
                                    </div>
                                    <div className="mt-4 rounded-lg bg-white/5 border border-white/10 px-4 py-3 flex items-center justify-between">
                                        <div className="text-sm text-white/60">Annual Benefit</div>
                                        <div className="text-xl font-bold text-emerald-300">S${annualSupplierBenefit.toLocaleString()}</div>
                                    </div>
                                    <p className="text-[10px] text-white/30 mt-1">* Based on avg. supplier outcomes on the Ledger network</p>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

// ─── NETWORK VISUALIZATION ──────────────────────────────────────
export function ASEANMapSection() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const [hoveredNode, setHoveredNode] = useState<string | null>(null);

    const shops = [
        { id: "s1", label: "Ah Kow Minimart", emoji: "🏪", stat1: "S$8,240/wk", stat2: "142 SKUs ordered", x: 8, y: 18 },
        { id: "s2", label: "FairMart Bedok", emoji: "🛒", stat1: "S$14,680/wk", stat2: "287 SKUs ordered", x: 6, y: 38 },
        { id: "s3", label: "Fresh Daily Tampines", emoji: "🥬", stat1: "S$11,350/wk", stat2: "198 SKUs ordered", x: 8, y: 58 },
        { id: "s4", label: "QuickStop Jurong", emoji: "🛍️", stat1: "S$6,920/wk", stat2: "96 SKUs ordered", x: 6, y: 78 },
    ];
    const suppliers = [
        { id: "d1", label: "Tong Huat Rice Co.", emoji: "🍚", stat1: "S$1.82/kg avg", stat2: "18 bids placed", x: 92, y: 18 },
        { id: "d2", label: "SG Fresh Produce", emoji: "🥦", stat1: "S$3,200 min order", stat2: "12 bids placed", x: 94, y: 38 },
        { id: "d3", label: "F&N Beverages Pte", emoji: "🥤", stat1: "S$0.68/can bulk", stat2: "24 bids placed", x: 92, y: 58 },
        { id: "d4", label: "Hai Sia Dry Goods", emoji: "📦", stat1: "Next-day delivery", stat2: "9 bids placed", x: 94, y: 78 },
    ];

    // Connection lines: shop → hub (50,50), hub → supplier
    const hubX = 50, hubY = 50;

    const stats = [
        { value: "150+", label: "Stores Connected", icon: MapPin },
        { value: "S$2.4M", label: "Monthly GMV", icon: LineChart },
        { value: "23%", label: "Avg. Cost Savings", icon: Wallet },
        { value: "3 days", label: "Payment Cycle", icon: CreditCard },
    ];

    return (
        <section className="py-20 relative" style={{ background: DARK_GREEN }}>
            <div className="absolute inset-0 pattern-grid opacity-10" />
            <div className="container relative z-10" ref={ref}>
                {/* Header */}
                <motion.div variants={staggerContainer} initial="hidden" animate={isInView ? "visible" : "hidden"} className="text-center mb-12">
                    <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 mb-6">
                        <Globe className="w-4 h-4 text-emerald-300" /><span className="text-sm font-medium text-white/90">Live Network</span>
                    </motion.div>
                    <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold mb-4 text-white">Shops & Suppliers, <span style={{ color: CREAM }}>Connected</span></motion.h2>
                    <motion.p variants={fadeInUp} className="text-lg text-white/60 max-w-xl mx-auto">Ledger aggregates demand from hundreds of stores and matches it to the best suppliers — automatically.</motion.p>
                </motion.div>

                {/* Network Graph */}
                <motion.div variants={scaleIn} initial="hidden" animate={isInView ? "visible" : "hidden"} className="relative max-w-4xl mx-auto">
                    <div className="relative rounded-3xl border border-white/15 bg-white/5 backdrop-blur-sm overflow-hidden" style={{ padding: "2rem 1rem" }}>
                        {/* SVG Connection Lines */}
                        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none" style={{ zIndex: 0 }}>
                            <defs>
                                <linearGradient id="line-shop" x1="0%" y1="0%" x2="100%" y2="0%">
                                    <stop offset="0%" stopColor="#4ADE80" stopOpacity="0.6" />
                                    <stop offset="100%" stopColor="#4ADE80" stopOpacity="0.1" />
                                </linearGradient>
                                <linearGradient id="line-supplier" x1="0%" y1="0%" x2="100%" y2="0%">
                                    <stop offset="0%" stopColor="#4ADE80" stopOpacity="0.1" />
                                    <stop offset="100%" stopColor="#FACC15" stopOpacity="0.6" />
                                </linearGradient>
                            </defs>
                            {/* Shop → Hub lines */}
                            {shops.map((s, i) => (
                                <motion.path key={`sl-${s.id}`}
                                    d={`M ${s.x + 8},${s.y} Q ${30},${s.y} ${hubX},${hubY}`}
                                    stroke="url(#line-shop)" strokeWidth="0.3" fill="none"
                                    initial={{ pathLength: 0, opacity: 0 }}
                                    animate={isInView ? { pathLength: 1, opacity: 1 } : {}}
                                    transition={{ delay: 0.6 + i * 0.12, duration: 0.8 }}
                                />
                            ))}
                            {/* Hub → Supplier lines */}
                            {suppliers.map((d, i) => (
                                <motion.path key={`dl-${d.id}`}
                                    d={`M ${hubX},${hubY} Q ${70},${d.y} ${d.x - 8},${d.y}`}
                                    stroke="url(#line-supplier)" strokeWidth="0.3" fill="none"
                                    initial={{ pathLength: 0, opacity: 0 }}
                                    animate={isInView ? { pathLength: 1, opacity: 1 } : {}}
                                    transition={{ delay: 1.0 + i * 0.12, duration: 0.8 }}
                                />
                            ))}
                            {/* Animated flowing dots on lines */}
                            {isInView && shops.map((s, i) => (
                                <circle key={`dot-s-${s.id}`} r="0.6" fill="#4ADE80">
                                    <animateMotion dur={`${2.5 + i * 0.3}s`} repeatCount="indefinite"
                                        path={`M ${s.x + 8},${s.y} Q ${30},${s.y} ${hubX},${hubY}`} />
                                </circle>
                            ))}
                            {isInView && suppliers.map((d, i) => (
                                <circle key={`dot-d-${d.id}`} r="0.6" fill="#FACC15">
                                    <animateMotion dur={`${2.5 + i * 0.3}s`} repeatCount="indefinite"
                                        path={`M ${hubX},${hubY} Q ${70},${d.y} ${d.x - 8},${d.y}`} />
                                </circle>
                            ))}
                        </svg>

                        {/* Central Hub */}
                        <motion.div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20"
                            initial={{ scale: 0 }} animate={isInView ? { scale: 1 } : {}} transition={{ delay: 0.4, type: "spring", stiffness: 200 }}>
                            <div className="relative">
                                <div className="absolute -inset-5 rounded-full animate-ping opacity-20" style={{ background: GREEN }} />
                                <div className="absolute -inset-2 rounded-full opacity-40 blur-md" style={{ background: GREEN }} />
                                <div className="w-20 h-20 md:w-24 md:h-24 rounded-full flex flex-col items-center justify-center border-2 border-emerald-400/50 shadow-2xl shadow-emerald-500/30 relative"
                                    style={{ background: `linear-gradient(135deg, ${GREEN}, ${DARK_GREEN})` }}>
                                    <img src={LEDGER_LOGO} alt="Ledger" className="w-10 h-10 md:w-12 md:h-12 object-contain rounded-lg" />
                                </div>
                            </div>
                        </motion.div>

                        {/* Shop Nodes (left side) */}
                        <div className="relative z-10 grid grid-cols-[1fr_auto_1fr] gap-0 items-center" style={{ minHeight: 340 }}>
                            <div className="flex flex-col gap-4 pr-4">
                                {shops.map((s, i) => (
                                    <motion.div key={s.id}
                                        initial={{ opacity: 0, x: -30 }} animate={isInView ? { opacity: 1, x: 0 } : {}}
                                        transition={{ delay: 0.3 + i * 0.1 }}
                                        onMouseEnter={() => setHoveredNode(s.id)} onMouseLeave={() => setHoveredNode(null)}
                                        className={`flex items-center gap-3 p-3 rounded-2xl border transition-all duration-300 cursor-pointer ${hoveredNode === s.id ? "bg-white/15 border-emerald-400/50 shadow-lg shadow-emerald-500/10" : "bg-white/5 border-white/10 hover:bg-white/10"}`}>
                                        <div className="w-10 h-10 rounded-xl bg-emerald-500/20 flex items-center justify-center text-lg shrink-0">{s.emoji}</div>
                                        <div className="min-w-0">
                                            <div className="text-sm font-semibold text-white truncate">{s.label}</div>
                                            <div className="text-[11px] text-emerald-300/80 font-medium">{s.stat1}</div>
                                            <div className="text-[10px] text-white/40">{s.stat2}</div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>

                            {/* Center spacer for the hub */}
                            <div className="w-28 md:w-36" />

                            {/* Supplier Nodes (right side) */}
                            <div className="flex flex-col gap-4 pl-4">
                                {suppliers.map((d, i) => (
                                    <motion.div key={d.id}
                                        initial={{ opacity: 0, x: 30 }} animate={isInView ? { opacity: 1, x: 0 } : {}}
                                        transition={{ delay: 0.5 + i * 0.1 }}
                                        onMouseEnter={() => setHoveredNode(d.id)} onMouseLeave={() => setHoveredNode(null)}
                                        className={`flex items-center gap-3 p-3 rounded-2xl border transition-all duration-300 cursor-pointer ${hoveredNode === d.id ? "bg-white/15 border-yellow-400/50 shadow-lg shadow-yellow-500/10" : "bg-white/5 border-white/10 hover:bg-white/10"}`}>
                                        <div className="w-10 h-10 rounded-xl bg-yellow-500/20 flex items-center justify-center text-lg shrink-0">{d.emoji}</div>
                                        <div className="min-w-0">
                                            <div className="text-sm font-semibold text-white truncate">{d.label}</div>
                                            <div className="text-[11px] text-yellow-300/80 font-medium">{d.stat1}</div>
                                            <div className="text-[10px] text-white/40">{d.stat2}</div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        {/* Labels */}
                        <div className="flex justify-between mt-4 px-2">
                            <div className="flex items-center gap-2">
                                <div className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                                <span className="text-xs font-medium text-white/50 uppercase tracking-wider">Shops</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="text-xs font-medium text-white/50 uppercase tracking-wider">Suppliers</span>
                                <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                            </div>
                        </div>
                    </div>

                    {/* Stats Row */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-6">
                        {stats.map((stat, i) => (
                            <motion.div key={stat.label}
                                initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ delay: 1.2 + i * 0.1 }}
                                className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-4 text-center">
                                <stat.icon className="w-5 h-5 text-emerald-300 mx-auto mb-2" />
                                <div className="text-xl font-bold text-white">{stat.value}</div>
                                <div className="text-[11px] text-white/50 mt-0.5">{stat.label}</div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

// ─── SOCIAL PROOF SECTION ───────────────────────────────────────
export function SocialProofSection() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const testimonials = [
        { quote: "Before Ledger, I had zero insight into my margins. Now I see exactly where my profit comes from — in real time.", name: "Ahmad R.", role: "Grocery Store Owner", location: "Singapore", stars: 5 },
        { quote: "The AI procurement alone saved us 25% on weekly orders. It knows what we need before we do.", name: "Mei Lin T.", role: "Convenience Store Chain", location: "Malaysia", stars: 5 },
        { quote: "Getting credit used to take weeks of paperwork. With Ledger, I got approved in 24 hours using my own sales data.", name: "Ravi S.", role: "General Store Owner", location: "Singapore", stars: 5 },
    ];
    return (
        <section id="testimonials" className="py-12 md:py-24 relative" style={{ background: CREAM }}>
            <div className="absolute inset-0" style={{ background: `linear-gradient(180deg, ${CREAM} 0%, #F6F3EC 100%)` }} />
            <div className="absolute inset-0 pattern-grid opacity-40" />
            <div className="container relative z-10" ref={ref}>
                <motion.div variants={staggerContainer} initial="hidden" animate={isInView ? "visible" : "hidden"} className="text-center mb-8 md:mb-14">
                    <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-green-100 shadow-sm mb-6"><HeartHandshake className="w-4 h-4" style={{ color: GREEN }} /><span className="text-sm font-medium" style={{ color: DARK_GREEN }}>Loved by Retailers</span></motion.div>
                    <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold mb-6" style={{ color: DARK_GREEN }}>Don't Take Our Word — <span style={{ color: GREEN }}>Hear Theirs</span></motion.h2>
                </motion.div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
                    {testimonials.map((t, i) => (
                        <motion.div key={t.name} initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: i * 0.15 }} whileHover={{ y: -5 }}
                            className="bg-white rounded-2xl p-6 shadow-lg border border-green-100 hover:shadow-xl hover:border-green-200 transition-all duration-300">
                            <div className="flex gap-1 mb-4">{Array.from({ length: t.stars }).map((_, j) => <Star key={j} className="w-4 h-4 fill-yellow-400 text-yellow-400" />)}</div>
                            <p className="text-sm leading-relaxed mb-5" style={{ color: DARK_GREEN }}>"{t.quote}"</p>
                            <div className="flex items-center gap-3 pt-4 border-t border-green-50">
                                <div className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm" style={{ background: GREEN }}>{t.name.charAt(0)}</div>
                                <div><div className="text-sm font-semibold" style={{ color: DARK_GREEN }}>{t.name}</div><div className="text-xs" style={{ color: SAGE }}>{t.role} · {t.location}</div></div>
                            </div>
                        </motion.div>
                    ))}
                </div>
                <motion.div variants={staggerContainer} initial="hidden" animate={isInView ? "visible" : "hidden"} className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {[{ v: 150, s: "+", l: "Active Stores" }, { v: 2.4, p: "S$", s: "M", l: "Monthly GMV", d: 1 }, { v: 94, s: "%", l: "Retention Rate" }, { v: 40, s: "M+", l: "SMEs in ASEAN" }].map(s => (
                        <motion.div key={s.l} variants={fadeInUp} className="rounded-2xl p-6 text-center text-white shadow-xl" style={{ background: `linear-gradient(135deg, ${GREEN} 0%, ${SAGE} 100%)` }}>
                            <div className="text-4xl font-bold mb-1"><AnimatedCounter value={s.v} prefix={s.p} suffix={s.s} decimals={s.d || 0} /></div>
                            <div className="text-sm text-white/80">{s.l}</div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}

// ─── PRICING SECTION ────────────────────────────────────────────
export function PricingSection() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const [annual, setAnnual] = useState(true);
    const plans = [
        { name: "Starter", desc: "Perfect for single-store owners getting started.", price: annual ? 29 : 39, period: annual ? "/mo" : "/mo", billed: annual ? "billed annually" : "billed monthly", features: ["Smart POS system", "Basic inventory tracking", "Sales analytics dashboard", "Email support", "1 user account"], cta: "Start Free Trial", popular: false },
        { name: "Growth", desc: "For growing retailers that want AI-powered operations.", price: annual ? 79 : 99, period: annual ? "/mo" : "/mo", billed: annual ? "billed annually" : "billed monthly", features: ["Everything in Starter", "AI procurement autopilot", "Demand forecasting", "Supplier marketplace access", "Priority support", "5 user accounts"], cta: "Start Free Trial", popular: true },
        { name: "Enterprise", desc: "For multi-store chains and retail networks.", price: null, period: "", billed: "Custom terms", features: ["Everything in Growth", "Embedded finance & BNPL", "Custom API integrations", "Dedicated account manager", "Network-wide analytics", "Unlimited users"], cta: "Contact Sales", popular: false },
    ];

    const comparisonFeatures = [
        {
            cat: "Point of Sale", items: [
                { name: "Smart POS Software", s: true, g: true, e: true },
                { name: "Offline Mode", s: true, g: true, e: true },
                { name: "Mobile App Access", s: false, g: true, e: true }
            ]
        },
        {
            cat: "Intelligence", items: [
                { name: "Basic Analytics", s: true, g: true, e: true },
                { name: "AI Demand Forecasting", s: false, g: true, e: true },
                { name: "Auto-Reordering", s: false, g: true, e: true },
                { name: "Custom Reports", s: false, g: false, e: true }
            ]
        },
        {
            cat: "Network", items: [
                { name: "Marketplace Access", s: "View Only", g: "Full Access", e: "Priority" },
                { name: "Group Buying Power", s: false, g: true, e: true },
                { name: "Trade Financing", s: false, g: "Eligible", e: "Custom Rates" }
            ]
        }
    ];

    return (
        <section id="pricing" className="py-24 relative overflow-hidden" style={{ background: "#FBFAF7" }}>
            {/* Decorative background elements */}
            <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, #fff 0%, #F6F2EC 100%)" }} />
            <div className="absolute inset-0 pattern-grid opacity-20" />
            <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-green-200 to-transparent opacity-50" />

            <div className="container relative z-10" ref={ref}>
                <motion.div variants={staggerContainer} initial="hidden" animate={isInView ? "visible" : "hidden"} className="text-center mb-16">
                    <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-green-100 mb-6 bg-emerald-50/50 backdrop-blur-sm shadow-sm">
                        <CreditCard className="w-4 h-4" style={{ color: GREEN }} /><span className="text-sm font-medium" style={{ color: DARK_GREEN }}>Simple Pricing</span>
                    </motion.div>
                    <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold mb-6" style={{ color: DARK_GREEN }}>Plans That <span className="relative inline-block"><span className="relative z-10" style={{ color: GREEN }}>Scale With You</span><span className="absolute bottom-1 left-0 right-0 h-3 bg-green-200/40 -rotate-1"></span></span></motion.h2>
                    <motion.p variants={fadeInUp} className="text-lg text-gray-500 mb-8 max-w-xl mx-auto">Choose the perfect plan for your retail business. No hidden fees, cancel anytime.</motion.p>

                    <motion.div variants={fadeInUp} className="flex items-center justify-center gap-4 mt-4 bg-white p-1.5 rounded-full shadow-inner border border-gray-100 w-fit mx-auto">
                        <button onClick={() => setAnnual(false)} className={`px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${!annual ? "bg-white shadow-sm text-green-900" : "text-gray-500 hover:text-gray-700"}`}>Monthly</button>
                        <button onClick={() => setAnnual(true)} className={`px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 flex items-center gap-2 ${annual ? "bg-emerald-600 text-white shadow-md" : "text-gray-500 hover:text-gray-700"}`}>
                            Annual <span className="text-[10px] bg-white/20 text-white px-1.5 py-0.5 rounded uppercase tracking-wide">Save 20%</span>
                        </button>
                    </motion.div>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-24 items-start">
                    {plans.map((plan, i) => (
                        <motion.div key={plan.name} initial={{ opacity: 0, y: 40 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: i * 0.1 }}
                            className={`relative rounded-3xl p-8 transition-all duration-300 ${plan.popular ? "bg-white border-2 border-emerald-500 shadow-2xl scale-105 z-10" : "bg-white/60 border border-green-100 shadow-lg hover:shadow-xl hover:bg-white"}`}>
                            {plan.popular && (
                                <div className="absolute -top-5 left-1/2 -translate-x-1/2 px-6 py-1.5 rounded-full text-xs font-bold text-white shadow-lg flex items-center gap-1" style={{ background: GREEN }}>
                                    <Sparkles className="w-3 h-3" /> MOST POPULAR
                                </div>
                            )}
                            <div className="mb-4">
                                <h3 className="text-xl font-bold mb-2" style={{ color: DARK_GREEN }}>{plan.name}</h3>
                                <p className="text-sm leading-relaxed min-h-[40px]" style={{ color: SAGE }}>{plan.desc}</p>
                            </div>
                            <div className="mb-6 pb-6 border-b border-dashed border-gray-200">
                                {plan.price !== null ? (
                                    <div className="flex items-end gap-1">
                                        <motion.span key={plan.price} initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} className="text-5xl font-bold tracking-tight" style={{ color: DARK_GREEN }}>S${plan.price}</motion.span>
                                        <div className="flex flex-col mb-1.5">
                                            <span className="text-sm font-medium text-gray-500">{plan.period}</span>
                                        </div>
                                    </div>
                                ) : (<span className="text-4xl font-bold" style={{ color: DARK_GREEN }}>Custom</span>)}
                                {plan.price !== null && <div className="text-xs text-emerald-600 font-medium mt-1 bg-emerald-50 inline-block px-2 py-0.5 rounded">{plan.billed}</div>}
                            </div>
                            <div className="space-y-4 mb-8">
                                <span className="text-xs font-bold uppercase tracking-wider text-gray-400">Features</span>
                                {plan.features.map(f => (
                                    <div key={f} className="flex items-start gap-3">
                                        <div className="mt-0.5 w-5 h-5 rounded-full bg-emerald-50 flex items-center justify-center shrink-0"><CheckCircle2 className="w-3.5 h-3.5" style={{ color: GREEN }} /></div>
                                        <span className="text-sm text-gray-700 font-medium">{f}</span>
                                    </div>
                                ))}
                            </div>
                            <Button onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                                className={`w-full rounded-xl py-6 font-bold text-base transition-all ${plan.popular ? "shadow-lg hover:shadow-emerald-500/25 hover:-translate-y-0.5" : "hover:bg-emerald-50 border-emerald-200"}`}
                                variant={plan.popular ? "default" : "outline"}
                                style={plan.popular ? { background: GREEN } : { color: DARK_GREEN, borderColor: "rgba(91, 123, 106, 0.3)" }}>
                                {plan.cta}
                            </Button>
                        </motion.div>
                    ))}
                </div>

                {/* Feature Comparison Table */}
                <motion.div initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}} transition={{ delay: 0.6 }} className="max-w-5xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
                    <div className="p-8 bg-gray-50 border-b border-gray-100">
                        <h3 className="text-center text-xl font-bold text-gray-800">Detailed Feature Comparison</h3>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm text-left">
                            <thead className="bg-white text-gray-500 font-medium border-b border-gray-100">
                                <tr>
                                    <th className="px-6 py-4 w-1/4">Features</th>
                                    <th className="px-6 py-4 w-1/4 text-center">Starter</th>
                                    <th className="px-6 py-4 w-1/4 text-center text-emerald-700 bg-emerald-50/50">Growth</th>
                                    <th className="px-6 py-4 w-1/4 text-center">Enterprise</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100">
                                {comparisonFeatures.map((group) => (
                                    <>
                                        <tr key={group.cat} className="bg-gray-50/50">
                                            <td colSpan={4} className="px-6 py-3 font-bold text-xs uppercase tracking-wider text-gray-500">{group.cat}</td>
                                        </tr>
                                        {group.items.map((row) => (
                                            <tr key={row.name} className="hover:bg-gray-50 transition-colors">
                                                <td className="px-6 py-4 font-medium text-gray-700">{row.name}</td>
                                                <td className="px-6 py-4 text-center text-gray-500">
                                                    {row.s === true ? <CheckCircle2 className="w-5 h-5 text-emerald-500 mx-auto" /> : row.s === false ? <Minus className="w-5 h-5 text-gray-300 mx-auto" /> : <span className="font-medium text-gray-600">{row.s}</span>}
                                                </td>
                                                <td className="px-6 py-4 text-center bg-emerald-50/30">
                                                    {row.g === true ? <CheckCircle2 className="w-5 h-5 text-emerald-500 mx-auto" /> : row.g === false ? <Minus className="w-5 h-5 text-gray-300 mx-auto" /> : <span className="font-bold text-emerald-700">{row.g}</span>}
                                                </td>
                                                <td className="px-6 py-4 text-center text-gray-500">
                                                    {row.e === true ? <CheckCircle2 className="w-5 h-5 text-emerald-500 mx-auto" /> : row.e === false ? <Minus className="w-5 h-5 text-gray-300 mx-auto" /> : <span className="font-medium text-gray-600">{row.e}</span>}
                                                </td>
                                            </tr>
                                        ))}
                                    </>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </motion.div>

            </div>
        </section>
    );
}

// ─── FAQ ACCORDION ──────────────────────────────────────────────
export function FAQSection() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const [openIndex, setOpenIndex] = useState<number | null>(null);
    const faqs = [
        { q: "How long does setup take?", a: "Most stores are up and running in under 5 minutes. Our onboarding wizard walks you through connecting your inventory, and our team is available for hands-on support if you need it." },
        { q: "Do I need special hardware?", a: "No! Ledger runs on any device with a web browser — tablets, phones, laptops. If you already have a barcode scanner or receipt printer, those work too." },
        { q: "Can I keep my existing suppliers?", a: "Absolutely. Ledger works with your current suppliers AND gives you access to new ones through our marketplace. You're never locked in." },
        { q: "Is my data secure?", a: "Enterprise-grade security with end-to-end encryption. Your data is stored in SOC 2 compliant data centers in Singapore. We never sell your data." },
        { q: "What if I want to cancel?", a: "Cancel anytime — no contracts, no cancellation fees. Export all your data with one click. We believe you should stay because you love the product, not because you're locked in." },
        { q: "How does the free trial work?", a: "14 days of full access to all Growth plan features. No credit card required. At the end of the trial, pick a plan that works for you or walk away — simple." },
    ];
    return (
        <section className="py-24 relative" style={{ background: CREAM }}>
            <div className="absolute inset-0 pattern-grid opacity-30" />
            <div className="container relative z-10 max-w-3xl" ref={ref}>
                <motion.div variants={staggerContainer} initial="hidden" animate={isInView ? "visible" : "hidden"} className="text-center mb-8 md:mb-14">
                    <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-green-100 shadow-sm mb-6"><HelpCircle className="w-4 h-4" style={{ color: GREEN }} /><span className="text-sm font-medium" style={{ color: DARK_GREEN }}>FAQ</span></motion.div>
                    <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold mb-6" style={{ color: DARK_GREEN }}>Common <span style={{ color: GREEN }}>Questions</span></motion.h2>
                </motion.div>
                <div className="space-y-3">
                    {faqs.map((faq, i) => (
                        <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: i * 0.08 }}
                            className="rounded-2xl border border-green-100 bg-white shadow-sm hover:shadow-md transition-all overflow-hidden">
                            <button onClick={() => setOpenIndex(openIndex === i ? null : i)} className="w-full flex items-center justify-between p-5 text-left">
                                <span className="text-base font-semibold pr-4" style={{ color: DARK_GREEN }}>{faq.q}</span>
                                <motion.div animate={{ rotate: openIndex === i ? 180 : 0 }} transition={{ duration: 0.3 }}>
                                    <ChevronDown className="w-5 h-5 shrink-0" style={{ color: GREEN }} />
                                </motion.div>
                            </button>
                            <AnimatePresence>
                                {openIndex === i && (
                                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }}>
                                        <div className="px-5 pb-5 text-sm leading-relaxed" style={{ color: SAGE }}>{faq.a}</div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

// ─── GET STARTED / CONTACT SECTION ──────────────────────────────
export function GetStartedSection() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [countryCode, setCountryCode] = useState("+65");
    const [storeName, setStoreName] = useState("");
    const [submitted, setSubmitted] = useState(false);
    const [errors, setErrors] = useState<{ email?: string; phone?: string }>({});

    const countryCodes = [
        { code: "+65", country: "SG", flag: "🇸🇬" },
        { code: "+60", country: "MY", flag: "🇲🇾" },
        { code: "+62", country: "ID", flag: "🇮🇩" },
        { code: "+66", country: "TH", flag: "🇹🇭" },
        { code: "+63", country: "PH", flag: "🇵🇭" },
        { code: "+84", country: "VN", flag: "🇻🇳" },
        { code: "+95", country: "MM", flag: "🇲🇲" },
        { code: "+855", country: "KH", flag: "🇰🇭" },
        { code: "+856", country: "LA", flag: "🇱🇦" },
        { code: "+673", country: "BN", flag: "🇧🇳" },
        { code: "+91", country: "IN", flag: "🇮🇳" },
        { code: "+1", country: "US", flag: "🇺🇸" },
        { code: "+44", country: "UK", flag: "🇬🇧" },
        { code: "+61", country: "AU", flag: "🇦🇺" },
    ];

    const validateEmail = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
    const validatePhone = (v: string) => /^\+?[\d\s\-()]{8,}$/.test(v.trim());

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const newErrors: { email?: string; phone?: string } = {};
        if (!email || !validateEmail(email)) newErrors.email = "Please enter a valid email address";
        if (!phone || !validatePhone(phone)) newErrors.phone = "Please enter a valid phone number (min 8 digits)";
        setErrors(newErrors);
        if (Object.keys(newErrors).length === 0) setSubmitted(true);
    };

    return (
        <section id="contact" className="py-12 md:py-24 relative" style={{ background: DARK_GREEN }}>
            <div className="absolute inset-0 pattern-grid opacity-10" />
            <div className="absolute inset-0 overflow-hidden"><div className="absolute bottom-0 left-0 w-1/2 h-full opacity-10"><div className="w-full h-full" style={{ background: `radial-gradient(circle at 30% 70%, ${SAGE} 0%, transparent 50%)` }} /></div></div>
            <div className="container relative z-10" ref={ref}>
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <motion.div variants={fadeInLeft} initial="hidden" animate={isInView ? "visible" : "hidden"}>
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 mb-6"><Sparkles className="w-4 h-4" style={{ color: CREAM }} /><span className="text-sm font-medium text-white/90">Get Started Today</span></div>
                        <h2 className="text-2xl md:text-5xl font-bold mb-4 md:mb-6 text-white">Ready to <span style={{ color: CREAM }}>Transform</span> Your Store?</h2>
                        <p className="text-xl text-white/70 mb-8">Start your 14-day free trial. No credit card required. Set up in under 5 minutes.</p>
                        <div className="space-y-4">{["Full access to Smart POS & AI procurement", "Dedicated onboarding support", "Cancel anytime — no contracts"].map(item => (<div key={item} className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-emerald-300" /><span className="text-white/80">{item}</span></div>))}</div>
                    </motion.div>
                    <motion.div variants={fadeInRight} initial="hidden" animate={isInView ? "visible" : "hidden"} className="bg-white rounded-3xl p-8 shadow-2xl">
                        {submitted ? (
                            <div className="text-center py-8">
                                <div className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center" style={{ background: `${GREEN}15` }}><CheckCircle2 className="w-8 h-8" style={{ color: GREEN }} /></div>
                                <h3 className="text-2xl font-bold mb-2" style={{ color: DARK_GREEN }}>You're In! 🎉</h3>
                                <p style={{ color: SAGE }}>We'll reach out within 24 hours to get you set up.</p>
                            </div>
                        ) : (
                            <>
                                <div className="text-center mb-8"><img src={LEDGER_LOGO} alt="Ledger" className="w-16 h-16 mx-auto mb-4" /><h3 className="text-2xl font-bold mb-2" style={{ color: DARK_GREEN }}>Start Your Free Trial</h3><p style={{ color: SAGE }}>No credit card required · Set up in 5 minutes</p></div>
                                <form onSubmit={handleSubmit} className="space-y-4">
                                    <div>
                                        <label className="block text-sm font-medium mb-1" style={{ color: DARK_GREEN }}>Work Email</label>
                                        <input type="email" value={email} onChange={e => { setEmail(e.target.value); if (errors.email) setErrors(prev => ({ ...prev, email: undefined })); }} placeholder="you@yourstore.com" className={`w-full px-4 py-3 rounded-xl border ${errors.email ? "border-red-400 focus:border-red-500 focus:ring-red-200" : "border-green-200 focus:border-green-400 focus:ring-green-200"} focus:ring-2 outline-none transition-all`} />
                                        {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium mb-1" style={{ color: DARK_GREEN }}>Phone Number</label>
                                        <div className="flex gap-2">
                                            <select value={countryCode} onChange={e => setCountryCode(e.target.value)} className={`px-2 py-3 rounded-xl border ${errors.phone ? "border-red-400" : "border-green-200"} focus:border-green-400 focus:ring-2 focus:ring-green-200 outline-none transition-all bg-white text-sm`} style={{ color: DARK_GREEN, minWidth: '100px' }}>
                                                {countryCodes.map(cc => (<option key={cc.code} value={cc.code}>{cc.flag} {cc.country} {cc.code}</option>))}
                                            </select>
                                            <input type="tel" value={phone} onChange={e => { setPhone(e.target.value); if (errors.phone) setErrors(prev => ({ ...prev, phone: undefined })); }} placeholder="9123 4567" className={`flex-1 px-4 py-3 rounded-xl border ${errors.phone ? "border-red-400 focus:border-red-500 focus:ring-red-200" : "border-green-200 focus:border-green-400 focus:ring-green-200"} focus:ring-2 outline-none transition-all`} />
                                        </div>
                                        {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium mb-1" style={{ color: DARK_GREEN }}>Store Name</label>
                                        <input type="text" value={storeName} onChange={e => setStoreName(e.target.value)} placeholder="Your Store Name" className="w-full px-4 py-3 rounded-xl border border-green-200 focus:border-green-400 focus:ring-2 focus:ring-green-200 outline-none transition-all" />
                                    </div>
                                    <Button type="submit" className="w-full rounded-xl py-6 text-lg font-semibold shadow-lg hover:shadow-xl transition-all" style={{ background: GREEN }}>Start Free Trial <ArrowRight className="ml-2 w-5 h-5" /></Button>
                                </form>
                                <p className="text-center text-xs mt-4" style={{ color: SAGE }}>By signing up, you agree to our Terms of Service and Privacy Policy.</p>
                            </>
                        )}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

// ─── FOOTER ─────────────────────────────────────────────────────
export function Footer() {
    const scroll = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    const columns = [
        { title: "Product", links: [{ label: "Features", action: () => scroll("features") }, { label: "Pricing", action: () => scroll("pricing") }, { label: "ROI Calculator", action: () => scroll("roi-calculator") }] },
        { title: "Company", links: [{ label: "About Us", href: "https://ledgersg.com" }, { label: "Careers", href: "https://ledgersg.com" }, { label: "Blog", href: "https://ledgersg.com" }] },
        { title: "Support", links: [{ label: "Help Center", href: "mailto:support@ledgersg.com" }, { label: "Contact", action: () => scroll("contact") }, { label: "Status", href: "https://ledgersg.com" }] },
    ];
    return (
        <footer className="py-16 border-t" style={{ background: DARK_GREEN, borderColor: `${GREEN}50` }}>
            <div className="container">
                <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
                    <div className="lg:col-span-2">
                        <a href="https://ledgersg.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 mb-4"><img src={LEDGER_LOGO} alt="Ledger" className="w-10 h-10 rounded-lg" /><span className="font-bold text-xl text-white">Ledger</span></a>
                        <p className="text-white/60 text-sm mb-6 max-w-xs">The smart operating system for neighborhood retail. AI-powered procurement, analytics, and embedded finance.</p>
                        <div className="flex gap-3">
                            {[MessageSquare, Mail, Globe].map((Icon, i) => (<a key={i} href="https://ledgersg.com" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"><Icon className="w-4 h-4 text-white/70" /></a>))}
                        </div>
                    </div>
                    {columns.map(col => (
                        <div key={col.title}>
                            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">{col.title}</h4>
                            <ul className="space-y-3">{col.links.map(link => (<li key={link.label}>{"action" in link ? (<button onClick={link.action} className="text-sm text-white/60 hover:text-white transition-colors">{link.label}</button>) : (<a href={link.href} target="_blank" rel="noopener noreferrer" className="text-sm text-white/60 hover:text-white transition-colors">{link.label}</a>)}</li>))}</ul>
                        </div>
                    ))}
                </div>
                <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 border-t" style={{ borderColor: `${GREEN}30` }}>
                    <div className="text-sm text-white/40">© 2026 Ledger. All rights reserved.</div>
                    <div className="flex gap-6 text-sm text-white/40"><a href="#" className="hover:text-white/70 transition-colors">Privacy Policy</a><a href="#" className="hover:text-white/70 transition-colors">Terms of Service</a><a href="#" className="hover:text-white/70 transition-colors">Cookie Policy</a></div>
                </div>
            </div>
        </footer>
    );
}

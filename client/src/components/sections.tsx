import { useEffect, useRef, useState, useCallback } from "react";
import { createPortal } from "react-dom";
import { motion, useInView, useReducedMotion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useLocation } from "wouter";
import {
    Brain, Gavel, Store, Users, ArrowRight, ChevronDown, Zap, Shield, Globe,
    BarChart3, Mail, CheckCircle2, ArrowUpRight, Layers, Wallet, Menu, X,
    Sparkles, Star, Play, Clock, LineChart, CreditCard, Package, HeartHandshake,
    MessageSquare, Phone, MapPin, ChevronRight, Scan, Plus, Minus, TrendingUp,
    ShoppingCart, BarChart2, AlertTriangle, Maximize2, Minimize2
} from "lucide-react";
import { Button } from "@/components/ui/button";

const LEDGER_LOGO = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663315516774/YkcJiLsRGPhktgDh.png";
const GREEN = "#5B7B6A";
const DARK_GREEN = "#3D5A4A";
const CREAM = "#E8E4D9";
const SAGE = "#7A9B8A";
const GOLD = "#C7A477";

const fadeInUp = { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8 } } };
const fadeInLeft = { hidden: { opacity: 0, x: -40 }, visible: { opacity: 1, x: 0, transition: { duration: 0.8 } } };
const fadeInRight = { hidden: { opacity: 0, x: 40 }, visible: { opacity: 1, x: 0, transition: { duration: 0.8 } } };
const staggerContainer = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.2 } } };
const scaleIn = { hidden: { opacity: 0, scale: 0.9 }, visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } } };

function AnimatedCounter({ value, suffix = "", prefix = "", decimals = 0 }: { value: number; suffix?: string; prefix?: string; decimals?: number }) {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const shouldReduceMotion = useReducedMotion();
    useEffect(() => {
        if (!isInView) return;
        if (shouldReduceMotion) { setCount(value); return; }
        const steps = 60; const increment = value / steps; let current = 0;
        const timer = setInterval(() => { current += increment; if (current >= value) { setCount(value); clearInterval(timer); } else { setCount(current); } }, 2000 / steps);
        return () => clearInterval(timer);
    }, [isInView, value, shouldReduceMotion]);
    return (<span ref={ref} className="font-semibold tabular-nums">{prefix}{new Intl.NumberFormat(undefined, { minimumFractionDigits: decimals, maximumFractionDigits: decimals }).format(decimals > 0 ? count : Math.floor(count))}{suffix}</span>);
}

// ─── NAVIGATION ─────────────────────────────────────────────────
export function Navigation() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const [location, setLocation] = useLocation();

    useEffect(() => { const h = () => setScrolled(window.scrollY > 50); window.addEventListener("scroll", h); return () => window.removeEventListener("scroll", h); }, []);
    useEffect(() => { if (!mobileOpen) return; const h = (e: KeyboardEvent) => { if (e.key === "Escape") setMobileOpen(false); }; window.addEventListener("keydown", h); return () => window.removeEventListener("keydown", h); }, [mobileOpen]);

    const scroll = (id: string) => {
        if (id === "pricing") {
            setLocation("/pricing");
            setMobileOpen(false);
            return;
        }

        if (location !== "/") {
            // Navigate to home with hash
            window.location.href = `/#${id}`;
            setMobileOpen(false);
            return;
        }

        const el = document.getElementById(id);
        if (el) {
            el.scrollIntoView({ behavior: "smooth" });
            setMobileOpen(false);
        }
    };

    // Handle initial hash scroll if arriving from another page
    useEffect(() => {
        if (location === "/" && window.location.hash) {
            const id = window.location.hash.replace("#", "");
            setTimeout(() => {
                const el = document.getElementById(id);
                if (el) el.scrollIntoView({ behavior: "smooth" });
            }, 100);
        }
    }, [location]);

    const navItems = [{ id: "features", label: "Features" }, { id: "how-it-works", label: "How It Works" }, { id: "roi-calculator", label: "ROI Calculator" }, { id: "pricing", label: "Pricing" }, { id: "testimonials", label: "Testimonials" }, { id: "contact", label: "Contact" }];
    return (
        <motion.nav initial={{ y: -100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.8 }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "bg-white/95 backdrop-blur-xl shadow-lg shadow-green-900/5 border-b border-green-100" : "bg-transparent"}`}>
            <div className="container relative flex items-center justify-between h-20">
                <a href="/" className="flex items-center gap-3 group">
                    <img src={LEDGER_LOGO} alt="Ledger" className="w-10 h-10 rounded-lg object-contain" />
                    <span className="font-bold text-xl tracking-tight transition-colors" style={{ color: scrolled ? DARK_GREEN : "white" }}>Ledger</span>
                </a>
                <div className="hidden lg:flex items-center gap-1">
                    {navItems.map((item) => (<button key={item.id} onClick={() => scroll(item.id)} className={`px-3 py-2 text-sm font-medium rounded-lg transition-all duration-300 ${scrolled ? "text-green-800 hover:text-green-900 hover:bg-green-50" : "text-white/80 hover:text-white hover:bg-white/10"}`}>{item.label}</button>))}
                </div>
                <motion.div className="hidden lg:block" whileHover={{ scale: 1.03 }}>
                    <Button onClick={() => scroll("contact")} className="rounded-lg px-6 font-semibold shadow-lg shadow-green-900/20 hover:shadow-xl transition-all duration-300" style={{ background: GREEN }}>Start Free Trial <ArrowUpRight className="ml-2 w-4 h-4" /></Button>
                </motion.div>
                <div className="lg:hidden">
                    <Button variant="outline" size="icon" aria-label="Toggle navigation" onClick={() => setMobileOpen(p => !p)} className={`rounded-lg border transition-all ${scrolled ? "border-green-100 bg-white/80 text-green-900" : "border-white/20 bg-white/10 text-white"}`}>{mobileOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}</Button>
                </div>
                {mobileOpen && (
                    <div className="lg:hidden absolute top-full left-0 right-0 mt-3 rounded-2xl border border-green-100 bg-white/95 shadow-xl backdrop-blur-xl">
                        <div className="flex flex-col gap-2 p-4">
                            {navItems.map((item) => (<button key={item.id} onClick={() => scroll(item.id)} className="flex items-center justify-between rounded-xl px-4 py-3 text-sm font-medium text-green-900 hover:bg-green-50">{item.label}<ArrowRight className="w-4 h-4 text-green-700" /></button>))}
                            <Button onClick={() => scroll("contact")} className="mt-2 w-full rounded-xl py-5 text-base font-semibold" style={{ background: GREEN }}>Start Free Trial <ArrowUpRight className="ml-2 w-4 h-4" /></Button>
                        </div>
                    </div>
                )}
            </div>
        </motion.nav>
    );
}

// ─── SPARKLINE CHART ───────────────────────────────────────────
function Sparkline({ data, color = "#4ADE80", width = 120, height = 32 }: { data: number[]; color?: string; width?: number; height?: number }) {
    const max = Math.max(...data);
    const min = Math.min(...data);
    const range = max - min || 1;
    const points = data.map((v, i) => `${(i / (data.length - 1)) * width},${height - ((v - min) / range) * (height - 4) - 2}`).join(" ");
    const areaPoints = `0,${height} ${points} ${width},${height}`;
    return (
        <svg width={width} height={height} className="overflow-visible">
            <defs><linearGradient id={`sg-${color.replace("#", "")}`} x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor={color} stopOpacity="0.3" /><stop offset="100%" stopColor={color} stopOpacity="0" /></linearGradient></defs>
            <polygon points={areaPoints} fill={`url(#sg-${color.replace("#", "")})`} />
            <polyline points={points} fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            {/* Animated dot on last point */}
            <circle cx={width} cy={height - ((data[data.length - 1] - min) / range) * (height - 4) - 2} r="3" fill={color}><animate attributeName="r" values="3;5;3" dur="2s" repeatCount="indefinite" /></circle>
        </svg>
    );
}

// ─── INTERACTIVE DASHBOARD DEMO ─────────────────────────────────
function InteractiveDashboard({ persona }: { persona: "shop" | "supplier" }) {
    // ── Fullscreen state for mobile ──
    const [isFullscreen, setIsFullscreen] = useState(false);

    // Lock body scroll when fullscreen
    useEffect(() => {
        if (isFullscreen) {
            document.body.style.overflow = 'hidden';
            return () => { document.body.style.overflow = ''; };
        }
    }, [isFullscreen]);

    // ── Shop Owner State ──
    const [shopTab, setShopTab] = useState<"pos" | "analytics" | "inventory" | "ai">("pos");
    const [scannedItems, setScannedItems] = useState<{ name: string; price: number; qty: number; emoji: string }[]>([]);
    const [aiAlerts, setAiAlerts] = useState<string[]>([]);
    const [checkingOut, setCheckingOut] = useState(false);
    const [paymentDone, setPaymentDone] = useState(false);
    const [txnCount, setTxnCount] = useState(23);
    const [inventory, setInventory] = useState([
        { name: "Rice (5kg)", stock: 24, predicted: 18, status: "ok", trend: "stable" as const },
        { name: "Cooking Oil", stock: 6, predicted: 15, status: "low", trend: "down" as const },
        { name: "Instant Noodles", stock: 45, predicted: 40, status: "ok", trend: "up" as const },
        { name: "Sugar (1kg)", stock: 3, predicted: 12, status: "critical", trend: "down" as const },
        { name: "Eggs (10pc)", stock: 18, predicted: 20, status: "ok", trend: "up" as const },
        { name: "Bread", stock: 8, predicted: 10, status: "low", trend: "stable" as const },
    ]);
    const [reorderedItems, setReorderedItems] = useState<string[]>([]);

    const shopProducts = [
        { name: "Rice (5kg)", price: 8.50, emoji: "🍚" },
        { name: "Cooking Oil", price: 4.20, emoji: "🫒" },
        { name: "Noodles", price: 1.50, emoji: "🍜" },
        { name: "Sugar (1kg)", price: 2.30, emoji: "🍬" },
        { name: "Eggs (10pc)", price: 3.80, emoji: "🥚" },
        { name: "Bread", price: 2.10, emoji: "🍞" },
    ];

    const revenueData = [320, 480, 350, 520, 610, 580, 690, 720, 650, 810, 780, 920];
    const hourlyData = [12, 8, 15, 22, 31, 28, 35, 42, 38, 45, 40, 48];

    const scanItem = useCallback((product: { name: string; price: number; emoji: string }) => {
        setPaymentDone(false);
        setCheckingOut(false);
        setScannedItems(prev => {
            const existing = prev.find(i => i.name === product.name);
            if (existing) return prev.map(i => i.name === product.name ? { ...i, qty: i.qty + 1 } : i);
            return [...prev, { ...product, qty: 1 }];
        });
        setInventory(prev => prev.map(i => {
            if (!i.name.startsWith(product.name.split(" ")[0])) return i;
            const newStock = Math.max(0, i.stock - 1);
            return { ...i, stock: newStock, status: newStock <= 5 ? "critical" : newStock <= 10 ? "low" : "ok" };
        }));
        // check for low stock AI alert
        const match = inventory.find(i => i.name.startsWith(product.name.split(" ")[0]) && i.stock <= 7);
        if (match && !aiAlerts.some(a => a.includes(match.name))) {
            setAiAlerts(prev => [...prev.slice(-2), `${match.name} low — auto-reorder queued for ${match.predicted} units`]);
        }
    }, [inventory, aiAlerts]);

    const handleCheckout = useCallback(() => {
        if (scannedItems.length === 0) return;
        setCheckingOut(true);
        setTimeout(() => {
            setPaymentDone(true);
            setCheckingOut(false);
            setTxnCount(p => p + 1);
            setTimeout(() => { setScannedItems([]); setPaymentDone(false); }, 2000);
        }, 1500);
    }, [scannedItems]);

    const handleReorder = useCallback((itemName: string) => {
        if (reorderedItems.includes(itemName)) return;
        setReorderedItems(prev => [...prev, itemName]);
    }, [reorderedItems]);

    const total = scannedItems.reduce((sum, i) => sum + i.price * i.qty, 0);
    const totalItems = scannedItems.reduce((sum, i) => sum + i.qty, 0);

    // ── Supplier State ──
    const [bidPlaced, setBidPlaced] = useState<string[]>([]);
    const [supTab, setSupTab] = useState<"orders" | "pipeline" | "performance">("orders");
    const supplierOrders = [
        { id: "ord-1", store: "Mini Mart #12", items: 48, value: 1240, status: "Bid Open" as const, deadline: "2h left", category: "Dry Goods" },
        { id: "ord-2", store: "Corner Shop #7", items: 92, value: 2810, status: "Bid Open" as const, deadline: "5h left", category: "Mixed" },
        { id: "ord-3", store: "FreshMart Clementi", items: 64, value: 1890, status: "Bid Open" as const, deadline: "1d left", category: "Beverages" },
        { id: "ord-4", store: "Neighborhood Store", items: 35, value: 890, status: "Won" as const, deadline: "—", category: "Staples" },
        { id: "ord-5", store: "QuickBuy Ang Mo Kio", items: 28, value: 720, status: "Won" as const, deadline: "—", category: "Snacks" },
    ];
    const pipeline = [
        { stage: "Picked Up", count: 3, color: "#4ADE80" },
        { stage: "In Transit", count: 5, color: "#FACC15" },
        { stage: "Delivered", count: 12, color: "#22D3EE" },
        { stage: "Paid", count: 8, color: "#A78BFA" },
    ];
    const supRevenueData = [4200, 5100, 4800, 6200, 7100, 6800, 7500, 8200, 7900, 8800, 9200, 10100];

    const handlePlaceBid = useCallback((orderId: string) => {
        setBidPlaced(prev => [...prev, orderId]);
    }, []);

    // ── Window chrome header ──
    const WindowChrome = ({ label, sublabel }: { label: string; sublabel: string }) => (
        <div className="flex items-center justify-between mb-3">
            <div><div className="text-[10px] uppercase tracking-[0.3em] text-white/50">{sublabel}</div><div className="text-base font-semibold">{label}</div></div>
            <div className="flex gap-1.5"><div className="w-2.5 h-2.5 rounded-full bg-red-400/70" /><div className="w-2.5 h-2.5 rounded-full bg-yellow-400/70" /><div className="w-2.5 h-2.5 rounded-full bg-green-400/70" /></div>
        </div>
    );

    // ════════════════════════════════════════════════════════════
    //  SUPPLIER VIEW
    // ════════════════════════════════════════════════════════════
    if (persona === "supplier") {
        const content = (
            <div className={`relative glass-card ${isFullscreen ? 'rounded-none' : 'rounded-3xl'} p-4 md:p-6 text-white overflow-hidden`}>
                {/* Mobile expand button (inline, non-fullscreen only) */}
                {!isFullscreen && (
                    <div className="flex items-center justify-between mb-1 md:hidden">
                        <span />
                        <button onClick={() => setIsFullscreen(true)} className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/10 border border-white/20 text-xs font-medium text-white/80 hover:text-white hover:bg-white/20 transition-all">
                            <Maximize2 className="w-3.5 h-3.5" /> Expand
                        </button>
                    </div>
                )}
                <WindowChrome label="Demand Marketplace" sublabel="Supplier Portal" />
                {/* Tabs */}
                <div className="flex gap-1 mb-3 bg-white/5 rounded-lg p-1">
                    {(["orders", "pipeline", "performance"] as const).map(t => (
                        <button key={t} onClick={() => setSupTab(t)} className={`flex-1 text-[11px] font-semibold py-1.5 rounded-md transition-all capitalize ${supTab === t ? "bg-white/20 text-white" : "text-white/50 hover:text-white/75"}`}>{t === "orders" ? "📋 Orders" : t === "pipeline" ? "🚚 Pipeline" : "📊 Stats"}</button>
                    ))}
                </div>

                <div className={`${isFullscreen ? '' : 'md:h-[340px] md:overflow-y-auto'} overflow-x-hidden scrollbar-thin`}>
                    <AnimatePresence mode="wait">
                        {supTab === "orders" && (
                            <motion.div key="orders" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.25 }} className="space-y-2">
                                {supplierOrders.map((order) => {
                                    const isBid = bidPlaced.includes(order.id);
                                    return (
                                        <motion.div key={order.id} layout whileHover={{ scale: 1.01 }} className={`rounded-xl border px-3 py-2.5 transition-all ${isBid ? "border-emerald-400/40 bg-emerald-500/15" : order.status === "Won" ? "border-emerald-400/40 bg-emerald-500/20" : "border-white/15 bg-white/8 hover:border-white/25"}`}>
                                            <div className="flex items-center justify-between mb-1">
                                                <div className="flex items-center gap-2">
                                                    <span className="text-xs font-bold">{order.store}</span>
                                                    <span className="text-[10px] px-1.5 py-0.5 rounded bg-white/10 text-white/50">{order.category}</span>
                                                </div>
                                                <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${isBid ? "bg-blue-400/30 text-blue-200" : order.status === "Won" ? "bg-emerald-400/30 text-emerald-200" : "bg-yellow-400/20 text-yellow-200"}`}>
                                                    {isBid ? "Bid Sent ✓" : order.status}
                                                </span>
                                            </div>
                                            <div className="flex items-center justify-between">
                                                <span className="text-[11px] text-white/50">{order.items} items · S${order.value.toLocaleString()} {order.status === "Bid Open" && `· ${order.deadline}`}</span>
                                                {order.status === "Bid Open" && !isBid && (
                                                    <motion.button whileTap={{ scale: 0.95 }} onClick={() => handlePlaceBid(order.id)} className="text-[11px] font-bold text-white bg-white/20 hover:bg-white/30 px-2.5 py-1 rounded-lg transition-all">Bid →</motion.button>
                                                )}
                                            </div>
                                        </motion.div>
                                    );
                                })}
                            </motion.div>
                        )}
                        {supTab === "pipeline" && (
                            <motion.div key="pipeline" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.25 }}>
                                {/* Delivery pipeline */}
                                <div className="flex items-center gap-1 mb-4">
                                    {pipeline.map((step, i) => (
                                        <div key={step.stage} className="flex-1 relative">
                                            <div className="h-2 rounded-full" style={{ background: `${step.color}40` }}><motion.div initial={{ width: 0 }} animate={{ width: "100%" }} transition={{ delay: i * 0.2, duration: 0.5 }} className="h-full rounded-full" style={{ background: step.color }} /></div>
                                            <div className="mt-1.5 text-center"><div className="text-sm font-bold" style={{ color: step.color }}>{step.count}</div><div className="text-[9px] text-white/40">{step.stage}</div></div>
                                        </div>
                                    ))}
                                </div>
                                {/* Recent deliveries */}
                                <div className="rounded-xl border border-white/10 bg-white/5 p-3 space-y-2">
                                    <div className="text-[10px] font-semibold text-white/50 uppercase tracking-wider">Recent Deliveries</div>
                                    {[{ store: "Mini Mart #12", time: "Today 2:30 PM", s: "delivered" }, { store: "FreshMart", time: "Today 11:00 AM", s: "paid" }, { store: "QuickBuy", time: "Yesterday", s: "paid" }].map(d => (
                                        <div key={d.store} className="flex items-center justify-between text-[11px]">
                                            <div className="flex items-center gap-2"><div className={`w-1.5 h-1.5 rounded-full ${d.s === "paid" ? "bg-purple-400" : "bg-cyan-400"}`} /><span className="text-white/70">{d.store}</span></div>
                                            <div className="flex items-center gap-2"><span className="text-white/40">{d.time}</span><span className={`text-[9px] font-bold px-1.5 py-0.5 rounded ${d.s === "paid" ? "bg-purple-400/20 text-purple-300" : "bg-cyan-400/20 text-cyan-300"}`}>{d.s}</span></div>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        )}
                        {supTab === "performance" && (
                            <motion.div key="perf" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.25 }}>
                                {/* Revenue chart */}
                                <div className="rounded-xl border border-white/10 bg-white/5 p-3 mb-3">
                                    <div className="flex items-center justify-between mb-2"><span className="text-[10px] font-semibold text-white/50 uppercase tracking-wider">Monthly Revenue</span><span className="text-sm font-bold text-emerald-300">S$10.1K</span></div>
                                    <Sparkline data={supRevenueData} width={260} height={36} color="#4ADE80" />
                                </div>
                                {/* Stats grid */}
                                <div className="grid grid-cols-2 gap-2 mb-3">
                                    {[{ v: "96%", l: "Fill Rate", c: "#4ADE80" }, { v: "4.8★", l: "Rating", c: "#FACC15" }, { v: "3.2d", l: "Avg Payment", c: "#22D3EE" }, { v: "28", l: "Active Stores", c: "#A78BFA" }].map(s => (
                                        <div key={s.l} className="rounded-xl border border-white/10 bg-white/5 p-2.5 text-center">
                                            <div className="text-lg font-bold" style={{ color: s.c }}>{s.v}</div>
                                            <div className="text-[9px] text-white/40 uppercase tracking-wider">{s.l}</div>
                                        </div>
                                    ))}
                                </div>
                                <div className="rounded-xl border border-emerald-400/20 bg-emerald-500/10 px-3 py-2">
                                    <div className="flex items-center gap-2"><Sparkles className="w-3 h-3 text-emerald-300" /><span className="text-[11px] text-emerald-200">🏆 Top 5% supplier this month — Silver badge earned!</span></div>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

                {/* Bottom stats */}
                <div className="mt-3 grid grid-cols-3 gap-2">
                    {[{ v: `S$${((supplierOrders.filter(o => o.status === "Bid Open").length - bidPlaced.length) > 0 ? supplierOrders.filter(o => o.status === "Bid Open" && !bidPlaced.includes(o.id)).reduce((s, o) => s + o.value, 0) : 0).toLocaleString()}`, l: "Open Value" }, { v: `${supplierOrders.filter(o => o.status === "Won").length + bidPlaced.length}`, l: "Orders Won" }, { v: "3 days", l: "Avg Payout" }].map(s => (
                        <div key={s.l} className="rounded-lg border border-white/10 bg-white/5 px-2 py-2 text-center"><div className="text-sm font-bold">{s.v}</div><div className="text-[9px] uppercase tracking-wider text-white/40">{s.l}</div></div>
                    ))}
                </div>
            </div>
        );
        if (isFullscreen) {
            return createPortal(
                <div className="fixed inset-0 z-[60] overflow-y-auto" style={{ background: DARK_GREEN, WebkitOverflowScrolling: 'touch' }}>
                    {/* Sticky close bar */}
                    <div className="sticky top-0 z-10 flex items-center justify-between px-4 py-3" style={{ background: `linear-gradient(to bottom, ${DARK_GREEN}, ${DARK_GREEN}ee)`, backdropFilter: 'blur(8px)' }}>
                        <div className="text-sm font-semibold text-white/90">📋 Supplier Portal</div>
                        <button onClick={() => setIsFullscreen(false)} className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-white/15 border border-white/25 text-sm font-semibold text-white hover:bg-white/25 transition-all active:scale-95">
                            <X className="w-4 h-4" /> Close
                        </button>
                    </div>
                    <div className="px-3 pb-6">{content}</div>
                </div>,
                document.body
            );
        }
        return content;
    }

    // ════════════════════════════════════════════════════════════
    //  SHOP OWNER VIEW
    // ════════════════════════════════════════════════════════════
    const shopContent = (
        <div className={`relative glass-card ${isFullscreen ? 'rounded-none' : 'rounded-3xl'} p-4 md:p-6 text-white overflow-hidden`}>
            {/* Mobile expand button (inline, non-fullscreen only) */}
            {!isFullscreen && (
                <div className="flex items-center justify-between mb-1 md:hidden">
                    <span />
                    <button onClick={() => setIsFullscreen(true)} className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/10 border border-white/20 text-xs font-medium text-white/80 hover:text-white hover:bg-white/20 transition-all z-10">
                        <Maximize2 className="w-3.5 h-3.5" /> Expand
                    </button>
                </div>
            )}
            <WindowChrome label="Ledger Smart POS" sublabel="Live Demo · Try It →" />
            {/* Tab bar */}
            <div className="flex gap-1 mb-3 bg-white/5 rounded-lg p-1">
                {(["pos", "analytics", "inventory", "ai"] as const).map(t => (
                    <button key={t} onClick={() => setShopTab(t)} className={`flex-1 text-[11px] font-semibold py-1.5 rounded-md transition-all ${shopTab === t ? "bg-white/20 text-white" : "text-white/50 hover:text-white/75"}`}>
                        {t === "pos" ? "🛒 POS" : t === "analytics" ? "📊 Analytics" : t === "inventory" ? "📦 Stock" : "🤖 AI"}
                    </button>
                ))}
            </div>

            <div className={`${isFullscreen ? '' : 'md:h-[380px] md:overflow-y-auto'} overflow-x-hidden scrollbar-thin`}>
                <AnimatePresence mode="wait">
                    {/* ── POS TAB ── */}
                    {shopTab === "pos" && (
                        <motion.div key="pos" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.25 }}>
                            {/* Products */}
                            <div className="grid grid-cols-3 gap-1.5 mb-3">
                                {shopProducts.map((p) => (
                                    <motion.button key={p.name} whileTap={{ scale: 0.92 }} onClick={() => scanItem(p)}
                                        className="flex flex-col items-center gap-1 rounded-xl border border-white/15 bg-white/8 px-2 py-2 hover:bg-white/18 hover:border-white/30 transition-all">
                                        <span className="text-lg">{p.emoji}</span>
                                        <span className="text-[10px] font-semibold truncate w-full text-center">{p.name}</span>
                                        <span className="text-[10px] text-white/50">S${p.price.toFixed(2)}</span>
                                    </motion.button>
                                ))}
                            </div>
                            {/* Cart */}
                            <div className="rounded-xl border border-white/15 bg-white/5 p-3 mb-2">
                                <div className="flex items-center justify-between mb-2">
                                    <div className="flex items-center gap-2"><ShoppingCart className="w-3.5 h-3.5 text-white/50" /><span className="text-[11px] font-semibold text-white/60">CART</span></div>
                                    <span className="text-[10px] text-white/40">{totalItems} items</span>
                                </div>
                                {scannedItems.length === 0 ? <div className="text-[11px] text-white/30 text-center py-2">Tap items to scan ↑</div> : (
                                    <div className="space-y-1">
                                        {scannedItems.map(item => (
                                            <div key={item.name} className="flex justify-between items-center text-[11px]">
                                                <span className="text-white/70">{item.emoji} {item.name} <span className="text-white/40">×{item.qty}</span></span>
                                                <span className="font-semibold">S${(item.price * item.qty).toFixed(2)}</span>
                                            </div>
                                        ))}
                                        <div className="border-t border-white/15 pt-1.5 flex justify-between text-sm font-bold"><span>Total</span><span>S${total.toFixed(2)}</span></div>
                                    </div>
                                )}
                            </div>
                            {/* Checkout button */}
                            <motion.button whileTap={{ scale: 0.97 }} onClick={handleCheckout} disabled={scannedItems.length === 0 || checkingOut}
                                className={`w-full py-2.5 rounded-xl text-sm font-bold transition-all ${scannedItems.length > 0 ? "bg-emerald-500 hover:bg-emerald-400 text-white shadow-lg shadow-emerald-500/30" : "bg-white/10 text-white/30 cursor-not-allowed"}`}>
                                <AnimatePresence mode="wait">
                                    {paymentDone ? (
                                        <motion.span key="done" initial={{ scale: 0 }} animate={{ scale: 1 }} className="flex items-center justify-center gap-2"><CheckCircle2 className="w-4 h-4" /> Payment Complete ✓</motion.span>
                                    ) : checkingOut ? (
                                        <motion.span key="processing" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center justify-center gap-2"><motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 1, ease: "linear" }} className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full" /> Processing...</motion.span>
                                    ) : (
                                        <motion.span key="pay" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center justify-center gap-2"><CreditCard className="w-4 h-4" /> Pay {total > 0 ? `S$${total.toFixed(2)}` : ""}</motion.span>
                                    )}
                                </AnimatePresence>
                            </motion.button>
                            {/* AI alerts */}
                            <AnimatePresence>
                                {aiAlerts.length > 0 && (
                                    <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} className="mt-2 rounded-xl border border-yellow-400/25 bg-yellow-400/10 px-3 py-2 space-y-1">
                                        {aiAlerts.slice(-2).map((alert, i) => (
                                            <div key={i} className="flex items-start gap-2"><AlertTriangle className="w-3 h-3 text-yellow-300 shrink-0 mt-0.5" /><span className="text-[10px] text-yellow-100">⚡ {alert}</span></div>
                                        ))}
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    )}

                    {/* ── ANALYTICS TAB ── */}
                    {shopTab === "analytics" && (
                        <motion.div key="analytics" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.25 }}>
                            {/* Revenue chart */}
                            <div className="rounded-xl border border-white/10 bg-white/5 p-3 mb-3">
                                <div className="flex items-center justify-between mb-1"><span className="text-[10px] font-semibold text-white/50 uppercase tracking-wider">Today's Revenue</span><span className="text-[10px] text-emerald-300 font-bold">+18% ↑</span></div>
                                <div className="text-xl font-bold mb-2">S$920</div>
                                <Sparkline data={revenueData} width={260} height={36} />
                            </div>
                            {/* Hourly traffic */}
                            <div className="rounded-xl border border-white/10 bg-white/5 p-3 mb-3">
                                <div className="flex items-center justify-between mb-1"><span className="text-[10px] font-semibold text-white/50 uppercase tracking-wider">Transactions / Hour</span><span className="text-[10px] text-white/40">Peak: 2-4 PM</span></div>
                                <div className="flex items-end gap-1 h-8 mt-1">
                                    {hourlyData.map((v, i) => (
                                        <motion.div key={i} initial={{ height: 0 }} animate={{ height: `${(v / 48) * 100}%` }} transition={{ delay: i * 0.05 }}
                                            className="flex-1 rounded-sm" style={{ background: v > 35 ? "#4ADE80" : v > 20 ? "#FACC15" : "rgba(255,255,255,0.15)" }} />
                                    ))}
                                </div>
                                <div className="flex justify-between mt-1 text-[8px] text-white/30"><span>6 AM</span><span>12 PM</span><span>6 PM</span></div>
                            </div>
                            {/* Stats row */}
                            <div className="grid grid-cols-3 gap-2">
                                {[{ v: `${txnCount}`, l: "Transactions", icon: "🧾" }, { v: "S$40", l: "Avg Basket", icon: "🛍️" }, { v: "12.4%", l: "Margin", icon: "📈" }].map(s => (
                                    <div key={s.l} className="rounded-xl border border-white/10 bg-white/5 p-2 text-center">
                                        <div className="text-sm">{s.icon}</div>
                                        <div className="text-sm font-bold">{s.v}</div>
                                        <div className="text-[8px] text-white/40">{s.l}</div>
                                    </div>
                                ))}
                            </div>
                            {/* Top products */}
                            <div className="mt-3 rounded-xl border border-white/10 bg-white/5 p-3">
                                <div className="text-[10px] font-semibold text-white/50 uppercase tracking-wider mb-2">Top Sellers Today</div>
                                {[{ n: "🍚 Rice (5kg)", qty: 18, rev: "S$153" }, { n: "🫒 Cooking Oil", qty: 14, rev: "S$59" }, { n: "🥚 Eggs (10pc)", qty: 12, rev: "S$46" }].map((p, i) => (
                                    <div key={p.n} className="flex items-center justify-between py-1 text-[11px]">
                                        <div className="flex items-center gap-2"><span className="text-white/40 w-3">{i + 1}.</span><span className="text-white/80">{p.n}</span></div>
                                        <div className="flex items-center gap-3"><span className="text-white/40">{p.qty} sold</span><span className="font-semibold">{p.rev}</span></div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    )}

                    {/* ── INVENTORY TAB ── */}
                    {shopTab === "inventory" && (
                        <motion.div key="inventory" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.25 }}>
                            <div className="rounded-xl border border-white/10 bg-white/5 p-3 mb-3">
                                <div className="flex items-center justify-between mb-2"><span className="text-[10px] font-semibold text-white/50 uppercase tracking-wider">Inventory Status</span><span className="text-[10px] text-white/40">{inventory.filter(i => i.status === "critical").length} critical</span></div>
                                <div className="space-y-2">
                                    {inventory.map(item => (
                                        <div key={item.name} className="flex items-center gap-2">
                                            <span className="text-[11px] text-white/70 w-24 truncate">{item.name}</span>
                                            <div className="flex-1 h-2 bg-white/10 rounded-full overflow-hidden"><motion.div initial={{ width: 0 }} animate={{ width: `${Math.min(100, (item.stock / 50) * 100)}%` }} transition={{ duration: 0.5 }} className={`h-full rounded-full ${item.status === "critical" ? "bg-red-400" : item.status === "low" ? "bg-yellow-400" : "bg-emerald-400"}`} /></div>
                                            <span className={`text-[10px] font-bold w-5 text-right ${item.status === "critical" ? "text-red-300" : item.status === "low" ? "text-yellow-300" : "text-emerald-300"}`}>{item.stock}</span>
                                            <span className="text-[10px]">{item.trend === "up" ? "📈" : item.trend === "down" ? "📉" : "➡️"}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            {/* Smart reorder suggestions */}
                            <div className="rounded-xl border border-yellow-400/20 bg-yellow-400/8 p-3">
                                <div className="flex items-center gap-2 mb-2"><Brain className="w-3 h-3 text-yellow-300" /><span className="text-[10px] font-semibold text-yellow-200 uppercase tracking-wider">AI Reorder Suggestions</span></div>
                                {inventory.filter(i => i.status !== "ok").map(item => (
                                    <div key={item.name} className="flex items-center justify-between py-1.5 border-b border-white/5 last:border-0">
                                        <div><div className="text-[11px] font-semibold text-white/80">{item.name}</div><div className="text-[10px] text-white/40">Reorder {item.predicted} units · ETA 2 days</div></div>
                                        <motion.button whileTap={{ scale: 0.9 }} onClick={() => handleReorder(item.name)}
                                            className={`text-[10px] font-bold px-2.5 py-1 rounded-lg transition-all ${reorderedItems.includes(item.name) ? "bg-emerald-500/30 text-emerald-200" : "bg-white/15 text-white hover:bg-white/25"}`}>
                                            {reorderedItems.includes(item.name) ? "Ordered ✓" : "Order →"}
                                        </motion.button>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    )}

                    {/* ── AI INSIGHTS TAB ── */}
                    {shopTab === "ai" && (
                        <motion.div key="ai" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.25 }}>
                            {/* Demand prediction */}
                            <div className="rounded-xl border border-purple-400/20 bg-purple-500/10 p-3 mb-3">
                                <div className="flex items-center gap-2 mb-2"><Brain className="w-3 h-3 text-purple-300" /><span className="text-[10px] font-semibold text-purple-200 uppercase tracking-wider">Demand Forecast — Tomorrow</span></div>
                                {[{ item: "🍚 Rice", pred: "High demand (+32%)", reason: "Weekend pattern" }, { item: "🍜 Noodles", pred: "Normal", reason: "Stable trend" }, { item: "🥚 Eggs", pred: "Spike expected (+45%)", reason: "Festival week" }].map(p => (
                                    <div key={p.item} className="flex items-center justify-between py-1.5 border-b border-white/5 last:border-0">
                                        <span className="text-[11px] text-white/80">{p.item}</span>
                                        <div className="text-right"><div className="text-[10px] font-semibold text-purple-200">{p.pred}</div><div className="text-[9px] text-white/40">{p.reason}</div></div>
                                    </div>
                                ))}
                            </div>
                            {/* Dynamic pricing */}
                            <div className="rounded-xl border border-cyan-400/20 bg-cyan-500/10 p-3 mb-3">
                                <div className="flex items-center gap-2 mb-2"><TrendingUp className="w-3 h-3 text-cyan-300" /><span className="text-[10px] font-semibold text-cyan-200 uppercase tracking-wider">Pricing Opportunities</span></div>
                                <div className="space-y-1.5">
                                    <div className="flex items-center justify-between text-[11px]"><span className="text-white/70">🫒 Cooking Oil</span><span className="text-cyan-200">Raise to S$4.50 → <span className="font-bold">+7% margin</span></span></div>
                                    <div className="flex items-center justify-between text-[11px]"><span className="text-white/70">🍬 Sugar (1kg)</span><span className="text-yellow-200">Competitor at S$2.80 — match?</span></div>
                                </div>
                            </div>
                            {/* Weather & events */}
                            <div className="rounded-xl border border-white/10 bg-white/5 p-3 mb-3">
                                <div className="flex items-center gap-2 mb-2"><Globe className="w-3 h-3 text-white/50" /><span className="text-[10px] font-semibold text-white/50 uppercase tracking-wider">External Signals</span></div>
                                <div className="space-y-1.5">
                                    <div className="flex items-start gap-2 text-[11px]"><span>🌧️</span><span className="text-white/70">Rain forecast tomorrow — umbrella & instant food demand ↑</span></div>
                                    <div className="flex items-start gap-2 text-[11px]"><span>🎉</span><span className="text-white/70">Thaipusam in 3 days — stock up on ghee, flowers, milk</span></div>
                                </div>
                            </div>
                            {/* Credit score */}
                            <div className="rounded-xl border border-emerald-400/20 bg-emerald-500/10 p-3">
                                <div className="flex items-center justify-between">
                                    <div><div className="text-[10px] font-semibold text-emerald-200 uppercase tracking-wider">Ledger Credit Score</div><div className="text-[10px] text-white/40 mt-0.5">Based on 90 days POS data</div></div>
                                    <div className="text-right"><div className="text-2xl font-bold text-emerald-300">782</div><div className="text-[9px] text-emerald-200">Excellent</div></div>
                                </div>
                                <div className="mt-2 h-1.5 bg-white/10 rounded-full overflow-hidden"><div className="h-full bg-gradient-to-r from-red-400 via-yellow-400 to-emerald-400 rounded-full" style={{ width: "78%" }} /></div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );

    if (isFullscreen) {
        return createPortal(
            <div className="fixed inset-0 z-[60] overflow-y-auto" style={{ background: DARK_GREEN, WebkitOverflowScrolling: 'touch' }}>
                {/* Sticky close bar */}
                <div className="sticky top-0 z-10 flex items-center justify-between px-4 py-3" style={{ background: `linear-gradient(to bottom, ${DARK_GREEN}, ${DARK_GREEN}ee)`, backdropFilter: 'blur(8px)' }}>
                    <div className="text-sm font-semibold text-white/90">🛒 Ledger Smart POS</div>
                    <button onClick={() => setIsFullscreen(false)} className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-white/15 border border-white/25 text-sm font-semibold text-white hover:bg-white/25 transition-all active:scale-95">
                        <X className="w-4 h-4" /> Close
                    </button>
                </div>
                <div className="px-3 pb-6">{shopContent}</div>
            </div>,
            document.body
        );
    }
    return shopContent;
}

// ─── HERO SECTION (DUAL PERSONA) ────────────────────────────────
export function HeroSection() {
    const { scrollY } = useScroll();
    const shouldReduceMotion = useReducedMotion();
    const y = useTransform(scrollY, [0, 500], [0, 140]);
    const opacity = useTransform(scrollY, [0, 360], [1, 0.15]);
    const [persona, setPersona] = useState<"shop" | "supplier">("shop");

    const content = {
        shop: {
            badge: "Trusted by 150+ stores across ASEAN",
            h1: ["The Smart OS for", "Your Store"],
            phrases: ["Automate Procurement", "Optimize Pricing", "Predict Demand", "Unlock Growth Capital"],
            desc: "The all-in-one platform that turns your store into a data-driven powerhouse. AI procurement, real-time analytics, and embedded finance — all from one dashboard.",
            cta1: "Start Free Trial", cta2: "Watch Demo",
        },
        supplier: {
            badge: "Connected to 150+ stores & growing",
            h1: ["Guaranteed Demand", "Direct to Stores"],
            phrases: ["Win Aggregated Orders", "Faster Payments", "Reduce Distribution Cost", "Grow Your Network"],
            desc: "Stop chasing individual stores. Ledger aggregates demand from hundreds of retailers — bid on bulk orders, get guaranteed contracts, and receive payment in 3 days.",
            cta1: "Join as Supplier", cta2: "See How It Works",
        },
    };
    const c = content[persona];
    const [typedIndex, setTypedIndex] = useState(0);
    useEffect(() => { const timer = setInterval(() => setTypedIndex(i => (i + 1) % c.phrases.length), 3000); return () => clearInterval(timer); }, [persona, c.phrases.length]);

    return (
        <section className="relative min-h-screen overflow-hidden" style={{ background: `linear-gradient(135deg, ${DARK_GREEN} 0%, ${GREEN} 55%, ${DARK_GREEN} 100%)` }}>
            <div className="absolute inset-0 pattern-grid opacity-30" />
            <div className="absolute -top-40 -right-28 h-96 w-96 rounded-full blur-3xl opacity-40" style={{ background: `radial-gradient(circle, ${SAGE} 0%, transparent 70%)` }} />
            <div className="absolute -bottom-40 -left-32 h-[28rem] w-[28rem] rounded-full blur-3xl opacity-40" style={{ background: `radial-gradient(circle, ${GOLD} 0%, transparent 70%)` }} />
            <div className="relative z-10 container pt-28 pb-24">
                {/* Persona Toggle */}
                <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="flex justify-center mb-10">
                    <div className="inline-flex rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 p-1.5">
                        {(["shop", "supplier"] as const).map((p) => (
                            <button key={p} onClick={() => { setPersona(p); setTypedIndex(0); }}
                                className={`relative px-6 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 ${persona === p ? "text-green-900" : "text-white/70 hover:text-white"}`}>
                                {persona === p && <motion.div layoutId="persona-bg" className="absolute inset-0 bg-white rounded-xl shadow-lg" transition={{ type: "spring", stiffness: 400, damping: 30 }} />}
                                <span className="relative z-10 flex items-center gap-2">{p === "shop" ? <><Store className="w-4 h-4" /> I'm a Shop Owner</> : <><Package className="w-4 h-4" /> I'm a Supplier</>}</span>
                            </button>
                        ))}
                    </div>
                </motion.div>

                <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
                    <motion.div style={shouldReduceMotion ? undefined : { opacity }} className="text-center lg:text-left">
                        <AnimatePresence mode="wait">
                            <motion.div key={persona} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.5 }}>
                                <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-8">
                                    <Sparkles className="w-4 h-4 text-white/80" /><span className="text-sm font-medium text-white">{c.badge}</span>
                                </div>
                                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 tracking-tight text-white leading-[1.05]">{c.h1[0]}<br /><span style={{ color: CREAM }}>{c.h1[1]}</span></h1>
                                <div className="h-10 mb-6 flex items-center justify-center lg:justify-start">
                                    <span className="text-xl md:text-2xl lg:text-3xl font-semibold text-white/90">
                                        <motion.span key={`${persona}-${typedIndex}`} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>{c.phrases[typedIndex]}</motion.span>
                                    </span>
                                </div>
                                <p className="text-base md:text-lg lg:text-xl text-white/90 max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed">{c.desc}</p>
                                <div className="flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-4">
                                    <Button size="lg" onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })} className="rounded-xl px-8 py-6 text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300" style={{ background: CREAM, color: DARK_GREEN }}>{c.cta1} <ArrowRight className="ml-2 w-5 h-5" /></Button>
                                    <Button size="lg" variant="outline" onClick={() => document.getElementById("features")?.scrollIntoView({ behavior: "smooth" })} className="rounded-xl px-8 py-6 text-lg font-semibold border-white/30 text-white hover:bg-white/10 transition-all duration-300"><Play className="mr-2 w-5 h-5" /> {c.cta2}</Button>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </motion.div>
                    <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.4 }} className="relative" style={shouldReduceMotion ? undefined : { y }}>
                        <div className="absolute inset-0 rounded-3xl opacity-30 blur-2xl" style={{ background: `radial-gradient(circle, ${SAGE} 0%, transparent 65%)` }} />
                        <AnimatePresence mode="wait">
                            <motion.div key={persona} initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }} transition={{ duration: 0.4 }}>
                                <InteractiveDashboard persona={persona} />
                            </motion.div>
                        </AnimatePresence>
                    </motion.div>
                </div>
            </div>
            <div className="pointer-events-none absolute bottom-10 left-1/2 -translate-x-1/2">
                <motion.div animate={shouldReduceMotion ? undefined : { y: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }} className="flex flex-col items-center gap-2">
                    <span className="text-xs font-medium text-white/80 uppercase tracking-widest">Explore features</span><ChevronDown className="w-6 h-6 text-white/50" />
                </motion.div>
            </div>
        </section>
    );
}

// ─── WHY LEDGER SECTION ─────────────────────────────────────────
export function WhyLedgerSection() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const painPoints = [
        { icon: Package, before: "Manual stock counting & guesswork ordering", after: "AI predicts demand and auto-orders", stat: 30, suffix: "%", statLabel: "Less Waste", barBefore: 70, barAfter: 30, gradient: "from-red-500/10 via-transparent to-emerald-500/10" },
        { icon: LineChart, before: "No visibility into margins or trends", after: "Real-time dashboards & margin analytics", stat: 2.5, suffix: "×", statLabel: "Revenue Insight", barBefore: 40, barAfter: 100, gradient: "from-orange-500/10 via-transparent to-emerald-500/10" },
        { icon: CreditCard, before: "Rejected by banks for trade finance", after: "Embedded credit using your POS data", stat: 85, suffix: "%", statLabel: "Approval Rate", barBefore: 15, barAfter: 85, gradient: "from-red-500/10 via-transparent to-emerald-500/10" },
        { icon: Users, before: "No bargaining power with suppliers", after: "Collective buying across the network", stat: 18, suffix: "%", statLabel: "Better Pricing", barBefore: 82, barAfter: 18, gradient: "from-yellow-500/10 via-transparent to-emerald-500/10" },
    ];
    return (
        <section id="how-it-works" className="py-12 md:py-28 relative overflow-hidden" style={{ background: "#FAFAF5" }}>
            {/* Decorative top wave */}
            <svg className="absolute top-0 left-0 w-full h-16" viewBox="0 0 1440 64" fill="none" preserveAspectRatio="none"><path d="M0 64L60 53.3C120 42.7 240 21.3 360 16C480 10.7 600 21.3 720 32C840 42.7 960 53.3 1080 48C1200 42.7 1320 21.3 1380 10.7L1440 0V0H1380C1320 0 1200 0 1080 0C960 0 840 0 720 0C600 0 480 0 360 0C240 0 120 0 60 0H0V64Z" fill={DARK_GREEN} fillOpacity="0.04" /></svg>
            <div className="container relative z-10" ref={ref}>
                <motion.div variants={staggerContainer} initial="hidden" animate={isInView ? "visible" : "hidden"} className="text-center mb-8 md:mb-16">
                    <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-red-50 to-emerald-50 border border-red-100/50 mb-8 shadow-sm">
                        <Shield className="w-4 h-4 text-red-400" /><span className="text-sm font-semibold text-red-700">Why Switch to Ledger?</span>
                    </motion.div>
                    <motion.h2 variants={fadeInUp} className="text-2xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 leading-tight" style={{ color: DARK_GREEN }}>
                        Stop Losing Money to<br /><span className="text-red-500 relative">Outdated<svg className="absolute -bottom-2 left-0 w-full h-3" viewBox="0 0 200 12" fill="none"><path d="M2 8C40 2 160 2 198 8" stroke="#EF4444" strokeWidth="3" strokeLinecap="round" strokeOpacity="0.4" /></svg></span> Systems
                    </motion.h2>
                    <motion.p variants={fadeInUp} className="text-lg md:text-xl max-w-2xl mx-auto leading-relaxed" style={{ color: SAGE }}>See how Ledger transforms every aspect of your retail operations.</motion.p>
                </motion.div>
                <motion.div variants={staggerContainer} initial="hidden" animate={isInView ? "visible" : "hidden"} className="grid md:grid-cols-2 gap-6">
                    {painPoints.map((item, idx) => (
                        <motion.div key={item.statLabel} variants={fadeInUp}
                            className="group relative rounded-2xl bg-white p-6 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-emerald-100 overflow-hidden">
                            <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                            <div className="relative z-10 flex flex-col h-full">
                                {/* Header: Icon & Stat - Compact */}
                                <div className="flex items-start justify-between mb-4">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-600">
                                            <item.icon className="w-5 h-5" />
                                        </div>
                                        <div className="text-xs font-bold uppercase tracking-widest text-gray-500">{item.statLabel}</div>
                                    </div>
                                    <div className="text-right">
                                        <div className="text-2xl font-black text-emerald-600 leading-none">
                                            {isInView && <AnimatedCounter value={item.stat} suffix={item.suffix} decimals={item.suffix === "×" ? 1 : 0} />}
                                        </div>
                                        <div className="text-[9px] font-bold text-emerald-600/60 uppercase mt-0.5">Improvement</div>
                                    </div>
                                </div>

                                {/* Content: Problem -> Solution (Linear, no boxes) */}
                                <div className="space-y-3 mb-2 flex-grow">
                                    <div className="flex items-start gap-3 opacity-60 group-hover:opacity-40 transition-opacity">
                                        <X className="w-4 h-4 text-red-400 mt-0.5 shrink-0" />
                                        <span className="text-sm text-gray-600 leading-snug line-through decoration-red-200">{item.before}</span>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />
                                        <span className="text-sm font-semibold text-gray-900 leading-snug">{item.after}</span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}

export { AnimatedCounter, fadeInUp, fadeInLeft, fadeInRight, staggerContainer, scaleIn, GREEN, DARK_GREEN, CREAM, SAGE, GOLD, LEDGER_LOGO };

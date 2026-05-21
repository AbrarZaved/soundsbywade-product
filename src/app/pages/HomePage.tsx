import { motion } from "motion/react";
import { Link } from "react-router";
import { ArrowRight, Rocket, Zap, Users, TrendingUp, CreditCard, ShoppingCart, UserCheck, Calendar, Dumbbell } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { useEffect, useRef, useState } from "react";
import logo from "../../assets/Frame.png";

export function HomePage() {
    const orbitWrapperRef = useRef<HTMLDivElement>(null);
    const [orbitSize, setOrbitSize] = useState(300);

    useEffect(() => {
        document.title = "Orbital Fitness - Launch Your Studio Into Orbit";
    }, []);

    useEffect(() => {
        const el = orbitWrapperRef.current;
        if (!el) return;
        const obs = new ResizeObserver(entries => {
            setOrbitSize(entries[0].contentRect.width);
        });
        obs.observe(el);
        setOrbitSize(el.getBoundingClientRect().width);
        return () => obs.disconnect();
    }, []);

    // The ring itself sits inside a padding so bubbles (which extend beyond the ring)
    // are never clipped. RING_RATIO is the fraction of orbitSize used for the ring.
    // The remaining space (1 - RING_RATIO) / 2 on each side = bubble overflow room.
    const RING_RATIO = 0.75; // ring diameter = 75% of wrapper
    const ringSize = orbitSize * RING_RATIO;
    const radius = ringSize / 2;

    // Bubble dimensions proportional to ring size
    const bubbleSize = Math.max(52, ringSize * 0.21);
    const iconSize = Math.max(14, ringSize * 0.072);
    const fontSize = Math.max(7, ringSize * 0.025);
    const hubSize = Math.max(100, ringSize * 0.37);

    const features = [
        { icon: CreditCard, label: "Payment Processing", angle: 0, color: "#9D4DFF" },
        { icon: ShoppingCart, label: "Merchandise", angle: 60, color: "#6CFFF3" },
        { icon: UserCheck, label: "Client Check-in", angle: 120, color: "#3C22FF" },
        { icon: Calendar, label: "Scheduling", angle: 180, color: "#9D4DFF" },
        { icon: Dumbbell, label: "Workout Builder", angle: 240, color: "#6CFFF3" },
        { icon: Users, label: "Class Planning", angle: 300, color: "#3C22FF" },
    ];

    return (
        <div className="relative">
            {/* SECTION 1 - HERO SECTION */}
            {/* No overflow-hidden here so orbit is never clipped */}
            <section className="relative min-h-screen flex items-center justify-center py-20 px-6">
                <div className="relative max-w-7xl mx-auto w-full z-10">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">

                        {/* LEFT SIDE */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className="space-y-8"
                        >
                            <div>
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.2 }}
                                    className="inline-block mb-4"
                                >
                                    <div className="backdrop-blur-xl bg-white/10 border border-[#6CFFF3]/50 rounded-full px-6 py-2">
                                        <p className="text-[#6CFFF3] font-semibold">All-In-One Gym Management SaaS</p>
                                    </div>
                                </motion.div>

                                <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold uppercase mb-6 leading-tight">
                                    <span className="bg-gradient-to-r from-white via-[#9D4DFF] to-[#6CFFF3] bg-clip-text text-transparent">
                                        Orbital
                                    </span>
                                    <br />
                                    <span className="text-white">Fitness</span>
                                </h1>

                                <p className="text-2xl md:text-3xl text-white/90 mb-6 leading-relaxed">
                                    Launch all aspects of studio management into your orbit.
                                </p>

                                <p className="text-xl text-white/70 mb-10 max-w-xl leading-relaxed">
                                    Accelerate your workflow with the only all‑in‑one fitness studio operating system designed to propel your business into the stratosphere.
                                </p>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <Link to="/overview">
                                    <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="relative group w-full sm:w-auto"
                                    >
                                        <div className="absolute -inset-2 bg-gradient-to-r from-[#9D4DFF] to-[#6CFFF3] rounded-full opacity-70 blur-xl group-hover:opacity-100 transition" />
                                        <div className="relative px-10 py-5 bg-gradient-to-r from-[#9D4DFF] to-[#3C22FF] rounded-full text-white text-lg font-semibold whitespace-nowrap">
                                            Full Software Preview
                                            <ArrowRight className="inline-block ml-2 w-5 h-5" />
                                        </div>
                                    </motion.button>
                                </Link>

                                <Link to="/contact">
                                    <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="relative group w-full sm:w-auto"
                                    >
                                        <div className="absolute -inset-1 bg-gradient-to-r from-[#6CFFF3] to-[#9D4DFF] rounded-full opacity-70 blur group-hover:opacity-100 transition" />
                                        <div className="relative px-10 py-5 bg-[#0A0A0F] rounded-full border border-[#6CFFF3]/50 text-white text-lg font-semibold whitespace-nowrap">
                                            Book a Demo
                                            <Rocket className="inline-block ml-2 w-5 h-5" />
                                        </div>
                                    </motion.button>
                                </Link>
                            </div>

                            {/* Quick Stats */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.6 }}
                                className="grid grid-cols-3 gap-6 pt-8"
                            >
                                {[
                                    { value: "1%", label: "Transaction Fee" },
                                    { value: "6+", label: "Tools Unified" },
                                    { value: "∞", label: "Scale Potential" },
                                ].map((stat) => (
                                    <div key={stat.label} className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-4 text-center">
                                        <p className="text-3xl font-bold bg-gradient-to-r from-[#9D4DFF] to-[#6CFFF3] bg-clip-text text-transparent">{stat.value}</p>
                                        <p className="text-sm text-white/70 mt-1">{stat.label}</p>
                                    </div>
                                ))}
                            </motion.div>
                        </motion.div>

                        {/* RIGHT SIDE — Orbit
              ┌─────────────────────────────────┐
              │  orbitWrapper  (aspect-ratio 1:1, w-full, max-w capped)
              │  ┌──────────────────────────┐   │
              │  │  spinner (absolute inset-0, measured by ResizeObserver)
              │  │  ring sits at RING_RATIO  │   │
              │  │  bubbles extend beyond    │   │
              │  └──────────────────────────┘   │
              └─────────────────────────────────┘
              The wrapper is sized to include the bubble overflow so nothing clips.
            */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1, delay: 0.3 }}
                            className="relative w-full mx-auto"
                            // Cap at 480px mobile / 640px lg so it never crowds the text column
                            style={{ maxWidth: "min(480px, 100%)", aspectRatio: "1 / 1" }}
                        >
                            {/* This div is what ResizeObserver measures — it IS the full wrapper */}
                            <div ref={orbitWrapperRef} className="absolute inset-0">

                                {/* Spinner — rotates the ring + all bubbles together */}
                                <motion.div
                                    animate={{ rotate: 360 }}
                                    transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                                    className="absolute inset-0 flex items-center justify-center"
                                >
                                    {/* Ring — sized to RING_RATIO so bubbles have room outside */}
                                    <div
                                        className="relative flex-shrink-0 rounded-full border-2 border-dashed border-[#6CFFF3]/60"
                                        style={{ width: ringSize, height: ringSize }}
                                    >
                                        {/* Bubbles positioned relative to ring center */}
                                        {features.map((feature, index) => {
                                            const x = Math.cos((feature.angle * Math.PI) / 180) * radius;
                                            const y = Math.sin((feature.angle * Math.PI) / 180) * radius;

                                            return (
                                                <motion.div
                                                    key={index}
                                                    initial={{ opacity: 0 }}
                                                    animate={{ opacity: 1 }}
                                                    transition={{ delay: 0.5 + index * 0.15 }}
                                                    className="absolute z-20"
                                                    style={{
                                                        // center of ring → offset by x,y → then pull back by half bubble
                                                        left: "50%",
                                                        top: "50%",
                                                        transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                                                    }}
                                                >
                                                    {/* Counter-rotate so bubble text stays upright */}
                                                    <motion.div
                                                        animate={{ rotate: -360 }}
                                                        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                                                    >
                                                        {/* Float */}
                                                        <motion.div
                                                            animate={{ y: [0, -6, 0] }}
                                                            transition={{ duration: 3, repeat: Infinity, delay: index * 0.3, ease: "easeInOut" }}
                                                            className="relative group cursor-pointer"
                                                        >
                                                            <div
                                                                className="absolute -inset-2 rounded-full blur-xl opacity-50 group-hover:opacity-100 transition duration-300"
                                                                style={{ backgroundColor: `${feature.color}60` }}
                                                            />
                                                            <div
                                                                className="relative rounded-full backdrop-blur-xl bg-white/10 border-2 border-white/20 flex flex-col items-center justify-center shadow-lg"
                                                                style={{
                                                                    width: bubbleSize,
                                                                    height: bubbleSize,
                                                                    boxShadow: `0 0 20px ${feature.color}40`,
                                                                    padding: Math.max(4, bubbleSize * 0.12),
                                                                }}
                                                            >
                                                                <feature.icon
                                                                    style={{
                                                                        color: feature.color,
                                                                        width: iconSize,
                                                                        height: iconSize,
                                                                        marginBottom: 2,
                                                                        flexShrink: 0,
                                                                    }}
                                                                />
                                                                <span
                                                                    className="text-white/90 text-center leading-tight font-medium"
                                                                    style={{ fontSize }}
                                                                >
                                                                    {feature.label}
                                                                </span>
                                                            </div>
                                                        </motion.div>
                                                    </motion.div>
                                                </motion.div>
                                            );
                                        })}
                                    </div>
                                </motion.div>

                                {/* Central Hub — sits on top, centered in wrapper */}
                                <div className="absolute inset-0 flex items-center justify-center z-30 pointer-events-none">
                                    <div className="relative">
                                        <div className="absolute -inset-8 bg-gradient-to-r from-[#9D4DFF] to-[#6CFFF3] rounded-full blur-3xl opacity-40" />
                                        <motion.div
                                            animate={{
                                                boxShadow: [
                                                    "0 0 30px rgba(157, 77, 255, 0.4)",
                                                    "0 0 60px rgba(108, 255, 243, 0.6)",
                                                    "0 0 30px rgba(157, 77, 255, 0.4)",
                                                ],
                                            }}
                                            transition={{ duration: 4, repeat: Infinity }}
                                            className="relative rounded-full backdrop-blur-xl bg-gradient-to-br from-white/20 to-white/5 border-4 border-[#9D4DFF]/50 flex items-center justify-center overflow-hidden"
                                            style={{ width: hubSize, height: hubSize }}
                                        >
                                            <div className="text-center px-2">
                                                <h2
                                                    className="font-bold bg-gradient-to-r from-white to-[#9D4DFF] bg-clip-text text-transparent mb-1"
                                                    style={{ fontSize: Math.max(12, hubSize * 0.19) }}
                                                >
                                                    ORBITAL
                                                </h2>
                                                <p
                                                    className="font-bold text-white"
                                                    style={{ fontSize: Math.max(11, hubSize * 0.165) }}
                                                >
                                                    FITNESS
                                                </p>
                                                <p
                                                    className="text-white/60 mt-1"
                                                    style={{ fontSize: Math.max(7, hubSize * 0.075) }}
                                                >
                                                    All-In-One Platform
                                                </p>
                                            </div>
                                        </motion.div>
                                    </div>
                                </div>

                            </div>{/* /orbitWrapperRef */}
                        </motion.div>

                    </div>
                </div>
            </section>

            {/* SECTION 2 - FOUNDER'S OFFER SECTION */}
            <section className="relative py-32 px-6 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#9D4DFF]/30 via-[#3C22FF]/20 to-transparent" />
                <div className="absolute inset-0 opacity-20">
                    <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#9D4DFF] rounded-full blur-[150px]" />
                    <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#6CFFF3] rounded-full blur-[150px]" />
                </div>

                <div className="relative max-w-5xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                    >
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                            className="mx-auto mb-12 relative w-48 h-48"
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-[#9D4DFF] to-[#6CFFF3] rounded-full opacity-50 blur-3xl" />
                            <div className="relative w-full h-full rounded-full border-4 border-[#9D4DFF]/50 flex items-center justify-center backdrop-blur-xl bg-white/10">
                                <span className="text-7xl font-bold bg-gradient-to-r from-[#9D4DFF] to-[#6CFFF3] bg-clip-text text-transparent">
                                    1%
                                </span>
                            </div>
                        </motion.div>

                        <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-[#9D4DFF] bg-clip-text text-transparent">
                            Zero‑Gravity Fees
                        </h2>
                        <h3 className="text-3xl md:text-4xl text-white mb-8">
                            The 1% Founders Offer
                        </h3>
                        <p className="text-xl text-white/80 mb-4 max-w-3xl mx-auto">
                            Be among the pioneering studios to launch with Orbital Fitness and lock in a revolutionary{" "}
                            <span className="text-[#6CFFF3] font-bold">1% transaction fee for life</span>—while competitors charge 3-5%.
                        </p>
                        <p className="text-lg text-white/70 mb-4 max-w-2xl mx-auto">
                            Founding members also enjoy a free 30-day demo period to test out Orbital Fitness with no strings attached, and can opt-out anytime during.
                        </p>
                        <p className="text-lg text-white/70 mb-12 max-w-2xl mx-auto">
                            This exclusive offer is limited to our founding members. Join the frontier and experience exponential savings as your business scales.
                        </p>

                        <Link to="/contact">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="relative group"
                            >
                                <div className="absolute -inset-2 bg-gradient-to-r from-[#6CFFF3] to-[#9D4DFF] rounded-full opacity-70 blur-xl group-hover:opacity-100 transition" />
                                <div className="relative px-12 py-6 bg-gradient-to-r from-[#9D4DFF] to-[#3C22FF] rounded-full text-white text-xl font-bold">
                                    Join the Frontier
                                    <Zap className="inline-block ml-2 w-6 h-6" />
                                </div>
                            </motion.button>
                        </Link>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
                            {[
                                { icon: Users, text: "Unlimited Client Accounts" },
                                { icon: TrendingUp, text: "Real-Time Analytics" },
                                { icon: Zap, text: "Lightning-Fast Support" },
                            ].map((feature, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-6"
                                >
                                    <feature.icon className="w-8 h-8 text-[#6CFFF3] mx-auto mb-3" />
                                    <p className="text-white">{feature.text}</p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* SECTION 3 - WHAT & WHY SECTION */}
            <section className="relative py-32 px-6">
                <div className="max-w-5xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-5xl md:text-6xl font-bold text-center mb-12 bg-gradient-to-r from-white via-[#9D4DFF] to-[#6CFFF3] bg-clip-text text-transparent">
                            The Gravity of Orbital Fitness
                        </h2>

                        <div className="max-w-3xl mx-auto space-y-6 text-lg text-white/80 text-center">
                            <p>
                                In the vast universe of fitness management software, most solutions orbit around a single function—leaving you juggling multiple platforms, subscriptions, and headaches.
                            </p>
                            <p>
                                <span className="text-white font-semibold">Orbital Fitness</span> changes everything. We've engineered a unified command center that brings together payment processing, merchandise sales, client communications, trainer scheduling, workout building, progress tracking, and class management—all in one elegant ecosystem.
                            </p>
                            <p>
                                No more scattered tools. No more data silos. Just seamless, powerful control at your fingertips.
                            </p>
                            <div className="pt-4 flex justify-center">
                                <Link to="/overview">
                                    <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="relative group"
                                    >
                                        <div className="absolute -inset-1 bg-gradient-to-r from-[#9D4DFF] to-[#6CFFF3] rounded-full opacity-70 blur group-hover:opacity-100 transition" />
                                        <div className="relative px-8 py-4 bg-gradient-to-r from-[#9D4DFF] to-[#3C22FF] rounded-full text-white font-semibold">
                                            Enter Mission Control
                                            <ArrowRight className="inline-block ml-2 w-5 h-5" />
                                        </div>
                                    </motion.button>
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* SECTION 4 - FREE DEMO LEAD MAGNET */}
            <section className="relative py-32 px-6">
                <div className="max-w-5xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <div className="absolute -inset-1 bg-gradient-to-r from-[#9D4DFF] to-[#6CFFF3] rounded-3xl opacity-50 blur-2xl" />
                        <div className="relative backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-12 md:p-16">
                            <div className="grid md:grid-cols-2 gap-12 items-center">
                                <div>
                                    <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-[#9D4DFF] bg-clip-text text-transparent">
                                        Prepare for <span className="text-[#6CFFF3]">launch</span>
                                    </h2>
                                    <p className="text-xl text-white/80 mb-8">
                                        Schedule an exclusive, no‑obligation tour of the software suite and discover how Orbital Fitness can transform your studio operations.
                                    </p>
                                    <Link to="/contact">
                                        <motion.button
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            className="relative group"
                                        >
                                            <div className="absolute -inset-1 bg-gradient-to-r from-[#6CFFF3] to-[#9D4DFF] rounded-full opacity-70 blur group-hover:opacity-100 transition" />
                                            <div className="relative px-8 py-4 bg-[#0A0A0F] rounded-full border border-[#6CFFF3]/50 text-white text-lg font-semibold">
                                                Enter the Orbit
                                                <Rocket className="inline-block ml-2 w-5 h-5" />
                                            </div>
                                        </motion.button>
                                    </Link>
                                </div>
                                <motion.div
                                    animate={{ y: [0, -15, 0] }}
                                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                                    className="relative h-80 flex items-center justify-center"
                                >
                                    <div className="absolute w-64 h-64 rounded-full bg-gradient-to-r from-[#9D4DFF]/30 to-[#6CFFF3]/30 blur-3xl" />
                                    <motion.div
                                        animate={{ rotate: 360 }}
                                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                        className="relative w-72 h-72 rounded-full overflow-hidden border-4 border-white/20 shadow-2xl"
                                    >
                                        <ImageWithFallback
                                            src={logo}
                                            alt="Orbital Fitness logo"
                                            className="w-full h-full object-contain p-8"
                                        />
                                    </motion.div>
                                </motion.div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
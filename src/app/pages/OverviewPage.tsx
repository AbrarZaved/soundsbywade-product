import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  CreditCard,
  ShoppingCart,
  UserCheck,
  Calendar,
  Dumbbell,
  Users,
  ChevronLeft,
  ChevronRight,
  MessageSquare,
} from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

const crm1 = new URL("../../assets/crm_1.png", import.meta.url).href;
const crm2 = new URL("../../assets/crm_2.png", import.meta.url).href;
const classPlanner = new URL("../../assets/class_planner.png", import.meta.url).href;
const trainerAvailability = new URL("../../assets/trainer_availability.png", import.meta.url).href;
const staff = new URL("../../assets/staff.png", import.meta.url).href;
const workoutBuilder = new URL("../../assets/workout_builder.png", import.meta.url).href;
const templates = new URL("../../assets/templates.png", import.meta.url).href;

export function OverviewPage() {
  const orbitWrapperRef = useRef<HTMLDivElement>(null);
  const [orbitSize, setOrbitSize] = useState(300);

  useEffect(() => {
    document.title = "Software Overview - Orbital Fitness";
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

  // Ring = 75% of wrapper → bubbles overflow into the remaining 25% (12.5% each side)
  const RING_RATIO = 0.75;
  const ringSize = orbitSize * RING_RATIO;
  const radius = ringSize / 2;
  const bubbleSize = Math.max(52, ringSize * 0.21);
  const iconSize = Math.max(14, ringSize * 0.072);
  const fontSize = Math.max(7, ringSize * 0.025);
  const hubSize = Math.max(100, ringSize * 0.37);

  const features = [
    { icon: CreditCard, label: "Payment Processing", angle: 0, color: "#9D4DFF" },
    { icon: ShoppingCart, label: "Merchandise Sales", angle: 60, color: "#6CFFF3" },
    { icon: UserCheck, label: "Client Check-in", angle: 120, color: "#3C22FF" },
    { icon: Calendar, label: "Trainer Scheduling", angle: 180, color: "#9D4DFF" },
    { icon: Dumbbell, label: "Workout Building", angle: 240, color: "#6CFFF3" },
    { icon: Users, label: "Class Planning", angle: 300, color: "#3C22FF" },
  ];

  return (
    <div className="relative pb-20">
      {/* SECTION 1 - HEADER WITH ORBITING FEATURES */}
      <section className="relative min-h-screen flex items-center justify-center py-20 px-6">
        <div className="max-w-7xl mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative flex flex-col items-center"
          >
            {/* Orbit wrapper — fluid square, capped width, no overflow clip */}
            <div
              className="relative w-full mx-auto mb-16"
              style={{ maxWidth: "min(600px, 100%)", aspectRatio: "1 / 1" }}
            >
              {/* ResizeObserver target */}
              <div ref={orbitWrapperRef} className="absolute inset-0">

                {/* Spinner — rotates ring + all bubbles */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  {/* Ring sized to RING_RATIO so bubbles have overflow room */}
                  <div
                    className="relative flex-shrink-0 rounded-full border-2 border-dashed border-[#6CFFF3]/60"
                    style={{ width: ringSize, height: ringSize }}
                  >
                    {features.map((feature, index) => {
                      const x = Math.cos((feature.angle * Math.PI) / 180) * radius;
                      const y = Math.sin((feature.angle * Math.PI) / 180) * radius;

                      return (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: index * 0.2 }}
                          className="absolute z-20"
                          style={{
                            left: "50%",
                            top: "50%",
                            transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                          }}
                        >
                          {/* Counter-rotate so text stays upright */}
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

                {/* Central Hub — centered in wrapper */}
                <div className="absolute inset-0 flex items-center justify-center z-30 pointer-events-none">
                  <div className="relative">
                    <div className="absolute -inset-8 bg-gradient-to-r from-[#9D4DFF] to-[#6CFFF3] rounded-full blur-3xl opacity-50" />
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
                        <h1
                          className="font-bold bg-gradient-to-r from-white to-[#9D4DFF] bg-clip-text text-transparent mb-1"
                          style={{ fontSize: Math.max(12, hubSize * 0.19) }}
                        >
                          ORBITAL
                        </h1>
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
            </div>

            {/* Text Below Orbital */}
            <div className="text-center">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Your Complete Studio Operating System
              </h2>
              <p className="text-xl text-white/80 max-w-3xl mx-auto">
                Every tool you need to manage, grow, and scale your fitness business—unified in one powerful platform.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 2 - SEGWAY TEXT */}
      <section className="relative py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <p className="text-3xl md:text-4xl text-white/90 italic mb-8">
              It's time for liftoff...
            </p>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="inline-block"
            >
              <ChevronRight className="w-8 h-8 text-[#6CFFF3] rotate-90" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 3 - FEATURE SLIDERS */}
      <section className="relative py-20 px-6">
        <div className="max-w-6xl mx-auto space-y-32">
          <FeatureSlider
            title="Account CRM"
            description="Manage every client relationship from a unified command center. Track member details, payment history, attendance patterns, and engagement metrics—all in one intuitive dashboard."
            slides={[
              {
                type: "Admin Interface",
                image: crm1,
                caption: "Comprehensive client profiles with full history tracking",
              },
              {
                type: "Client Interface",
                image: crm2,
                caption: "Clean, mobile-friendly member portal",
              },
            ]}
          />

          <FeatureSlider
            title="Scheduling"
            description="Effortlessly coordinate trainer availability, client appointments, and class sessions. Automated reminders keep everyone on track while reducing no-shows."
            slides={[
              {
                type: "Class Planner",
                image: classPlanner,
                caption: "Drag-and-drop calendar with conflict detection",
              },
              {
                type: "Trainer Availability",
                image: trainerAvailability,
                caption: "Book sessions instantly from any device",
              },
              {
                type: "Staff Shifts",
                image: staff,
                caption: "Book sessions instantly from any device",
              },
            ]}
          />

          <FeatureSlider
            title="Workout Designs & Progress Tracking"
            description="Build custom workout programs with our intuitive builder. Track client progress with detailed analytics, form videos, and performance metrics that drive results."
            slides={[
              {
                type: "Admin Interface",
                image: workoutBuilder,
                caption: "Visual workout builder with exercise library",
              },
              {
                type: "Templates",
                image: templates,
                caption: "Track your progress with visual charts and milestones",
              },
            ]}
          />

          <FeatureSlider
            title="Gym Dashboard & Merchandise / Front Desk"
            description="Your central operations hub. Process payments, sell merchandise, check in clients, and monitor real-time facility metrics—all from one beautiful interface."
            slides={[
              {
                type: "Admin Interface",
                image: "https://images.unsplash.com/photo-1614068979501-5608bdfaa4bd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXRhaWwlMjBwb2ludCUyMHNhbGUlMjBzeXN0ZW18ZW58MXx8fHwxNzcxNTMwMDYzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
                caption: "Real-time revenue analytics and inventory management",
              },
              {
                type: "Client Interface",
                image: "https://images.unsplash.com/photo-1761971975769-97e598bf526b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBneW0lMjBpbnRlcmlvciUyMGZpdG5lc3MlMjBzdHVkaW98ZW58MXx8fHwxNzcxNTMwMDYwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
                caption: "Browse and purchase merchandise seamlessly",
              },
            ]}
          />

          <FeatureSingleSlide
            title="Communications"
            description="Keep your community connected with built-in messaging, announcements, and automated notifications. Send targeted campaigns, class updates, and personalized messages—all from your dashboard."
            image="https://images.unsplash.com/photo-1762330469727-156f5369e4f9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tdW5pY2F0aW9uJTIwbWVzc2FnaW5nJTIwYXBwJTIwaW50ZXJmYWNlfGVufDF8fHx8MTc3MTUzMDA2N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            caption="Unified messaging center with automation tools"
            icon={MessageSquare}
          />
        </div>
      </section>
    </div>
  );
}

// Feature Slider Component
function FeatureSlider({
  title,
  description,
  slides,
}: {
  title: string;
  description: string;
  slides: Array<{ type: string; image: string; caption: string }>;
}) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="relative"
    >
      <div className="absolute -inset-4 bg-gradient-to-r from-[#9D4DFF]/20 to-[#6CFFF3]/20 rounded-3xl blur-3xl" />
      <div className="relative backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-8 md:p-12">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-white to-[#9D4DFF] bg-clip-text text-transparent">
              {title}
            </h3>
            <p className="text-lg text-white/80 mb-8">{description}</p>
            <div className="flex gap-2 mb-4">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`h-1 rounded-full transition-all ${index === currentSlide ? "w-12 bg-[#6CFFF3]" : "w-8 bg-white/30"
                    }`}
                />
              ))}
            </div>
            <p className="text-sm text-white/60">{slides[currentSlide].type}</p>
          </div>

          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="relative"
              >
                <div className="absolute -inset-2 bg-gradient-to-r from-[#9D4DFF]/30 to-[#6CFFF3]/30 rounded-2xl blur-2xl" />
                <div className="relative backdrop-blur-sm bg-white/5 border border-white/20 rounded-2xl p-4">
                  <ImageWithFallback
                    src={slides[currentSlide].image}
                    alt={slides[currentSlide].caption}
                    className="w-full rounded-xl"
                  />
                  <p className="mt-4 text-sm text-white/70 text-center">
                    {slides[currentSlide].caption}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>

            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 group"
            >
              <div className="absolute inset-0 bg-[#9D4DFF]/30 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition" />
              <div className="relative w-12 h-12 rounded-full backdrop-blur-xl bg-white/10 border border-white/20 flex items-center justify-center hover:border-[#6CFFF3] transition">
                <ChevronLeft className="w-6 h-6 text-white" />
              </div>
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 group"
            >
              <div className="absolute inset-0 bg-[#9D4DFF]/30 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition" />
              <div className="relative w-12 h-12 rounded-full backdrop-blur-xl bg-white/10 border border-white/20 flex items-center justify-center hover:border-[#6CFFF3] transition">
                <ChevronRight className="w-6 h-6 text-white" />
              </div>
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// Single Slide Feature Component
function FeatureSingleSlide({
  title,
  description,
  image,
  caption,
  icon: Icon,
}: {
  title: string;
  description: string;
  image: string;
  caption: string;
  icon: any;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="relative"
    >
      <div className="absolute -inset-4 bg-gradient-to-r from-[#9D4DFF]/20 to-[#6CFFF3]/20 rounded-3xl blur-3xl" />
      <div className="relative backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-8 md:p-12">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-full backdrop-blur-xl bg-white/10 border border-[#9D4DFF]/50 flex items-center justify-center">
                <Icon className="w-8 h-8 text-[#6CFFF3]" />
              </div>
              <h3 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-white to-[#9D4DFF] bg-clip-text text-transparent">
                {title}
              </h3>
            </div>
            <p className="text-lg text-white/80">{description}</p>
          </div>

          <div className="relative">
            <div className="absolute -inset-2 bg-gradient-to-r from-[#9D4DFF]/30 to-[#6CFFF3]/30 rounded-2xl blur-2xl" />
            <div className="relative backdrop-blur-sm bg-white/5 border border-white/20 rounded-2xl p-4">
              <ImageWithFallback src={image} alt={caption} className="w-full rounded-xl" />
              <p className="mt-4 text-sm text-white/70 text-center">{caption}</p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Phone, Mail, Clock, ChevronDown, Send } from "lucide-react";

export function ContactPage() {
  useEffect(() => {
    document.title = "Contact & Demo - Orbital Fitness";
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    gymName: "",
    email: "",
    phone: "",
    states: "",
    currentSoftware: "",
    preferredTime: "",
  });

  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
    alert("Thank you! We'll be in touch soon to schedule your demo.");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const faqs = [
    {
      question: "What makes Orbital Fitness different from other gym management software?",
      answer: "Orbital Fitness is the only truly all-in-one platform that combines payment processing, CRM, scheduling, workout building, merchandise sales, and client communications in a single, seamless ecosystem. Plus, our founding members lock in a lifetime 1% transaction fee—the lowest in the industry.",
    },
    {
      question: "Is there a long-term contract required?",
      answer: "No! We offer flexible month-to-month plans with no long-term commitments. We're confident you'll love Orbital Fitness, but we never want to lock you in against your will.",
    },
    {
      question: "How long does it take to migrate to Orbital Fitness?",
      answer: "Most studios complete their migration within 1-2 weeks. Our dedicated onboarding team provides white-glove support, including data migration assistance, staff training, and personalized setup to ensure a smooth transition.",
    },
    {
      question: "Can I try Orbital Fitness before committing?",
      answer: "Absolutely! Schedule a live demo with our team, and we'll give you a comprehensive tour of the platform. We also offer a 30-day trial period so you can experience the full power of Orbital Fitness risk-free.",
    },
    {
      question: "What kind of support do you offer?",
      answer: "We provide lightning-fast support via live chat, email, and phone. Our team averages a response time of under 2 hours, and we're committed to solving your issues quickly so you can focus on running your studio.",
    },
  ];

  return (
    <div className="relative pb-20">
      {/* Hero Section */}
      <section className="relative py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-[#9D4DFF] to-[#6CFFF3] bg-clip-text text-transparent">
              Ready for Liftoff?
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto mb-12">
              Schedule your exclusive demo and discover how Orbital Fitness can transform your studio operations. No pressure, just pure innovation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content - Split Layout */}
      <section className="relative px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* LEFT HALF - Lead Capture Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-gradient-to-r from-[#9D4DFF]/20 to-[#6CFFF3]/20 rounded-3xl blur-3xl" />
              <div className="relative backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-8 md:p-10">
                <h2 className="text-3xl font-bold mb-2 bg-gradient-to-r from-white to-[#9D4DFF] bg-clip-text text-transparent">
                  Schedule Your Demo
                </h2>
                <p className="text-white/70 mb-8">
                  Fill out the form below and we'll be in touch within 24 hours to schedule your personalized tour.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name */}
                  <div>
                    <label htmlFor="name" className="block text-white mb-2 text-sm font-medium">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl backdrop-blur-xl bg-white/10 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:border-[#6CFFF3] transition"
                      placeholder="John Smith"
                    />
                  </div>

                  {/* Gym Name */}
                  <div>
                    <label htmlFor="gymName" className="block text-white mb-2 text-sm font-medium">
                      Gym/Studio Name *
                    </label>
                    <input
                      type="text"
                      id="gymName"
                      name="gymName"
                      value={formData.gymName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl backdrop-blur-xl bg-white/10 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:border-[#6CFFF3] transition"
                      placeholder="Momentum Fitness"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-white mb-2 text-sm font-medium">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl backdrop-blur-xl bg-white/10 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:border-[#6CFFF3] transition"
                      placeholder="you@yourgym.com"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label htmlFor="phone" className="block text-white mb-2 text-sm font-medium">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl backdrop-blur-xl bg-white/10 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:border-[#6CFFF3] transition"
                      placeholder="(555) 123-4567"
                    />
                  </div>

                  {/* States */}
                  <div>
                    <label htmlFor="states" className="block text-white mb-2 text-sm font-medium">
                      State(s) of Operation *
                    </label>
                    <input
                      type="text"
                      id="states"
                      name="states"
                      value={formData.states}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl backdrop-blur-xl bg-white/10 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:border-[#6CFFF3] transition"
                      placeholder="California, Texas"
                    />
                  </div>

                  {/* Current Software */}
                  <div>
                    <label htmlFor="currentSoftware" className="block text-white mb-2 text-sm font-medium">
                      Current Software (Optional)
                    </label>
                    <input
                      type="text"
                      id="currentSoftware"
                      name="currentSoftware"
                      value={formData.currentSoftware}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl backdrop-blur-xl bg-white/10 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:border-[#6CFFF3] transition"
                      placeholder="Mindbody, Zen Planner, etc."
                    />
                  </div>

                  {/* Preferred Meeting Time */}
                  <div>
                    <label htmlFor="preferredTime" className="block text-white mb-2 text-sm font-medium">
                      Preferred Meeting Time
                    </label>
                    <select
                      id="preferredTime"
                      name="preferredTime"
                      value={formData.preferredTime}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl backdrop-blur-xl bg-white/10 border border-white/20 text-white focus:outline-none focus:border-[#6CFFF3] transition"
                    >
                      <option value="" className="bg-[#0A0A0F]">Select a time</option>
                      <option value="morning" className="bg-[#0A0A0F]">Morning (9am - 12pm)</option>
                      <option value="afternoon" className="bg-[#0A0A0F]">Afternoon (12pm - 5pm)</option>
                      <option value="evening" className="bg-[#0A0A0F]">Evening (5pm - 8pm)</option>
                    </select>
                  </div>

                  {/* Submit Button */}
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="relative w-full group"
                  >
                    <div className="absolute -inset-1 bg-gradient-to-r from-[#9D4DFF] to-[#6CFFF3] rounded-xl opacity-70 blur group-hover:opacity-100 transition" />
                    <div className="relative w-full px-8 py-4 bg-gradient-to-r from-[#9D4DFF] to-[#3C22FF] rounded-xl text-white font-semibold flex items-center justify-center gap-2">
                      Schedule Demo
                      <Send className="w-5 h-5" />
                    </div>
                  </motion.button>
                </form>
              </div>
            </motion.div>

            {/* RIGHT HALF - Direct Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              {/* Contact Cards */}
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-[#6CFFF3]/20 to-[#9D4DFF]/20 rounded-3xl blur-3xl" />
                <div className="relative backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-8">
                  <h3 className="text-2xl font-bold text-white mb-6">Direct Contact</h3>
                  
                  <div className="space-y-6">
                    {/* Ian's Contact */}
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full backdrop-blur-xl bg-white/10 border border-[#9D4DFF]/50 flex items-center justify-center flex-shrink-0">
                        <Phone className="w-6 h-6 text-[#6CFFF3]" />
                      </div>
                      <div>
                        <p className="text-white font-semibold">Quinn</p>
                        <p className="text-white/70 text-sm mb-1">Co-Founder</p>
                        <a href="tel:+12026696327" className="text-[#6CFFF3] hover:text-[#9D4DFF] transition">
                          +1 202 669 6327
                        </a>
                      </div>
                    </div>

                    {/* Andrew's Contact */}
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full backdrop-blur-xl bg-white/10 border border-[#9D4DFF]/50 flex items-center justify-center flex-shrink-0">
                        <Phone className="w-6 h-6 text-[#6CFFF3]" />
                      </div>
                      <div>
                        <p className="text-white font-semibold">Andrew</p>
                        <p className="text-white/70 text-sm mb-1">Co-Founder</p>
          
                        <a href="tel:+12024410950" className="text-[#6CFFF3] hover:text-[#9D4DFF] transition">
                          +1 202 441 0950
                        </a>
                      </div>
                    </div>

                    {/* Email */}
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full backdrop-blur-xl bg-white/10 border border-[#9D4DFF]/50 flex items-center justify-center flex-shrink-0">
                        <Mail className="w-6 h-6 text-[#6CFFF3]" />
                      </div>
                      <div>
                        <p className="text-white font-semibold">Email Us</p>
                        <div className="flex flex-col">
                          <a href="mailto:quinnmacintyre@orbitalfitness.us" className="text-[#6CFFF3] hover:text-[#9D4DFF] transition">
                            quinnmacintyre@orbitalfitness.us
                          </a>
                          <a href="mailto:legal@orbitalfitness.us" className="text-[#6CFFF3] hover:text-[#9D4DFF] transition">
                            legal@orbitalfitness.us
                          </a>
                        </div>
                      </div>
                    </div>

                    {/* Hours */}
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full backdrop-blur-xl bg-white/10 border border-[#9D4DFF]/50 flex items-center justify-center flex-shrink-0">
                        <Clock className="w-6 h-6 text-[#6CFFF3]" />
                      </div>
                      <div>
                        <p className="text-white font-semibold">Support Hours</p>
                        <p className="text-white/70">Mon-Fri: 8am - 8pm EST</p>
                        <p className="text-white/70">Sat-Sun: 10am - 6pm EST</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Stats */}
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-[#9D4DFF]/20 to-[#6CFFF3]/20 rounded-3xl blur-3xl" />
                <div className="relative backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-8">
                  <h3 className="text-xl font-bold text-white mb-6">Why Studio Owners Love Us</h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-white/80">Average Response Time</span>
                      <span className="text-[#6CFFF3] font-bold">{"< 2 hours"}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-white/80">Customer Satisfaction</span>
                      <span className="text-[#6CFFF3] font-bold">98%</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-white/80">Average Migration Time</span>
                      <span className="text-[#6CFFF3] font-bold">1-2 weeks</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-white/80">Founders Fee (Lifetime)</span>
                      <span className="text-[#6CFFF3] font-bold">1%</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="relative py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-white to-[#9D4DFF] bg-clip-text text-transparent">
              Frequently Asked Questions
            </h2>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="relative backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl overflow-hidden"
                >
                  <button
                    onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                    className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-white/5 transition"
                  >
                    <span className="text-white font-semibold pr-4">{faq.question}</span>
                    <motion.div
                      animate={{ rotate: expandedFaq === index ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ChevronDown className="w-5 h-5 text-[#6CFFF3] flex-shrink-0" />
                    </motion.div>
                  </button>
                  <motion.div
                    initial={false}
                    animate={{ height: expandedFaq === index ? "auto" : 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-5 text-white/80 leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
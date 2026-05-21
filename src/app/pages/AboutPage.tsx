import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import ianPhoto from "../../assets/ian-macintyre.png";
import andrewPhoto from "../../assets/andrew-best.png";

export function AboutPage() {
  useEffect(() => {
    document.title = "About Us & Testimonials - Orbital Fitness";
  }, []);

  return (
    <div className="relative pb-20">
      {/* SECTION 1 - ABOUT THE FOUNDERS */}
      <section className="relative py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold text-center mb-6 bg-gradient-to-r from-white via-[#9D4DFF] to-[#6CFFF3] bg-clip-text text-transparent">
              Meet the Founders
            </h1>
            <p className="text-xl text-white/80 text-center mb-20 max-w-3xl mx-auto">
              Orbital Fitness was born from a shared vision: to revolutionize how fitness studios operate by bringing every essential tool into one seamless ecosystem.
            </p>

            {/* Founders Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
              <FounderCard
                name="Ian Quinn Macintyre"
                role="Co-Founder & Head Technical Director"
                image={ianPhoto}
                bio="Ian is a lifelong gym-goer and current student at UT Austin. Driven by his passion for exercise, he conceptualized Orbital Fitness with a goal of helping gym owners across the world. After teaming up with Andrew Best, through months of rigorous research and development the two created a true first-of-its-kind OS for gym owners."
              />
              <FounderCard
                name="Andrew Best"
                role="Co-Founder & Head of Business Development"
                image={andrewPhoto}
                bio="Andrew brings a unique blend of business acumen and entrepreneurial drive. He is the founder and owner of Best in Biz Detailing and Poolr, giving him hands-on experience in the business world while also being a student at The University of Texas at Austin. With Orbital, Andrew is now focused on serving gyms and fitness studios by building a product that truly supports their needs. His goal is simple: give gym owners the tools, support, and technology they need to operate more efficiently, and allow their businesses to succeed and flourish at the highest level."
              />
            </div>

            {/* Mission Statement */}
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-[#9D4DFF]/20 to-[#6CFFF3]/20 rounded-3xl blur-3xl" />
              <div className="relative backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-12 text-center">
                <Quote className="w-12 h-12 text-[#6CFFF3] mx-auto mb-6" />
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Our Mission</h2>
                <p className="text-xl text-white/80 max-w-4xl mx-auto leading-relaxed">
                  To launch fitness studios into a new era of efficiency, profitability, and member satisfaction by providing the most comprehensive, intuitive, and innovative management platform in the industry. We believe that when studio owners have the right tools, they can focus on what truly matters: transforming lives.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 2 - TESTIMONIAL SLIDER */}
      <section className="relative py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {/* <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-white to-[#9D4DFF] bg-clip-text text-transparent">
              Hear from Our Community
            </h2>
            <p className="text-lg text-white/70 text-center mb-16">
              Studios across the galaxy are already experiencing the Orbital advantage
            </p> */}

            {/* <TestimonialSlider /> */}
          </motion.div>
        </div>
      </section>
    </div>
  );
}

// Founder Card Component
function FounderCard({
  name,
  role,
  image,
  initials,
  bio,
}: {
  name: string;
  role: string;
  image?: string;
  initials?: string;
  bio: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="relative group"
    >
      <div className="absolute -inset-2 bg-gradient-to-r from-[#9D4DFF]/30 to-[#6CFFF3]/30 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition duration-500" />
      <div className="relative backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-8 h-full">
        {/* Photo */}
        <div className="relative mb-6">
          <div className="absolute -inset-2 bg-gradient-to-r from-[#9D4DFF] to-[#6CFFF3] rounded-2xl blur-xl opacity-50" />
          {image ? (
            <ImageWithFallback
              src={image}
              alt={name}
              className="relative w-full aspect-square object-cover object-[center_30%] rounded-2xl border-2 border-white/20"
            />
          ) : (
            <div className="relative w-full aspect-square rounded-2xl border-2 border-white/20 bg-gradient-to-br from-[#9D4DFF]/40 to-[#6CFFF3]/40 flex items-center justify-center">
              <span className="text-6xl font-bold text-white/80 select-none">
                {initials ?? name.split(" ").map((n) => n[0]).join("")}
              </span>
            </div>
          )}
        </div>

        {/* Info */}
        <h3 className="text-2xl font-bold text-white mb-2">{name}</h3>
        <p className="text-[#6CFFF3] font-semibold mb-4">{role}</p>
        <p className="text-white/80 leading-relaxed">{bio}</p>

        {/* Orbital Logo Watermark */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute top-8 right-8 w-16 h-16 rounded-full border-2 border-dashed border-[#9D4DFF]/20"
        />
      </div>
    </motion.div>
  );
}

// Testimonial Slider Component
// function TestimonialSlider() {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const testimonials = [
//     {
//       name: "Sarah Johnson",
//       role: "Owner, Momentum Fitness",
//       location: "Austin, TX",
//       rating: 5,
//       text: "Orbital Fitness completely transformed how we run our studio. We went from juggling five different platforms to managing everything in one place. The time savings alone have been incredible, but the real game-changer is the 1% transaction fee. It's like getting free money back every month!",
//     },
//     {
//       name: "Marcus Williams",
//       role: "Director, Iron Temple CrossFit",
//       location: "Denver, CO",
//       rating: 5,
//       text: "The workout builder and progress tracking features are phenomenal. Our trainers love how easy it is to create custom programs, and our members are more engaged than ever. The interface is beautiful and intuitive—exactly what we needed.",
//     },
//     {
//       name: "Emily Rodriguez",
//       role: "Founder, Zen Flow Yoga",
//       location: "Portland, OR",
//       rating: 5,
//       text: "As a small studio owner wearing multiple hats, Orbital Fitness has been a lifesaver. The automated scheduling and client communications mean I can focus on teaching instead of admin work. Plus, the support team is incredible—always there when I need them.",
//     },
//     {
//       name: "David Park",
//       role: "Co-Owner, Peak Performance Lab",
//       location: "San Diego, CA",
//       rating: 5,
//       text: "We were early adopters and locked in the 1% founder rate. Best business decision we've made. The platform pays for itself with the savings on transaction fees alone, and the features keep getting better. It's like having a full operations team in your pocket.",
//     },
//     {
//       name: "Jessica Taylor",
//       role: "Manager, Revolution Strength Studio",
//       location: "Chicago, IL",
//       rating: 5,
//       text: "The front desk and merchandise features streamlined our entire check-in process. We sell more retail products now because it's so easy to process transactions. The real-time analytics help us make data-driven decisions every single day.",
//     },
//     {
//       name: "Michael Santos",
//       role: "Owner, Elevate Athletics",
//       location: "Miami, FL",
//       rating: 5,
//       text: "Orbital Fitness isn't just software—it's a growth partner. The unified platform helped us scale from one location to three without the operational chaos. The founders really understand the fitness industry, and it shows in every detail.",
//     },
//   ];

//   const nextTestimonial = () =>
//     setCurrentIndex((prev) => (prev + 1) % testimonials.length);
//   const prevTestimonial = () =>
//     setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

//   return (
//     <div className="relative">
//       <div className="absolute -inset-4 bg-gradient-to-r from-[#9D4DFF]/20 to-[#6CFFF3]/20 rounded-3xl blur-3xl" />
//       <div className="relative backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-12">
//         <motion.div
//           key={currentIndex}
//           initial={{ opacity: 0, x: 20 }}
//           animate={{ opacity: 1, x: 0 }}
//           exit={{ opacity: 0, x: -20 }}
//           transition={{ duration: 0.5 }}
//         >
//           {/* Stars */}
//           <div className="flex justify-center gap-2 mb-6">
//             {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
//               <Star key={i} className="w-6 h-6 fill-[#6CFFF3] text-[#6CFFF3]" />
//             ))}
//           </div>

//           {/* Quote */}
//           <Quote className="w-10 h-10 text-[#9D4DFF] mb-4 mx-auto" />
//           <p className="text-xl text-white/90 text-center mb-8 italic leading-relaxed max-w-3xl mx-auto">
//             "{testimonials[currentIndex].text}"
//           </p>

//           {/* Author */}
//           <div className="text-center">
//             <p className="text-lg font-semibold text-white">
//               {testimonials[currentIndex].name}
//             </p>
//             <p className="text-[#6CFFF3]">{testimonials[currentIndex].role}</p>
//             <p className="text-white/60 text-sm">{testimonials[currentIndex].location}</p>
//           </div>
//         </motion.div>

//         {/* Navigation */}
//         <div className="flex items-center justify-center gap-8 mt-12">
//           <button
//             onClick={prevTestimonial}
//             className="group relative"
//           >
//             <div className="absolute inset-0 bg-[#9D4DFF]/30 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition" />
//             <div className="relative w-12 h-12 rounded-full backdrop-blur-xl bg-white/10 border border-white/20 flex items-center justify-center hover:border-[#6CFFF3] transition">
//               <ChevronLeft className="w-6 h-6 text-white" />
//             </div>
//           </button>

//           {/* Indicators */}
//           <div className="flex gap-2">
//             {testimonials.map((_, index) => (
//               <button
//                 key={index}
//                 onClick={() => setCurrentIndex(index)}
//                 className={`h-2 rounded-full transition-all ${index === currentIndex ? "w-8 bg-[#6CFFF3]" : "w-2 bg-white/30"
//                   }`}
//               />
//             ))}
//           </div>

//           <button
//             onClick={nextTestimonial}
//             className="group relative"
//           >
//             <div className="absolute inset-0 bg-[#9D4DFF]/30 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition" />
//             <div className="relative w-12 h-12 rounded-full backdrop-blur-xl bg-white/10 border border-white/20 flex items-center justify-center hover:border-[#6CFFF3] transition">
//               <ChevronRight className="w-6 h-6 text-white" />
//             </div>
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }
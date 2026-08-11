import { MotionConfig } from "motion/react";
import { useEffect } from "react";
import { PrimaryCta } from "../components/AquaticsMarketing";
import { setPageMeta } from "../lib/meta";
import andrewPhoto from "../../assets/andrew-best.png";
import ianPhoto from "../../assets/ian-macintyre.png";

const founders = [
  {
    name: "Ian Quinn Macintyre",
    title: "Co-Founder & Chief Product Officer",
    image: ianPhoto,
    imageClassName: "scale-[0.96] object-[50%_50%]",
    bio: [
      "Quinn saw the operational problems directly while working in pool management: important work split across texts, spreadsheets, paper logs, repeated communication, and manual coordination.",
      "That firsthand view is what started Orbital. It keeps the product focused on the work operators actually need to handle every day.",
    ],
  },
  {
    name: "Andrew Best",
    title: "Co-Founder & Head of Business Development",
    image: andrewPhoto,
    imageClassName: "scale-[0.94] object-[50%_48%]",
    bio: [
      "Andrew leads the customer and business side of Orbital, working closely with management companies and pool boards to understand what would actually make their operation easier.",
      "His focus is making sure Orbital stays simple to understand, easy to adopt, and genuinely useful for the organizations using it.",
    ],
  },
];

const principles = [
  ["Solve real problems.", "If a feature does not reduce work, create clarity, or help someone make a better decision, it has to earn its place."],
  ["Keep it simple.", "Powerful software should make an operation feel easier, not give people another system they have to manage."],
  ["Build with the industry.", "The best version of Orbital comes from listening closely to management companies, boards, staff, and members."],
];

export function AboutPage() {
  useEffect(() => {
    setPageMeta(
      "About | Orbital Aquatics",
      "Meet the Orbital Aquatics founders and learn why they are building simpler software for the people who run pools.",
    );
  }, []);

  return (
    <MotionConfig reducedMotion="user">
      <div className="relative">
        <section className="relative overflow-hidden px-5 py-16 sm:px-6 lg:py-20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_24%,rgba(103,232,249,0.12),transparent_34%),linear-gradient(180deg,rgba(3,16,24,0)_0%,rgba(3,16,24,0.5)_100%)]" />
          <div className="relative mx-auto grid max-w-[1240px] gap-10 lg:grid-cols-[0.72fr_0.48fr] lg:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-100/70">WHO WE ARE</p>
              <h1 className="mt-5 max-w-4xl text-4xl font-semibold leading-[1.02] tracking-normal text-white sm:text-6xl lg:text-7xl">
                We’re building the product we wish the pool industry already had.
              </h1>
            </div>
            <div className="border-y border-white/10 py-6">
              <p className="text-lg leading-8 text-slate-300">
                Orbital started with a simple question: why is so much of running a pool still held together by disconnected tools and constant back-and-forth?
              </p>
            </div>
          </div>
        </section>

        <section className="border-y border-white/10 bg-[#020a11] px-5 py-16 sm:px-6 lg:py-24">
          <div className="mx-auto max-w-[1240px]">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-100/70">FOUNDERS</p>
            <div className="mt-8 grid gap-14 lg:grid-cols-2 lg:gap-16">
              {founders.map((founder) => (
                <article key={founder.name}>
                  <figure className="relative flex aspect-[4/5] max-h-[560px] items-center justify-center overflow-hidden border border-white/10 bg-[radial-gradient(circle_at_50%_18%,rgba(103,232,249,0.12),transparent_42%),#06131d] p-4 shadow-2xl shadow-cyan-950/12 sm:p-5">
                    <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-100/34 to-transparent" />
                    <img
                      src={founder.image}
                      alt={founder.name}
                      className={`max-h-full max-w-full object-contain drop-shadow-2xl ${founder.imageClassName}`}
                    />
                  </figure>
                  <div className="pt-6">
                    <h2 className="text-3xl font-semibold leading-tight text-white">{founder.name}</h2>
                    <p className="mt-3 text-sm font-semibold tracking-[0.08em] text-cyan-100/70">{founder.title}</p>
                    <div className="mt-5 max-w-xl space-y-4 text-base leading-7 text-slate-300">
                      {founder.bio.map((paragraph) => (
                        <p key={paragraph}>{paragraph}</p>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden px-5 py-16 sm:px-6 lg:py-24">
          <div className="absolute left-1/2 top-24 h-80 w-80 -translate-x-1/2 rounded-full bg-cyan-200/10 blur-3xl" />
          <div className="relative mx-auto grid max-w-[1120px] gap-10 lg:grid-cols-[0.62fr_0.38fr]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-100/70">WHY ORBITAL</p>
              <h2 className="mt-5 max-w-3xl text-4xl font-semibold leading-tight text-white sm:text-6xl">
                Running a pool looks simple from the outside. Behind the scenes, it is constant coordination.
              </h2>
              <div className="mt-8 max-w-2xl space-y-5 text-lg leading-8 text-slate-300">
                <p>
                  Managers, boards, staff, maintenance, members, events, payments, communication, and daily operations all need to stay in motion.
                </p>
                <p>
                  Too often, that work is spread across informal processes and tools that were never designed to work together.
                </p>
                <p className="font-semibold text-white">
                  Orbital came from seeing that problem firsthand and asking why the whole operation could not simply work together.
                </p>
              </div>
            </div>
            <div className="border-y border-white/10 py-6 lg:self-end">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-100/70">Built from both</p>
              <div className="mt-6 space-y-6">
                <div>
                  <p className="text-2xl font-semibold text-white">Real operating experience</p>
                  <p className="mt-2 text-sm leading-6 text-slate-400">The messy, practical side of running pools day to day.</p>
                </div>
                <div>
                  <p className="text-2xl font-semibold text-white">Customer understanding</p>
                  <p className="mt-2 text-sm leading-6 text-slate-400">The adoption, clarity, and value buyers need before trusting a new system.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="px-5 py-14 sm:px-6 lg:py-20">
          <div className="mx-auto max-w-[1120px]">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-100/70">HOW WE BUILD</p>
            <div className="mt-8 divide-y divide-white/10 border-y border-white/10">
              {principles.map(([title, copy]) => (
                <section key={title} className="grid gap-4 py-8 lg:grid-cols-[0.38fr_0.62fr] lg:gap-12">
                  <h2 className="text-3xl font-semibold leading-tight text-white">{title}</h2>
                  <p className="text-base leading-7 text-slate-300">{copy}</p>
                </section>
              ))}
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden px-5 py-20 sm:px-6 lg:py-24">
          <div className="absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-200/14 blur-3xl" />
          <div className="relative mx-auto max-w-3xl text-center">
            <h2 className="text-4xl font-semibold leading-tight text-white sm:text-5xl">Help us build a better way to run pools.</h2>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-300">
              If you manage pools or serve on a pool board, we’d love to show you what we’re building and hear what would make your operation easier.
            </p>
            <div className="mt-8">
              <PrimaryCta>Book a Demo</PrimaryCta>
            </div>
          </div>
        </section>
      </div>
    </MotionConfig>
  );
}

import { MotionConfig, motion } from "motion/react";
import { Link } from "react-router";
import { useEffect } from "react";
import { setPageMeta } from "../lib/meta";
import {
  OrbitalEcosystemVisual,
  PoolWebsiteDevices,
  PrimaryCta,
  SecondaryCta,
  SectionHeader,
  SimpleProductPreview,
} from "../components/AquaticsMarketing";

const audiencePaths = [
  {
    label: "Management Companies",
    title: "See every pool without chasing every update.",
    copy: "A clearer picture across readiness, staff workflows, chemistry, maintenance, incidents, and follow-up.",
    to: "/management-companies",
    cta: "Explore management",
  },
  {
    label: "Pool Boards",
    title: "Make the work behind the pool easier to handle.",
    copy: "Memberships, payments, households, events, announcements, administration, and member experience in one place.",
    to: "/pool-boards",
    cta: "Explore boards",
  },
];

export function HomePage() {
  useEffect(() => {
    setPageMeta(
      "Orbital Aquatics | Pool Operations Software",
      "Orbital Aquatics gives pool management companies and community pools one connected platform for operations, administration, and member experience.",
    );
  }, []);

  return (
    <MotionConfig reducedMotion="user">
      <div className="relative">
        <section className="relative overflow-hidden px-5 py-16 sm:px-6 lg:py-24">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_76%_42%,rgba(103,232,249,0.14),transparent_34%),linear-gradient(180deg,rgba(3,16,24,0)_0%,rgba(3,16,24,0.76)_100%)]" />
          <div className="relative mx-auto grid max-w-[1240px] gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
            <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55 }}>
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-100/70">
                THE OPERATING SYSTEM FOR AQUATICS
              </p>
              <h1 className="mt-5 max-w-3xl text-5xl font-semibold leading-[0.96] tracking-normal text-white sm:text-6xl lg:text-7xl">
                Everything you need to run your pools.
                <br />
                In one place.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
                Orbital brings daily operations, administration, communication, and the member experience into one calmer system.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <PrimaryCta>Book a Demo</PrimaryCta>
                <SecondaryCta to="/platform">Explore the Platform</SecondaryCta>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.08 }}
            >
              <OrbitalEcosystemVisual />
            </motion.div>
          </div>
        </section>

        <section className="border-y border-white/10 bg-[#020a11] px-5 py-16 sm:px-6 lg:py-20">
          <div className="mx-auto max-w-[1240px]">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-100/70">WHO IT IS FOR</p>
              <h2 className="mt-4 text-3xl font-semibold leading-tight text-white sm:text-5xl">
                Two kinds of leaders. One shared problem.
              </h2>
            </div>

            <div className="mt-12 grid gap-10 lg:grid-cols-2 lg:gap-0 lg:divide-x lg:divide-white/10">
              {audiencePaths.map((path) => (
                <Link
                  key={path.label}
                  to={path.to}
                  className="group block border-t border-white/10 py-8 transition hover:border-cyan-100/35 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-200/70 focus-visible:ring-offset-4 focus-visible:ring-offset-slate-950 lg:px-12 lg:first:pl-0 lg:last:pr-0"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-100/70">{path.label}</p>
                  <h3 className="mt-5 max-w-xl text-3xl font-semibold leading-tight text-white sm:text-4xl">{path.title}</h3>
                  <p className="mt-5 max-w-xl text-base leading-8 text-slate-300">{path.copy}</p>
                  <span className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-cyan-100">
                    {path.cta}
                    <span className="transition group-hover:translate-x-1">→</span>
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="px-5 py-16 sm:px-6 lg:py-24">
          <div className="mx-auto grid max-w-[1240px] gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:items-center">
            <SectionHeader
              label="PRODUCT PROOF"
              title="A real command view, without the noise."
              copy="The product should make the day feel easier: what is ready, what changed, and what needs attention next."
            />
            <SimpleProductPreview />
          </div>
        </section>

        <section className="relative overflow-hidden px-5 py-16 sm:px-6 lg:py-24">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_48%,rgba(103,232,249,0.13),transparent_34%)]" />
          <div className="relative mx-auto grid max-w-[1240px] gap-10 lg:grid-cols-[0.74fr_1.26fr] lg:items-center">
            <div>
              <SectionHeader
                label="MEMBER EXPERIENCE"
                title="Members get a cleaner front door, too."
                copy="Hours, announcements, events, registrations, and membership information become easy to find from the phone already in their hand."
              />
              <div className="mt-8">
                <SecondaryCta to="/pool-websites">Explore Pool Websites</SecondaryCta>
              </div>
            </div>
            <PoolWebsiteDevices compact />
          </div>
        </section>

        <section className="px-5 py-16 sm:px-6 lg:py-20">
          <div className="mx-auto max-w-[1120px] border-y border-white/10 py-12">
            <div className="grid gap-10 lg:grid-cols-[0.75fr_0.65fr] lg:items-end">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-100/70">WHY ORBITAL</p>
                <h2 className="mt-4 max-w-3xl text-3xl font-semibold leading-tight text-white sm:text-5xl">
                  Built from the mess behind the scenes.
                </h2>
                <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
                  Running a pool looks simple from the outside. Behind the scenes, too much of the work still lives in texts, spreadsheets, emails, paper logs, and disconnected tools.
                </p>
              </div>
              <div className="lg:justify-self-end">
                <SecondaryCta to="/about">Read the Story</SecondaryCta>
              </div>
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden px-5 py-20 sm:px-6 lg:py-28">
          <div className="absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-200/14 blur-3xl" />
          <div className="relative mx-auto max-w-3xl text-center">
            <h2 className="text-4xl font-semibold leading-tight text-white sm:text-5xl">
              See what your operation could feel like with Orbital.
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-lg leading-8 text-slate-300">
              A clearer way to manage the pools, people, and daily work your organization already depends on.
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

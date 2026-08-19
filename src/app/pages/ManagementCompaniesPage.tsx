import { MotionConfig } from "motion/react";
import { useEffect } from "react";
import { ManagementCommandVisual, PrimaryCta, SecondaryCta } from "../components/AquaticsMarketing";
import { setPageMeta } from "../lib/meta";

const outcomes = [
  {
    label: "Visibility",
    title: "Know which pools are ready and which need attention.",
    copy: "Managers get a portfolio view that makes exceptions obvious before they become bigger problems.",
  },
  {
    label: "Accountability",
    title: "See what happened, who handled it, and what happens next.",
    copy: "Daily work, reported issues, and follow-up stay connected to the property and the people responsible.",
  },
  {
    label: "Operations",
    title: "Keep recurring work from disappearing into texts.",
    copy: "Opening, closing, chemistry, maintenance, and incident workflows become part of one operating rhythm.",
  },
  {
    label: "Follow-up",
    title: "Make the next action clear.",
    copy: "Orbital helps teams move from scattered updates to a practical list of what needs to happen today.",
  },
];

export function ManagementCompaniesPage() {
  useEffect(() => {
    setPageMeta(
      "Pool Management Company Software | Orbital Aquatics",
      "Pool management company software for viewing readiness, staff workflows, chemistry, maintenance, incidents, and follow-up across every property.",
    );
  }, []);

  return (
    <MotionConfig reducedMotion="user">
      <div className="relative">
        <section className="relative overflow-hidden px-5 py-16 sm:px-6 lg:py-24">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_74%_34%,rgba(103,232,249,0.13),transparent_34%)]" />
          <div className="relative mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-100/70">FOR POOL MANAGEMENT COMPANIES</p>
              <h1 className="mt-5 max-w-4xl text-4xl font-semibold leading-[1.02] tracking-normal text-white sm:text-6xl lg:text-7xl">
                See every pool.
                <br />
                Know what needs attention.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
                Orbital gives management teams a calmer way to understand readiness, staff work, chemistry, maintenance, incidents, and follow-up across every property.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <PrimaryCta>Book a Demo</PrimaryCta>
                <SecondaryCta to="/platform">View Platform</SecondaryCta>
              </div>
            </div>
            <ManagementCommandVisual />
          </div>
        </section>

        <section className="border-y border-white/10 bg-[#020a11] px-5 py-16 sm:px-6 lg:py-24">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-10 lg:grid-cols-[0.55fr_1fr]">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-100/70">WHAT CHANGES</p>
                <h2 className="mt-4 text-3xl font-semibold leading-tight text-white sm:text-5xl">
                  Less chasing. More control.
                </h2>
              </div>

              <div className="divide-y divide-white/10 border-y border-white/10">
                {outcomes.map((outcome) => (
                  <section key={outcome.label} className="grid gap-4 py-8 sm:grid-cols-[0.28fr_0.72fr]">
                    <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-100/70">{outcome.label}</p>
                    <div>
                      <h3 className="text-2xl font-semibold leading-tight text-white">{outcome.title}</h3>
                      <p className="mt-3 text-base leading-7 text-slate-300">{outcome.copy}</p>
                    </div>
                  </section>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden px-5 py-20 sm:px-6 lg:py-24">
          <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-200/12 blur-3xl" />
          <div className="relative mx-auto max-w-3xl text-center">
            <h2 className="text-4xl font-semibold leading-tight text-white sm:text-5xl">Run your properties with a clearer picture.</h2>
            <p className="mx-auto mt-5 max-w-xl text-lg leading-8 text-slate-300">
              See how Orbital can give your management team one place to understand what’s happening across every pool.
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

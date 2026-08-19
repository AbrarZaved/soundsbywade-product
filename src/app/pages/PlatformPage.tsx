import { MotionConfig } from "motion/react";
import { useEffect } from "react";
import { ConnectedSystemVisual, PrimaryCta, SecondaryCta } from "../components/AquaticsMarketing";
import { setPageMeta } from "../lib/meta";

const worlds = [
  {
    label: "Operations",
    title: "The day-to-day work that keeps pools ready.",
    copy: "Opening and closing, staff workflows, chemistry, maintenance, incidents, and follow-up need to live somewhere clear.",
  },
  {
    label: "Administration",
    title: "The records and tasks behind the community.",
    copy: "Memberships, households, payments, events, communication, and board work become easier when they are not split across tools.",
  },
  {
    label: "Member Experience",
    title: "The public face members actually use.",
    copy: "Hours, announcements, events, registrations, and updates become simple to find from one modern pool website.",
  },
];

export function PlatformPage() {
  useEffect(() => {
    setPageMeta(
      "Pool Operations Software Platform | Orbital Aquatics",
      "See how Orbital Aquatics helps pool teams connect readiness, staffing, chemistry, maintenance, administration, and member updates in one operations platform.",
    );
  }, []);

  return (
    <MotionConfig reducedMotion="user">
      <div className="relative">
        <section className="relative overflow-hidden px-5 py-16 sm:px-6 lg:py-24">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_32%,rgba(103,232,249,0.13),transparent_34%)]" />
          <div className="relative mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.86fr_1.14fr] lg:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-100/70">PLATFORM</p>
              <h1 className="mt-5 max-w-4xl text-4xl font-semibold leading-[1.02] tracking-normal text-white sm:text-6xl lg:text-7xl">
                Operations, administration, and members. Connected.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
                Orbital gives the people running pools one shared picture of what is happening and what needs attention.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <PrimaryCta>Book a Demo</PrimaryCta>
                <SecondaryCta to="/management-companies">For Management Companies</SecondaryCta>
              </div>
            </div>
            <ConnectedSystemVisual />
          </div>
        </section>

        <section className="border-y border-white/10 bg-[#020a11] px-5 py-16 sm:px-6 lg:py-24">
          <div className="mx-auto max-w-6xl">
            <div className="max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-100/70">WHAT ORBITAL CONNECTS</p>
              <h2 className="mt-4 text-3xl font-semibold leading-tight text-white sm:text-5xl">
                The important work stops living in separate places.
              </h2>
            </div>

            <div className="mt-12 divide-y divide-white/10 border-y border-white/10">
              {worlds.map((world, index) => {
                const sectionId = world.label.toLowerCase().replace(/\s+/g, "-");

                return (
                <section
                  key={world.label}
                  id={sectionId}
                  className="grid scroll-mt-28 gap-5 py-9 lg:grid-cols-[0.18fr_0.32fr_0.5fr] lg:gap-10"
                >
                  <p className="text-sm font-semibold text-cyan-100/70">0{index + 1}</p>
                  <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-100/70">{world.label}</p>
                  <div>
                    <h3 className="text-2xl font-semibold leading-tight text-white sm:text-3xl">{world.title}</h3>
                    <p className="mt-4 max-w-2xl text-base leading-7 text-slate-300">{world.copy}</p>
                  </div>
                </section>
              );
              })}
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden px-5 py-20 sm:px-6 lg:py-24">
          <div className="absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-200/14 blur-3xl" />
          <div className="relative mx-auto max-w-3xl text-center">
            <h2 className="text-4xl font-semibold leading-tight text-white sm:text-5xl">See the whole operation in one place.</h2>
            <p className="mx-auto mt-5 max-w-xl text-lg leading-8 text-slate-300">
              Take a closer look at how Orbital connects the work behind your pools.
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

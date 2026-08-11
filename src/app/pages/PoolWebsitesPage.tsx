import { MotionConfig } from "motion/react";
import { useEffect } from "react";
import { PoolWebsiteDevices, PrimaryCta, SecondaryCta } from "../components/AquaticsMarketing";
import { setPageMeta } from "../lib/meta";

const websiteMoments = [
  {
    label: "Hours",
    copy: "Members can quickly check when the pool is open.",
  },
  {
    label: "Events",
    copy: "Swim nights, registrations, and community moments are easy to find.",
  },
  {
    label: "Announcements",
    copy: "Important updates have a clean home instead of another buried message.",
  },
  {
    label: "Membership",
    copy: "Pool information and member actions feel connected to the same Orbital experience.",
  },
];

export function PoolWebsitesPage() {
  useEffect(() => {
    setPageMeta(
      "Pool Websites | Orbital Aquatics",
      "Orbital Aquatics helps pools give members a clean, mobile-first place for hours, announcements, events, registrations, and membership information.",
    );
  }, []);

  return (
    <MotionConfig reducedMotion="user">
      <div className="relative">
        <section className="relative overflow-hidden px-5 py-16 sm:px-6 lg:py-24">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_66%_45%,rgba(103,232,249,0.16),transparent_34%)]" />
          <div className="relative mx-auto grid max-w-[1240px] gap-8 lg:grid-cols-[0.78fr_1.22fr] lg:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-100/70">POOL WEBSITES</p>
              <h1 className="mt-5 max-w-3xl text-5xl font-semibold leading-[0.96] tracking-normal text-white sm:text-6xl lg:text-7xl">
                A pool website members actually use.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
                Give members a clean, mobile-first place for hours, announcements, events, registrations, and membership information.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <PrimaryCta>Book a Demo</PrimaryCta>
                <SecondaryCta to="/pool-boards">For Pool Boards</SecondaryCta>
              </div>
            </div>
            <PoolWebsiteDevices compact className="lg:ml-auto lg:mr-0 xl:mr-16" />
          </div>
        </section>

        <section className="border-y border-white/10 bg-[#06131d] px-5 py-16 sm:px-6 lg:py-24">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-10 lg:grid-cols-[0.55fr_1fr] lg:items-start">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-100/70">MEMBER FRONT DOOR</p>
                <h2 className="mt-4 text-3xl font-semibold leading-tight text-white sm:text-5xl">
                  The information people ask for most, where they expect it.
                </h2>
              </div>

              <div className="grid gap-px border-y border-white/10 bg-white/10 sm:grid-cols-2">
                {websiteMoments.map((item) => (
                  <section key={item.label} className="bg-[#06131d] p-5 sm:p-6">
                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-100/70">{item.label}</p>
                    <p className="mt-5 text-sm leading-6 text-slate-300">{item.copy}</p>
                  </section>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden px-5 py-20 sm:px-6 lg:py-28">
          <div className="absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-200/14 blur-3xl" />
          <div className="relative mx-auto max-w-3xl text-center">
            <h2 className="text-4xl font-semibold leading-tight text-white sm:text-5xl">See what your pool could look like.</h2>
            <p className="mx-auto mt-5 max-w-xl text-lg leading-8 text-slate-300">
              Give your members a cleaner, easier way to stay connected to the pool.
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

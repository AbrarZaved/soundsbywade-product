import { MotionConfig } from "motion/react";
import { useEffect } from "react";
import { PrimaryCta, SecondaryCta } from "../components/AquaticsMarketing";
import { setPageMeta } from "../lib/meta";

export function NotFoundPage() {
  useEffect(() => {
    setPageMeta(
      "Page Not Found | Orbital Aquatics",
      "The requested Orbital Aquatics page could not be found.",
    );
  }, []);

  return (
    <MotionConfig reducedMotion="user">
      <section className="relative overflow-hidden px-5 py-20 sm:px-6 lg:py-28">
        <div className="absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-200/14 blur-3xl" />
        <div className="relative mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-100/70">PAGE NOT FOUND</p>
          <h1 className="mt-5 text-4xl font-semibold leading-tight text-white sm:text-6xl">
            We couldn't find that page.
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-lg leading-8 text-slate-300">
            The link may have changed, but the main Orbital Aquatics pages are still here.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <PrimaryCta to="/">Go Home</PrimaryCta>
            <SecondaryCta to="/contact">Book a Demo</SecondaryCta>
          </div>
        </div>
      </section>
    </MotionConfig>
  );
}

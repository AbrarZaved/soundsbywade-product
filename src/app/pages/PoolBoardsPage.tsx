import { MotionConfig } from "motion/react";
import { useEffect } from "react";
import { BoardWorkspaceVisual, PrimaryCta, SecondaryCta } from "../components/AquaticsMarketing";
import { setPageMeta } from "../lib/meta";

const boardWork = [
  {
    label: "Memberships",
    copy: "Households, renewals, and member details stay organized.",
  },
  {
    label: "Payments",
    copy: "Boards get a clearer view of what is complete and what still needs follow-up.",
  },
  {
    label: "Events",
    copy: "Pool events and community updates become easier to manage.",
  },
  {
    label: "Communication",
    copy: "Announcements and important information are easier for members to find.",
  },
  {
    label: "Administration",
    copy: "The recurring work of running the pool has a proper home.",
  },
];

export function PoolBoardsPage() {
  useEffect(() => {
    setPageMeta(
      "Pool Board Management Software | Orbital Aquatics",
      "Orbital Aquatics gives community pool boards a calmer way to manage memberships, payments, events, communication, administration, and member experience.",
    );
  }, []);

  return (
    <MotionConfig reducedMotion="user">
      <div className="relative">
        <section className="relative overflow-hidden px-5 py-16 sm:px-6 lg:py-24">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_34%,rgba(103,232,249,0.12),transparent_34%)]" />
          <div className="relative mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-100/70">FOR POOL BOARDS</p>
              <h1 className="mt-5 max-w-4xl text-4xl font-semibold leading-[1.02] tracking-normal text-white sm:text-6xl lg:text-7xl">
                Make board work feel lighter.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
                Orbital gives community pools one calmer place for memberships, payments, events, communication, administration, and the member experience.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <PrimaryCta>Book a Demo</PrimaryCta>
                <SecondaryCta to="/pool-websites">See Pool Websites</SecondaryCta>
              </div>
            </div>
            <BoardWorkspaceVisual />
          </div>
        </section>

        <section className="border-y border-white/10 bg-[#031018] px-5 py-16 sm:px-6 lg:py-24">
          <div className="mx-auto max-w-6xl">
            <div className="max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-100/70">WHAT GETS EASIER</p>
              <h2 className="mt-4 text-3xl font-semibold leading-tight text-white sm:text-5xl">
                The everyday work behind the pool gets less scattered.
              </h2>
            </div>

            <div className="mt-12 grid gap-px border-y border-white/10 bg-white/10 md:grid-cols-5">
              {boardWork.map((item) => (
                <section key={item.label} className="bg-[#04131d] p-5 md:p-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-100/70">{item.label}</p>
                  <p className="mt-5 text-sm leading-6 text-slate-300">{item.copy}</p>
                </section>
              ))}
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden px-5 py-20 sm:px-6 lg:py-24">
          <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-200/12 blur-3xl" />
          <div className="relative mx-auto max-w-3xl text-center">
            <h2 className="text-4xl font-semibold leading-tight text-white sm:text-5xl">Make running your pool simpler.</h2>
            <p className="mx-auto mt-5 max-w-xl text-lg leading-8 text-slate-300">
              Bring your board, your administration, and your member experience into one clearer system.
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

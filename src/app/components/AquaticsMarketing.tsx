import { motion } from "motion/react";
import { Link } from "react-router";
import {
  AlertTriangle,
  ArrowRight,
  Bell,
  CalendarDays,
  Check,
  CreditCard,
  Droplets,
  MessageSquare,
  Users,
} from "lucide-react";
import { type ReactNode } from "react";
import { OrbitalMark } from "./OrbitalMark";

const propertyRows = [
  { name: "Harbor Point", detail: "Opening checklist complete", status: "Ready", tone: "emerald" },
  { name: "Cedar Grove", detail: "Chemistry waiting for review", status: "Review", tone: "amber" },
  { name: "Lakeview", detail: "Maintenance issue assigned", status: "Maintenance", tone: "rose" },
  { name: "North Ridge", detail: "Weather notice ready to send", status: "Weather Hold", tone: "sky" },
];

const toneClasses: Record<string, string> = {
  emerald: "border-emerald-300/30 bg-emerald-300/10 text-emerald-100",
  amber: "border-amber-200/30 bg-amber-200/10 text-amber-100",
  rose: "border-rose-200/30 bg-rose-200/10 text-rose-100",
  sky: "border-sky-200/30 bg-sky-200/10 text-sky-100",
};

export function PrimaryCta({
  children = "Book a Demo",
  to = "/contact",
  className = "",
}: {
  children?: ReactNode;
  to?: string;
  className?: string;
}) {
  return (
    <Link
      to={to}
      className={`group inline-flex min-h-12 items-center justify-center gap-2 rounded-sm bg-cyan-100 px-5 py-3 text-sm font-semibold text-slate-950 shadow-xl shadow-cyan-950/10 transition duration-200 hover:-translate-y-0.5 hover:bg-white hover:shadow-cyan-200/12 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-200 focus-visible:ring-offset-4 focus-visible:ring-offset-slate-950 ${className}`}
    >
      {children}
      <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
    </Link>
  );
}

export function SecondaryCta({ children, to, className = "" }: { children: ReactNode; to: string; className?: string }) {
  return (
    <Link
      to={to}
      className={`group inline-flex min-h-12 items-center justify-center gap-2 rounded-sm border border-white/12 bg-white/[0.025] px-5 py-3 text-sm font-semibold text-white transition duration-200 hover:-translate-y-0.5 hover:border-cyan-100/36 hover:bg-cyan-100/8 hover:text-cyan-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-200/70 focus-visible:ring-offset-4 focus-visible:ring-offset-slate-950 ${className}`}
    >
      {children}
      <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
    </Link>
  );
}

export function SectionHeader({
  label,
  title,
  copy,
  align = "left",
}: {
  label?: string;
  title: string;
  copy?: string;
  align?: "left" | "center";
}) {
  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-2xl"}>
      {label && <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-cyan-100/70">{label}</p>}
      <h2 className="text-3xl font-semibold leading-tight tracking-normal text-white sm:text-4xl lg:text-5xl">{title}</h2>
      {copy && <p className="mt-5 text-base leading-8 text-slate-300 sm:text-lg">{copy}</p>}
    </div>
  );
}

export function PageHero({
  eyebrow,
  title,
  copy,
  children,
}: {
  eyebrow: string;
  title: string;
  copy: string;
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden px-5 py-14 sm:px-6 lg:py-20">
      <div className="absolute left-1/2 top-10 h-72 w-72 -translate-x-1/2 rounded-full bg-cyan-200/10 blur-3xl" />
      <div className="relative mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-100/70">{eyebrow}</p>
          <h1 className="mt-5 max-w-4xl text-4xl font-semibold leading-[0.98] tracking-normal text-white sm:text-6xl lg:text-7xl">
            {title}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">{copy}</p>
          {children && <div className="mt-8 flex flex-col gap-3 sm:flex-row">{children}</div>}
        </div>
      </div>
    </section>
  );
}

export function ShellFrame({
  eyebrow,
  title,
  children,
  className = "",
}: {
  eyebrow?: string;
  title?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`relative overflow-hidden rounded-lg border border-white/12 bg-[#06111d]/82 shadow-2xl shadow-cyan-950/35 ${className}`}>
      <div className="flex min-h-12 items-center justify-between border-b border-white/10 bg-white/[0.035] px-4">
        <div className="flex gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-rose-300" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber-200" />
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-300" />
        </div>
        {title && <p className="hidden text-xs text-slate-400 sm:block">{title}</p>}
        <Bell className="h-4 w-4 text-cyan-100" aria-hidden="true" />
      </div>
      <div className="p-4 sm:p-5 lg:p-6">
        {eyebrow && <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-cyan-100/70">{eyebrow}</p>}
        {children}
      </div>
    </div>
  );
}

function StatusPill({ tone, children }: { tone: string; children: ReactNode }) {
  return (
    <span className={`inline-flex items-center whitespace-nowrap rounded-full border px-3 py-1 text-xs font-semibold ${toneClasses[tone]}`}>
      {children}
    </span>
  );
}

export function OrbitalEcosystemVisual() {
  const nodes = [
    { label: "Operations", className: "left-1/2 top-[4%] -translate-x-1/2" },
    { label: "Boards", className: "right-[2%] top-1/2 -translate-y-1/2" },
    { label: "Staff", className: "bottom-[6%] left-1/2 -translate-x-1/2" },
    { label: "Members", className: "left-[2%] top-1/2 -translate-y-1/2" },
  ];

  return (
    <div className="relative mx-auto w-full max-w-[620px]">
      <div className="relative aspect-square">
        <div className="absolute inset-[7%] rounded-full bg-cyan-200/14 blur-3xl" />
        <div aria-hidden="true" className="absolute inset-[8%] rounded-full border border-cyan-100/10" />
        <div aria-hidden="true" className="absolute inset-[22%] rounded-full border border-cyan-100/10" />
        <div aria-hidden="true" className="absolute inset-[35%] rounded-full border border-cyan-100/8" />

        <motion.div
          aria-hidden="true"
          className="absolute inset-[6%] rounded-full border border-dashed border-cyan-100/24"
          animate={{ rotate: 360 }}
          transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
        >
          <span className="absolute left-1/2 top-[-5px] h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-cyan-200 shadow-[0_0_22px_rgba(103,232,249,0.85)]" />
          <span className="absolute bottom-[14%] right-[9%] h-1.5 w-10 rotate-45 rounded-full bg-cyan-100/30 shadow-[0_0_18px_rgba(103,232,249,0.45)]" />
        </motion.div>

        <motion.div
          aria-hidden="true"
          className="absolute inset-[18%] rounded-full"
          animate={{ rotate: -360 }}
          transition={{ duration: 13, repeat: Infinity, ease: "linear" }}
        >
          <span className="absolute right-[12%] top-[12%] h-2 w-2 rounded-full bg-cyan-100/90 shadow-[0_0_18px_rgba(223,251,255,0.7)]" />
          <span className="absolute bottom-[2%] left-1/2 h-px w-14 -translate-x-1/2 bg-cyan-100/24" />
        </motion.div>

        <div className="absolute inset-[31%] flex items-center justify-center rounded-full border border-cyan-100/24 bg-[#031018]/90 shadow-2xl shadow-cyan-950/40">
          <div className="absolute inset-4 rounded-full bg-cyan-200/9 blur-xl" />
          <div className="relative text-center">
            <OrbitalMark size="hero" />
            <p className="mt-4 text-xs font-semibold uppercase tracking-[0.34em] text-cyan-100/70">Orbital</p>
          </div>
        </div>

        {nodes.map((node) => (
          <div key={node.label} className={`absolute hidden sm:block ${node.className}`}>
            <div className="rounded-full border border-cyan-100/20 bg-slate-950/78 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-cyan-50 shadow-xl shadow-cyan-950/25 backdrop-blur-md">
              {node.label}
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-2 gap-px border-y border-white/10 bg-white/10 sm:hidden">
        {nodes.map((node) => (
          <div key={node.label} className="bg-[#031018] px-3 py-3 text-center text-[10px] font-semibold uppercase tracking-[0.2em] text-cyan-50">
            {node.label}
          </div>
        ))}
      </div>
    </div>
  );
}

export function SimpleProductPreview() {
  const decisions = ["Review Cedar Grove chemistry", "Assign Lakeview maintenance", "Send North Ridge weather notice"];

  return (
    <ShellFrame eyebrow="Today across four pools" title="Orbital command view">
      <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h3 className="text-2xl font-semibold leading-tight text-white">Attention first. Details when you need them.</h3>
          <p className="mt-2 max-w-lg text-sm leading-6 text-slate-400">
            A calm view of what is ready, what changed, and what needs follow-up.
          </p>
        </div>
        <StatusPill tone="amber">3 need attention</StatusPill>
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="divide-y divide-white/10 border-y border-white/10">
          {propertyRows.map((property) => (
            <div key={property.name} className="grid grid-cols-[1fr_auto] gap-4 py-4">
              <div>
                <p className="font-semibold text-white">{property.name}</p>
                <p className="mt-1 text-sm text-slate-500">{property.detail}</p>
              </div>
              <StatusPill tone={property.tone}>{property.status}</StatusPill>
            </div>
          ))}
        </div>

        <div className="border-l border-white/10 pl-5">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-100/70">Next decisions</p>
          <div className="mt-4 space-y-4">
            {decisions.map((item, index) => (
              <div key={item} className="flex gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-cyan-100/20 text-[10px] font-semibold text-cyan-100">
                  {index + 1}
                </span>
                <p className="text-sm leading-6 text-slate-300">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </ShellFrame>
  );
}

const platformStreams = [
  {
    title: "Operations",
    action: "Run every pool.",
    detail: "Readiness, staff, chemistry, maintenance.",
    icon: <Droplets className="h-4 w-4" aria-hidden="true" />,
  },
  {
    title: "Administration",
    action: "Manage the business.",
    detail: "Memberships, payments, households, events.",
    icon: <CreditCard className="h-4 w-4" aria-hidden="true" />,
  },
  {
    title: "Member Experience",
    action: "Serve the community.",
    detail: "Hours, updates, registrations, websites.",
    icon: <MessageSquare className="h-4 w-4" aria-hidden="true" />,
  },
];

export function ConnectedSystemVisual() {
  return (
    <div className="relative mx-auto w-full max-w-[760px]">
      <div className="absolute left-1/2 top-1/2 h-[32rem] w-[32rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-200/12 blur-3xl" />

      <div className="relative overflow-hidden rounded-[2rem] border border-white/12 bg-[#04121d]/78 p-5 shadow-2xl shadow-cyan-950/30 backdrop-blur-md sm:p-6 lg:p-7">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_18%,rgba(103,232,249,0.14),transparent_34%),linear-gradient(135deg,rgba(255,255,255,0.065),transparent_42%)]" />
        <div className="absolute inset-x-8 top-1/2 h-px bg-gradient-to-r from-transparent via-cyan-100/16 to-transparent" />

        <div className="relative flex items-center justify-between gap-4 border-b border-white/10 pb-5">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-cyan-100/70">CONNECTED PLATFORM</p>
            <p className="mt-2 max-w-sm text-sm leading-6 text-slate-300">
              Daily pool work, records, and member touchpoints in one calmer system.
            </p>
          </div>
          <div className="hidden h-10 w-10 shrink-0 items-center justify-center rounded-full border border-cyan-100/20 bg-cyan-100/8 text-cyan-50 sm:flex">
            <Check className="h-4 w-4" aria-hidden="true" />
          </div>
        </div>

        <div className="relative mt-7 grid gap-6 xl:grid-cols-[1fr_5.5rem_1fr] xl:items-center">
          <div className="grid gap-3">
            {platformStreams.map((stream, index) => (
              <motion.div
                key={stream.title}
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.45, delay: index * 0.06 }}
                className="relative overflow-hidden rounded-xl border border-white/10 bg-slate-950/58 p-4 shadow-xl shadow-cyan-950/12"
              >
                <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-cyan-100/[0.07] to-transparent opacity-80" />
                <div className="relative flex items-start gap-3">
                  <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-cyan-100/20 bg-cyan-100/8 text-cyan-50">
                    {stream.icon}
                  </span>
                  <span>
                    <span className="block text-[10px] font-semibold uppercase tracking-[0.22em] text-cyan-100/70">{stream.title}</span>
                    <span className="mt-2 block text-base font-semibold leading-5 text-white">{stream.action}</span>
                    <span className="mt-2 block text-sm leading-6 text-slate-400">{stream.detail}</span>
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="relative mx-auto hidden h-full min-h-[18rem] w-20 xl:block" aria-hidden="true">
            <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-cyan-100/30 to-transparent" />
            <motion.span
              className="absolute left-1/2 top-[12%] h-2 w-2 -translate-x-1/2 rounded-full bg-cyan-200 shadow-[0_0_20px_rgba(103,232,249,0.8)]"
              animate={{ y: [0, 190, 0], opacity: [0.35, 1, 0.35] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            />
            <span className="absolute left-1/2 top-[22%] h-px w-16 -translate-x-full bg-gradient-to-l from-cyan-100/28 to-transparent" />
            <span className="absolute left-1/2 top-1/2 h-px w-16 -translate-x-full bg-gradient-to-l from-cyan-100/28 to-transparent" />
            <span className="absolute left-1/2 top-[78%] h-px w-16 -translate-x-full bg-gradient-to-l from-cyan-100/28 to-transparent" />
            <span className="absolute left-1/2 top-1/2 h-px w-16 bg-gradient-to-r from-cyan-100/28 to-transparent" />
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.55, delay: 0.12 }}
            className="relative overflow-hidden rounded-[1.55rem] border border-cyan-100/18 bg-[#020a13]/86 p-5 text-center shadow-2xl shadow-cyan-950/35 sm:p-6"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_18%,rgba(103,232,249,0.17),transparent_42%)]" />
            <div className="relative mx-auto flex h-32 w-32 items-center justify-center rounded-full border border-cyan-100/20 bg-cyan-100/[0.055] shadow-[0_0_70px_rgba(103,232,249,0.14)]">
              <OrbitalMark size="hero" />
            </div>
            <p className="relative mt-5 text-xs font-semibold uppercase tracking-[0.32em] text-cyan-100/70">Orbital</p>
            <h3 className="relative mt-3 text-2xl font-semibold leading-tight text-white">One connected platform.</h3>
            <p className="relative mx-auto mt-3 max-w-[18rem] text-sm leading-6 text-slate-300">
              The people running the pool see the same operation from every angle.
            </p>
            <div className="relative mt-6 grid grid-cols-3 gap-px overflow-hidden rounded-lg border border-white/10 bg-white/10">
              {["Ops", "Admin", "Members"].map((item) => (
                <span key={item} className="bg-slate-950/76 px-2 py-3 text-[10px] font-semibold uppercase tracking-[0.16em] text-cyan-50">
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export function PoolWebsiteDevices({ compact = false, className = "" }: { compact?: boolean; className?: string }) {
  return (
    <div className={`relative mx-auto w-full max-w-[560px] ${compact ? "lg:max-w-[500px]" : ""} ${className}`}>
      <div className="absolute left-1/2 top-1/2 h-[30rem] w-[30rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-200/18 blur-3xl" />
      <div aria-hidden="true" className="absolute left-1/2 top-1/2 h-[24rem] w-[24rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-100/10" />

      <div className={`relative mx-auto flex items-center justify-center ${compact ? "min-h-[500px] sm:min-h-[590px]" : "min-h-[560px] sm:min-h-[620px]"}`}>
        <motion.div
          className="relative z-10 w-[268px] origin-center rounded-[3rem] bg-[#020713] p-[8px] shadow-[0_36px_90px_rgba(0,0,0,0.46),0_0_84px_rgba(103,232,249,0.2)] ring-1 ring-cyan-100/20 sm:w-[308px]"
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="absolute left-1/2 top-3 z-20 h-5 w-20 -translate-x-1/2 rounded-full bg-[#020713] sm:w-24" />
          <div className="overflow-hidden rounded-[2.45rem] bg-[#f7fdff] p-5 text-slate-950 shadow-inner shadow-slate-200/80 sm:p-6">
            <div className="mb-8 flex items-start justify-between pt-2">
              <div>
                <p className="text-base font-semibold leading-none">Harbor Point</p>
                <p className="mt-1 text-xs text-slate-500">Swim Club</p>
              </div>
              <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold uppercase text-emerald-700">OPEN</span>
            </div>

            <div className="rounded-[1.6rem] bg-white p-5 shadow-[0_12px_34px_rgba(15,23,42,0.08)] ring-1 ring-slate-200">
              <p className="text-[10px] font-semibold uppercase tracking-[0.26em] text-sky-700">Open today</p>
              <p className="mt-4 text-3xl font-semibold leading-tight text-slate-950">10:00 AM – 8:00 PM</p>
            </div>

            <div className="mt-4 rounded-[1.6rem] bg-slate-950 p-5 text-white shadow-[0_16px_36px_rgba(15,23,42,0.18)]">
              <p className="text-[10px] font-semibold uppercase tracking-[0.26em] text-cyan-100/60">Next event</p>
              <p className="mt-4 text-2xl font-semibold leading-tight">Friday Night Swim</p>
            </div>

            <div className="mt-5 grid gap-2.5">
              {["Hours", "Events", "Membership"].map((item) => (
                <div key={item} className="rounded-2xl bg-white px-4 py-3 text-sm font-semibold shadow-sm ring-1 ring-slate-200">
                  {item}
                </div>
              ))}
            </div>
            <p className="mt-5 text-center text-xs font-semibold text-sky-700">View announcements</p>
          </div>
          <div className="pointer-events-none absolute inset-0 rounded-[2.85rem] ring-1 ring-white/8" />
        </motion.div>
      </div>
    </div>
  );
}

export function ManagementCommandVisual() {
  const queue = ["Review chemistry", "Assign technician", "Send weather update"];

  return (
    <ShellFrame eyebrow="Portfolio command" title="Today">
      <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h3 className="text-2xl font-semibold leading-tight text-white">Four pools. One clear priority list.</h3>
          <p className="mt-2 text-sm leading-6 text-slate-400">Managers see what is ready and what needs a decision.</p>
        </div>
        <StatusPill tone="amber">3 follow-ups</StatusPill>
      </div>

      <div className="mt-6 grid gap-6 xl:grid-cols-[1.35fr_0.85fr]">
        <div className="divide-y divide-white/10 border-y border-white/10">
          {propertyRows.map((property) => (
            <div key={property.name} className="grid grid-cols-[1fr_auto] gap-4 py-4">
              <div>
                <p className="font-semibold text-white">{property.name}</p>
                <p className="mt-1 text-sm text-slate-500">{property.detail}</p>
              </div>
              <StatusPill tone={property.tone}>{property.status}</StatusPill>
            </div>
          ))}
        </div>

        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-1">
          <div className="border border-white/10 bg-white/[0.03] p-4">
            <Droplets className="h-5 w-5 text-cyan-100" aria-hidden="true" />
            <p className="mt-5 text-2xl font-semibold text-white">1 due</p>
            <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-slate-500">Chemistry</p>
          </div>
          <div className="border border-white/10 bg-white/[0.03] p-4">
            <AlertTriangle className="h-5 w-5 text-cyan-100" aria-hidden="true" />
            <p className="mt-5 text-2xl font-semibold text-white">1 open</p>
            <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-slate-500">Incident</p>
          </div>
          <div className="border-t border-white/10 pt-4 sm:col-span-2 xl:col-span-1">
            <p className="mb-3 text-sm font-semibold text-white">Action queue</p>
            <ul className="space-y-3 text-sm text-slate-300">
              {queue.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <Check className="mt-0.5 h-4 w-4 text-cyan-100" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </ShellFrame>
  );
}

export function BoardWorkspaceVisual() {
  return (
    <ShellFrame eyebrow="Board workspace" title="Harbor Point">
      <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="space-y-5">
          <div>
            <h3 className="text-2xl font-semibold leading-tight text-white">The admin work, finally in one calm place.</h3>
            <p className="mt-2 text-sm leading-6 text-slate-400">Memberships, payments, events, and member updates stay easy to find.</p>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {[
              [Users, "428", "Households"],
              [CreditCard, "12", "Open payments"],
            ].map(([Icon, value, label]) => {
              const TypedIcon = Icon as typeof Users;
              return (
                <div key={String(label)} className="border border-white/10 bg-white/[0.03] p-4">
                  <TypedIcon className="h-5 w-5 text-cyan-100" aria-hidden="true" />
                  <p className="mt-5 text-2xl font-semibold text-white">{String(value)}</p>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-slate-500">{String(label)}</p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="divide-y divide-white/10 border-y border-white/10">
          {[
            ["Renewals", "74% complete"],
            ["Friday Night Swim", "Event ready"],
            ["Pool hours update", "Announcement sent"],
            ["Board meeting", "Agenda drafted"],
          ].map(([label, value], index) => (
            <div key={label} className="flex items-center justify-between gap-4 py-4">
              <div>
                <p className="font-semibold text-white">{label}</p>
                <p className="mt-1 text-sm text-slate-500">{value}</p>
              </div>
              {index === 0 ? (
                <Check className="h-4 w-4 text-cyan-100" aria-hidden="true" />
              ) : index === 1 ? (
                <CalendarDays className="h-4 w-4 text-cyan-100" aria-hidden="true" />
              ) : (
                <MessageSquare className="h-4 w-4 text-cyan-100" aria-hidden="true" />
              )}
            </div>
          ))}
        </div>
      </div>
    </ShellFrame>
  );
}

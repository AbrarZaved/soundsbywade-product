import { Link, useLocation } from "react-router";
import { motion } from "motion/react";
import { ArrowRight, Menu, X } from "lucide-react";
import { useState } from "react";
import { OrbitalMark } from "./OrbitalMark";

const navLinks = [
  { name: "Platform", to: "/platform" },
  { name: "Management Companies", to: "/management-companies" },
  { name: "Pool Boards", to: "/pool-boards" },
  { name: "Pool Websites", to: "/pool-websites" },
  { name: "About", to: "/about" },
];

export function Header() {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isActivePath = (path: string) => location.pathname === path || (path === "/platform" && location.pathname === "/overview");

  return (
    <motion.header
      initial={{ y: -72, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="fixed left-0 right-0 top-0 z-50 border-b border-white/[0.08] bg-slate-950/82 backdrop-blur-xl"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-6">
        <Link to="/" className="group flex items-center gap-3" onClick={() => setMobileMenuOpen(false)}>
          <OrbitalMark size="header" />
          <span className="flex flex-col leading-none">
            <span className="text-base font-semibold tracking-normal text-white">Orbital</span>
            <span className="mt-1 text-[10px] font-semibold uppercase tracking-[0.24em] text-cyan-100/70">Aquatics</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-7 xl:flex">
          {navLinks.map((link) => {
            const active = isActivePath(link.to);

            return (
              <Link
                key={link.to}
                to={link.to}
                className={`group relative py-2 text-sm font-medium transition duration-300 focus:outline-none focus-visible:text-white focus-visible:ring-2 focus-visible:ring-cyan-200/70 focus-visible:ring-offset-4 focus-visible:ring-offset-slate-950 ${
                  active ? "text-cyan-50" : "text-slate-300 hover:text-white"
                }`}
              >
                {link.name}
                <span
                  aria-hidden="true"
                  className={`absolute -bottom-1 left-0 h-px bg-cyan-200 transition-all duration-300 ${
                    active
                      ? "w-full opacity-100 shadow-[0_0_14px_rgba(103,232,249,0.55)]"
                      : "w-0 opacity-0 group-hover:w-full group-hover:opacity-70"
                  }`}
                />
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-4 xl:flex">
          <Link
            to="/contact"
            className="group inline-flex min-h-11 items-center justify-center gap-2 rounded-sm bg-cyan-100 px-4 py-2.5 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-950/10 transition duration-200 hover:-translate-y-0.5 hover:bg-white hover:shadow-cyan-200/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-200 focus-visible:ring-offset-4 focus-visible:ring-offset-slate-950"
          >
            Book a Demo
            <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setMobileMenuOpen((open) => !open)}
          className="inline-flex h-10 w-10 items-center justify-center border border-white/10 text-white transition hover:border-cyan-200/40 hover:bg-cyan-100/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-200/70 focus-visible:ring-offset-4 focus-visible:ring-offset-slate-950 xl:hidden"
          aria-label={mobileMenuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="border-t border-white/10 bg-slate-950/96 px-5 pb-6 pt-2 xl:hidden"
        >
          <nav className="mx-auto flex max-w-7xl flex-col">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setMobileMenuOpen(false)}
                className={`border-b border-white/10 py-4 text-base font-medium transition focus:outline-none focus-visible:text-cyan-100 ${
                  isActivePath(link.to) ? "text-cyan-50" : "text-slate-200 hover:text-white"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <div className="mt-5 grid gap-3">
              <Link
                to="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="inline-flex min-h-12 items-center justify-center rounded-sm bg-cyan-100 px-5 py-3 text-sm font-semibold text-slate-950 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-200"
              >
                Book a Demo
              </Link>
            </div>
          </nav>
        </motion.div>
      )}
    </motion.header>
  );
}

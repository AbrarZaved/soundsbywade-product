import type { MouseEvent } from "react";
import { Link } from "react-router";
import { OrbitalMark } from "./OrbitalMark";

const footerGroups = [
  {
    title: "Platform",
    links: [
      { label: "Overview", to: "/platform" },
      { label: "Operations", to: "/platform#operations" },
      { label: "Member Experience", to: "/platform#member-experience" },
    ],
  },
  {
    title: "Use Cases",
    links: [
      { label: "Management Companies", to: "/management-companies" },
      { label: "Pool Boards", to: "/pool-boards" },
      { label: "Pool Websites", to: "/pool-websites" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", to: "/about" },
      { label: "Contact", to: "/contact" },
      { label: "Book a Demo", to: "/contact" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", to: "/privacy" },
      { label: "Terms of Service", to: "/terms" },
    ],
  },
];

export function Footer() {
  const handleLinkClick = (event: MouseEvent<HTMLAnchorElement>, to: string) => {
    if (!to.includes("#")) return;

    const [path, hash] = to.split("#");
    if (window.location.pathname !== path || !hash) return;

    event.preventDefault();
    window.history.pushState(null, "", to);
    document.getElementById(hash)?.scrollIntoView({ block: "start" });
  };

  return (
    <footer id="company" className="relative border-t border-white/10 bg-slate-950/80">
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-6 lg:py-16">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_2fr]">
          <div>
            <div className="flex items-center gap-3">
              <OrbitalMark size="footer" animated={false} />
              <span className="flex flex-col leading-none">
                <span className="text-lg font-semibold text-white">Orbital</span>
                <span className="mt-1 text-[10px] font-semibold uppercase tracking-[0.24em] text-cyan-100/70">Aquatics</span>
              </span>
            </div>
            <p className="mt-5 max-w-sm text-sm leading-6 text-slate-400">
              A simpler, connected platform for the people who run pools.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {footerGroups.map((group) => (
              <div key={group.title}>
                <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-100/70">{group.title}</h3>
                <ul className="mt-4 space-y-3">
                  {group.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        to={link.to}
                        onClick={(event) => handleLinkClick(event, link.to)}
                        className="text-sm text-slate-400 transition hover:text-cyan-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-200/70 focus-visible:ring-offset-4 focus-visible:ring-offset-slate-950"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-sm text-slate-500">
          <p>Copyright © 2026 Orbital Aquatics. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

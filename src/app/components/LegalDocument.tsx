import type { MouseEvent, ReactNode } from "react";

export type LegalSection = {
  id: string;
  title: string;
  shortTitle?: string;
  content: ReactNode;
};

export function LegalDocument({
  title,
  lastUpdated,
  intro,
  sections,
}: {
  title: string;
  lastUpdated: string;
  intro: ReactNode;
  sections: LegalSection[];
}) {
  const handleAnchorClick = (event: MouseEvent<HTMLAnchorElement>, id: string) => {
    event.preventDefault();
    window.history.pushState(null, "", `#${id}`);
    document.getElementById(id)?.scrollIntoView({ block: "start" });
  };

  return (
    <div className="relative">
      <section className="relative overflow-hidden px-5 py-16 sm:px-6 lg:py-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_12%,rgba(103,232,249,0.12),transparent_34%)]" />
        <div className="relative mx-auto max-w-6xl">
          <div className="mx-auto max-w-[840px] text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-100/70">LEGAL</p>
            <h1 className="mt-5 text-4xl font-semibold leading-tight text-white sm:text-6xl">{title}</h1>
            <p className="mt-5 text-sm font-semibold tracking-[0.08em] text-cyan-100/70">Last Updated: {lastUpdated}</p>
            <div className="mx-auto mt-8 max-w-[760px] text-left text-base leading-8 text-slate-300 sm:text-lg">{intro}</div>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-[#020a11] px-5 py-14 sm:px-6 lg:py-20">
        <div className="mx-auto grid max-w-6xl gap-10 xl:grid-cols-[220px_minmax(0,840px)] xl:items-start xl:justify-center">
          <nav className="hidden xl:sticky xl:top-28 xl:block" aria-label={`${title} sections`}>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-100/70">On This Page</p>
            <ol className="mt-5 space-y-3 border-l border-white/10 pl-4">
              {sections.map((section) => (
                <li key={section.id}>
                  <a
                    href={`#${section.id}`}
                    onClick={(event) => handleAnchorClick(event, section.id)}
                    className="text-sm leading-5 text-slate-400 transition hover:text-cyan-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-200/70 focus-visible:ring-offset-4 focus-visible:ring-offset-slate-950"
                  >
                    {section.shortTitle ?? section.title}
                  </a>
                </li>
              ))}
            </ol>
          </nav>

          <article className="max-w-[840px] divide-y divide-white/10 border-y border-white/10">
            {sections.map((section) => (
              <section key={section.id} id={section.id} className="scroll-mt-28 py-9 first:pt-8 last:pb-8">
                <h2 className="text-2xl font-semibold leading-tight text-white sm:text-3xl">{section.title}</h2>
                <div className="mt-5 space-y-5 text-base leading-8 text-slate-300">{section.content}</div>
              </section>
            ))}
          </article>
        </div>
      </section>
    </div>
  );
}

export function LegalList({ children }: { children: ReactNode }) {
  return <ul className="space-y-3 pl-5 [list-style:disc] marker:text-cyan-100/70">{children}</ul>;
}

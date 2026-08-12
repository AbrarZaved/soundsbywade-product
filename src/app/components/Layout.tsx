import { Outlet, useLocation } from "react-router";
import { useEffect } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";

export function Layout() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = decodeURIComponent(location.hash.slice(1));
      const scrollToTarget = () => {
        document.getElementById(id)?.scrollIntoView({ block: "start" });
      };
      window.requestAnimationFrame(scrollToTarget);
      const firstRetry = window.setTimeout(scrollToTarget, 100);
      const secondRetry = window.setTimeout(scrollToTarget, 350);

      return () => {
        window.clearTimeout(firstRetry);
        window.clearTimeout(secondRetry);
      };
    }

    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [location.pathname, location.hash]);

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#031018] text-white">
      <div className="pointer-events-none fixed inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(103,232,249,0.12),rgba(3,16,24,0)_46%),radial-gradient(ellipse_at_80%_20%,rgba(14,165,233,0.1),rgba(3,16,24,0)_36%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(115deg,transparent_0%,rgba(103,232,249,0.035)_28%,transparent_54%,rgba(56,189,248,0.03)_76%,transparent_100%)]" />
      </div>

      <Header />
      <main className="relative pt-20">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

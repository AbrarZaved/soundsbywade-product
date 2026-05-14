import { Link, useLocation } from "react-router";
import { motion } from "motion/react";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "../../assets/Frame.png"

export function Header() {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Orbital Fitness Overview", path: "/overview" },
    { name: "About & Testimonials", path: "/about" },
    { name: "Free Demo & Contact", path: "/contact" },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-white/10 border-b border-white/20"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo — O (image) sits inline with RBITAL FITNESS */}
        <Link to="/" className="flex items-center group">
          {/* Spinning logo image acts as the "O" */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="relative w-8 h-8 flex-shrink-0"
          >
            <img src={logo} className="w-8 h-8" />
            <div className="absolute inset-0 bg-[#9D4DFF]/30 blur-xl rounded-full" />
          </motion.div>

          {/* RBITAL FITNESS immediately after, no gap so O flows into it */}
          <span className="text-xl font-bold bg-gradient-to-r from-white to-[#9D4DFF] bg-clip-text text-transparent tracking-wide">
            RBITAL FITNESS
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className="relative text-white/80 hover:text-white transition-colors text-sm"
            >
              {link.name}
              {location.pathname === link.path && (
                <motion.div
                  layoutId="activeNav"
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-[#9D4DFF] to-[#6CFFF3]"
                />
              )}
            </Link>
          ))}
        </nav>

        {/* Desktop Login Button */}
        <motion.a
          href="https://dashboard.orbitalfitness.us/"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="relative group hidden md:block"
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-[#9D4DFF] to-[#6CFFF3] rounded-full opacity-70 blur-sm group-hover:opacity-100 transition" />
          <div className="relative px-6 py-2.5 bg-[#0A0A0F] rounded-full border border-[#9D4DFF]/50 text-white text-sm font-medium">
            Current Users Login
          </div>
        </motion.a>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-white p-2"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden backdrop-blur-xl bg-white/10 border-t border-white/20"
        >
          <nav className="flex flex-col px-6 py-4 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`text-white/80 hover:text-white transition-colors py-2 ${location.pathname === link.path ? "text-[#6CFFF3]" : ""
                  }`}
              >
                {link.name}
              </Link>
            ))}
            <a
              href="https://dashboard.orbitalfitness.us/"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full mt-4 px-6 py-3 bg-gradient-to-r from-[#9D4DFF] to-[#6CFFF3] rounded-full text-white font-medium text-center"
            >
              Current Users Login
            </a>
          </nav>
        </motion.div>
      )}
    </motion.header>
  );
}
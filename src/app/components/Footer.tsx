import { motion } from "motion/react";
import { Link } from "react-router";
import { Twitter, Facebook, Instagram, Linkedin } from "lucide-react";

export function Footer() {
  const socialLinks = [
    { icon: Twitter, href: "#" },
    { icon: Facebook, href: "#" },
    { icon: Instagram, href: "#" },
    { icon: Linkedin, href: "#" },
  ];

  return (
    <footer className="relative mt-32 border-t border-white/10">
      {/* Cosmic Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#9D4DFF]/5 to-[#0A0A0F]" />

      <div className="relative max-w-7xl mx-auto px-6 py-16">
        {/* Glowing Line Separator */}
        <div className="h-px bg-gradient-to-r from-transparent via-[#6CFFF3]/50 to-transparent mb-12" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand Section */}
          <div>
            <h3 className="text-xl font-bold bg-gradient-to-r from-white to-[#9D4DFF] bg-clip-text text-transparent mb-4">
              ORBITAL FITNESS
            </h3>
            <p className="text-white/60 text-sm">
              Launch all aspects of studio management into your orbit.
            </p>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/privacy-policy" className="text-white/60 hover:text-[#6CFFF3] transition-colors text-sm">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-white/60 hover:text-[#6CFFF3] transition-colors text-sm">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="text-white font-semibold mb-4">Connect With Us</h4>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  className="relative group"
                >
                  <div className="absolute inset-0 bg-[#9D4DFF]/30 blur-lg rounded-full opacity-0 group-hover:opacity-100 transition" />
                  <div className="relative w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:border-[#6CFFF3] transition-colors">
                    <social.icon className="w-5 h-5 text-white/60 group-hover:text-[#6CFFF3] transition-colors" />
                  </div>
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-white/10 text-center">
          <p className="text-white/40 text-sm">
            Copyright © 2026 Integrated Training Services. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

"use client";

import { Mail, Instagram, MessageCircle } from "lucide-react";
import Link from "next/link";

const socialLinks = [
  {
    name: "WhatsApp",
    href: "https://wa.me/447724280130",
    icon: MessageCircle,
  },
  {
    name: "Instagram",
    href: "https://instagram.com/cromowebstudios",
    icon: Instagram,
  },
  {
    name: "Email",
    href: "mailto:info@cromostudios.com",
    icon: Mail,
  },
];

const navLinks = [
  { name: "Services", href: "#services" },
  { name: "Portfolio", href: "#portfolio" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="w-full py-12 bg-black border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-8">
          {/* Brand and Social */}
          <div className="space-y-6">
            <Link href="/" className="text-2xl font-bold text-white">
              Cromo Studios
            </Link>
            <p className="text-white/60 max-w-md">
              Transforming businesses through innovative web solutions. We
              create exceptional digital experiences that drive growth and
              success.
            </p>
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-white/60 hover:text-white transition-colors"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Links and Info */}
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h3 className="text-white font-semibold mb-4">Navigation</h3>
              <ul className="space-y-3">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-white/60 hover:text-white transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Contact</h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="mailto:info@cromostudios.com"
                    className="text-white/60 hover:text-white transition-colors"
                  >
                    info@cromostudios.com
                  </a>
                </li>
                <li>
                  <a
                    href="tel:+447724280130"
                    className="text-white/60 hover:text-white transition-colors"
                  >
                    +44 7724 280 130
                  </a>
                </li>
                <li>
                  <span className="text-white/60">London, United Kingdom</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-white/60 text-sm">
              © {new Date().getFullYear()} Cromo Studios. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link
                href="/privacy-policy"
                className="text-white/60 hover:text-white text-sm transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms-of-service"
                className="text-white/60 hover:text-white text-sm transition-colors"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

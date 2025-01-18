"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";

const navItems = [
  { name: "Home", href: "/" },
  { name: "Services", href: "#services" },
  { name: "Projects", href: "#projects" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
];

export const NavMenu = () => {
  return (
    <div className="hidden md:flex items-center px-6 py-2 border border-white/40 rounded-full">
      {navItems.map((item, index) => (
        <React.Fragment key={item.name}>
          <motion.div whileHover={{ y: -2 }} className="relative group">
            <Link
              href={item.href}
              className="text-white/70 hover:text-white transition-colors duration-200"
            >
              {item.name}
            </Link>
            <motion.div
              className="absolute -bottom-1 left-0 right-0 h-px bg-slate-200 scale-x-0 group-hover:scale-x-100 transition-transform duration-200"
              style={{ originX: 0 }}
            />
          </motion.div>
          {index !== navItems.length - 1 && (
            <span className="mx-4 text-white/40">|</span>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

"use client";
import { motion } from "framer-motion";
import { NavMenu } from "./NavMenu";
import { SocialIcons } from "./SocialIcons";

export const Navbar = () => {
  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="h-28 relative z-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
        <div className="flex items-center justify-between w-full">
          {/* Logo/Name */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="px-4 py-1.5 rounded-full border border-white/20 text-white/90"
          >
            <span className="text-lg font-medium">Cromo Studios</span>
          </motion.div>

          {/* Navigation Menu */}
          <NavMenu />

          {/* Social Icons */}
          <SocialIcons />
        </div>
      </div>
    </motion.nav>
  );
};

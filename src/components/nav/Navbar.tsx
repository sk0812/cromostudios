"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { NavMenu } from "./NavMenu";
import { SocialIcons } from "./SocialIcons";
import Link from "next/link";

export const Navbar = () => {
  const { scrollY } = useScroll();

  const height = useTransform(scrollY, [0, 100], ["7rem", "5rem"]);
  const background = useTransform(
    scrollY,
    [0, 100],
    ["rgba(0, 0, 0, 0)", "rgba(0, 0, 0, 0.5)"]
  );
  const backdropBlur = useTransform(
    scrollY,
    [0, 100],
    ["blur(0px)", "blur(12px)"]
  );
  const borderOpacity = useTransform(scrollY, [0, 100], [0, 0.1]);

  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      style={{
        height,
        background,
        backdropFilter: backdropBlur,
        borderBottom: `1px solid rgba(255, 255, 255, ${borderOpacity.get()})`,
      }}
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
        <div className="flex items-center justify-between w-full">
          {/* Logo/Name */}
          <Link href="/">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="px-4 py-1.5 rounded-full border border-white/20 text-white/90"
            >
              <span className="text-lg font-medium">Cromo Studios</span>
            </motion.div>
          </Link>

          {/* Navigation Menu */}
          <NavMenu />

          {/* Social Icons */}
          <SocialIcons />
        </div>
      </div>
    </motion.nav>
  );
};

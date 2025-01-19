"use client";
import AnimatedGridPattern from "../ui/animated-grid-pattern";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ProfileGreeting } from "../hero/ProfileGreeting";
import { ConnectButton } from "../hero/ConnectButton";
import { BottomText } from "../hero/BottomText";

const Hero = () => {
  return (
    <section aria-label="Hero Section" className="relative overflow-hidden">
      <div className="absolute inset-0 w-full h-full" aria-hidden="true">
        <AnimatedGridPattern
          numSquares={40}
          height={70}
          width={70}
          maxOpacity={0.1}
          duration={2}
          className={cn(
            "absolute inset-0 w-full h-full",
            "[mask-image:radial-gradient(ellipse_at_center,white,transparent)]"
          )}
        />
      </div>

      <div className="h-[calc(100vh-5rem)] flex flex-col relative">
        <div className="flex-1 flex flex-col justify-center items-center relative z-10 text-center max-w-7xl mx-auto px-4 sm:px-6">
          <ProfileGreeting />

          <header className="relative text-center w-full">
            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                delay: 0.5,
                duration: 0.7,
                type: "spring",
                stiffness: 100,
              }}
              className="text-2xl sm:text-3xl md:text-7xl font-bold leading-[1.3] sm:leading-[1.2] md:leading-[1] inline-flex flex-col items-center gap-1 sm:gap-2"
            >
              <div className="flex flex-col md:flex-row items-center gap-1 sm:gap-2 md:gap-4">
                <motion.span
                  whileHover={{ scale: 1.05 }}
                  className="text-violet-400 hover:text-violet-300 transition-colors cursor-default"
                >
                  INNOVATIVE
                </motion.span>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="text-white/80 text-sm sm:text-base md:text-lg flex flex-col items-center md:items-start gap-0 mt-1 sm:mt-2 md:-mt-1 cursor-default"
                >
                  <div>
                    <span className="text-white/50">{"//"}</span> Based in
                  </div>
                  <div>London, UK</div>
                </motion.div>
              </div>
              <motion.span
                whileHover={{ scale: 1.05 }}
                className="text-amber-400 hover:text-amber-300 transition-colors mt-1 sm:mt-2 md:-mt-2 cursor-default"
              >
                WEB DESIGN
              </motion.span>
              <div className="flex flex-col md:flex-row items-center gap-3 sm:gap-4 md:gap-2 mt-1 sm:mt-2 md:-mt-2">
                <motion.span
                  whileHover={{ scale: 1.05 }}
                  className="text-slate-100 hover:text-white transition-colors cursor-default"
                >
                  DEVELOPMENT
                </motion.span>
                <ConnectButton />
              </div>
              <div className="flex flex-col md:flex-row items-center gap-1 sm:gap-2 md:gap-4 mt-1 sm:mt-2 md:-mt-2">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="flex flex-col items-center md:items-start text-white/80 hover:text-white/90 transition-colors text-sm sm:text-base md:text-lg gap-0 cursor-default"
                >
                  <div>
                    <span className="text-white/50">{"//"}</span> Custom
                    Solutions
                  </div>
                  <div className="md:ml-4">Digital Excellence</div>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center mt-1 sm:mt-2 md:mt-0 cursor-default"
                >
                  <span className="text-white">&</span>
                  <span className="text-teal-400 hover:text-teal-300 transition-colors">
                    &nbsp;GROWTH.
                  </span>
                </motion.div>
              </div>
            </motion.h1>
          </header>

          <BottomText />
        </div>
      </div>
    </section>
  );
};

export default Hero;

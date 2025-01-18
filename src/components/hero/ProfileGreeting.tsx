"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export const ProfileGreeting = () => {
  return (
    <div className="flex items-center gap-4 mb-4">
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{
          duration: 0.5,
          type: "spring",
          stiffness: 200,
          delay: 0.1,
        }}
        className="relative w-24 h-24"
      >
        <Image
          src="/logo-white.png"
          alt="Cromo Studios Logo"
          width={120}
          height={120}
          className="rounded-full bg-black/20 p-2"
        />
      </motion.div>
      <motion.div
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{
          duration: 0.5,
          type: "spring",
          stiffness: 200,
          delay: 0.3,
        }}
        className="bg-zinc-800 px-8 py-4 rounded-full"
      >
        <p className="text-white text-xl">Welcome to Cromo Studios</p>
      </motion.div>
    </div>
  );
};

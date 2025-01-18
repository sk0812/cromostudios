"use client";
import { motion } from "framer-motion";

export const BottomText = () => {
  return (
    <motion.p
      initial={{ y: 30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        delay: 0.8,
        duration: 0.5,
        type: "spring",
        stiffness: 150,
      }}
      className="mt-12 max-w-5xl text-2xl"
    >
      We are architects of the digital world, where every pixel and block comes
      together to shape an immersive experience which
      <span className="text-amber-400"> captivates</span>,
      <span className="text-violet-400"> connects</span>, and
      <span className="text-teal-400"> inspires</span>.
    </motion.p>
  );
};

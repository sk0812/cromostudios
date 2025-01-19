"use client";

import { Navbar } from "@/components/nav/Navbar";
import Footer from "@/components/sections/Footer";
import { motion } from "framer-motion";
import { ArrowLeft, Code2 } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="relative bg-black pt-28">
      <Navbar />
      <div className="min-h-[60vh] relative">
        <div className="max-w-2xl mx-auto px-4 py-16 sm:px-6 sm:py-24 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            {/* Error Icon */}
            <div className="flex justify-center mb-8">
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                <Code2 className="w-12 h-12 text-violet-400" />
              </div>
            </div>

            {/* Error Message */}
            <h1 className="text-8xl font-bold text-white mb-4">404</h1>
            <h2 className="text-2xl font-semibold text-white mb-4">
              Page Not Found
            </h2>
            <p className="text-white/70 mb-8">
              The page you&apos;re looking for doesn&apos;t exist or has been
              moved.
            </p>

            {/* Back to Home Button */}
            <Link
              href="/"
              className="group inline-flex items-center gap-2 px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 rounded-full transition-all duration-300"
            >
              <ArrowLeft className="w-4 h-4 text-white transition-transform group-hover:-translate-x-1" />
              <span className="text-white">Back to Home</span>
            </Link>
          </motion.div>
        </div>

        {/* Background Pattern */}
        <div className="absolute inset-0 w-full h-full" aria-hidden="true">
          <div className="absolute inset-0 w-full h-full bg-gradient-to-b from-black via-black to-transparent" />
          <div className="absolute inset-0 w-full h-full opacity-30 [mask-image:radial-gradient(ellipse_at_center,white,transparent)]">
            <div className="absolute inset-0 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 p-4">
              {Array.from({ length: 16 }).map((_, i) => (
                <div
                  key={i}
                  className="w-full h-full bg-white/5 rounded-xl border border-white/10"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}

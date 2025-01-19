"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Sparkles,
  Shield,
  Zap,
  Award,
  Headphones,
  Search,
  LucideIcon,
} from "lucide-react";
import Image from "next/image";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function Offer() {
  return (
    <section className="w-full py-20 relative bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
          {/* Left side - Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative h-full"
          >
            <div className="rounded-[2rem] overflow-hidden relative h-full">
              <Image
                src="/offer-img.webp"
                alt="Cromo Studios Team"
                fill
                className="object-cover"
                priority
              />
            </div>
          </motion.div>

          {/* Right side - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            {/* Header Section */}
            <div className="relative">
              <div className="relative z-10">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="mb-8"
                >
                  <h2 className="text-5xl font-bold text-white leading-tight mb-6 tracking-tight">
                    Transform Your Vision Into{" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-amber-400">
                      Digital Excellence
                    </span>
                  </h2>
                  <div className=" text-gray-300">
                    <div>
                      <p className="text-lg">
                        Professional web development tailored for your business.
                        From concept to completion, we deliver premium solutions
                        with flexible monthly plans.{" "}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Features Grid with Cards */}
            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 gap-4"
            >
              <FeatureCard
                icon={Shield}
                title="Modern Architecture"
                description="Built with Next.js and React, offering server-side rendering, dynamic features, and enterprise-grade security."
                iconColor="text-emerald-400"
              />
              <FeatureCard
                icon={Sparkles}
                title="Pixel-Perfect Design"
                description="Stunning, bespoke designs crafted by our expert team. Every pixel placed with purpose, every element thoughtfully designed."
                iconColor="text-violet-400"
              />
              <FeatureCard
                icon={Zap}
                title="Lightning Fast"
                description="Blazing-fast load times with 100/100 PageSpeed scores. Speed that keeps your visitors engaged and Google happy."
                iconColor="text-amber-400"
              />
              <FeatureCard
                icon={Award}
                title="Risk-Free Guarantee"
                description="Love your website or get your money back. We're confident in delivering a high-performance site that exceeds expectations."
                iconColor="text-rose-400"
              />
              <FeatureCard
                icon={Headphones}
                title="24/7 VIP Support"
                description="Direct line to our team. No bots, no tickets, no waiting. Get help when you need it, day or night."
                iconColor="text-blue-400"
              />
              <FeatureCard
                icon={Search}
                title="SEO Mastery"
                description="Dominate search rankings with our proven SEO strategies. We don't just build websites, we build traffic machines."
                iconColor="text-teal-400"
              />
            </motion.div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="pt-2"
            >
              <div className="flex flex-col items-start gap-4">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="relative group"
                >
                  <div className="absolute -inset-1 bg-gradient-to-r from-violet-400 to-amber-400 rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-200" />
                  <div className="relative flex items-center gap-2 px-8 py-4 bg-black border border-white/10 rounded-lg transition-all duration-200">
                    <span className="font-bold text-md text-white tracking-wide">
                      SCHEDULE A CALL
                    </span>
                    <div className="w-px h-6 bg-white/10" />
                    <ArrowRight className="w-5 h-5 text-white transition-transform duration-200 group-hover:translate-x-1" />
                  </div>
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function FeatureCard({
  icon: Icon,
  title,
  description,
  iconColor,
}: {
  icon: LucideIcon;
  title: string;
  description: string;
  iconColor: string;
}) {
  return (
    <motion.div
      variants={item}
      className="card bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300"
    >
      <div className="card-body p-5">
        <div className="flex gap-4 items-start">
          <div className="w-10 h-10 rounded-xl bg-black border border-white/10 flex items-center justify-center flex-shrink-0">
            <Icon className={`w-5 h-5 ${iconColor}`} />
          </div>
          <div>
            <h3 className="font-bold text-white text-sm mb-2">{title}</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              {description}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

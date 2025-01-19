"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import Image from "next/image";

const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "A modern e-commerce platform built with Wordpress and Woocommerce. Features include real-time inventory, dynamic product filtering, and seamless checkout.",
    image: "/portfolio/cricketarmoury.webp",
    tags: ["Wordpress", "Woocommerce", "Brizy", "Stripe"],
    liveUrl: "https://cricketarmoury.com",
  },
  {
    title: "Tutoring Website",
    description:
      "A comprehensive tutoring website built with Next.js and Tailwind CSS. Features include user authentication, email service with dashboards for admins and prospective students.",
    image: "/portfolio/vidyalearning.webp",
    tags: ["Next.js", "Tailwind CSS", "Supabase", "Framer Motion"],
    liveUrl: "https://vidya-learning-red.vercel.app/",
  },
  {
    title: "Childcare Website & Management System",
    description:
      "A childcare website and management system built with Next.js and Tailwind CSS. Features include user authentication, database management, and a dashboard for managing children and staff.",
    image: "/portfolio/kidshive.webp",
    tags: ["Next.js", "DaisyUI", "MongoDB", "Resend"],
    liveUrl: "https://kidshive.co.uk/",
  },
  {
    title: "Citizenship & Residency Website",
    description:
      "A professional citizenship and residency website built with Next.js and Tailwind CSS. Features include responsive design, animations, and a contact form.",
    image: "/portfolio/windsorcm.webp",
    tags: ["Next.js", "DaisyUI", "Framer Motion", "Resend"],
    liveUrl: "/",
  },
];

export default function Portfolio() {
  return (
    <section className="w-full py-32 relative bg-black" id="portfolio">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl"
        >
          <div className="flex items-center gap-2 mb-4">
            <div className="h-px w-8 bg-white/20"></div>
            <span className="text-white/50 uppercase tracking-wider text-sm font-medium">
              Portfolio
            </span>
          </div>
          <h2 className="text-5xl font-bold text-white mb-6 tracking-tight">
            Featured Projects
          </h2>
          <p className="text-white/60 text-lg">
            Explore our latest work and see how we transform ideas into
            exceptional digital experiences.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-20">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              {/* Project Image */}
              <div className="w-full relative aspect-[4/3] rounded-2xl overflow-hidden mb-8 bg-white/5">
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent z-10" />
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 640px"
                />
              </div>

              {/* Project Info */}
              <div className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-white/5 rounded-full text-xs text-white/70 border border-white/5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex justify-between items-start gap-4">
                  <div>
                    <h3 className="text-2xl font-semibold text-white mb-3">
                      {project.title}
                    </h3>
                    <p className="text-white/60 leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
                  >
                    <ExternalLink className="w-5 h-5 text-white" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

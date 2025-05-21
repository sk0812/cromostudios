"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import Image from "next/image";

const projects = [
  {
    title: "Citizenship & Residency Website",
    description:
      "A professional citizenship and residency website built with Next.js and Tailwind CSS. Features include responsive design, animations, and a contact form.",
    image: "/portfolio/windsorcm.png",
    altText: "Windsor - Citizenship and Residency Services Website",
    tags: ["Next.js", "DaisyUI", "Framer Motion", "Resend"],
    liveUrl: "https://windsorcm.com",
  },
  {
    title: "Venture Capital Website",
    description:
      "A modern venture capital website built with Wordpress and Brizy. Features include responsive design, animations, and a contact form.",
    image: "/portfolio/ryse.png",
    altText:
      "Ryse Capital - Venture Capital Website",
    tags: ["Wordpress", "Brizy", "PHP"],
    liveUrl: "https://ryseam.com",
  },
  {
    title: "Floral Architect Website",
    description: "a floral architect website built with Next.js and Tailwind CSS. Features include responsive design, animations, and a contact form.",
    image: "/portfolio/thedecorcollective.webp",
    altText: "The Decor Collective - Floral Design Website",
    tags: ["Next.js", "Tailwind CSS", "Framer Motion", "Resend"],
    liveUrl: "https://thedecorcollective.co.uk/",
  },
  {
    title: "Tutoring Website",
    description:
      "A comprehensive tutoring website built with Next.js and Tailwind CSS. Features include user authentication, email service with dashboards for admins and prospective students.",
    image: "/portfolio/vidyalearning.png",
    altText: "Vidya Learning Platform - Online Tutoring Website",
    tags: ["Next.js", "Tailwind CSS", "Supabase", "Framer Motion"],
    liveUrl: "https://www.vidyalearning.co.uk/",
  },
  {
    title: "Mentorship App Showcase ",
    description:
      "A website built to showcase the features and gain traction for a mentorship and career development app.",
    image: "/portfolio/globalpurposeenterprise.png",
    altText: "Global Purpose Enterprise - Mentorship & Career Development",
    tags: ["Next.js", "Tailwind CSS", "Resend", "Framer Motion"],
    liveUrl: "https://www.globalpurposeenterprise.com",
  },

  {
    title: "Childcare Website & Management System",
    description:
      "A childcare website and management system built with Next.js and Tailwind CSS. Features include user authentication, database management, and a dashboard for managing children and staff.",
    image: "/portfolio/kidshive.png",
    altText: "Kids Hive - Childcare Management System and Website",
    tags: ["Next.js", "DaisyUI", "MongoDB", "Resend"],
    liveUrl: "https://kidshive.co.uk/",
  },

];

export default function Portfolio() {
  return (
    <section
      className="w-full py-20 relative bg-black overflow-hidden"
      id="portfolio"
      aria-label="Portfolio Section"
    >
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
            <span className="text-white/50 uppercase tracking-wider text-xs sm:text-sm font-medium">
              Portfolio
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6 tracking-tight">
            Featured Projects
          </h2>
          <p className="text-white/60 text-base sm:text-lg">
            Explore our latest work and see how we transform ideas into
            exceptional digital experiences.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 mt-20">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group w-full"
            >
              {/* Project Image */}
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block relative aspect-[4/3] rounded-2xl overflow-hidden mb-8 bg-white/5 cursor-pointer group-hover:opacity-90 transition-opacity"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent z-10" />
                <Image
                  src={project.image}
                  alt={project.altText}
                  fill
                  className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 640px"
                  loading="lazy"
                  quality={90}
                />
              </a>

              {/* Project Info */}
              <div className="space-y-4">
                <div className="flex flex-wrap gap-2 max-w-full">
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
                    <h3 className="text-xl sm:text-2xl font-semibold text-white mb-2 sm:mb-3">
                      {project.title}
                    </h3>
                    <p className="text-white/60 text-sm sm:text-base leading-relaxed">
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

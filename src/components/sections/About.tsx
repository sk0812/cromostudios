"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Code2, Rocket, Search, Zap } from "lucide-react";
import { useState } from "react";

const processSteps = [
  {
    title: "Discovery & Strategy",
    description:
      "We begin with in-depth consultation to understand your vision and goals, then craft a comprehensive strategy aligned with your business objectives.",
    icon: Search,
    color: "text-violet-500",
    bgColor: "bg-violet-950/40",
    borderColor: "border-violet-500/20",
    details: [
      "In-depth business analysis & market research",
      "User persona development & journey mapping",
      "Competitive analysis & positioning strategy",
      "Project scope & timeline planning",
      "Technology stack recommendations",
      "Budget optimization & resource planning",
    ],
  },
  {
    title: "Design & Development",
    description:
      "Our team brings your vision to life with modern design and robust development, ensuring a perfect balance of aesthetics and functionality.",
    icon: Code2,
    color: "text-emerald-500",
    bgColor: "bg-emerald-950/40",
    borderColor: "border-emerald-500/20",
    details: [
      "Custom UI/UX design & prototyping",
      "Responsive & mobile-first development",
      "Performance-driven architecture",
      "API integration & backend setup",
      "Content management system setup",
      "Database design & optimization",
    ],
  },
  {
    title: "Testing & Optimization",
    description:
      "We rigorously test and optimize your website for performance, security, and SEO, ensuring a flawless user experience across all devices.",
    icon: Zap,
    color: "text-amber-500",
    bgColor: "bg-amber-950/40",
    borderColor: "border-amber-500/20",
    details: [
      "Cross-browser & device testing",
      "Performance & speed optimization",
      "SEO & content optimization",
      "Security testing & hardening",
      "Load testing & scalability checks",
      "User acceptance testing",
    ],
  },
  {
    title: "Launch & Support",
    description:
      "After a smooth launch, we provide ongoing support and maintenance to keep your website performing at its best and evolving with your business.",
    icon: Rocket,
    color: "text-rose-500",
    bgColor: "bg-rose-950/40",
    borderColor: "border-rose-500/20",
    details: [
      "Deployment strategy & execution",
      "Performance monitoring & analytics",
      "Regular updates & maintenance",
      "24/7 technical support access",
      "Content updates & management",
      "Monthly performance reports",
    ],
  },
];

export default function About() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section className="w-full py-32 relative bg-black" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl"
        >
          <div className="flex items-center gap-2 mb-4">
            <div className="h-px w-8 bg-white/20"></div>
            <span className="text-white/50 uppercase tracking-wider text-sm font-medium">
              About Us
            </span>
          </div>
          <h2 className="text-5xl font-bold text-white mb-6 tracking-tight">
            Crafting Digital Excellence
          </h2>
          <div className="space-y-6">
            <p className="text-white/70 text-lg leading-relaxed">
              We are a team of passionate developers, designers, and digital
              strategists dedicated to transforming businesses through
              innovative web solutions. With years of experience and a
              commitment to excellence, we've helped numerous businesses
              establish a powerful online presence.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 py-6 border-y border-white/5">
              <div>
                <h4 className="text-white font-semibold mb-1">Our Mission</h4>
                <p className="text-white/60 text-sm leading-relaxed">
                  To deliver digital experiences that drive growth and empower
                  businesses in the digital age.
                </p>
              </div>
              <div>
                <h4 className="text-white font-semibold mb-1">Our Expertise</h4>
                <p className="text-white/60 text-sm leading-relaxed">
                  Combining cutting-edge technology with creative design to
                  create websites that stand out and perform.
                </p>
              </div>
              <div>
                <h4 className="text-white font-semibold mb-1">Our Approach</h4>
                <p className="text-white/60 text-sm leading-relaxed">
                  A systematic, client-focused process that ensures
                  transparency, quality, and exceptional results.
                </p>
              </div>
            </div>
            <p className="text-white/70 text-lg leading-relaxed">
              Our proven development process ensures your project is delivered
              with excellence, on time, and exceeds expectations at every step.
            </p>
          </div>
        </motion.div>

        {/* Process Flow */}
        <div className="mt-24">
          {/* Interactive Steps */}
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 min-h-[400px]">
            {/* Steps Navigation */}
            <div className="w-full lg:w-1/3">
              <div className="h-full p-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm flex flex-col justify-between">
                <div>
                  <h4 className="text-white font-semibold mb-4 px-4">
                    Development Process
                  </h4>
                  <ul className="steps steps-vertical w-full">
                    {processSteps.map((step, index) => (
                      <li
                        key={step.title}
                        onClick={() => setActiveStep(index)}
                        className={`step cursor-pointer transition-all duration-300 
                          ${index <= activeStep ? step.color : "text-white/20"}
                          ${index === activeStep ? "!text-white" : ""}
                          before:!bg-white/10 after:!bg-white/10
                          hover:text-white
                          ${
                            index === activeStep
                              ? "before:!bg-gradient-to-r before:!from-transparent before:!via-white/20 before:!to-transparent"
                              : ""
                          }`}
                      >
                        <div
                          className={`text-left ml-4 p-2 rounded-lg transition-colors ${
                            index === activeStep ? "bg-white/5" : ""
                          }`}
                        >
                          <span
                            className={`text-sm font-medium ${
                              index === activeStep
                                ? "text-white/80"
                                : "text-white/40"
                            }`}
                          >
                            Phase {index + 1}
                          </span>
                          <h4
                            className={`text-lg font-semibold mt-0.5 ${
                              index === activeStep
                                ? "text-white"
                                : "text-white/60"
                            }`}
                          >
                            {step.title}
                          </h4>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-4 px-4 pt-3 border-t border-white/5">
                  <p className="text-white/40 text-sm">
                    Click on any phase to learn more about our process
                  </p>
                </div>
              </div>
            </div>

            {/* Step Details */}
            <div className="w-full lg:w-2/3">
              <motion.div
                key={activeStep}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
                className="h-full"
              >
                <div
                  className={`h-full p-6 rounded-2xl border ${processSteps[activeStep].borderColor} ${processSteps[activeStep].bgColor} backdrop-blur-sm flex flex-col justify-between`}
                >
                  <div>
                    <div className="flex items-start gap-6 mb-8">
                      <div
                        className={`p-4 rounded-xl bg-black/50 border border-white/10 ${processSteps[activeStep].color}`}
                      >
                        {React.createElement(processSteps[activeStep].icon, {
                          className: "w-7 h-7",
                        })}
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-3">
                          {processSteps[activeStep].title}
                        </h3>
                        <p className="text-white/70 text-base leading-relaxed">
                          {processSteps[activeStep].description}
                        </p>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                      {processSteps[activeStep].details.map((detail, index) => (
                        <motion.div
                          key={detail}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3, delay: index * 0.1 }}
                          className="flex items-center gap-3 p-3 rounded-xl bg-black/50 border border-white/10 hover:bg-black/70 transition-colors"
                        >
                          <div
                            className={`w-1.5 h-1.5 rounded-full ${processSteps[activeStep].color}`}
                          />
                          <span className="text-white/80 text-sm">
                            {detail}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center mt-24"
        >
          <a
            href="#contact"
            className="group inline-flex items-center gap-3 px-8 py-4 bg-white/5 rounded-full border border-white/10 hover:bg-white/10 transition-colors"
          >
            <span className="text-white font-medium">Start Your Project</span>
            <ArrowRight className="w-4 h-4 text-white transition-transform group-hover:translate-x-1" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

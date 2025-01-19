"use client";

import { motion } from "framer-motion";
import { Mail, Phone, Send } from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    title: "Email Us",
    details: "info@cromostudios.com",
    color: "text-violet-500",
    bgColor: "bg-violet-950/40",
    borderColor: "border-violet-500/20",
  },
  {
    icon: Phone,
    title: "Call Us",
    details: "+44 7724 280 130",
    color: "text-emerald-500",
    bgColor: "bg-emerald-950/40",
    borderColor: "border-emerald-500/20",
  },
];

export default function Contact() {
  return (
    <section className="w-full py-20 relative bg-black" id="contact">
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
              Contact Us
            </span>
          </div>
          <h2 className="text-5xl font-bold text-white mb-6 tracking-tight">
            Let&apos;s Build Something Amazing
          </h2>
          <p className="text-white/70 text-lg">
            Ready to transform your digital presence? Get in touch with us and
            let&apos;s discuss how we can help your business grow.
          </p>
        </motion.div>

        {/* Contact Grid */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="h-full"
          >
            <div className="h-full p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm flex flex-col">
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 rounded-xl bg-black/50 border border-white/10 text-white/70">
                  <Mail className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold text-white">
                  Send us a Message
                </h3>
              </div>
              <form className="flex-1 flex flex-col">
                <div className="flex-1 space-y-8">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <div className="form-control w-full">
                      <input
                        type="text"
                        placeholder="Name"
                        className="w-full bg-transparent border-b border-white/10 py-3 text-white/90 placeholder:text-white/30 focus:border-white/30 focus:outline-none transition-colors"
                      />
                    </div>
                    <div className="form-control w-full">
                      <input
                        type="email"
                        placeholder="Email"
                        className="w-full bg-transparent border-b border-white/10 py-3 text-white/90 placeholder:text-white/30 focus:border-white/30 focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div className="form-control w-full">
                    <input
                      type="text"
                      placeholder="Subject"
                      className="w-full bg-transparent border-b border-white/10 py-3 text-white/90 placeholder:text-white/30 focus:border-white/30 focus:outline-none transition-colors"
                    />
                  </div>

                  <div className="form-control w-full">
                    <textarea
                      placeholder="Tell us about your project..."
                      rows={4}
                      className="w-full bg-transparent border-b border-white/10 py-3 text-white/90 placeholder:text-white/30 focus:border-white/30 focus:outline-none transition-colors resize-none"
                    />
                  </div>
                </div>

                <div className="pt-8">
                  <button className="group flex items-center gap-2 px-6 py-3 bg-white/5 rounded-full border border-white/10 hover:bg-white/10 hover:border-white/30 transition-colors">
                    <span className="text-white font-medium">Send Message</span>
                    <Send className="w-4 h-4 text-white transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
              </form>
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="h-full flex flex-col gap-8"
          >
            {/* Contact Cards */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`p-6 rounded-2xl border ${info.borderColor} ${info.bgColor} backdrop-blur-sm`}
                >
                  <div className="flex items-center gap-6">
                    <div
                      className={`p-4 rounded-xl bg-black/50 border border-white/10 ${info.color}`}
                    >
                      <info.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-1">
                        {info.title}
                      </h3>
                      <p className="text-white/70">{info.details}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Additional Info */}
            <div className="flex-1 p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm">
              <h3 className="text-xl font-semibold text-white mb-6">
                Why Choose Us?
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-violet-500 mt-2" />
                  <p className="text-white/70 leading-relaxed">
                    Expert team with years of experience in web development and
                    design
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-emerald-500 mt-2" />
                  <p className="text-white/70 leading-relaxed">
                    Dedicated support and maintenance to ensure your website
                    stays up-to-date
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-amber-500 mt-2" />
                  <p className="text-white/70 leading-relaxed">
                    Custom solutions tailored to your specific business needs
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

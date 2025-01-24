"use client";

import { motion } from "framer-motion";
import { Mail, Phone, Send } from "lucide-react";
import { useState } from "react";

const contactInfo = [
  {
    icon: Mail,
    title: "Email Us",
    details: "info@cromostudios.com",
    color: "text-violet-500",
    bgColor: "bg-violet-950/40",
    borderColor: "border-violet-500/20",
    href: "mailto:info@cromostudios.com",
  },
  {
    icon: Phone,
    title: "Call Us",
    details: "+44 7724 280 130",
    color: "text-emerald-500",
    bgColor: "bg-emerald-950/40",
    borderColor: "border-emerald-500/20",
    href: "tel:+447724280130",
  },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to send message");
      }

      setStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      setStatus("error");
      setErrorMessage(
        error instanceof Error ? error.message : "Failed to send message"
      );
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <section
      className="w-full py-20 relative bg-black overflow-hidden"
      id="contact"
    >
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
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="w-full h-full"
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

              <form onSubmit={handleSubmit} className="flex-1 flex flex-col">
                <div className="flex-1 space-y-8">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <div className="form-control w-full">
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Name"
                        required
                        className="w-full bg-transparent border-b border-white/10 py-3 text-white/90 placeholder:text-white/30 focus:border-white/30 focus:outline-none transition-colors"
                      />
                    </div>
                    <div className="form-control w-full">
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Email"
                        required
                        className="w-full bg-transparent border-b border-white/10 py-3 text-white/90 placeholder:text-white/30 focus:border-white/30 focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div className="form-control w-full">
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Subject"
                      required
                      className="w-full bg-transparent border-b border-white/10 py-3 text-white/90 placeholder:text-white/30 focus:border-white/30 focus:outline-none transition-colors"
                    />
                  </div>

                  <div className="form-control w-full">
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your project..."
                      required
                      rows={4}
                      className="w-full bg-transparent border-b border-white/10 py-3 text-white/90 placeholder:text-white/30 focus:border-white/30 focus:outline-none transition-colors resize-none"
                    />
                  </div>
                </div>

                {status === "error" && (
                  <div className="mt-4 p-4 rounded-lg bg-rose-500/10 border border-rose-500/20 text-rose-500">
                    {errorMessage}
                  </div>
                )}

                {status === "success" && (
                  <div className="mt-4 p-4 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-500">
                    Message sent successfully! We&apos;ll get back to you soon.
                  </div>
                )}

                <div className="pt-8">
                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="group flex items-center gap-2 px-6 py-3 bg-white/5 rounded-full border border-white/10 hover:bg-white/10 hover:border-white/30 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {status === "loading" ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white/90 rounded-full animate-spin" />
                        <span className="text-white font-medium">
                          Sending...
                        </span>
                      </>
                    ) : (
                      <>
                        <span className="text-white font-medium">
                          Send Message
                        </span>
                        <Send className="w-4 h-4 text-white transition-transform group-hover:translate-x-1" />
                      </>
                    )}
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
                  className={`p-6 rounded-2xl border ${info.borderColor} ${info.bgColor} backdrop-blur-sm group hover:border-white/20 transition-all duration-300`}
                >
                  <div className="flex items-center gap-6">
                    <div
                      className={`p-4 rounded-xl bg-black/50 border border-white/10 ${info.color} group-hover:scale-105 transition-transform duration-300`}
                    >
                      <info.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-1">
                        {info.title}
                      </h3>
                      <motion.a
                        href={info.href}
                        className="text-white/70 hover:text-white transition-colors inline-block"
                        whileHover={{ scale: 1.02 }}
                      >
                        {info.details}
                      </motion.a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Additional Info */}
            <div className="flex-1 p-4 sm:p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm">
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

"use client";
import { motion } from "framer-motion";
import {
  Palette,
  ShoppingCart,
  Code2,
  Search,
  Layout,
  AppWindow,
  Settings2,
  BarChart3,
} from "lucide-react";

const services = [
  {
    name: "Web Design",
    Icon: Palette,
    description: "Custom Website Design Solutions",
    bgColor: "bg-violet-500/10",
    iconColor: "text-violet-400",
  },
  {
    name: "E-Commerce",
    Icon: ShoppingCart,
    description: "Online Store Development",
    bgColor: "bg-blue-500/10",
    iconColor: "text-blue-400",
  },
  {
    name: "WordPress",
    Icon: Code2,
    description: "CMS & Website Management",
    bgColor: "bg-cyan-500/10",
    iconColor: "text-cyan-400",
  },
  {
    name: "SEO",
    Icon: Search,
    description: "Search Engine Optimization",
    bgColor: "bg-emerald-500/10",
    iconColor: "text-emerald-400",
  },
  {
    name: "UI/UX Design",
    Icon: Layout,
    description: "User Experience Solutions",
    bgColor: "bg-rose-500/10",
    iconColor: "text-rose-400",
  },
  {
    name: "Web Apps",
    Icon: AppWindow,
    description: "Custom Application Development",
    bgColor: "bg-orange-500/10",
    iconColor: "text-orange-400",
  },
  {
    name: "Maintenance",
    Icon: Settings2,
    description: "Website Support & Updates",
    bgColor: "bg-amber-500/10",
    iconColor: "text-amber-400",
  },
  {
    name: "Analytics",
    Icon: BarChart3,
    description: "Data & Performance Tracking",
    bgColor: "bg-indigo-500/10",
    iconColor: "text-indigo-400",
  },
];

const Services = () => {
  return (
    <section className="w-full py-20 relative bg-black" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col gap-2 mb-16"
        >
          <div className="flex items-center gap-2 mb-4">
            <div className="h-px w-8 bg-white/20"></div>
            <span className="text-white/50 uppercase tracking-wider text-sm font-medium">
              Our Services
            </span>
          </div>
          <h2 className="text-5xl font-bold text-white mb-6 tracking-tight">
            Expert Web Solutions
          </h2>
          <p className="text-white/50 text-lg">
            We offer a comprehensive range of digital solutions to help your
            business grow online. <br />
            From design to development, we&apos;ve got you covered.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex items-center gap-4 p-4 rounded-lg border border-white/10 bg-white/5 backdrop-blur-sm hover:border-white/20 transition-all duration-300"
            >
              <div
                className={`p-3 rounded-md ${service.bgColor} transition-all duration-300`}
              >
                <service.Icon className={`w-8 h-8 ${service.iconColor}`} />
              </div>
              <div className="flex flex-col">
                <span className="text-white font-medium text-sm">
                  {service.name}
                </span>
                <span className="text-white/50 text-xs">
                  {service.description}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

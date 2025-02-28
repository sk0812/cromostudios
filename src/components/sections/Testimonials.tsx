"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    name: "Shaurya Sharma",
    role: "Founder, Cricket Armoury",
    content:
      "Cromo Studios created an amazing product, which surpassed my expectations through the professional and flowing designs he incorporated. They ensured I was involved in every stage of the process, communicating with me on all the details. They provided the end product much quicker then I had anticipated, a testament to the experience that they has in the field. The developed website proved to be a game-changer, driving increased sales and engagement. It truly speaks to the efficacy of their work and the impact it had on my business's success.",
  },
  {
    name: "Kiran Cardenas",
    role: "Owner, FoziShop",
    content:
      "Exceptional customer support and unbeatable prices! Cromo Studios provided us with a beautifully designed website better than expected time. The SEO optimisation has brought in more traffic than ever. Couldn't be happier with the results!",
  },
  {
    name: "James Thornton",
    role: "Co-Founder, Nexora Designs",
    content:
      "Cromo Studios did a brilliant job developing our website in no time. They worked quickly without compromising on quality and kept my team and me updated throughout the process. Their communication was clear, and they made sure we always knew what was happening. On top of that, they provided detailed documentation, making it easy for us to understand and manage everything moving forward. The end product was exactly what we wanted—well-designed, functional, and professional.",
  },
  {
    name: "Kayaan Chander",
    role: "Private Tennis Coach, AKC Coaching",
    content:
      "Cromo Studios provided exceptional expertise, seamless communication, and a modern, responsive design for our new website. Highly recommended!",
  },
  {
    name: "Rashaan Palmer",
    role: "Owner, DjRash",
    content:
      "Exceptional website design, great features and ongoing support/help/management.",
  },
  {
    name: "David Martinez",
    role: "CEO, Vino Nero",
    content:
      "Cromo Studios were absolutely fantastic! From start to finish, they went above and beyond to make sure everything was perfect. They kept me updated at every stage, ensuring I always knew what was happening. Their attention to detail and commitment to quality really stood out. The final product exceeded my expectations, and I couldn’t be happier with the results. Their professionalism, creativity, and dedication made the whole process smooth.",
  },
];

const TestimonialCard = ({
  testimonial,
}: {
  testimonial: (typeof testimonials)[0];
}) => (
  <div className="group h-[280px] hover:h-auto transition-[height] duration-500 ease-in-out border-2 border-white/10 hover:border-white/20 rounded-xl p-6 bg-black flex flex-col">
    <div className="w-5 h-5 flex-shrink-0 mb-4">
      <Quote className="w-full h-full text-white/20" />
    </div>
    <div className="relative flex-1 min-h-0">
      <div className="relative h-full">
        <p className="text-white/70 text-sm leading-relaxed line-clamp-6 group-hover:line-clamp-none">
          {testimonial.content}
        </p>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black to-transparent group-hover:opacity-0 transition-opacity duration-500" />
      </div>
    </div>
    <div className="flex items-center gap-3 mt-6">
      <div className="w-[2px] h-4 bg-white/10" />
      <div>
        <h4 className="text-white/90 font-medium text-sm">
          {testimonial.name}
        </h4>
        <p className="text-white/40 text-xs">{testimonial.role}</p>
      </div>
    </div>
  </div>
);

const Testimonials = () => {
  const [[page, direction], setPage] = useState([0, 0]);
  const itemsPerPage = 3;
  const totalPages = Math.ceil(testimonials.length / itemsPerPage);

  const paginate = (newDirection: number) => {
    const newPage = page + newDirection;
    if (newPage >= 0 && newPage < totalPages) {
      setPage([newPage, newDirection]);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") {
      paginate(-1);
    } else if (e.key === "ArrowRight") {
      paginate(1);
    }
  };

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  const getPageItems = (pageIndex: number) => {
    const startIndex = pageIndex * itemsPerPage;
    return testimonials.slice(startIndex, startIndex + itemsPerPage);
  };

  return (
    <section
      className="w-full py-20 relative bg-black overflow-hidden"
      id="testimonials"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mb-16"
        >
          <div className="flex items-center gap-2 mb-4">
            <div className="h-px w-8 bg-white/20"></div>
            <span className="text-white/50 uppercase tracking-wider text-sm font-medium">
              Testimonials
            </span>
          </div>
          <h2 className="text-5xl font-bold text-white mb-6 tracking-tight">
            Client Success Stories
          </h2>
          <p className="text-white/70 text-lg">
            Don&apos;t just take our word for it. Here&apos;s what our clients
            have to say about working with us.
          </p>
        </motion.div>

        {/* Carousel */}
        <div
          className="relative mx-auto"
          onKeyDown={handleKeyDown}
          tabIndex={0}
          role="region"
          aria-label="Testimonials carousel"
        >
          <div className="relative min-h-[280px] overflow-visible">
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={page}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 },
                }}
                className="absolute w-full grid grid-cols-1 md:grid-cols-3 gap-6"
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={1}
                onDragEnd={(_, { offset, velocity }) => {
                  const swipe = Math.abs(offset.x) * velocity.x;
                  if (swipe < -10000 && page < totalPages - 1) {
                    paginate(1);
                  } else if (swipe > 10000 && page > 0) {
                    paginate(-1);
                  }
                }}
              >
                {getPageItems(page).map((testimonial) => (
                  <TestimonialCard
                    key={testimonial.name}
                    testimonial={testimonial}
                  />
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation */}
          <div className="flex justify-center items-center gap-8 mt-12">
            <button
              onClick={() => paginate(-1)}
              disabled={page === 0}
              className="p-2 rounded-full border-2 border-white/10 hover:border-white/20 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
              aria-label="Previous testimonials"
            >
              <ChevronLeft className="w-5 h-5 text-white/70" />
            </button>

            <div className="flex gap-2">
              {[...Array(totalPages)].map((_, index) => (
                <button
                  key={index}
                  onClick={() => setPage([index, index > page ? 1 : -1])}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === page
                      ? "bg-white/70 w-6"
                      : "bg-white/20 hover:bg-white/40"
                  }`}
                  aria-label={`Go to testimonial page ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={() => paginate(1)}
              disabled={page === totalPages - 1}
              className="p-2 rounded-full border-2 border-white/10 hover:border-white/20 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
              aria-label="Next testimonials"
            >
              <ChevronRight className="w-5 h-5 text-white/70" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

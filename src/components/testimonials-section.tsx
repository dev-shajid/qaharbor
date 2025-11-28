"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Quote } from "lucide-react"

const testimonials = [
  {
    quote:
      "They have found quick a few interesting things within 2 days. Surely we are eager to work with this team on our next revamp.",
    company: "Styline Collection",
    role: "Client",
    logo: "SC",
  },
  {
    quote: "They have worked really hard for a short time and deliver the best. Thanks to Them.",
    company: "Tukana ISPERP",
    role: "Client",
    logo: "TI",
  },
  {
    quote:
      "Best working place in my life. Everyone is so helpful & friendly. Every day I'm discovering myself differently & learning a lot of things.",
    company: "Ontor Hazary",
    role: "Employee",
    logo: "OH",
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 40, rotateX: -10 },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
  },
}

export function TestimonialsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="testimonials" ref={ref} className="py-24 lg:py-32 relative bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="flex justify-center mb-4"
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ type: "spring", delay: 0.2 }}
          >
            <motion.div animate={{ y: [0, -5, 0] }} transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}>
              <Quote className="w-8 h-8 text-primary" />
            </motion.div>
          </motion.div>
          <motion.span
            className="text-primary font-medium text-sm uppercase tracking-wider"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.3 }}
          >
            Testimonials
          </motion.span>
          <motion.h2
            className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground text-balance"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4 }}
          >
            Shared Successful Experiences
          </motion.h2>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              transition={{ duration: 0.6 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="p-6 lg:p-8 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300 cursor-pointer relative overflow-hidden group"
            >
              <motion.div
                className="absolute top-4 right-4 text-primary/10 group-hover:text-primary/20 transition-colors"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 + index * 0.1 }}
              >
                <Quote className="w-12 h-12" />
              </motion.div>

              {/* Quote */}
              <div className="mb-6 relative z-10">
                <p className="text-foreground leading-relaxed text-sm">{testimonial.quote}</p>
              </div>

              {/* Author */}
              <div className="flex items-center gap-4 relative z-10">
                <motion.div
                  className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center"
                  whileHover={{ rotate: 5, scale: 1.1 }}
                >
                  <span className="text-sm font-bold text-muted-foreground">{testimonial.logo}</span>
                </motion.div>
                <div>
                  <div className="font-semibold text-foreground">{testimonial.company}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

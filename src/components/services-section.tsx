"use client"

import { Card, CardContent } from "@/components/ui/card"
import { TestTube2, Users, ClipboardCheck, ShieldCheck, ChevronRight } from "lucide-react"
import Link from "next/link"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"

const services = [
  {
    icon: TestTube2,
    title: "Software Testing & QA",
    description: "Long-term/Instant support to ensure top-notch software quality",
    color: "text-red-400",
  },
  {
    icon: Users,
    title: "QA Experts Augmentation",
    description: "Goodbye Hiring Hassle, Our QA Experts at Your Service",
    color: "text-primary",
  },
  {
    icon: ClipboardCheck,
    title: "QA Audit & Advisory",
    description: "Ensuring Compliance Through Comprehensive Assessment",
    color: "text-primary",
  },
  {
    icon: ShieldCheck,
    title: "Software Security Testing",
    description: "Ensuring Robust Code Integrity Through Software Fortifications",
    color: "text-primary",
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
  hidden: { opacity: 0, y: 50, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
}

function ServiceCard({ service, index }: { service: (typeof services)[0]; index: number }) {
  return (
    <motion.div variants={cardVariants}>
      <motion.div
        whileHover={{ y: -8, scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
      >
        <Card className="group bg-card border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 cursor-pointer h-full">
          <CardContent className="p-6 lg:p-8 text-center">
            <motion.div
              className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 mx-auto group-hover:bg-primary/20 transition-colors duration-300"
              whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
              transition={{ duration: 0.5 }}
            >
              <service.icon className={`w-7 h-7 ${service.color}`} />
            </motion.div>
            <h3 className="text-lg font-semibold text-foreground mb-3">{service.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  )
}

export function ServicesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section
      id="services"
      className="py-24 lg:py-32 relative"
      style={{ backgroundColor: "var(--section-services-bg)" }}
      ref={ref}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <motion.span
            className="text-primary font-medium text-sm uppercase tracking-wider"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
          >
            Software Quality Assurance
          </motion.span>
          <motion.h2
            className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground text-balance"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Our Services
          </motion.h2>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </motion.div>

        <motion.div
          className="text-center mt-10"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
        >
          <motion.div whileHover={{ x: 5 }}>
            <Link
              href="#"
              className="inline-flex items-center gap-2 text-primary font-medium hover:text-primary/80 transition-colors group"
            >
              More Services
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              <ChevronRight className="w-4 h-4 -ml-3 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

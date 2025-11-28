"use client"

import { Zap, Heart, Layers, Lock, TrendingDown, CheckCircle } from "lucide-react"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"

const values = [
  {
    icon: Zap,
    title: "Fast & Flexible",
    description: "Rapid Results, Agile Approach: Where Speed Meets Precision.",
  },
  {
    icon: Heart,
    title: "Customer Satisfaction",
    description: "Beyond Service, Ensuring Smiles: Commitment to Your Delight.",
  },
  {
    icon: Layers,
    title: "One Stop Solution",
    description: "All Aboard! - Your Comprehensive Solution Anchored in Excellence.",
  },
  {
    icon: Lock,
    title: "Confidentiality",
    description: "Securing Success, Guarding Secrets: Your Trusted Partner in Confidentiality.",
  },
  {
    icon: TrendingDown,
    title: "Cost Reduction",
    description: "Elevate Quality, Trim Costs - A Win-Win Equation for Your Success.",
  },
  {
    icon: CheckCircle,
    title: "Error-Free Solution",
    description: "Zero Tolerance, 100% Reliability: Your Source for Error-Free Excellence.",
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
  },
}

export function WhyChooseSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="py-24 lg:py-32 bg-background relative overflow-hidden">
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <motion.h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground text-balance"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
          >
            Some Awesome Things About QAHarbor
          </motion.h2>
          <motion.p
            className="mt-6 text-lg text-muted-foreground text-pretty"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.4 }}
          >
            Excellently Managed QA Services That Adapt To Your Evolving Business Needs
          </motion.p>
        </motion.div>

        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              variants={cardVariants}
              transition={{ duration: 0.5 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300 cursor-pointer relative overflow-hidden"
            >
              <motion.div
                className="absolute inset-0 bg-linear-to-br from-primary/5 to-transparent"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />

              <div className="relative z-10">
                <motion.div
                  className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors"
                  whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                >
                  <value.icon className="w-6 h-6 text-primary" />
                </motion.div>
                <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {value.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

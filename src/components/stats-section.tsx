"use client"

import { useEffect, useState, useRef } from "react"
import { TrendingUp, Users, Award, Star } from "lucide-react"
import { motion, useInView, useSpring, useTransform } from "framer-motion"

const stats = [
  { value: 50000, suffix: "+", label: "QA Services Provided", unit: "Hours", icon: TrendingUp, color: "text-blue-400" },
  { value: 30000, suffix: "+", label: "QA Experts Augmentation", unit: "Hours", icon: Users, color: "text-green-400" },
  { value: 100, suffix: "+", label: "Clients and Partners", unit: "Completed", icon: Award, color: "text-purple-400" },
  { value: 98, suffix: "%", label: "Client's Satisfaction Rate", unit: "", icon: Star, color: "text-yellow-400" },
]

const partners = ["Vivasoft", "JTI", "INUMENT", "Audacity", "Brain Station 23"]

function AnimatedCounter({ value, suffix, isInView }: { value: number; suffix: string; isInView: boolean }) {
  const spring = useSpring(0, { duration: 2000, bounce: 0 })
  const display = useTransform(spring, (current) => Math.floor(current).toLocaleString())
  const [displayValue, setDisplayValue] = useState("0")

  useEffect(() => {
    if (isInView) {
      spring.set(value)
    }
  }, [isInView, spring, value])

  useEffect(() => {
    return display.on("change", (latest) => {
      setDisplayValue(latest)
    })
  }, [display])

  return (
    <span>
      {displayValue}
      {suffix}
    </span>
  )
}

function StatCard({ stat, index }: { stat: (typeof stats)[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -10, scale: 1.05 }}
      className="text-center p-8 rounded-2xl bg-linear-to-br from-card/30 to-card/10 border border-border/50 hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 group relative overflow-hidden cursor-pointer"
    >
      <motion.div
        className="absolute inset-0 bg-linear-to-br from-primary/0 via-primary/5 to-primary/0"
        initial={{ opacity: 0, rotate: 0 }}
        whileHover={{ opacity: 1, rotate: 180 }}
        transition={{ duration: 0.8 }}
      />

      <motion.div className="absolute inset-0 pointer-events-none" initial={{ opacity: 0 }} whileHover={{ opacity: 1 }}>
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-primary/50 rounded-full"
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + (i % 3) * 20}%`,
            }}
            animate={{
              y: [-10, -30, -10],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 2,
              repeat: Number.POSITIVE_INFINITY,
              delay: i * 0.2,
            }}
          />
        ))}
      </motion.div>

      <motion.div
        className="relative z-10 mb-4 flex justify-center"
        animate={isInView ? { scale: [0, 1.2, 1] } : {}}
        transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
      >
        <motion.div
          className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-all duration-300"
          whileHover={{ rotate: 360, scale: 1.1 }}
          transition={{ duration: 0.6 }}
        >
          <stat.icon className={`w-8 h-8 ${stat.color}`} />
        </motion.div>
      </motion.div>

      <div className="relative z-10">
        <motion.div className="text-4xl lg:text-5xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
          <AnimatedCounter value={stat.value} suffix={stat.suffix} isInView={isInView} />
        </motion.div>
        <div className="text-sm text-muted-foreground mb-1">{stat.unit}</div>
        <div className="text-primary font-medium">{stat.label}</div>
      </div>
    </motion.div>
  )
}

export function StatsSection() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  return (
    <section ref={sectionRef} className="py-24 lg:py-32 bg-background relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <motion.div
          className="absolute top-1/4 left-1/3 w-96 h-96 bg-primary/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 30, 0],
            y: [0, -20, 0],
          }}
          transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            x: [0, -30, 0],
            y: [0, 20, 0],
          }}
          transition={{ duration: 12, repeat: Number.POSITIVE_INFINITY }}
        />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        {/* Stats Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <StatCard key={stat.label} stat={stat} index={index} />
          ))}
        </div>

        <motion.div
          className="flex flex-wrap justify-center items-center gap-8 lg:gap-12 pt-12 border-t border-border"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5 }}
        >
          {partners.map((partner, index) => (
            <motion.div
              key={partner}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 0.6, y: 0 } : {}}
              transition={{ delay: 0.6 + index * 0.1 }}
              whileHover={{ opacity: 1, scale: 1.1, y: -5 }}
              className="px-6 py-3 cursor-pointer"
            >
              <span className="text-sm font-bold text-muted-foreground hover:text-primary transition-colors duration-300">
                {partner}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

"use client"

import { Button } from "@/components/ui/button"
import { ChevronRight, Shield, Bug, Target, Zap } from "lucide-react"
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

const FloatingIcon = ({
  icon: Icon,
  className,
  delay = 0,
}: {
  icon: any
  className: string
  delay?: number
}) => (
  <motion.div
    className={`absolute ${className}`}
    initial={{ opacity: 0, scale: 0 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ delay: delay / 1000, duration: 0.5, type: "spring" }}
  >
    <motion.div
      className="p-3 rounded-xl bg-primary/10 backdrop-blur-sm border border-primary/20 shadow-lg"
      animate={{
        y: [0, -15, 0],
        rotate: [0, 5, -5, 0],
      }}
      transition={{
        duration: 4,
        repeat: Number.POSITIVE_INFINITY,
        ease: "easeInOut",
        delay: delay / 1000,
      }}
      whileHover={{ scale: 1.2, rotate: 15 }}
    >
      <Icon className="w-5 h-5 text-primary" />
    </motion.div>
  </motion.div>
)

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
  },
}

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  })

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"])
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"])
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "-10%"])
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center overflow-hidden pt-16 bg-linear-to-br from-background via-background to-[#0a1929]"
    >
      <motion.div className="absolute inset-0 overflow-hidden" style={{ y: backgroundY }}>
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.5, 0.3, 0.5],
          }}
          transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 1 }}
        />

        {/* Gradient Orbs */}
        <motion.div
          className="absolute top-10 left-10 w-96 h-96 rounded-full bg-linear-to-br from-accent/20 to-red-500/10 blur-3xl"
          animate={{ x: [0, 50, 0], y: [0, 30, 0] }}
          transition={{ duration: 15, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-80 h-80 rounded-full bg-linear-to-br from-red-500/15 to-accent/10 blur-3xl"
          animate={{ x: [0, -40, 0], y: [0, -20, 0] }}
          transition={{ duration: 12, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        />

        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.03)_1px,transparent_1px)] bg-size-[64px_64px]" />
      </motion.div>

      <motion.div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 py-24 lg:py-32" style={{ opacity }}>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - Text Content with stagger animation */}
          <motion.div
            className="text-center lg:text-left"
            style={{ y: textY }}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div
              variants={itemVariants}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8"
              whileHover={{ scale: 1.05 }}
            >
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              >
                <Zap className="w-4 h-4 text-primary" />
              </motion.div>
              <span className="text-sm font-medium text-primary">Quality Assurance Excellence</span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              transition={{ duration: 0.6 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-tight text-balance"
            >
              Testing Today For A{" "}
              <motion.span
                className="text-primary relative inline-block"
                animate={{
                  textShadow: [
                    "0 0 20px rgba(6,182,212,0)",
                    "0 0 40px rgba(6,182,212,0.3)",
                    "0 0 20px rgba(6,182,212,0)",
                  ],
                }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              >
                Flawless Tomorrow
                <motion.span
                  className="absolute bottom-0 left-0 w-full h-1 bg-linear-to-r from-primary/0 via-primary to-primary/0"
                  animate={{ scaleX: [0, 1, 0], x: ["-100%", "0%", "100%"] }}
                  transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                />
              </motion.span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              transition={{ duration: 0.6 }}
              className="mt-6 text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-xl mx-auto lg:mx-0 text-pretty"
            >
              Join our Quality Detectives on a journey into software excellence through SQA investigations. Unveil the
              mysteries behind impeccable code in our quest for uncompromising quality assurance and software
              perfection.
            </motion.p>

            <motion.div
              variants={itemVariants}
              transition={{ duration: 0.6 }}
              className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  size="lg"
                  className="bg-primary text-primary-foreground hover:bg-primary/90 text-base px-8 py-6 group rounded-lg shadow-lg hover:shadow-primary/25 transition-all duration-300"
                >
                  Get Services
                  <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-transparent border-primary/50 text-foreground hover:bg-primary/10 text-base px-8 py-6 rounded-lg hover:border-primary transition-all duration-300"
                >
                  Hire Experts
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right - Detective Illustration with parallax */}
          <motion.div className="relative hidden lg:flex items-center justify-center" style={{ y: imageY }}>
            <FloatingIcon icon={Shield} className="top-10 left-0" delay={0} />
            <FloatingIcon icon={Bug} className="top-20 -right-5" delay={200} />
            <FloatingIcon icon={Target} className="bottom-32 left-5" delay={400} />
            <FloatingIcon icon={Zap} className="bottom-10 right-0" delay={600} />

            <motion.div
              className="relative w-full max-w-lg"
              initial={{ opacity: 0, scale: 0.8, rotateY: -15 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              transition={{ duration: 0.8, delay: 0.3, type: "spring" }}
            >
              <motion.div
                className="absolute top-0 right-0 w-[400px] h-[450px] bg-linear-to-br from-[#f5c542] to-[#f5a442] rounded-bl-[200px] rounded-tl-[40px] rounded-tr-[40px] shadow-2xl"
                animate={{
                  borderRadius: ["40px 40px 200px 40px", "60px 40px 180px 60px", "40px 40px 200px 40px"],
                }}
                transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
              />

              {/* Accent shapes */}
              <motion.div
                className="absolute top-10 right-10 w-20 h-20 bg-primary/20 rounded-full blur-xl"
                animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0.8, 0.5] }}
                transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
              />
              <motion.div
                className="absolute bottom-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-2xl"
                animate={{ scale: [1.2, 1, 1.2], opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY }}
              />

              {/* Detective illustration */}
              <motion.div
                className="relative z-10 flex items-center justify-center h-[450px]"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <img
                  src="/detective-with-magnifying-glass-investigating-code.jpg"
                  alt="QA Detective investigating code"
                  className="w-full h-full object-contain drop-shadow-2xl"
                />
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5 }}
      >
        <motion.div
          className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center"
          animate={{ borderColor: ["rgba(6,182,212,0.5)", "rgba(6,182,212,1)", "rgba(6,182,212,0.5)"] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
        >
          <motion.div
            className="w-1.5 h-3 bg-primary rounded-full mt-2"
            animate={{ y: [0, 12, 0], opacity: [1, 0.5, 1] }}
            transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
          />
        </motion.div>
      </motion.div>
    </section>
  )
}

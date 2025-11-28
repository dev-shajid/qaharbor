"use client"

import { Button } from "@/components/ui/button"
import { motion, useInView, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { ArrowRight, Sparkles } from "lucide-react"

export function HireExpertSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const imageY = useTransform(scrollYProgress, [0, 1], [50, -50])

  return (
    <section ref={ref} className="py-24 lg:py-32 bg-background relative overflow-hidden">
      <motion.div
        className="absolute inset-0 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
      >
        <motion.div
          className="absolute top-20 left-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 20, 0],
          }}
          transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-80 h-80 bg-primary/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            x: [0, -20, 0],
          }}
          transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY }}
        />
      </motion.div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.2 }}
              whileHover={{ scale: 1.05 }}
            >
              <motion.div
                animate={{ rotate: [0, 15, -15, 0] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              >
                <Sparkles className="w-4 h-4 text-primary" />
              </motion.div>
              <span className="text-sm font-medium text-primary">Expert Team Ready</span>
            </motion.div>

            <motion.h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground text-balance"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
            >
              Need QA Expert For Your Product?
            </motion.h2>
            <motion.p
              className="mt-4 text-primary text-lg font-medium"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.4 }}
            >
              We Are Prompt To Onboard The Best QA Experts You Need
            </motion.p>
            <motion.p
              className="mt-6 text-muted-foreground leading-relaxed"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.5 }}
            >
              Hey Buddy! Stop Looking Around. Let Us Make your QA Recruitment Easier and hassle-free.
            </motion.p>
            <motion.div
              className="mt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6 }}
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 group">
                  Hire Expert
                  <motion.span
                    className="ml-2"
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
                  >
                    <ArrowRight className="w-4 h-4" />
                  </motion.span>
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right - Illustration with parallax */}
          <motion.div className="relative hidden lg:flex items-center justify-center" style={{ y: imageY }}>
            <motion.div
              className="relative w-full max-w-md aspect-square"
              initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
              animate={isInView ? { opacity: 1, scale: 1, rotate: 0 } : {}}
              transition={{ duration: 0.8, type: "spring" }}
            >
              <motion.div
                className="absolute inset-0 bg-linear-to-br from-primary/20 to-primary/5 rounded-3xl"
                animate={{
                  borderRadius: ["24px", "40px", "24px"],
                }}
                transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY }}
              />
              <motion.img
                src="/team-of-qa-experts-working-together-illustration.jpg"
                alt="QA Experts Team"
                className="w-full h-full object-contain relative z-10"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

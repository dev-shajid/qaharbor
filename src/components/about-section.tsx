"use client"

import type React from "react"
import { useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { CheckCircle2, Gift, Sparkles } from "lucide-react"
import { motion, useInView } from "framer-motion"

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

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export function AboutSection() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setIsLoading(false)
    setIsSubmitted(true)
  }

  return (
    <section
      id="about"
      ref={ref}
      className="py-24 lg:py-32 relative overflow-hidden"
      style={{ backgroundColor: "var(--section-future-proof-bg)" }}
    >
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-20 left-20 w-72 h-72 bg-primary/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 30, 0],
          }}
          transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            x: [0, -30, 0],
          }}
          transition={{ duration: 12, repeat: Number.POSITIVE_INFINITY }}
        />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
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
              <Gift className="w-4 h-4 text-primary" />
            </motion.div>
            <span className="text-sm font-medium text-primary">Special Offer</span>
          </motion.div>

          <motion.h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground text-balance"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
          >
            Future-Proof Your Software
          </motion.h2>
          <motion.p
            className="mt-4 text-lg text-primary font-medium"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.4 }}
          >
            QA Harbor's Gift to You
          </motion.p>
          <motion.p
            className="mt-2 text-xl text-foreground inline-flex items-center gap-2"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.5 }}
          >
            a Free QA Consultation!
            <motion.span
              animate={{ rotate: [0, 20, -20, 0], scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            >
              <Sparkles className="w-5 h-5 text-primary" />
            </motion.span>
          </motion.p>
        </motion.div>

        <div className="max-w-2xl mx-auto">
          <motion.div
            className="bg-card rounded-3xl border border-border p-8 lg:p-10 shadow-xl relative overflow-hidden"
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {/* Decorative corner elements */}
            <motion.div
              className="absolute top-0 right-0 w-32 h-32 bg-linear-to-bl from-primary/10 to-transparent rounded-bl-full"
              initial={{ opacity: 0, scale: 0 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.5 }}
            />

            {isSubmitted ? (
              <motion.div
                className="text-center py-12 relative z-10"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ type: "spring" }}
              >
                <motion.div
                  className="w-20 h-20 rounded-full bg-green-500/10 flex items-center justify-center mx-auto mb-6"
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ type: "spring", delay: 0.2 }}
                >
                  <CheckCircle2 className="w-10 h-10 text-green-500" />
                </motion.div>
                <motion.h3
                  className="text-2xl font-bold text-foreground mb-3"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  Thank You!
                </motion.h3>
                <motion.p
                  className="text-muted-foreground"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  We've received your message. Our team will get back to you within 24 hours.
                </motion.p>
              </motion.div>
            ) : (
              <motion.form
                onSubmit={handleSubmit}
                className="space-y-6 relative z-10"
                variants={containerVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
              >
                <motion.div variants={itemVariants}>
                  <label htmlFor="about-name" className="block text-sm font-medium text-foreground mb-2">
                    Your Name
                  </label>
                  <Input
                    id="about-name"
                    type="text"
                    placeholder="John Doe"
                    required
                    className="bg-secondary border-border focus:border-primary focus:ring-primary h-12"
                  />
                </motion.div>

                <motion.div variants={itemVariants}>
                  <label htmlFor="about-email" className="block text-sm font-medium text-foreground mb-2">
                    Email Address
                  </label>
                  <Input
                    id="about-email"
                    type="email"
                    placeholder="john@company.com"
                    required
                    className="bg-secondary border-border focus:border-primary focus:ring-primary h-12"
                  />
                </motion.div>

                <motion.div variants={itemVariants}>
                  <label htmlFor="about-message" className="block text-sm font-medium text-foreground mb-2">
                    Message
                  </label>
                  <Textarea
                    id="about-message"
                    placeholder="Tell us about your QA needs..."
                    rows={4}
                    required
                    className="bg-secondary border-border focus:border-primary focus:ring-primary resize-none"
                  />
                </motion.div>

                <motion.p variants={itemVariants} className="text-xs text-muted-foreground">
                  This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.
                </motion.p>

                <motion.div variants={itemVariants} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Button
                    type="submit"
                    className="w-full bg-primary text-primary-foreground hover:bg-primary/90 h-12 text-base"
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <motion.span
                        animate={{ opacity: [1, 0.5, 1] }}
                        transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY }}
                      >
                        Sending...
                      </motion.span>
                    ) : (
                      "Submit"
                    )}
                  </Button>
                </motion.div>
              </motion.form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

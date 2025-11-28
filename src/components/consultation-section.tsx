"use client"

import type React from "react"
import { useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { CheckCircle2 } from "lucide-react"
import { motion, useInView } from "framer-motion"

const teamMembers = [
  {
    name: "Masudur Rahaman",
    role: "Managing Director",
    image: "/professional-man-suit-headshot.png",
  },
  {
    name: "Farzam Aidelkhani",
    role: "Biz & Sales Lead",
    image: "/professional-man-business-headshot.jpg",
  },
  {
    name: "Zabir Ibne Mizan",
    role: "Business Analyst",
    image: "/professional-man-analyst-headshot.jpg",
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

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

export function ConsultationSection() {
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
      id="contact"
      ref={ref}
      className="py-24 lg:py-32 relative"
      style={{ backgroundColor: "var(--section-consultation-bg)" }}
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
            Free Consultation
          </motion.span>
          <motion.h2
            className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground text-balance"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
          >
            Schedule Your Consultation
          </motion.h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left - Form */}
          <motion.div
            className="bg-card rounded-3xl border border-border p-8 lg:p-10 shadow-xl"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {isSubmitted ? (
              <motion.div
                className="text-center py-12"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ type: "spring" }}
              >
                <motion.div
                  className="w-20 h-20 rounded-full bg-green-500/10 flex items-center justify-center mx-auto mb-6"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", delay: 0.2 }}
                >
                  <CheckCircle2 className="w-10 h-10 text-green-500" />
                </motion.div>
                <h3 className="text-2xl font-bold text-foreground mb-3">Thank You!</h3>
                <p className="text-muted-foreground">
                  We've received your message. Our team will get back to you within 24 hours.
                </p>
              </motion.div>
            ) : (
              <motion.form
                onSubmit={handleSubmit}
                className="space-y-6"
                variants={containerVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
              >
                <motion.div variants={itemVariants}>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Your Name
                  </label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="John Doe"
                    required
                    className="bg-secondary border-border focus:border-primary focus:ring-primary h-12"
                  />
                </motion.div>

                <motion.div variants={itemVariants}>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email Address
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="john@company.com"
                    required
                    className="bg-secondary border-border focus:border-primary focus:ring-primary h-12"
                  />
                </motion.div>

                <motion.div variants={itemVariants}>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
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

          {/* Right - Team Members */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <p className="text-lg text-muted-foreground mb-8 text-center lg:text-left">
              "Say Goodbye to Your QA Recruitment Hassle! Let's Start with QAHarbor's Hiring Assistance."
            </p>

            <h3 className="text-xl font-semibold text-foreground mb-8 text-center lg:text-left">
              Who are going to assist you!
            </h3>

            <motion.div
              className="grid sm:grid-cols-3 gap-6"
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              {teamMembers.map((member, index) => (
                <motion.div
                  key={member.name}
                  className="text-center"
                  variants={itemVariants}
                  whileHover={{ y: -10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <motion.div
                    className="w-32 h-32 mx-auto mb-4 rounded-2xl overflow-hidden bg-secondary"
                    whileHover={{ scale: 1.05, rotate: 2 }}
                  >
                    <img
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                  <h4 className="font-semibold text-foreground">{member.name}</h4>
                  <p className="text-sm text-muted-foreground">{member.role}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

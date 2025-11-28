"use client"

import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Mail, Phone, MapPin, Linkedin, Facebook, Youtube, Instagram } from "lucide-react"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"

const footerLinks = {
  services: [
    { name: "SQA Service", href: "#" },
    { name: "Experts Augmentation", href: "#" },
    { name: "Book A Free Consultation", href: "#contact" },
  ],
  links: [
    { name: "Terms & Conditions", href: "#" },
    { name: "Ongoing Campaign", href: "#" },
    { name: "Blog", href: "#blog" },
    { name: "Find QA Jobs", href: "#" },
  ],
}

const socialLinks = [
  { name: "LinkedIn", icon: Linkedin, href: "#" },
  { name: "Facebook", icon: Facebook, href: "#" },
  { name: "Youtube", icon: Youtube, href: "#" },
  { name: "Instagram", icon: Instagram, href: "#" },
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

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export function Footer() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <footer ref={ref} className="bg-card border-t border-border">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16 lg:py-20">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Brand & Contact */}
          <motion.div className="lg:col-span-1" variants={itemVariants}>
            <Link href="/" className="flex items-center gap-2 mb-6 group">
              <motion.div
                className="relative w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                <svg
                  viewBox="0 0 40 40"
                  className="w-6 h-6 text-primary"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <circle cx="20" cy="20" r="12" />
                  <path d="M14 20l4 4 8-8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </motion.div>
              <span className="text-xl font-bold text-foreground">
                QA<span className="text-primary">Harbor</span>
              </span>
            </Link>

            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              QA Harbor Limited is a Quality Assurance Service Provider, highly driven in the software and service
              quality assurance arena.
            </p>

            <div className="space-y-3">
              {[
                { icon: MapPin, text: "House #470, Road #31, Mohakhali DOHS, Dhaka-1212" },
                { icon: Phone, text: "+880 1777 223 622\n+880 1618 938 828" },
                { icon: Mail, text: "info@qaharbor.com" },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="flex items-start gap-3 text-sm text-muted-foreground group cursor-pointer"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <item.icon className="w-4 h-4 text-primary shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                  <span className="whitespace-pre-line">{item.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Services */}
          <motion.div variants={itemVariants}>
            <h3 className="font-semibold text-foreground mb-4">Services</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link, index) => (
                <motion.li key={link.name} whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 400 }}>
                  <Link href={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Our Links */}
          <motion.div variants={itemVariants}>
            <h3 className="font-semibold text-foreground mb-4">Our links</h3>
            <ul className="space-y-3">
              {footerLinks.links.map((link) => (
                <motion.li key={link.name} whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 400 }}>
                  <Link href={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Newsletter */}
          <motion.div variants={itemVariants}>
            <h3 className="font-semibold text-foreground mb-4">Newsletter</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Subscribe to our newsletter for the latest industry trends, exclusive offers, and expert advice, delivered
              straight to your inbox.
            </p>
            <div className="flex gap-2">
              <Input
                type="email"
                placeholder="Your Email"
                className="bg-secondary border-border focus:border-primary h-10"
              />
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button className="bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4">Subscribe</Button>
              </motion.div>
            </div>

            <div className="mt-6 flex gap-4">
              {socialLinks.map((social, index) => (
                <motion.div
                  key={social.name}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.5 + index * 0.1, type: "spring" }}
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Link
                    href={social.href}
                    className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
                  >
                    <social.icon className="w-5 h-5" />
                    <span className="sr-only">{social.name}</span>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          className="mt-12 pt-8 border-t border-border text-center"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
        >
          <p className="text-sm text-muted-foreground">©2024 – QA Harbor Limited</p>
        </motion.div>
      </div>
    </footer>
  )
}

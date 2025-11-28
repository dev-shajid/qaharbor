"use client"

import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { ArrowRight } from "lucide-react"

const blogPosts = [
  {
    title: "E-commerce Website Testing: Perfecting the Shopper's Paradise",
    excerpt:
      "E-commerce Website Testing: Perfecting the Shopper's Paradise Introduction Imagine you're a busy e-commerce business owner, and your online store is your lifeline to customers worldwide.",
    date: "April 16, 2024",
    image: "/ecommerce-website-testing-illustration.jpg",
    slug: "e-commerce-website-testing",
  },
  {
    title: "Fortifying FinTech: The Critical Role of Financial Software Testing in 2024",
    excerpt:
      "The Critical Role of Financial Software Testing The Billion-Dollar Conundrum In a world where every transaction, investment, and decision counts, the financial industry relies heavily...",
    date: "April 16, 2024",
    image: "/fintech-software-testing-financial-illustration.jpg",
    slug: "critical-role-financial-software-testing",
  },
  {
    title: "Navigating the Software Testing Challenges: Smooth Sailing to Quality",
    excerpt:
      "Navigating the Software Testing Challenges: Smooth Sailing to Quality Let's Sail Toward Quality Imagine you're the captain of a ship embarking on a challenging voyage.",
    date: "April 16, 2024",
    image: "/software-testing-challenges-sailing-ship-illustrat.jpg",
    slug: "navigating-software-testing-challenges",
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
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
  },
}

export function BlogSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="blog" ref={ref} className="py-24 lg:py-32 bg-background relative">
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
            Knowledge, Skills, Success
          </motion.span>
          <motion.h2
            className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground text-balance"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
          >
            Fuel Your QA Journey Here
          </motion.h2>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {blogPosts.map((post, index) => (
            <motion.div key={post.slug} variants={cardVariants} transition={{ duration: 0.5 }}>
              <motion.div
                whileHover={{ y: -10, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <Card className="group bg-card border-border hover:border-primary/30 transition-all duration-300 overflow-hidden cursor-pointer h-full">
                  <motion.div
                    className="aspect-video overflow-hidden relative"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.4 }}
                  >
                    <img
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <motion.div
                      className="absolute inset-0 bg-linear-to-t from-black/50 to-transparent"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.div>
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-foreground mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-3">{post.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-muted-foreground">{post.date}</span>
                      <motion.div whileHover={{ x: 5 }}>
                        <Link
                          href={`/blog/${post.slug}`}
                          className="text-sm text-primary font-medium hover:text-primary/80 transition-colors inline-flex items-center gap-1"
                        >
                          Read More
                          <ArrowRight className="w-4 h-4" />
                        </Link>
                      </motion.div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

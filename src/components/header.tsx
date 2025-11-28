"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, ChevronDown } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

const navigation = [
  { name: "QA Jobs", href: "#jobs" },
  { name: "Services", href: "#services", hasDropdown: true },
  { name: "Blog & News", href: "#blog", hasDropdown: true },
  { name: "Events", href: "#events" },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <nav className="mx-auto max-w-7xl px-6 lg:px-8" aria-label="Global">
        <div className="flex h-16 items-center justify-between">
          <motion.div
            className="flex lg:flex-1"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Link href="/" className="-m-1.5 p-1.5 flex items-center gap-2 group">
              <motion.div
                className="relative w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center"
                whileHover={{ rotate: 360, scale: 1.1 }}
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
              <div className="flex flex-col">
                <span className="text-xl font-bold text-foreground leading-tight">
                  <span className="text-primary">Q</span>A<span className="text-primary">Harbor</span>
                </span>
                <span className="text-[10px] text-muted-foreground -mt-1">QA Harbor Limited</span>
              </div>
            </Link>
          </motion.div>

          {/* Mobile menu button */}
          <div className="flex lg:hidden">
            <motion.button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-muted-foreground"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              whileTap={{ scale: 0.9 }}
            >
              <span className="sr-only">Open main menu</span>
              <AnimatePresence mode="wait">
                {mobileMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="h-6 w-6" aria-hidden="true" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="h-6 w-6" aria-hidden="true" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>

          <div className="hidden lg:flex lg:gap-x-8">
            {navigation.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
              >
                <motion.div whileHover={{ y: -2 }} transition={{ type: "spring", stiffness: 400 }}>
                  <Link
                    href={item.href}
                    className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1 relative group"
                  >
                    {item.name}
                    {item.hasDropdown && (
                      <motion.span animate={{ rotate: 0 }} whileHover={{ rotate: 180 }} transition={{ duration: 0.3 }}>
                        <ChevronDown className="w-4 h-4" />
                      </motion.span>
                    )}
                    <motion.span
                      className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary"
                      whileHover={{ width: "100%" }}
                      transition={{ duration: 0.3 }}
                    />
                  </Link>
                </motion.div>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="hidden lg:flex lg:flex-1 lg:justify-end"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-lg">
                Free Consultation
              </Button>
            </motion.div>
          </motion.div>
        </div>

        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              className="lg:hidden py-4 border-t border-border overflow-hidden"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className="space-y-2"
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: { staggerChildren: 0.1 },
                  },
                }}
              >
                {navigation.map((item) => (
                  <motion.div
                    key={item.name}
                    variants={{
                      hidden: { opacity: 0, x: -20 },
                      visible: { opacity: 1, x: 0 },
                    }}
                  >
                    <Link
                      href={item.href}
                      className="block px-3 py-2 text-base font-medium text-muted-foreground hover:text-foreground hover:bg-secondary rounded-lg transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  className="pt-4"
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 },
                  }}
                >
                  <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                    Free Consultation
                  </Button>
                </motion.div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  )
}

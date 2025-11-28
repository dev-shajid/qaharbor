"use client"

import { useEffect, useCallback, useState, useRef } from "react"
import useEmblaCarousel from "embla-carousel-react"
import AutoScroll from "embla-carousel-auto-scroll"
import { motion, useInView } from "framer-motion"

const clients = [
  { name: "Transparency International", logo: "TRANSPARENCY INTERNATIONAL" },
  { name: "JTI", logo: "JTI" },
  { name: "Vivasoft", logo: "vivasoft" },
  { name: "Brain Station 23", logo: "BRAIN STATION 23" },
  { name: "e-CAB", logo: "e-CAB" },
  { name: "Inument", logo: "INUMENT" },
  { name: "Audacity", logo: "Audacity" },
  { name: "Technext", logo: "Technext" },
  { name: "DataSoft", logo: "DATASOFT" },
  { name: "TigerIT", logo: "TigerIT" },
]

export function ClientsSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
      skipSnaps: false,
      dragFree: true,
    },
    [AutoScroll({ playOnInit: true, speed: 0.8, stopOnInteraction: false, stopOnMouseEnter: true })],
  )

  const [selectedIndex, setSelectedIndex] = useState(0)
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setSelectedIndex(emblaApi.selectedScrollSnap())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    onSelect()
    emblaApi.on("select", onSelect)
    emblaApi.on("reInit", onSelect)
  }, [emblaApi, onSelect])

  return (
    <section
      ref={sectionRef}
      className="py-20 lg:py-24 relative overflow-hidden"
      style={{ backgroundColor: "var(--section-clients-bg)" }}
    >
      <motion.div
        className="absolute inset-0 bg-linear-to-r from-transparent via-primary/5 to-transparent pointer-events-none"
        animate={{
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY }}
      />

      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center mb-12"
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
            Globally Trusted By
          </motion.span>
          <motion.p
            className="mt-2 text-muted-foreground text-sm"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.3 }}
          >
            Industry leaders who rely on our QA expertise
          </motion.p>
        </motion.div>

        <motion.div
          className="relative"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          {/* Fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-linear-to-r from-(--section-clients-bg) to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-linear-to-l from-(--section-clients-bg) to-transparent z-10 pointer-events-none" />

          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {[...clients, ...clients, ...clients].map((client, index) => (
                <motion.div
                  key={`${client.name}-${index}`}
                  className="flex-[0_0_auto] group flex items-center justify-center px-8 lg:px-12 py-8"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <motion.div
                    className="relative px-6 py-4 rounded-xl border border-transparent hover:border-primary/20 hover:bg-primary/5 transition-all duration-300"
                    whileHover={{
                      boxShadow: "0 0 20px rgba(6, 182, 212, 0.2)",
                    }}
                  >
                    <span className="text-lg lg:text-xl font-bold text-foreground/50 group-hover:text-primary transition-all duration-300 whitespace-nowrap tracking-wide">
                      {client.logo}
                    </span>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          className="flex justify-center gap-2 mt-10"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
        >
          {[0, 1, 2, 3, 4].map((index) => (
            <motion.button
              key={index}
              onClick={() => emblaApi?.scrollTo(index * 2)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === selectedIndex % 5 ? "bg-primary w-8" : "bg-primary/30 w-2 hover:bg-primary/50"
              }`}
              aria-label={`Go to slide group ${index + 1}`}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            />
          ))}
        </motion.div>
      </div>
    </section>
  )
}

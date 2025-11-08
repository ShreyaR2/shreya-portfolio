 "use client"

import { motion } from "framer-motion"
import ImageCarousel from "./image-carousel"

export default function Gallery() {
  return (
    <section className="relative min-h-screen w-full bg-black px-6 md:px-12 py-24 flex items-center justify-center">
      <motion.div
        className="relative z-10 w-full max-w-6xl"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <motion.h3
          className="text-4xl md:text-5xl font-bold mb-4 tracking-tight"
          style={{ fontFamily: "Poppins, sans-serif" }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Gallery
        </motion.h3>

        <ImageCarousel />
      </motion.div>
    </section>
  )
}

 
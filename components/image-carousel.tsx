"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

const carouselImages = [
  { id: 1, src: "/cfsolo.jpg", alt: "Creative workspace" },
  { id: 2, src: "/independence.jpg", alt: "Design process" },
  { id: 3, src: "/polkadot.jpg", alt: "Development flow" },
  { id: 4, src: "/ecell.jpg", alt: "Project showcase" },
]

export default function ImageCarousel() {
  const [currentIndex, setCurrentIndex] = useState<number>(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % carouselImages.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const goToSlide = (index: number) => {
  setCurrentIndex(index)
}

  return (
    <div className="relative w-full max-w-4xl mx-auto py-12">
      <motion.div
        className="relative overflow-hidden rounded-lg border border-accent/30 aspect-video"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="absolute inset-0"
        >
          <img
            src={carouselImages[currentIndex].src || "/placeholder.svg"}
            alt={carouselImages[currentIndex].alt}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/20" />
        </motion.div>
      </motion.div>

      {/* Carousel indicators */}
      <div className="flex justify-center gap-3 mt-6">
        {carouselImages.map((_, idx) => (
          <motion.button
            key={idx}
            onClick={() => goToSlide(idx)}
            className={`h-2 transition-all duration-300 rounded-full ${
              idx === currentIndex ? "bg-accent w-8" : "bg-accent/30 w-2"
            }`}
            whileHover={{ scale: 1.2 }}
          />
        ))}
      </div>

      {/* Slide counter */}
      <div className="text-center mt-4 text-sm text-muted-foreground">
        {currentIndex + 1} / {carouselImages.length}
      </div>
    </div>
  )
}

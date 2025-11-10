"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import TypingEffect from "./typing-effect"
import CyberGraphBackground from "./cyber-graph-background"
import FloatingNavbar from "./floating-navbar"

export default function LandingFrame() {
  return (
    <section className="relative min-h-screen w-full flex items-center justify-center bg-black overflow-hidden">
      <CyberGraphBackground />
      <FloatingNavbar />

      {/* Animated frame border */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute top-1/4 left-1/4 w-1/2 h-1/2 border-2 border-accent opacity-20" />
      </motion.div>

      {/* Content */}
      <motion.div
        className="relative z-10 text-center space-y-8 px-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <motion.h1
          className="font-bold text-5xl md:text-7xl lg:text-8xl leading-tight tracking-tight text-balance"
          style={{ fontFamily: "Poppins, sans-serif" }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <TypingEffect
            texts={["Hi, I'm Shreya Rajeev.", "Building cool things.","Building creatively."]}
            speed={50}
            delay={3000}
            className="text-accent"
          />
        </motion.h1>

        <motion.p
          className="text-lg md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          Third-year CS student at VJTI with a unique blend of technical skills and initiative.
        </motion.p>

        {/* Frame line */}
        <motion.div
          className="w-24 h-1 bg-accent mx-auto"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          whileHover={{ y: -5 }}
        >
          <Link
            href="#projects"
            className="inline-block px-8 py-3 bg-accent text-accent-foreground font-semibold hover:bg-accent/90 transition-all duration-300 border-2 border-accent shadow-lg hover:shadow-xl hover:shadow-accent/30"
          >
            View My Work
          </Link>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 12, 0] }}
        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
      >
        <div className="w-6 h-10 border-2 border-accent/50 rounded-full flex items-center justify-center">
          <div className="w-1 h-2 bg-accent rounded-full" />
        </div>
      </motion.div>
    </section>
  )
}

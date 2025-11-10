"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

export default function AboutFrame() {
  return (
    <section 
    id="about"
    className="relative min-h-screen w-full flex items-center justify-center bg-black px-6 md:px-12 py-24">
      {/* Animated frame border */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <div className="absolute top-1/3 left-1/3 w-1/3 h-1/3 border-2 border-accent opacity-20" />
        <div className="absolute bottom-1/4 right-1/4 w-1/3 h-1/3 border-2 border-accent opacity-10" />
      </motion.div>

      {/* Image and Description Side by Side */}
      <motion.div
        className="relative z-10 flex flex-col md:flex-row items-center justify-between max-w-6xl w-full gap-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        {/* Image Section */}
        <div className="w-full md:w-1/2 flex justify-center">
          <Image
            src="/IMG_6672.jpg"
            alt="Profile or work visual"
            width={500}
            height={600}
            className="w-full max-w-md h-auto rounded-lg border-2 border-accent/30 object-cover"
          />
        </div>

        {/* Text Section */}
        <div className="w-full md:w-1/2 space-y-6 text-lg text-muted-foreground leading-relaxed">
          <h3 className="text-3xl md:text-4xl font-bold text-accent">
            About Me
          </h3>
          <p>
            Hey, I’m Shreya, a curious mind who loves building things that mix logic with creativity. 
            Whether it’s crafting blockchain-based apps, exploring AI, or designing intuitive interfaces, 
            I enjoy turning ideas into something real.
          </p>
          <p>
            Outside tech, you’ll find me speaking, debating, or performing with my college band,
            bringing the same energy and storytelling to the stage that I bring to code.
          </p>

          <div className="flex flex-wrap gap-3 mt-6">
            <span className="px-4 py-2 border border-accent/40 text-accent text-sm rounded">Developer</span>
            <span className="px-4 py-2 border border-accent/40 text-accent text-sm rounded">Speaker</span>
            <span className="px-4 py-2 border border-accent/40 text-accent text-sm rounded">Performer</span>
          </div>

          {/* View Resume Button */}
          <div className="pt-4">
            <Link
              href="/Shreya_Rajeev_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 mt-4 text-sm font-medium text-accent border border-accent rounded-full hover:bg-accent hover:text-black transition-all duration-300"
            >
              View Resume
            </Link>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

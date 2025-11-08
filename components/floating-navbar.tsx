"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { useState } from "react"

const navLinks = [
  { href: "#", label: "Home" },
  { href: "#about", label: "About" },
  { href: "/Shreya_Rajeev_Resume.pdf", label: "Resume", external: true },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
]

export default function FloatingNavbar() {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.nav
      className="fixed top-8 left-1/2 -translate-x-1/2 z-50"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.5 }}
    >
      <div
        className="backdrop-blur-md bg-black/30 border border-accent/30 rounded-full px-6 py-3 flex gap-6"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {navLinks.map((link, idx) => (
          <motion.div
            key={link.label}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 + idx * 0.1 }}
          >
            {link.external ? (
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-foreground/70 hover:text-accent transition-colors duration-300 relative group"
              >
                {link.label}
                <motion.div
                  className="absolute bottom-0 left-0 h-0.5 bg-accent"
                  initial={{ width: 0 }}
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.3 }}
                />
              </a>
            ) : (
              <Link
                href={link.href}
                className="text-sm font-medium text-foreground/70 hover:text-accent transition-colors duration-300 relative group"
              >
                {link.label}
                <motion.div
                  className="absolute bottom-0 left-0 h-0.5 bg-accent"
                  initial={{ width: 0 }}
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.3 }}
                />
              </Link>
            )}
          </motion.div>
        ))}
      </div>
    </motion.nav>
  )
}

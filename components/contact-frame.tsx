"use client"

import { motion } from "framer-motion"

const socialLinks = [
  { name: "LinkedIn", href: "https://www.linkedin.com/in/shreya-r-144922297/", icon: "↗" },
  { name: "GitHub", href: "https://github.com/ShreyaR2", icon: "↗" },
  { name: "Email", href: "mailto:itsshreya256@gmail.com", icon: "↗" },
]

export default function ContactFrame() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  return (
    <section className="relative min-h-screen w-full bg-black px-6 md:px-12 py-24 flex items-center justify-center">
      {/* Animated frame border */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <div className="absolute top-1/4 left-1/4 w-1/2 h-1/2 border-2 border-accent opacity-20" />
      </motion.div>

      <motion.div
        className="relative z-10 w-full max-w-4xl text-center"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.h2
          className="text-5xl md:text-6xl font-bold mb-8 tracking-tight"
          style={{ fontFamily: "Poppins, sans-serif" }}
          variants={itemVariants}
        >
          Let's Connect
        </motion.h2>

        <motion.p
          className="text-xl text-muted-foreground mb-12 leading-relaxed max-w-2xl mx-auto"
          variants={itemVariants}
        >
          I'm always interested in hearing about new projects and opportunities to create meaningful digital
          experiences.
        </motion.p>

        <motion.div className="flex flex-wrap justify-center gap-6 mb-16" variants={containerVariants}>
          {socialLinks.map((link) => (
            <motion.a
              key={link.name}
              href={link.href}
              className="px-6 py-3 border-2 border-accent/60 text-accent hover:bg-accent hover:text-accent-foreground transition-all duration-300 font-semibold"
              variants={itemVariants}
              whileHover={{ y: -5, borderColor: "rgb(0, 191, 166)" }}
              whileTap={{ scale: 0.95 }}
            >
              {link.name} {link.icon}
            </motion.a>
          ))}
        </motion.div>

        {/* Footer message */}
        <motion.div className="border-t border-accent/20 pt-12" variants={itemVariants}>
          <p className="text-sm text-muted-foreground">Let's connect and create something meaningful together.</p>
          <p className="text-xs text-muted-foreground/60 mt-4">© 2025 Shreya Rajeev. All rights reserved.</p>
        </motion.div>
      </motion.div>
    </section>
  )
}

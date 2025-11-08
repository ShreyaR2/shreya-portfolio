"use client"

import { motion } from "framer-motion"

const projects = [
  {
    id: 1,
    title: "Cryptick",
    description:
      "A blockchain and ML-based platform that predicts memecoin pump-and-dump patterns using on-chain data and Chainlink oracles.",
    tags: ["Blockchain", "Machine Learning", "Web3"],
    github: "https://github.com/yourusername/cryptick",
  },
  {
    id: 2,
    title: "BooKaro",
    description:
      "A peer-to-peer book reselling e-commerce platform enabling students to buy and sell used books seamlessly.",
    tags: ["Full Stack", "React", "Node.js", "MongoDB"],
    github: "https://github.com/yourusername/bookaro",
  },
  {
    id: 3,
    title: "VoteChain",
    description:
      "A decentralized voting platform built with Solidity and Web3.js ensuring transparency, security, and anonymity in elections.",
    tags: ["Blockchain", "Solidity", "Web3.js"],
    github: "https://github.com/yourusername/votechain",
  },
]

export default function ProjectsFrame() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  return (
    <section
      id="projects"
      className="relative min-h-screen w-full bg-black px-6 md:px-12 py-24 flex items-center justify-center"
    >
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
        className="relative z-10 w-full max-w-7xl"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.h2
          className="text-5xl md:text-6xl font-bold mb-4 tracking-tight"
          style={{ fontFamily: "Poppins, sans-serif" }}
          variants={itemVariants}
        >
          Selected Projects
        </motion.h2>

        <motion.div
          className="w-16 h-1 bg-accent mb-12"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        />

        <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-8" variants={containerVariants}>
          {projects.map((project) => (
            <motion.div
              key={project.id}
              className="relative group"
              variants={itemVariants}
            >
              <motion.div
                className="border border-accent/20 bg-card p-8 hover:border-accent/40 transition-all duration-300"
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold text-accent">{project.title}</h3>
                  
                  {/* GitHub Link */}
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-accent transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </motion.a>
                </div>

                <p className="text-muted-foreground leading-relaxed mb-6">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-3 py-1 border border-accent/40 text-accent bg-accent/5 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}
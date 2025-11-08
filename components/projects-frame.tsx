"use client"
import { Github } from "lucide-react";

import { motion } from "framer-motion"
import { useState, useEffect, useRef } from "react"

const projects = [
  {
    id: 1,
    title: "Cryptick",
    description:
      "A blockchain and ML-based platform that predicts memecoin pump-and-dump patterns using on-chain data and Chainlink oracles.",
    tags: ["Blockchain", "Machine Learning", "Web3"],
    github: "https://github.com/yourusername/cryptick",
    screenshots: [
      { src: "/cryp1.png", alt: "Dashboard" },
      { src: "/cryp2.png", alt: "Analysis" },
      { src: "/cryp3.png", alt: "Prediction Graph" },
    ],
  },
  {
    id: 2,
    title: "BooKaro",
    description:
      "A peer-to-peer book reselling e-commerce platform enabling students to buy and sell used books seamlessly.",
    tags: ["Full Stack", "React", "Node.js", "MongoDB"],
    github: "https://github.com/yourusername/bookaro",
    screenshots: [
      { src: "/bk1.png", alt: "Home Page" },
      { src: "/bk2.png", alt: "Listing Page" },
      { src: "/bk3.png", alt: "Chat Feature" },
    ],
  },
  {
    id: 3,
    title: "VoteChain",
    description:
      "A decentralized voting platform built with Solidity and Web3.js ensuring transparency, security, and anonymity in elections.",
    tags: ["Blockchain", "Solidity", "Web3.js"],
    github: "https://github.com/yourusername/votechain",
    screenshots: [
      { src: "/vc2.png", alt: "Login Page" },
      { src: "/vc3.png", alt: "Voting Interface" },
      { src: "/vc4.png", alt: "Results Dashboard" },
    ],
  },
]

export default function ProjectsFrame() {
  const [expandedId, setExpandedId] = useState<number | null>(null)
  const [carouselIndex, setCarouselIndex] = useState<Record<number, number>>({})
  const intervals = useRef<Record<number, NodeJS.Timeout>>({})

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.3 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  const handleMouseEnter = (projectId: number) => {
    setExpandedId(projectId)
    if (!carouselIndex[projectId]) {
      setCarouselIndex((prev) => ({ ...prev, [projectId]: 0 }))
    }

    if (intervals.current[projectId]) clearInterval(intervals.current[projectId])

    // Slow down carousel: now slides every 6 seconds instead of 3
    intervals.current[projectId] = setInterval(() => {
      setCarouselIndex((prev) => {
        const project = projects.find((p) => p.id === projectId)
        const nextIndex = ((prev[projectId] || 0) + 1) % project!.screenshots.length
        return { ...prev, [projectId]: nextIndex }
      })
    }, 6000)
  }

  const handleMouseLeave = (projectId: number) => {
    setExpandedId(null)
    if (intervals.current[projectId]) clearInterval(intervals.current[projectId])
  }

  useEffect(() => {
    return () => {
      Object.values(intervals.current).forEach(clearInterval)
    }
  }, [])

  return (
    <section
      id="projects"
      className="relative min-h-screen w-full bg-black px-6 md:px-12 py-24 flex items-center justify-center"
    >
      {/* Frame border */}
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
          {projects.map((project) => {
            const isExpanded = expandedId === project.id
            const currentSlide = carouselIndex[project.id] || 0
            

            return (
              <motion.div
                key={project.id}
                className="relative"
                variants={itemVariants}
                onMouseEnter={() => handleMouseEnter(project.id)}
                onMouseLeave={() => handleMouseLeave(project.id)}
              >
                <motion.div
                  className="border border-accent/20 bg-card p-8 cursor-pointer overflow-hidden"
                  animate={{ scale: isExpanded ? 1.08 : 1, zIndex: isExpanded ? 50 : 0 }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                >
                  {isExpanded ? (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                      className="space-y-4"
                    >
                      {/* Carousel */}
                      <div className="relative w-full aspect-video rounded-lg overflow-hidden bg-black/50 border border-accent/30">
                        <motion.img
                          key={currentSlide}
                          src={project.screenshots[currentSlide].src}
                          alt={project.screenshots[currentSlide].alt}
                          className="w-full h-full object-cover"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.6 }}
                        />
                        <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex gap-2">
                          {project.screenshots.map((_, idx) => (
                            <motion.button
                              key={idx}
                              onClick={(e) => {
                                e.stopPropagation()
                                setCarouselIndex((prev) => ({ ...prev, [project.id]: idx }))
                              }}
                              className={`h-1.5 rounded-full transition-all duration-300 ${
                                idx === currentSlide ? "bg-accent w-4" : "bg-accent/30 w-1.5"
                              }`}
                              whileHover={{ scale: 1.1 }}
                            />
                          ))}
                        </div>
                      </div>

                      {/* Info */}
                      <div>
                        <h3 className="text-lg font-bold mb-2 text-accent">{project.title}</h3>
                        <p className="text-sm text-muted-foreground mb-4">{project.description}</p>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {project.tags.map((tag) => (
                            <span
                              key={tag}
                              className="text-xs px-2 py-1 border border-accent/40 text-accent bg-accent/5 rounded"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>

                        {/* GitHub Button */}
                        <motion.a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.05 }}
                          className="inline-block text-sm text-accent border border-accent/40 px-4 py-2 rounded-lg hover:bg-accent hover:text-black transition-all duration-300"
                        >
                          View on GitHub
                        </motion.a>
                      </div>
                    </motion.div>
                  ) : (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }}>
                      <h3 className="text-xl font-bold group-hover:text-accent transition-colors">{project.title}</h3>
                      <p className="text-muted-foreground leading-relaxed line-clamp-2">{project.description}</p>
                      <div className="flex flex-wrap gap-2 mt-2">
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
                  )}
                </motion.div>
              </motion.div>
            )
          })}
        </motion.div>
      </motion.div>
    </section>
  )
}

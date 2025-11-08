"use client"

import { motion } from "framer-motion"

const blogPosts = [
  {
    id: 1,
    title: "Building AI-Driven User Interfaces",
    snippet:
      "Exploring how AI can enhance UX design and create more intuitive digital experiences through intelligent interfaces.",
    readTime: "5 min read",
  },
  {
    id: 2,
    title: "The Future of Human-Computer Interaction",
    snippet:
      "Deep dive into emerging HCI trends and how designers can adapt to create more accessible and inclusive products.",
    readTime: "8 min read",
  },
  {
    id: 3,
    title: "Design Systems & Scalable Development",
    snippet:
      "Best practices for building robust design systems that enable teams to work faster while maintaining consistency.",
    readTime: "6 min read",
  },
  {
    id: 4,
    title: "Framer Motion: Beyond Basic Animations",
    snippet:
      "Advanced techniques for creating delightful animations that improve user experience without sacrificing performance.",
    readTime: "7 min read",
  },
]

export default function BlogsFrame() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  return (
    <section
      id="blogs"
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
        <div className="absolute top-1/4 left-1/4 w-1/2 h-1/3 border-2 border-accent opacity-20" />
        <div className="absolute bottom-1/3 right-1/4 w-1/3 h-1/2 border-2 border-accent opacity-10" />
      </motion.div>

      <motion.div
        className="relative z-10 w-full max-w-6xl"
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
          Blog & Insights
        </motion.h2>

        <motion.div
          className="w-16 h-1 bg-accent mb-16"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        />

        <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-8" variants={containerVariants}>
          {blogPosts.map((post) => (
            <motion.article
              key={post.id}
              className="group border border-accent/20 bg-secondary/30 p-8 hover:border-accent/50 transition-all duration-300"
              variants={itemVariants}
              whileHover={{ y: -4 }}
            >
              <h3 className="text-2xl font-bold mb-3 text-foreground group-hover:text-accent transition-colors">
                {post.title}
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">{post.snippet}</p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground/70">{post.readTime}</span>
                <motion.button
                  className="text-accent font-semibold text-sm hover:translate-x-1 transition-transform"
                  whileHover={{ scale: 1.05 }}
                >
                  Read More →
                </motion.button>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}

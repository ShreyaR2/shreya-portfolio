"use client"

import { motion } from "framer-motion"
import { useState } from "react"

const skillTree = {
  core: {
    name: "Foundation",
    skills: ["Problem Solving", "Critical Thinking", "Learning Agility"],
  },
  branches: [
    {
      category: "Code",
      color: "#00BFA6",
      nodes: [
        { name: "Languages", skills: ["C++", "Python", "Solidity", "HTML/CSS", "Node.js"] },
        { name: "Development", skills: ["Web Dev", "Blockchain", "DSA", "Git/GitHub"] },
        { name: "Advanced", skills: ["Machine Learning", "Tkinter", "OpenCV"] },
      ],
    },
    {
      category: "Leadership",
      color: "#F59E0B",
      nodes: [
        { name: "Communication", skills: ["Public Speaking", "Debate", "Persuasion"] },
        { name: "Executive", skills: ["Sponsorship Lead", "Corporate Outreach", "Band Head"] },
        { name: "Management", skills: ["Team Coordination", "Conflict Resolution"] },
      ],
    },
    {
      category: "Music",
      color: "#8B5CF6",
      nodes: [
        { name: "Performance", skills: ["Vocalist", "College Band", "3000+ Audience Events"] },
        { name: "Production", skills: ["Audition Organizer", "Creative Direction"] },
        { name: "Marketing", skills: ["Social Media Promo", "Reel Ideation"] },
      ],
    },
  ],
}

export default function SkillsFrame() {
  const [activeNode, setActiveNode] = useState<string | null>(null)

  return (
    <section className="relative min-h-screen w-full bg-black px-6 md:px-12 py-24 flex items-center justify-center overflow-hidden">
      <motion.div
        className="relative z-10 w-full max-w-6xl"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <h2 className="text-5xl md:text-6xl font-bold mb-4 text-center text-white">Skill Tree</h2>
        <div className="w-16 h-1 bg-accent mx-auto mb-12" />

        <div className="relative mx-auto w-full max-w-5xl" style={{ height: "800px" }}>
          {/* SVG Lines */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none">
            {/* Code branch (top) */}
            <line x1="50%" y1="50%" x2="50%" y2="30%" stroke="#00BFA6" strokeWidth="2" strokeOpacity="0.4" />
            <line x1="50%" y1="30%" x2="50%" y2="15%" stroke="#00BFA6" strokeWidth="2" strokeOpacity="0.3" />
            <line x1="50%" y1="15%" x2="50%" y2="5%" stroke="#00BFA6" strokeWidth="2" strokeOpacity="0.2" />

            {/* Leadership branch (right) */}
            <line x1="50%" y1="50%" x2="70%" y2="65%" stroke="#F59E0B" strokeWidth="2" strokeOpacity="0.4" />
            <line x1="70%" y1="65%" x2="80%" y2="75%" stroke="#F59E0B" strokeWidth="2" strokeOpacity="0.3" />
            <line x1="80%" y1="75%" x2="90%" y2="85%" stroke="#F59E0B" strokeWidth="2" strokeOpacity="0.2" />

            {/* Music branch (left) */}
            <line x1="50%" y1="50%" x2="30%" y2="65%" stroke="#8B5CF6" strokeWidth="2" strokeOpacity="0.4" />
            <line x1="30%" y1="65%" x2="20%" y2="75%" stroke="#8B5CF6" strokeWidth="2" strokeOpacity="0.3" />
            <line x1="20%" y1="75%" x2="10%" y2="85%" stroke="#8B5CF6" strokeWidth="2" strokeOpacity="0.2" />
          </svg>

          {/* Core Node */}
          <motion.div
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
            onMouseEnter={() => setActiveNode("core")}
            onMouseLeave={() => setActiveNode(null)}
          >
            <motion.div
              className="w-32 h-32 rounded-full bg-gradient-to-br from-accent to-accent/40 flex items-center justify-center cursor-pointer shadow-[0_0_25px_rgba(0,191,166,0.4)]"
              whileHover={{ scale: 1.1 }}
            >
              <div className="text-center text-black">
                <div className="font-bold text-sm">CORE</div>
                <div className="text-xs opacity-80">{skillTree.core.name}</div>
              </div>
            </motion.div>
            {activeNode === "core" && (
              <div className="absolute top-full mt-3 left-1/2 -translate-x-1/2 bg-gray-900 text-accent border border-accent/40 rounded-lg p-3 text-xs w-56">
                {skillTree.core.skills.map((s) => (
                  <div key={s}>• {s}</div>
                ))}
              </div>
            )}
          </motion.div>

          {/* Code Branch - Top */}
          {[
            { name: "Languages", y: "29%", tier: 1, delay: 0.5 },
            { name: "Development", y: "14%", tier: 2, delay: 0.6 },
            { name: "Advanced", y: "0%", tier: 3, delay: 0.7 },
          ].map((node, idx) => (
            <motion.div
              key={node.name}
              className="absolute left-1/2 -translate-x-1/2"
              style={{ top: node.y }}
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 260, damping: 20, delay: node.delay }}
              onMouseEnter={() => setActiveNode(`Code-${node.name}`)}
              onMouseLeave={() => setActiveNode(null)}
            >
              <motion.div
                className="w-24 h-24 rounded-full flex items-center justify-center cursor-pointer relative"
                style={{
                  background: "radial-gradient(circle, #00BFA650, #00BFA620)",
                  border: "2px solid #00BFA6",
                }}
                whileHover={{ scale: 1.15 }}
                animate={{
                  boxShadow:
                    activeNode === `Code-${node.name}`
                      ? "0 0 25px #00BFA680"
                      : "0 0 10px #00BFA640",
                }}
              >
                <div className="text-center px-2">
                  <div className="text-xs font-bold mb-0.5 text-[#00BFA6]">T{node.tier}</div>
                  <div className="text-xs text-[#00BFA6]">{node.name}</div>
                </div>
                {activeNode === `Code-${node.name}` && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="absolute top-full mt-3 left-1/2 -translate-x-1/2 bg-gray-900 border border-[#00BFA6] rounded-lg p-4 w-64 z-50"
                  >
                    <div className="text-sm font-bold mb-2 text-[#00BFA6]">{node.name}</div>
                    <div className="space-y-1">
                      {skillTree.branches[0].nodes[idx].skills.map((skill) => (
                        <div key={skill} className="text-xs text-muted-foreground flex items-start gap-2">
                          <div className="w-1.5 h-1.5 rounded-full mt-1 flex-shrink-0 bg-[#00BFA6]" />
                          <span>{skill}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </motion.div>
            </motion.div>
          ))}

          {/* Leadership Branch Nodes */}
          {[
            { name: "Communication", x: "70%", y: "65%", color: "#F59E0B", tier: 1, delay: 0.5 },
            { name: "Executive", x: "80%", y: "75%", color: "#F59E0B", tier: 2, delay: 0.6 },
            { name: "Management", x: "90%", y: "85%", color: "#F59E0B", tier: 3, delay: 0.7 },
          ].map((node, i) => (
            <BranchNode
              key={node.name}
              x={node.x}
              y={node.y}
              color={node.color}
              title={node.name}
              tier={node.tier}
              skills={skillTree.branches[1].nodes[i].skills}
              activeNode={activeNode}
              setActiveNode={setActiveNode}
              delay={node.delay}
            />
          ))}

          {/* Music Branch Nodes */}
          {[
            { name: "Performance", x: "30%", y: "65%", color: "#8B5CF6", tier: 1, delay: 0.5 },
            { name: "Production", x: "20%", y: "75%", color: "#8B5CF6", tier: 2, delay: 0.6 },
            { name: "Marketing", x: "10%", y: "85%", color: "#8B5CF6", tier: 3, delay: 0.7 },
          ].map((node, i) => (
            <BranchNode
              key={node.name}
              x={node.x}
              y={node.y}
              color={node.color}
              title={node.name}
              tier={node.tier}
              skills={skillTree.branches[2].nodes[i].skills}
              activeNode={activeNode}
              setActiveNode={setActiveNode}
              delay={node.delay}
            />
          ))}
        </div>
      </motion.div>
    </section>
  )
}

interface BranchNodeProps {
  x: string;
  y: string;
  color: string;
  title: string;
  tier: number;
  skills: string[];
  activeNode: string | null;
  setActiveNode: (node: string | null) => void;
  delay: number;
}

function BranchNode({ x, y, color, title, tier, skills, activeNode, setActiveNode, delay }: BranchNodeProps) {
  return (
    <motion.div
      className="absolute -translate-x-1/2 -translate-y-1/2"
      style={{ left: x, top: y }}
      initial={{ scale: 0, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ type: "spring", stiffness: 260, damping: 20, delay }}
      onMouseEnter={() => setActiveNode(title)}
      onMouseLeave={() => setActiveNode(null)}
    >
      <motion.div
        className="w-24 h-24 rounded-full flex items-center justify-center cursor-pointer"
        style={{
          border: `2px solid ${color}`,
          background: `radial-gradient(circle, ${color}30, transparent)`,
        }}
        whileHover={{ scale: 1.15 }}
        animate={{
          boxShadow: activeNode === title ? `0 0 25px ${color}90` : `0 0 10px ${color}40`,
        }}
      >
        <div className="text-center px-2">
          <div className="text-xs font-bold mb-0.5" style={{ color }}>T{tier}</div>
          <div className="text-xs" style={{ color }}>{title}</div>
        </div>
      </motion.div>
      {activeNode === title && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="absolute top-full mt-3 left-1/2 -translate-x-1/2 bg-gray-900 border rounded-lg p-3 w-52 text-xs z-50"
          style={{ borderColor: color, color }}
        >
          <div className="font-bold mb-2">{title}</div>
          {skills.map((s) => (
            <div key={s} className="flex items-start gap-2">
              <div className="w-1.5 h-1.5 rounded-full mt-1 flex-shrink-0" style={{ backgroundColor: color }} />
              <span>{s}</span>
            </div>
          ))}
        </motion.div>
      )}
    </motion.div>
  )
}
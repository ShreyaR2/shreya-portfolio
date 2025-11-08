"use client"
import dynamic from 'next/dynamic'
import LandingFrame from "@/components/landing-frame"
import AboutFrame from "@/components/about-frame"
import BlogsFrame from "@/components/blogs-frame"
import ProjectsFrame from "@/components/projects-frame"
import SkillsFrame from "@/components/skills-frame"
import ContactFrame from "@/components/contact-frame"
import Gallery from "@/components/gallery"
import BackToTop from "@/components/back-to-top" 


const CyberGraphBackground = dynamic(
  () => import('@/components/cyber-graph-background'),
  { ssr: false }
)

export default function Home() {
  return (
    <main className="bg-black relative">
      <CyberGraphBackground />
      <LandingFrame />
      <AboutFrame />

      <ProjectsFrame />
      <SkillsFrame />
      <Gallery />
      <ContactFrame />
        <BackToTop /> 
    </main>
  )
}

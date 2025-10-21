"use client"

import { useEffect } from "react"
import Header from "@/components/header"
import Hero from "@/components/hero"
import About from "@/components/about"
import Skills from "@/components/skills"
import Projects from "@/components/projects"
import Workshops from "@/components/workshops"
import YoutubeVideos from "@/components/youtube-videos"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import SectionSeparator from "@/components/section-separator"

export default function Home() {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible")
        }
      })
    }, observerOptions)

    const elements = document.querySelectorAll(".scroll-reveal")
    elements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <SectionSeparator />
      <About />
      <SectionSeparator />
      <Skills />
      <SectionSeparator />
      <Projects />
      <SectionSeparator />
      <Workshops />
      <SectionSeparator />
      <YoutubeVideos />
      <SectionSeparator />
      <Contact />
      <Footer />
    </main>
  )
}

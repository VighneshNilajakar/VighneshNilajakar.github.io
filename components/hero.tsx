"use client"

import Image from "next/image"
import { ArrowRight, Github, Linkedin, Mail, Youtube, Facebook } from "lucide-react"

// Custom X (Twitter) icon component
const XIcon = ({ size = 20, className = "" }: { size?: number; className?: string }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
    <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
  </svg>
)

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20 overflow-hidden">
      {/* Animated Background gradient */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-accent/10 via-background to-accent/5 animate-gradient" />
      <div className="absolute inset-0 -z-10 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: "2s" }} />
      </div>

      <div className="max-w-6xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="space-y-8 animate-fade-in-up">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground leading-tight animate-slide-in" style={{ animationDelay: "0.1s" }}>
              Vighnesh Nilajakar
            </h1>
            <p className="text-xl text-foreground/70 animate-slide-in" style={{ animationDelay: "0.2s" }}>
              Electronics & Communication Engineering student specializing in embedded systems, edge-AI, and firmware
              development.
            </p>
          </div>

          <p className="text-lg text-foreground/60 leading-relaxed max-w-lg animate-slide-in" style={{ animationDelay: "0.3s" }}>
            Passionate about building innovative solutions at the intersection of hardware and AI. Currently exploring
            microcontroller programming, IoT systems, and intelligent edge computing.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4 animate-slide-in" style={{ animationDelay: "0.4s" }}>
            <a
              href="#projects"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-accent text-accent-foreground rounded-lg hover:bg-accent/90 hover:scale-105 transition-all font-medium shadow-lg hover:shadow-accent/50"
            >
              View My Work
              <ArrowRight size={18} />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-border text-foreground rounded-lg hover:bg-muted hover:scale-105 transition-all font-medium"
            >
              Get in Touch
            </a>
          </div>

          {/* Social Links */}
          <div className="animate-slide-in" style={{ animationDelay: "0.5s" }}>
            <p className="text-sm text-foreground/60 mb-3 font-medium">Connect with me:</p>
            <div className="flex flex-wrap gap-3">
              <a
                href="https://github.com/VighneshNilajakar"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg bg-muted hover:bg-accent hover:text-accent-foreground transition-all hover:scale-110 hover:shadow-lg group"
                aria-label="GitHub"
              >
                <Github size={22} className="group-hover:animate-bounce-subtle" />
              </a>
              <a
                href="https://linkedin.com/in/vighneshnilajakar"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg bg-muted hover:bg-accent hover:text-accent-foreground transition-all hover:scale-110 hover:shadow-lg group"
                aria-label="LinkedIn"
              >
                <Linkedin size={22} className="group-hover:animate-bounce-subtle" />
              </a>
              <a
                href="https://www.youtube.com/@vighneshnilajakar"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg bg-muted hover:bg-accent hover:text-accent-foreground transition-all hover:scale-110 hover:shadow-lg group"
                aria-label="YouTube"
              >
                <Youtube size={22} className="group-hover:animate-bounce-subtle" />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=100067126757072"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg bg-muted hover:bg-accent hover:text-accent-foreground transition-all hover:scale-110 hover:shadow-lg group"
                aria-label="Facebook"
              >
                <Facebook size={22} className="group-hover:animate-bounce-subtle" />
              </a>
              <a
                href="https://x.com/vinunilajakar"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg bg-muted hover:bg-accent hover:text-accent-foreground transition-all hover:scale-110 hover:shadow-lg group"
                aria-label="X (Twitter)"
              >
                <XIcon size={22} className="group-hover:animate-bounce-subtle" />
              </a>
              <a
                href="mailto:vighneshnilajakar2@gmail.com"
                className="p-3 rounded-lg bg-muted hover:bg-accent hover:text-accent-foreground transition-all hover:scale-110 hover:shadow-lg group"
                aria-label="Email"
              >
                <Mail size={22} className="group-hover:animate-bounce-subtle" />
              </a>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div
          className="relative h-96 md:h-full min-h-96 rounded-2xl overflow-hidden shadow-2xl animate-fade-in-up hover:shadow-accent/20 transition-shadow duration-300"
          style={{ animationDelay: "0.2s" }}
        >
          <Image
            src="/hero_image.jpg"
            alt="Vighnesh Nilajakar"
            fill
            className="object-cover hover:scale-105 transition-transform duration-500"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
        </div>
      </div>
    </section>
  )
}

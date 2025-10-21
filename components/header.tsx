"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import ResumeModal from "./resume-modal"
import ThemeToggle from "./theme-toggle"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#workshops", label: "Workshops" },
    { href: "#youtube", label: "YouTube" },
    { href: "#contact", label: "Contact" },
  ]

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <Link href="#" className="text-xl font-bold text-accent hover:text-accent/80 transition-colors">
          VN
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-foreground/70 hover:text-accent transition-colors"
            >
              {link.label}
            </a>
          ))}
          <div className="flex gap-3 items-center">
            <ThemeToggle />
            <ResumeModal />
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="flex md:hidden items-center gap-2">
          <ThemeToggle />
          <button className="p-2" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isOpen && (
          <div className="absolute top-full left-0 right-0 bg-background border-b border-border md:hidden">
            <div className="flex flex-col gap-4 p-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-foreground/70 hover:text-accent transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <div className="flex flex-col gap-3 pt-4 border-t border-border">
                <ResumeModal />
                <a
                  href="https://github.com/VighneshNilajakar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 border border-border text-foreground rounded-lg hover:bg-muted transition-colors text-sm font-medium text-center"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}

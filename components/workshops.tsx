"use client"

import { Award } from "lucide-react"

export default function Workshops() {
  const workshops = [
    {
      title: "NSM & C-DAC",
      subtitle: "Accelerated Computing & Generative AI",
      duration: "10-day STP",
      location: "WCE Sangli",
      description: "Explored parallel computing (MPI, OpenMP), CUDA/OpenACC, LLMs, and AI-driven optimizations.",
      highlights: ["Parallel Computing", "CUDA/OpenACC", "LLMs", "AI Optimization"],
    },
    {
      title: "KBR KRIYA CSR Initiative",
      subtitle: "Sustainable Tech & Digital Transformation",
      duration: "Immersion Program",
      location: "KBR Chennai",
      description:
        "Selected among Top 24 of 2,000+ participants. Focused on digital transformation, embedded systems, and AI in industrial operations.",
      highlights: ["Finalist (Top 24/2000+)", "Embedded Systems", "Industrial AI", "Sustainability"],
    },
    {
      title: "Hack2Intern",
      subtitle: "AI-Driven Data Visualization",
      duration: "Hackathon",
      location: "Virtual",
      description: "Finalist for ChartGPT project integrating embedded systems and cloud AI services.",
      highlights: ["Finalist", "Cloud Integration", "AI APIs", "Full-Stack"],
    },
  ]

  return (
    <section id="workshops" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 scroll-reveal">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Workshops & Immersions</h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            Continuous learning through specialized programs and industry collaborations
          </p>
        </div>

        <div className="space-y-6">
          {workshops.map((workshop, idx) => (
            <div
              key={idx}
              className="p-6 bg-card border border-border rounded-xl hover:border-accent/50 transition-colors scroll-reveal"
              style={{ transitionDelay: `${idx * 100}ms` }}
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-foreground">{workshop.title}</h3>
                  <p className="text-accent font-semibold text-sm mt-1">{workshop.subtitle}</p>
                </div>
                <Award className="text-accent flex-shrink-0" size={24} />
              </div>

              <div className="flex flex-wrap gap-4 text-sm text-foreground/60 mb-4">
                <span>{workshop.duration}</span>
                <span>•</span>
                <span>{workshop.location}</span>
              </div>

              <p className="text-foreground/70 mb-4">{workshop.description}</p>

              <div className="flex flex-wrap gap-2">
                {workshop.highlights.map((highlight, hIdx) => (
                  <span key={hIdx} className="px-3 py-1 bg-accent/10 text-accent rounded-full text-xs font-medium">
                    {highlight}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

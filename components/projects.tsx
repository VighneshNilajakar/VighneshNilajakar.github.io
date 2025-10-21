"use client"

import { Github, ExternalLink } from "lucide-react"

export default function Projects() {
  const projects = [
    {
      title: "ChartGPT",
      description:
        "AI-based data visualization tool using Firebase Auth, Google Charts, and Gemini AI API. Demonstrated embedded-to-cloud integration at Hack2Intern. Built with vanilla HTML, CSS, and JS.",
      tags: ["Firebase", "Gemini AI", "Google Charts", "Web", "JavaScript"],
      github: "https://github.com/VighneshNilajakar/ChartGPT",
      liveUrl: "https://chartgpt-tv.web.app",
      featured: true,
    },
    {
      title: "Student Innovation Club Website",
      description:
        "Developed and deployed a Hugo + Firebase-based website supporting event management and documentation workflows.",
      tags: ["Hugo", "Firebase", "Web Development"],
      github: "https://github.com/SICMMEC/SICMMEC.github.io",
      liveUrl: "https://sicmmec.github.io",
      featured: true,
    },
    {
      title: "ESP32-CAM AI Assistant",
      description:
        "Built a wearable prototype using ESP32-CAM for real-time image/audio capture and AI inference, enabling interactive voice-visual responses.",
      tags: ["ESP32", "Computer Vision", "AI Inference", "IoT"],
      github: "https://github.com/VighneshNilajakar/HOTPIN",
      featured: true,
    },
    {
      title: "Wheelauther - WiFi Security Research",
      description:
        "A forked version of code Deauther using ESP8266 to understand WiFi vulnerabilities. Built 2 sets of motor drivers to control the module and increase attack strength/vector. Studied 802.11 deauthentication packets and protocol vulnerabilities via custom firmware.",
      tags: ["ESP8266", "Networking", "Security", "Firmware", "IoT"],
      github: "https://github.com/VighneshNilajakar/Wheelauther",
      featured: true,
    },
    {
      title: "Airotor",
      description:
        "Automated medical rotor prototype integrating microcontrollers and sensors to enhance process efficiency. Medico-Engino project.",
      tags: ["Microcontroller", "Sensors", "Automation", "Medical"],
      github: "https://github.com/VighneshNilajakar",
    },
    {
      title: "Grocery Shop Management System",
      description:
        "A comprehensive management system for grocery shops with inventory tracking, billing, and customer management features.",
      tags: ["Database", "Management System", "Software"],
      github: "https://github.com/VighneshNilajakar/Grocery_Shop_Management_System",
    },
  ]

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 scroll-reveal">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Featured Projects</h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            A selection of projects showcasing my expertise in embedded systems and edge-AI
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className={`group p-6 bg-card border border-border rounded-xl hover:border-accent/50 hover-lift transition-all scroll-reveal ${
                project.featured ? "md:col-span-1" : ""
              }`}
              style={{ transitionDelay: `${idx * 100}ms` }}
            >
              <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-accent transition-colors">
                {project.title}
              </h3>
              <p className="text-foreground/70 mb-4 leading-relaxed">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, tagIdx) => (
                  <span key={tagIdx} className="px-2 py-1 bg-accent/10 text-accent rounded text-xs font-medium">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex gap-3 pt-4 border-t border-border">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-accent hover:text-accent/80 transition-all hover:scale-105 text-sm font-medium"
                >
                  <Github size={16} />
                  Code
                </a>
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-accent hover:text-accent/80 transition-all hover:scale-105 text-sm font-medium"
                  >
                    <ExternalLink size={16} />
                    View Live
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

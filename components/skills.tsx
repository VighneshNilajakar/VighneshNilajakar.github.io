"use client"

export default function Skills() {
  const skillCategories = [
    {
      title: "Embedded & Firmware",
      skills: ["C Programming", "Python", "Arduino/ESP32", "Raspberry Pi", "GPIO", "SPI", "I2C", "UART", "Timers", "Sensors"],
    },
    {
      title: "Edge & AI Interface",
      skills: [
        "Local LLMs",
        "AI Prompt Workflows",
        "Gemini AI API",
        "Productivity Automation",
        "Embedded Data Streaming",
      ],
    },
    {
      title: "Systems & Tools",
      skills: ["Linux CLI", "Shell Scripting", "Git/GitHub", "Firebase", "MySQL", "AI Tools"],
    },
    {
      title: "Web & Prototyping",
      skills: ["HTML", "CSS", "JavaScript", "Hugo", "Responsive Design", "GitHub Pages"],
    },
  ]

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 scroll-reveal">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Technical Skills</h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            A comprehensive toolkit built through hands-on projects and continuous learning
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, idx) => (
            <div
              key={idx}
              className="p-6 bg-card border border-border rounded-xl hover:border-accent/50 hover-lift transition-all scroll-reveal"
              style={{ transitionDelay: `${idx * 100}ms` }}
            >
              <h3 className="text-xl font-bold text-foreground mb-4">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIdx) => (
                  <span key={skillIdx} className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-all hover:scale-110 cursor-default">
                    {skill}
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

"use client"

export default function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Left Column - Title */}
          <div className="md:col-span-1">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground scroll-reveal">About Me</h2>
          </div>

          {/* Right Column - Content */}
          <div className="md:col-span-2 space-y-6 scroll-reveal">
            <p className="text-lg text-foreground/70 leading-relaxed">
              I'm an Electronics & Communication Engineering student in my 7th semester at Maratha Mandal's Engineering
              College (MMEC), VTU, with a CGPA of 7.5. I actively keep up with emerging technologies to understand how
              they work, which helps me design high-level technical architectures, build efficient projects, and
              integrate new innovations effectively.
            </p>

            <p className="text-lg text-foreground/70 leading-relaxed">
              My passion lies in firmware development, microcontroller programming, and edge-AI integrations. I'm
              particularly interested in building wearable prototypes, IoT systems, and exploring how artificial
              intelligence can be deployed efficiently on resource-constrained devices. I believe in learning by
              doing—rapid prototyping and hands-on experimentation are core to my approach.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 pt-6">
              <div className="p-4 bg-background rounded-lg border border-border hover-lift hover:border-accent/50 transition-all stagger-item">
                <p className="text-sm text-foreground/60 mb-1">Location</p>
                <p className="font-semibold text-foreground">Belagavi, Karnataka</p>
              </div>
              <div className="p-4 bg-background rounded-lg border border-border hover-lift hover:border-accent/50 transition-all stagger-item">
                <p className="text-sm text-foreground/60 mb-1">Education</p>
                <p className="font-semibold text-foreground">B.E. ECE (2026)</p>
              </div>
              <div className="p-4 bg-background rounded-lg border border-border hover-lift hover:border-accent/50 transition-all stagger-item">
                <p className="text-sm text-foreground/60 mb-1">CGPA</p>
                <p className="font-semibold text-foreground">7.5 / 10</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

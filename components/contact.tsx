"use client"

import { Mail, Phone, MapPin, Github, Linkedin, ExternalLink, Facebook, Youtube } from "lucide-react"

// Custom X (Twitter) icon component since lucide-react uses "Twitter" name
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

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16 scroll-reveal">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Get in Touch</h2>
          <p className="text-lg text-foreground/60">
            I'm always interested in hearing about new projects and opportunities.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Contact Info */}
          <div className="space-y-6 scroll-reveal">
            <div className="flex gap-4">
              <Mail className="text-accent flex-shrink-0 mt-1" size={24} />
              <div>
                <p className="text-sm text-foreground/60 mb-1">Email</p>
                <a
                  href="mailto:vighneshnilajakar2@gmail.com"
                  className="text-foreground hover:text-accent transition-colors font-medium"
                >
                  vighneshnilajakar2@gmail.com
                </a>
              </div>
            </div>

            <div className="flex gap-4">
              <Phone className="text-accent flex-shrink-0 mt-1" size={24} />
              <div>
                <p className="text-sm text-foreground/60 mb-1">Phone</p>
                <a href="tel:+919739797009" className="text-foreground hover:text-accent transition-colors font-medium">
                  +91-9739797009
                </a>
              </div>
            </div>

            <div className="flex gap-4">
              <MapPin className="text-accent flex-shrink-0 mt-1" size={24} />
              <div>
                <p className="text-sm text-foreground/60 mb-1">Location</p>
                <p className="text-foreground font-medium">Belagavi, Karnataka, India</p>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="space-y-6 scroll-reveal">
            <div>
              <p className="text-sm text-foreground/60 mb-4 font-semibold">Connect with me</p>
              <div className="space-y-3">
                <a
                  href="https://github.com/VighneshNilajakar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 bg-card border border-border rounded-lg hover:border-accent/50 hover:bg-accent/5 transition-colors"
                >
                  <Github size={20} className="text-accent" />
                  <span className="text-foreground font-medium">GitHub</span>
                  <ExternalLink size={16} className="text-foreground/40 ml-auto" />
                </a>

                <a
                  href="https://linkedin.com/in/vighneshnilajakar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 bg-card border border-border rounded-lg hover:border-accent/50 hover:bg-accent/5 transition-colors"
                >
                  <Linkedin size={20} className="text-accent" />
                  <span className="text-foreground font-medium">LinkedIn</span>
                  <ExternalLink size={16} className="text-foreground/40 ml-auto" />
                </a>

                <a
                  href="https://www.youtube.com/@vighneshnilajakar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 bg-card border border-border rounded-lg hover:border-accent/50 hover:bg-accent/5 transition-colors"
                >
                  <Youtube size={20} className="text-accent" />
                  <span className="text-foreground font-medium">YouTube</span>
                  <ExternalLink size={16} className="text-foreground/40 ml-auto" />
                </a>

                <a
                  href="https://www.facebook.com/profile.php?id=100067126757072"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 bg-card border border-border rounded-lg hover:border-accent/50 hover:bg-accent/5 transition-colors"
                >
                  <Facebook size={20} className="text-accent" />
                  <span className="text-foreground font-medium">Facebook</span>
                  <ExternalLink size={16} className="text-foreground/40 ml-auto" />
                </a>

                <a
                  href="https://x.com/vinunilajakar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 bg-card border border-border rounded-lg hover:border-accent/50 hover:bg-accent/5 transition-colors"
                >
                  <XIcon size={20} className="text-accent" />
                  <span className="text-foreground font-medium">X (Twitter)</span>
                  <ExternalLink size={16} className="text-foreground/40 ml-auto" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center p-8 bg-card border border-border rounded-xl scroll-reveal">
          <p className="text-foreground/70 mb-4">
            Whether you have a question or just want to say hello, feel free to reach out!
          </p>
          <a
            href="mailto:vighneshnilajakar2@gmail.com"
            className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-accent-foreground rounded-lg hover:bg-accent/90 transition-colors font-medium"
          >
            <Mail size={18} />
            Send me an Email
          </a>
        </div>
      </div>
    </section>
  )
}

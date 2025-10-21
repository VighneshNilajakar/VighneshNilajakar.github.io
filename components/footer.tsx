"use client"

// Custom X (Twitter) icon component
const XIcon = ({ className = "" }: { className?: string }) => (
  <svg
    width="16"
    height="16"
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

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-foreground/5 border-t border-border py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-lg font-bold text-foreground mb-2">Vighnesh Nilajakar</h3>
            <p className="text-foreground/60 text-sm">Embedded Systems & Edge AI Engineer</p>
          </div>

          {/* Quick Links */}
          <div>
            <p className="text-sm font-semibold text-foreground mb-4">Quick Links</p>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#about" className="text-foreground/60 hover:text-accent transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#projects" className="text-foreground/60 hover:text-accent transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a href="#youtube" className="text-foreground/60 hover:text-accent transition-colors">
                  YouTube
                </a>
              </li>
              <li>
                <a href="#contact" className="text-foreground/60 hover:text-accent transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <p className="text-sm font-semibold text-foreground mb-4">Follow</p>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="https://github.com/VighneshNilajakar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground/60 hover:text-accent transition-colors"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com/in/vighneshnilajakar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground/60 hover:text-accent transition-colors"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://www.youtube.com/@vighneshnilajakar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground/60 hover:text-accent transition-colors"
                >
                  YouTube
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/profile.php?id=100067126757072"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground/60 hover:text-accent transition-colors"
                >
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href="https://x.com/vinunilajakar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground/60 hover:text-accent transition-colors inline-flex items-center gap-1"
                >
                  <XIcon className="inline" />
                  <span>X (Twitter)</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 text-center">
          <p className="text-sm text-foreground/60">© {currentYear} Vighnesh Nilajakar. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

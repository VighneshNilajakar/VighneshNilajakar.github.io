"use client"

import { FileText } from "lucide-react"

export default function ResumeModal() {
  const resumePdfPath = "/RESUME.pdf"

  const handleOpenResume = () => {
    window.open(resumePdfPath, "_blank")
  }

  return (
    <button
      onClick={handleOpenResume}
      className="inline-flex items-center gap-2 px-4 py-2 bg-accent text-accent-foreground rounded-lg hover:bg-accent/90 hover:scale-105 transition-all text-sm font-medium whitespace-nowrap shadow-lg"
    >
      <FileText size={18} />
      Resume
    </button>
  )
}

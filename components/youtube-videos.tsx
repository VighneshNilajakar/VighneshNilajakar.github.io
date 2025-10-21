"use client"

import { useCallback, useEffect, useState } from "react"
import useEmblaCarousel from "embla-carousel-react"
import { ChevronLeft, ChevronRight, Youtube, ExternalLink } from "lucide-react"

// Featured videos from the channel
// You can update these video IDs with your actual video IDs from your YouTube channel
const featuredVideos = [
  {
    id: "f4-oI89tV7E",
    title: "WebDev AI Tools",
    description: "Create & Host a Portfolio Website Using AI Tools",
  },
  {
    id: "tXyKViaKUd8",
    title: "Debloat Windows",
    description: "Ultimate Guide to Debloating Windows 10 & 11",
  },
  {
    id: "6qq1pvhh9VI",
    title: "ChartGPT Demo",
    description: "The ultimate AI-powered chart generation tool",
  },
  {
    id: "q7Hm1oAZyU0",
    title: "Design to Hosting",
    description: "Mastering Website Creation with Google Site and GitHub Pages",
  }
]

export default function YoutubeVideos() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" })
  const [canScrollPrev, setCanScrollPrev] = useState(false)
  const [canScrollNext, setCanScrollNext] = useState(false)

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setCanScrollPrev(emblaApi.canScrollPrev())
    setCanScrollNext(emblaApi.canScrollNext())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    onSelect()
    emblaApi.on("select", onSelect)
    emblaApi.on("reInit", onSelect)
  }, [emblaApi, onSelect])

  return (
    <section id="youtube" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 scroll-reveal">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Youtube className="text-accent" size={40} />
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">YouTube Channel</h2>
          </div>
          <p className="text-lg text-foreground/60">
            Check out my latest videos on web development, AI tools, and tech tutorials
          </p>
        </div>

        {/* Carousel */}
        <div className="relative scroll-reveal mb-8">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-6">
              {featuredVideos.map((video) => (
                <div
                  key={video.id}
                  className="flex-[0_0_100%] min-w-0 sm:flex-[0_0_calc(50%-12px)] lg:flex-[0_0_calc(33.333%-16px)]"
                >
                  <div className="bg-card border border-border rounded-xl overflow-hidden hover:border-accent/50 hover-lift transition-all h-full flex flex-col">
                    <div className="relative aspect-video bg-muted flex-shrink-0">
                      <iframe
                        src={`https://www.youtube.com/embed/${video.id}`}
                        title={video.title}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="absolute inset-0 w-full h-full"
                      />
                    </div>
                    <div className="p-5 flex flex-col flex-grow">
                      <h3 className="font-semibold text-foreground mb-2 text-base line-clamp-1">{video.title}</h3>
                      <p className="text-sm text-foreground/60 line-clamp-2 flex-grow">{video.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={scrollPrev}
            disabled={!canScrollPrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-12 h-12 rounded-full bg-card border border-border shadow-lg flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-all disabled:opacity-50 disabled:cursor-not-allowed hover:scale-110"
            aria-label="Previous video"
          >
            <ChevronLeft size={24} />
          </button>

          <button
            onClick={scrollNext}
            disabled={!canScrollNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-12 h-12 rounded-full bg-card border border-border shadow-lg flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-all disabled:opacity-50 disabled:cursor-not-allowed hover:scale-110"
            aria-label="Next video"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Visit Channel Button - Now below carousel */}
        <div className="text-center scroll-reveal">
          <a
            href="https://www.youtube.com/@vighneshnilajakar"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-accent-foreground rounded-lg hover:bg-accent/90 hover:scale-105 transition-all font-medium shadow-lg"
          >
            <Youtube size={20} />
            Visit My Channel
            <ExternalLink size={16} />
          </a>
        </div>
      </div>
    </section>
  )
}

"use client"

import { useEffect, useState } from "react"

interface CarouselSlide {
  id: number
  title: string
  description: string
  image: string
  badge?: string
}

const defaultSlides: CarouselSlide[] = [
  {
    id: 1,
    title: "Formula 188CM",
    description: "Premium Height Growth Supplement - Natural & Scientifically Formulated",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/33k-3NmR7Ht0sVJ6PVqkfe6l8MvSekXSCK.jpg",
    badge: "Professional Grade",
  },
  {
    id: 2,
    title: "Reach New Heights",
    description: "Advanced Growth Support with Natural Ingredients",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/22-ElqzjDe5ZGHnB0ZWAHP0xfF0vshXPp.jpg",
    badge: "Best Seller",
  },
  {
    id: 3,
    title: "Premium Formula",
    description: "Golden Blend - Enhanced Nutrient Absorption",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/44-RbEPHe3M0S5KP0t7hcALao98TIPCpV.jpg",
    badge: "Most Popular",
  },
  {
    id: 4,
    title: "Luxury Series",
    description: "Premium Formulation with Advanced Benefits",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/11-8N6DVhVWmtJW6JHcxxOCfw6y851Ec6.jpg",
    badge: "Premium",
  },
]

export function ProductCarousel({ slides = defaultSlides }: { slides?: CarouselSlide[] }) {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [autoPlay, setAutoPlay] = useState(true)
  const [isTransitioning, setIsTransitioning] = useState(false)

  useEffect(() => {
    if (!autoPlay) return

    const interval = setInterval(() => {
      setIsTransitioning(true)
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 3500)

    return () => clearInterval(interval)
  }, [autoPlay, slides.length])

  const nextSlide = () => {
    setIsTransitioning(true)
    setCurrentSlide((prev) => (prev + 1) % slides.length)
    setAutoPlay(false)
    setTimeout(() => setAutoPlay(true), 2000)
  }

  const prevSlide = () => {
    setIsTransitioning(true)
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
    setAutoPlay(false)
    setTimeout(() => setAutoPlay(true), 2000)
  }

  const goToSlide = (index: number) => {
    setIsTransitioning(true)
    setCurrentSlide(index)
    setAutoPlay(false)
    setTimeout(() => setAutoPlay(true), 2000)
  }

  return (
    <div className="relative w-full h-full group bg-black overflow-hidden rounded-2xl shadow-2xl">
      <div className="relative w-full h-full flex items-center justify-center">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-all duration-700 ease-in-out flex items-center justify-center ${
              index === currentSlide ? "opacity-100 scale-100" : "opacity-0 scale-98"
            }`}
          >
            {/* Image container with proper aspect ratio and no cutting */}
            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black p-4 sm:p-6 md:p-8">
              <img
                src={slide.image || "/placeholder.svg"}
                alt={slide.title}
                className="max-w-full max-h-full w-auto h-auto object-contain drop-shadow-2xl"
              />
            </div>

            {/* Premium gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent" />

            {/* Premium content overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 md:p-10 text-white">
              {slide.badge && (
                <div className="mb-4 md:mb-6 animate-fade-in-down">
                  <span className="inline-block px-4 sm:px-6 py-2 sm:py-2.5 bg-white/20 backdrop-blur-xl rounded-full text-xs sm:text-sm font-bold border border-white/40 hover:bg-white/30 hover:border-white/60 transition-all duration-300 shadow-lg">
                    ✨ {slide.badge}
                  </span>
                </div>
              )}
              <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-black mb-2 sm:mb-3 md:mb-4 animate-fade-in-up leading-tight tracking-tight drop-shadow-lg">
                {slide.title}
              </h2>
              <p className="text-xs sm:text-sm md:text-lg text-white/85 animate-fade-in-up animation-delay-100 max-w-2xl font-medium leading-relaxed drop-shadow-md">
                {slide.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={prevSlide}
        className="absolute left-3 sm:left-4 md:left-6 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/40 backdrop-blur-lg text-white p-2.5 sm:p-3 md:p-4 rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100 hover:scale-125 text-base sm:text-lg md:text-xl font-bold shadow-xl hover:shadow-2xl border border-white/30"
        aria-label="Previous slide"
      >
        ❮
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-3 sm:right-4 md:right-6 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/40 backdrop-blur-lg text-white p-2.5 sm:p-3 md:p-4 rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100 hover:scale-125 text-base sm:text-lg md:text-xl font-bold shadow-xl hover:shadow-2xl border border-white/30"
        aria-label="Next slide"
      >
        ❯
      </button>

      <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 flex gap-2.5 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`rounded-full transition-all duration-500 backdrop-blur-md border border-white/40 ${
              index === currentSlide
                ? "w-8 sm:w-9 md:w-10 h-3 sm:h-3.5 md:h-4 bg-white shadow-xl scale-110"
                : "w-2.5 sm:w-3 md:w-3.5 h-2.5 sm:h-3 md:h-3.5 bg-white/40 hover:bg-white/70 hover:scale-110"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      <div className="absolute top-4 sm:top-5 md:top-6 right-4 sm:right-5 md:right-6 z-20">
        <button
          onClick={() => setAutoPlay(!autoPlay)}
          className="px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm bg-white/15 hover:bg-white/30 backdrop-blur-lg rounded-full text-white transition-all duration-300 font-bold border border-white/30 shadow-lg hover:shadow-xl"
        >
          {autoPlay ? "▶ Auto" : "⏸ Manual"}
        </button>
      </div>

      <div className="absolute top-4 sm:top-5 md:top-6 left-4 sm:left-5 md:left-6 z-20">
        <div className="px-3 sm:px-4 py-1.5 sm:py-2 bg-white/15 backdrop-blur-lg rounded-full text-white text-xs sm:text-sm font-bold border border-white/30 shadow-lg">
          {currentSlide + 1} / {slides.length}
        </div>
      </div>
    </div>
  )
}

'use client'

import { motion, type Variants } from 'framer-motion'
import { Sparkles, ChevronDown } from 'lucide-react'
import { useEffect, useRef } from 'react'
import Image from 'next/image'
import { useBooking } from './BookingProvider'

const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || ''

interface WaveConfig {
  offset: number
  amplitude: number
  frequency: number
  color: string
  opacity: number
}

const containerVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, staggerChildren: 0.12 },
  },
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

export default function WavesHero() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const sectionRef = useRef<HTMLElement | null>(null)
  const mouseRef = useRef({ x: 0, y: 0 })
  const targetMouseRef = useRef({ x: 0, y: 0 })
  const { open } = useBooking()

  useEffect(() => {
    const canvas = canvasRef.current
    const section = sectionRef.current
    if (!canvas || !section) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationId: number
    let time = 0

    const wavePalette: WaveConfig[] = [
      { offset: 0, amplitude: 80, frequency: 0.0026, color: 'rgba(201,169,122,0.95)', opacity: 0.65 },
      { offset: Math.PI / 2, amplitude: 100, frequency: 0.0022, color: 'rgba(201,169,122,0.8)', opacity: 0.5 },
      { offset: Math.PI, amplitude: 65, frequency: 0.003, color: 'rgba(255,255,255,0.7)', opacity: 0.35 },
      { offset: Math.PI * 1.4, amplitude: 90, frequency: 0.0018, color: 'rgba(201,169,122,0.6)', opacity: 0.3 },
    ]

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const mouseInfluence = prefersReducedMotion ? 10 : 70
    const influenceRadius = prefersReducedMotion ? 160 : 320
    const smoothing = prefersReducedMotion ? 0.04 : 0.1

    const resize = () => {
      const rect = section.getBoundingClientRect()
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      canvas.width = rect.width * dpr
      canvas.height = rect.height * dpr
      canvas.style.width = `${rect.width}px`
      canvas.style.height = `${rect.height}px`
      ctx.setTransform(1, 0, 0, 1, 0, 0)
      ctx.scale(dpr, dpr)
    }
    const recenter = () => {
      const rect = section.getBoundingClientRect()
      const c = { x: rect.width / 2, y: rect.height / 2 }
      mouseRef.current = c
      targetMouseRef.current = c
    }
    resize()
    recenter()

    const onResize = () => {
      resize()
      recenter()
    }
    const onMove = (e: MouseEvent) => {
      const rect = section.getBoundingClientRect()
      targetMouseRef.current = { x: e.clientX - rect.left, y: e.clientY - rect.top }
    }
    const onLeave = () => recenter()
    window.addEventListener('resize', onResize)
    window.addEventListener('mousemove', onMove)
    window.addEventListener('mouseleave', onLeave)

    const drawWave = (wave: WaveConfig) => {
      const rect = section.getBoundingClientRect()
      const w = rect.width
      const h = rect.height
      ctx.save()
      ctx.beginPath()
      for (let x = 0; x <= w; x += 4) {
        const dx = x - mouseRef.current.x
        const dy = h / 2 - mouseRef.current.y
        const dist = Math.sqrt(dx * dx + dy * dy)
        const influence = Math.max(0, 1 - dist / influenceRadius)
        const mouseEffect = influence * mouseInfluence * Math.sin(time * 0.001 + x * 0.01 + wave.offset)
        const y =
          h / 2 +
          Math.sin(x * wave.frequency + time * 0.002 + wave.offset) * wave.amplitude +
          Math.sin(x * wave.frequency * 0.4 + time * 0.003) * (wave.amplitude * 0.45) +
          mouseEffect
        if (x === 0) ctx.moveTo(x, y)
        else ctx.lineTo(x, y)
      }
      ctx.lineWidth = 2.5
      ctx.strokeStyle = wave.color
      ctx.globalAlpha = wave.opacity
      ctx.shadowBlur = 35
      ctx.shadowColor = wave.color
      ctx.stroke()
      ctx.restore()
    }

    const animate = () => {
      time += 1
      mouseRef.current.x += (targetMouseRef.current.x - mouseRef.current.x) * smoothing
      mouseRef.current.y += (targetMouseRef.current.y - mouseRef.current.y) * smoothing

      const rect = section.getBoundingClientRect()
      ctx.clearRect(0, 0, rect.width, rect.height)
      ctx.globalAlpha = 1
      ctx.shadowBlur = 0
      wavePalette.forEach(drawWave)

      animationId = window.requestAnimationFrame(animate)
    }
    animationId = window.requestAnimationFrame(animate)

    return () => {
      window.removeEventListener('resize', onResize)
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mouseleave', onLeave)
      cancelAnimationFrame(animationId)
    }
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative isolate w-full min-h-screen overflow-hidden bg-[#0a0a0a]"
      role="region"
      aria-label="Dr. Anton Kamel — hero"
    >
      {/* LAYER 1 — Foto Anton full bleed background */}
      <div className="absolute inset-0">
        <Image
          src={`${BASE_PATH}/hero-image.jpg`}
          alt="Dr. Anton Kamel — Medico Estetico Verona"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[28%_85%] md:object-[30%_center]"
          style={{ filter: 'brightness(0.55) contrast(1.05) saturate(1.05)' }}
        />
      </div>

      {/* LAYER 2 — Gradient overlays per leggibilità testo */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/35 to-black/95" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-transparent to-black/40 hidden md:block" />

      {/* LAYER 3 — Wave canvas SOPRA foto, parte mid-bottom della section */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
        aria-hidden="true"
      />

      {/* LAYER 4 — Soft glows decorativi */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-1/2 top-1/3 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-[#C9A97A]/[0.08] blur-[140px]" />
      </div>

      {/* LAYER 5 — Contenuto */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-end md:justify-center px-6 pt-24 pb-20 md:pt-32 md:pb-28">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="w-full max-w-3xl text-center"
        >
          {/* Brand pill */}
          <motion.div
            variants={itemVariants}
            className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/40 px-3 py-1 backdrop-blur-md"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-[#C9A97A]" />
            <span className="text-[10px] tracking-[0.2em] text-white/80 uppercase">
              Dr. Anton Kamel · Verona
            </span>
          </motion.div>

          {/* Anton Lips authority badge */}
          <motion.div
            variants={itemVariants}
            className="mb-5 inline-flex items-center gap-2 rounded-full bg-[#C9A97A]/15 border border-[#C9A97A]/40 px-3 py-1 backdrop-blur-md"
          >
            <Sparkles size={11} className="text-[#C9A97A]" />
            <span className="text-[10px] tracking-wider text-[#C9A97A] font-semibold uppercase">
              Ideatore Anton Lips Technique™
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tighter text-white leading-[1.05]"
            style={{ textShadow: '0 2px 24px rgba(0,0,0,0.5)' }}
          >
            Risultati naturali.
            <br />
            <span className="text-[#C9A97A]">Mai maschere.</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
            className="mt-5 max-w-xl mx-auto text-base sm:text-lg md:text-xl text-white/85 leading-relaxed"
            style={{ textShadow: '0 1px 12px rgba(0,0,0,0.6)' }}
          >
            Medicina estetica costruita su di te. Filler, botulino, rinofiller —
            con un approccio medico, mai standard.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={itemVariants}
            className="mt-8 flex flex-col items-center gap-3"
          >
            <button
              onClick={() => open('Hero CTA')}
              className="w-full sm:w-auto inline-flex items-center justify-center rounded-full bg-[#C9A97A] px-10 py-4 text-black font-semibold text-base sm:text-lg hover:scale-[1.03] active:scale-[0.98] transition-transform cursor-pointer"
              style={{ boxShadow: '0 0 40px rgba(201,169,122,0.55)' }}
            >
              Prenota la consulenza →
            </button>
            <button
              onClick={() => {
                const el = document.querySelector('#trattamenti')
                if (el) el.scrollIntoView({ behavior: 'smooth' })
              }}
              className="text-sm text-white/65 hover:text-[#C9A97A] underline-offset-4 hover:underline transition-colors cursor-pointer"
            >
              o vedi prima i trattamenti
            </button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 pointer-events-none z-20"
      >
        <span className="text-[10px] tracking-widest uppercase text-white/55">Scorri</span>
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown size={16} className="text-white/55" />
        </motion.div>
      </motion.div>
    </section>
  )
}

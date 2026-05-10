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
  const mouseRef = useRef({ x: 0, y: 0 })
  const targetMouseRef = useRef({ x: 0, y: 0 })
  const { open } = useBooking()

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationId: number
    let time = 0

    const wavePalette: WaveConfig[] = [
      { offset: 0, amplitude: 70, frequency: 0.003, color: 'rgba(201,169,122,0.85)', opacity: 0.5 },
      { offset: Math.PI / 2, amplitude: 90, frequency: 0.0026, color: 'rgba(201,169,122,0.65)', opacity: 0.4 },
      { offset: Math.PI, amplitude: 60, frequency: 0.0034, color: 'rgba(201,169,122,0.5)', opacity: 0.3 },
      { offset: Math.PI * 1.5, amplitude: 80, frequency: 0.0022, color: 'rgba(255,255,255,0.3)', opacity: 0.25 },
      { offset: Math.PI * 2, amplitude: 55, frequency: 0.004, color: 'rgba(201,169,122,0.4)', opacity: 0.2 },
    ]

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const mouseInfluence = prefersReducedMotion ? 10 : 70
    const influenceRadius = prefersReducedMotion ? 160 : 320
    const smoothing = prefersReducedMotion ? 0.04 : 0.1

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      canvas.width = window.innerWidth * dpr
      canvas.height = window.innerHeight * dpr
      canvas.style.width = `${window.innerWidth}px`
      canvas.style.height = `${window.innerHeight}px`
      ctx.scale(dpr, dpr)
    }
    const recenter = () => {
      const c = { x: window.innerWidth / 2, y: window.innerHeight / 2 }
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
      targetMouseRef.current = { x: e.clientX, y: e.clientY }
    }
    const onLeave = () => recenter()
    window.addEventListener('resize', onResize)
    window.addEventListener('mousemove', onMove)
    window.addEventListener('mouseleave', onLeave)

    const drawWave = (wave: WaveConfig) => {
      ctx.save()
      ctx.beginPath()
      const w = window.innerWidth
      const h = window.innerHeight
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
      ctx.lineWidth = 2.2
      ctx.strokeStyle = wave.color
      ctx.globalAlpha = wave.opacity
      ctx.shadowBlur = 30
      ctx.shadowColor = wave.color
      ctx.stroke()
      ctx.restore()
    }

    const animate = () => {
      time += 1
      mouseRef.current.x += (targetMouseRef.current.x - mouseRef.current.x) * smoothing
      mouseRef.current.y += (targetMouseRef.current.y - mouseRef.current.y) * smoothing

      const grad = ctx.createLinearGradient(0, 0, 0, window.innerHeight)
      grad.addColorStop(0, '#0a0a0a')
      grad.addColorStop(1, '#050505')
      ctx.fillStyle = grad
      ctx.fillRect(0, 0, window.innerWidth, window.innerHeight)

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
      className="relative isolate w-full min-h-screen overflow-hidden bg-[#0a0a0a]"
      role="region"
      aria-label="Dr. Anton Kamel — hero"
    >
      {/* Wave canvas — sfondo */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 h-full w-full"
        aria-hidden="true"
      />

      {/* Soft glows */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute left-1/2 top-0 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-[#C9A97A]/[0.04] blur-[140px]" />
        <div className="absolute bottom-0 right-0 h-[360px] w-[360px] rounded-full bg-[#C9A97A]/[0.03] blur-[120px]" />
      </div>

      {/* Mobile: foto bleed top + content sotto.
          Desktop: split 2 colonne (text sx, foto half dx). */}
      <div className="relative z-10 min-h-screen flex flex-col md:grid md:grid-cols-12 md:items-center md:gap-8 lg:gap-12 max-w-7xl mx-auto px-6 pt-24 pb-12 md:pt-20 md:pb-16">

        {/* MOBILE — foto sopra, full bleed */}
        <div className="md:hidden -mx-6 mb-6">
          <div className="relative aspect-[4/5] w-full overflow-hidden">
            <Image
              src={`${BASE_PATH}/hero-image.jpg`}
              alt="Dr. Anton Kamel — Medico Estetico Verona"
              fill
              priority
              sizes="100vw"
              className="object-cover object-[42%_28%]"
              style={{ filter: 'brightness(0.85) contrast(1.05)' }}
            />
            <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-b from-transparent to-[#0a0a0a]" />
            {/* Cornice gold sottile decorativa */}
            <div className="pointer-events-none absolute inset-3 sm:inset-5 rounded-[2rem] border border-[#C9A97A]/30" />
          </div>
        </div>

        {/* TEXT COLUMN */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="md:col-span-7 lg:col-span-6 text-center md:text-left"
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
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter text-white leading-[1.05]"
          >
            Risultati naturali.
            <br />
            <span className="text-[#C9A97A]">Mai maschere.</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
            className="mt-5 max-w-xl mx-auto md:mx-0 text-base sm:text-lg text-white/70 leading-relaxed"
          >
            Medicina estetica costruita su di te. Filler, botulino, rinofiller —
            con un approccio medico, mai standard.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={itemVariants}
            className="mt-7 flex flex-col sm:flex-row items-center md:justify-start justify-center gap-3"
          >
            <button
              onClick={() => open('Hero CTA')}
              className="w-full sm:w-auto inline-flex items-center justify-center rounded-full bg-[#C9A97A] px-9 py-4 text-black font-semibold text-base sm:text-lg hover:scale-[1.03] active:scale-[0.98] transition-transform cursor-pointer"
              style={{ boxShadow: '0 0 36px rgba(201,169,122,0.4)' }}
            >
              Prenota la consulenza →
            </button>
            <button
              onClick={() => {
                const el = document.querySelector('#trattamenti')
                if (el) el.scrollIntoView({ behavior: 'smooth' })
              }}
              className="text-sm text-white/55 hover:text-[#C9A97A] underline-offset-4 hover:underline transition-colors cursor-pointer"
            >
              o vedi prima i trattamenti
            </button>
          </motion.div>
        </motion.div>

        {/* DESKTOP — foto half right column */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="hidden md:block md:col-span-5 lg:col-span-6 md:relative md:h-[78vh] md:max-h-[680px]"
        >
          <div className="relative h-full w-full overflow-hidden rounded-[2rem]">
            <Image
              src={`${BASE_PATH}/hero-image.jpg`}
              alt="Dr. Anton Kamel — Medico Estetico Verona"
              fill
              priority
              sizes="(min-width: 1024px) 50vw, 42vw"
              className="object-cover object-[42%_30%]"
              style={{ filter: 'brightness(0.92) contrast(1.05)' }}
            />
            {/* Cornice gold sottile decorativa */}
            <div className="pointer-events-none absolute inset-4 rounded-[1.5rem] border border-[#C9A97A]/35" />
            {/* Gold glow accent */}
            <div className="pointer-events-none absolute -bottom-8 -right-8 h-40 w-40 rounded-full bg-[#C9A97A]/20 blur-[80px]" />
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator (desktop only) */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        className="hidden md:flex absolute bottom-6 left-1/2 -translate-x-1/2 flex-col items-center gap-1 pointer-events-none"
      >
        <span className="text-[10px] tracking-widest uppercase text-white/40">Scorri</span>
        <motion.div animate={{ y: [0, 5, 0] }} transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}>
          <ChevronDown size={16} className="text-white/40" />
        </motion.div>
      </motion.div>
    </section>
  )
}

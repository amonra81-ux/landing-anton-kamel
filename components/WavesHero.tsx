'use client'

import { motion, type Variants } from 'framer-motion'
import { Sparkles } from 'lucide-react'
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

    // Brand colors (Anton): #C9A97A gold + dark
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
      className="relative isolate flex min-h-screen w-full items-center justify-center overflow-hidden bg-[#0a0a0a]"
      role="region"
      aria-label="Hero immersivo Dr. Anton Kamel"
    >
      {/* Wave canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" aria-hidden="true" />

      {/* Soft glows */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute left-1/2 top-0 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-[#C9A97A]/[0.04] blur-[140px]" />
        <div className="absolute bottom-0 right-0 h-[360px] w-[360px] rounded-full bg-[#C9A97A]/[0.03] blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-5xl flex-col items-center px-6 pt-28 pb-16 md:py-24 text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="w-full flex flex-col items-center"
        >
          {/* Brand pill */}
          <motion.div
            variants={itemVariants}
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/40 px-4 py-1.5 backdrop-blur-md"
          >
            <Sparkles className="h-3.5 w-3.5 text-[#C9A97A]" aria-hidden="true" />
            <span className="text-[11px] tracking-[0.25em] text-white/80 uppercase">
              Ideatore Anton Lips Technique™
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={itemVariants}
            className="mb-5 text-4xl font-bold tracking-tighter text-white md:text-6xl lg:text-7xl leading-[1.05]"
          >
            Risultati naturali.
            <br />
            <span className="text-[#C9A97A]">Mai maschere.</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
            className="mx-auto mb-9 max-w-2xl text-base text-white/70 md:text-xl leading-relaxed"
          >
            Medicina estetica costruita su di te. Filler, botulino, rinofiller —
            con un approccio medico, mai standard.
          </motion.p>

          {/* Foto Anton */}
          <motion.div
            variants={itemVariants}
            className="relative mb-9 h-44 w-44 sm:h-52 sm:w-52 md:h-60 md:w-60 rounded-full overflow-hidden border-2 border-[#C9A97A]/40 shadow-[0_0_60px_rgba(201,169,122,0.25)]"
          >
            <Image
              src={`${BASE_PATH}/hero-image.jpg`}
              alt="Dr. Anton Kamel"
              fill
              priority
              sizes="(max-width: 640px) 11rem, (max-width: 768px) 13rem, 15rem"
              className="object-cover object-[42%_30%]"
            />
            <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-full" />
          </motion.div>

          {/* CTA */}
          <motion.div variants={itemVariants} className="flex flex-col items-center gap-4">
            <button
              onClick={() => open('Hero CTA Waves')}
              className="inline-flex items-center justify-center rounded-full bg-[#C9A97A] px-10 py-4 text-black font-semibold text-base sm:text-lg hover:scale-[1.03] active:scale-[0.98] transition-transform cursor-pointer"
              style={{ boxShadow: '0 0 40px rgba(201,169,122,0.5)' }}
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
      </div>
    </section>
  )
}

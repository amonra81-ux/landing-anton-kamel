'use client'

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

export default function WavesHero() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const sectionRef = useRef<HTMLElement | null>(null)
  const mouseRef = useRef({ x: 0, y: 0 })
  const targetMouseRef = useRef({ x: 0, y: 0 })
  const { open } = useBooking()

  useEffect(() => {
    // Defer canvas init until idle — non blocca first paint
    const start = () => {
      const canvas = canvasRef.current
      const section = sectionRef.current
      if (!canvas || !section) return
      if (window.innerWidth < 768) return // skip mobile

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

      const onResize = () => { resize(); recenter() }
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
    }

    // Defer canvas con requestIdleCallback (fallback setTimeout)
    type IdleCb = (cb: IdleRequestCallback) => number
    const w = window as Window & { requestIdleCallback?: IdleCb }
    const ric = w.requestIdleCallback ?? ((cb: IdleRequestCallback) => setTimeout(cb, 250))
    let cleanup: (() => void) | undefined
    const handle = ric(() => { cleanup = start() })
    return () => {
      if (cleanup) cleanup()
      if (typeof handle === 'number') clearTimeout(handle)
    }
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative isolate w-full min-h-[90vh] md:min-h-screen overflow-hidden bg-[#0a0a0a] hero-fade"
      role="region"
      aria-label="Dr. Anton Kamel — hero"
    >
      {/* Glow oro */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] md:h-[700px] md:w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#C9A97A]/[0.12] blur-[140px]" />
      </div>

      {/* Canvas waves desktop only */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none opacity-90 hidden md:block"
        aria-hidden="true"
      />
      {/* Mobile: 2 linee statiche oro al posto canvas */}
      <div className="absolute inset-0 md:hidden pointer-events-none">
        <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-[1px] bg-gradient-to-r from-transparent via-[#C9A97A]/40 to-transparent" />
        <div className="absolute inset-x-0 top-[55%] h-[1px] bg-gradient-to-r from-transparent via-[#C9A97A]/25 to-transparent" />
      </div>

      {/* Contenuto centrato */}
      <div className="relative z-10 min-h-[90vh] md:min-h-screen flex flex-col items-center justify-center px-6 py-24 md:py-32">
        <div className="w-full max-w-3xl text-center flex flex-col items-center hero-stagger">
          {/* Avatar circle */}
          <div
            className="relative mb-6 h-40 w-40 sm:h-48 sm:w-48 md:h-56 md:w-56 rounded-full overflow-hidden border-2 border-[#C9A97A]/40"
            style={{
              boxShadow: '0 0 80px rgba(201,169,122,0.45), inset 0 0 40px rgba(0,0,0,0.4)',
            }}
          >
            <Image
              src={`${BASE_PATH}/anton-avatar.jpg?v=2`}
              alt="Dr. Anton Kamel"
              fill
              priority
              fetchPriority="high"
              sizes="(max-width: 768px) 192px, 224px"
              className="object-cover object-[65%_25%]"
            />
          </div>

          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/40 px-3 py-1 backdrop-blur-md">
            <span className="h-1.5 w-1.5 rounded-full bg-[#C9A97A]" />
            <span className="text-[10px] tracking-[0.2em] text-white/80 uppercase">
              Dr. Anton Kamel · Verona
            </span>
          </div>

          <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-[#C9A97A]/15 border border-[#C9A97A]/40 px-3 py-1 backdrop-blur-md">
            <Sparkles size={11} className="text-[#C9A97A]" />
            <span className="text-[10px] tracking-wider text-[#C9A97A] font-semibold uppercase">
              Ideatore Anton Lips Technique™
            </span>
          </div>
        </div>

        <div className="w-full max-w-3xl text-center mt-2 hero-stagger">
          <h1
            className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tighter leading-[1.05] bg-gradient-to-b from-white to-white/70 bg-clip-text text-transparent"
            style={{ filter: 'drop-shadow(0 4px 24px rgba(0,0,0,0.6))' }}
          >
            Risultati naturali.
            <br />
            <span className="bg-gradient-to-r from-[#C9A97A] via-[#E5C998] to-[#C9A97A] bg-clip-text text-transparent">
              Mai maschere.
            </span>
          </h1>

          <p
            className="mt-5 max-w-xl mx-auto text-base sm:text-lg md:text-xl text-white/85 leading-relaxed"
            style={{ textShadow: '0 1px 12px rgba(0,0,0,0.7)' }}
          >
            Medicina estetica costruita su di te. Filler, botulino, biorivitalizzazione —
            con un approccio medico, mai standard.
          </p>

          <div className="mt-8 flex justify-center">
            <button
              onClick={() => open('Hero CTA')}
              className="w-full sm:w-auto inline-flex items-center justify-center rounded-full bg-[#C9A97A] px-10 py-4 text-black font-semibold text-base sm:text-lg hover:scale-[1.03] active:scale-[0.98] transition-transform cursor-pointer"
              style={{ boxShadow: '0 0 60px rgba(201,169,122,0.6)' }}
            >
              Prenota la consulenza →
            </button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 pointer-events-none z-20 hero-scroll-fade">
        <span className="text-[10px] tracking-widest uppercase text-white/55">Scorri</span>
        <ChevronDown size={16} className="text-white/55 hero-bounce" />
      </div>
    </section>
  )
}

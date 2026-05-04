'use client'

import { useEffect, useRef, useState, useCallback } from 'react'
import { useScroll, useSpring, useTransform, motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

const TOTAL_FRAMES = 122
const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || ''

function zeroPad(n: number, len = 3) {
  return String(n).padStart(len, '0')
}

function buildFramePaths(): string[] {
  return Array.from({ length: TOTAL_FRAMES }, (_, i) => `${BASE_PATH}/hero-frames/frame_${zeroPad(i)}.jpg`)
}

const FRAME_PATHS = buildFramePaths()

const BEATS = [
  { start: 0.0, end: 0.14 },
  { start: 0.17, end: 0.38 },
  { start: 0.42, end: 0.62 },
  { start: 0.66, end: 0.95 },
]

interface BeatTextProps {
  scrollYProgress: ReturnType<typeof useScroll>['scrollYProgress']
  beat: (typeof BEATS)[number]
  children: React.ReactNode
}

function BeatOverlay({ scrollYProgress, beat, children }: BeatTextProps) {
  const { start, end } = beat
  const opacity = useTransform(
    scrollYProgress,
    [start, start + 0.035, end - 0.035, end],
    [0, 1, 1, 0]
  )
  const y = useTransform(
    scrollYProgress,
    [start, start + 0.035, end - 0.035, end],
    [24, 0, 0, -24]
  )
  return (
    <motion.div
      style={{ opacity, y }}
      className="absolute inset-0 flex items-center pointer-events-none"
    >
      {children}
    </motion.div>
  )
}

export default function AKHero() {
  const wrapperRef = useRef<HTMLDivElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const imagesRef = useRef<HTMLImageElement[]>([])
  const currentFrameRef = useRef(0)
  const rafRef = useRef<number | null>(null)

  const [loadProgress, setLoadProgress] = useState(0)
  const [isLoaded, setIsLoaded] = useState(false)
  const [showLoader, setShowLoader] = useState(true)

  const { scrollYProgress } = useScroll({ target: wrapperRef })
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 220, damping: 38, mass: 0.6, restDelta: 0.0005 })

  const scrollIndicatorOpacity = useTransform(scrollYProgress, [0, 0.08], [1, 0])

  const beat3Opacity = useTransform(
    scrollYProgress,
    [BEATS[3].start, BEATS[3].start + 0.035, BEATS[3].end - 0.035, BEATS[3].end],
    [0, 1, 1, 0]
  )

  const drawFrame = useCallback((index: number) => {
    const canvas = canvasRef.current
    const img = imagesRef.current[index]
    if (!canvas || !img) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const dpr = window.devicePixelRatio || 1
    // Dimensioni CSS (coordinate di disegno)
    const cw = canvas.width / dpr
    const ch = canvas.height / dpr

    ctx.save()
    ctx.scale(dpr, dpr)
    ctx.clearRect(0, 0, cw, ch)
    ctx.fillStyle = '#0a0a0a'
    ctx.fillRect(0, 0, cw, ch)

    const imgAspect = img.naturalWidth / img.naturalHeight
    const canvasAspect = cw / ch

    const SCALE = 0.72
    let drawW: number, drawH: number, drawX: number, drawY: number
    if (imgAspect > canvasAspect) {
      drawH = ch * SCALE
      drawW = drawH * imgAspect
      drawX = (cw - drawW) / 2
      drawY = (ch - drawH) / 2
    } else {
      drawW = cw * SCALE
      drawH = drawW / imgAspect
      drawX = (cw - drawW) / 2
      drawY = (ch - drawH) / 2
    }

    ctx.imageSmoothingEnabled = true
    ctx.imageSmoothingQuality = 'medium'
    ctx.drawImage(img, drawX, drawY, drawW, drawH)
    ctx.restore()
  }, [])

  const resizeCanvas = useCallback(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const dpr = window.devicePixelRatio || 1
    const w = window.innerWidth
    const h = window.innerHeight
    canvas.width = w * dpr
    canvas.height = h * dpr
    canvas.style.width = `${w}px`
    canvas.style.height = `${h}px`
    drawFrame(currentFrameRef.current)
  }, [drawFrame])

  useEffect(() => {
    let loaded = 0
    const images: HTMLImageElement[] = []
    imagesRef.current = images

    const onFrameSettled = () => {
      loaded++
      setLoadProgress(Math.round((loaded / TOTAL_FRAMES) * 100))
      if (loaded === TOTAL_FRAMES) {
        setIsLoaded(true)
        setTimeout(() => setShowLoader(false), 600)
      }
    }

    FRAME_PATHS.forEach((src, i) => {
      const img = new window.Image()
      img.src = src
      img.onload = onFrameSettled
      img.onerror = onFrameSettled
      images[i] = img
    })
  }, [])

  useEffect(() => {
    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)
    return () => {
      window.removeEventListener('resize', resizeCanvas)
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [resizeCanvas])

  useEffect(() => {
    let pendingFrame = -1
    let rafScheduled = false

    const flush = () => {
      rafScheduled = false
      const target = pendingFrame
      if (target >= 0 && target !== currentFrameRef.current) {
        currentFrameRef.current = target
        drawFrame(target)
      }
    }

    const unsubscribe = smoothProgress.on('change', (val) => {
      const clamped = val < 0 ? 0 : val > 1 ? 1 : val
      pendingFrame = Math.min(
        Math.floor(clamped * (TOTAL_FRAMES - 1)),
        TOTAL_FRAMES - 1
      )
      if (!rafScheduled) {
        rafScheduled = true
        rafRef.current = requestAnimationFrame(flush)
      }
    })
    return () => {
      unsubscribe()
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [smoothProgress, drawFrame])

  // Suppress unused variable warning — isLoaded used for future transitions
  void isLoaded

  const handleCtaClick = () => {
    const el = document.querySelector('#prenota')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div ref={wrapperRef} style={{ height: '300vh', position: 'relative' }}>
      {/* Loader */}
      <AnimatePresence>
        {showLoader && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#0a0a0a]"
          >
            <div className="relative mb-8">
              <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
                <circle cx="30" cy="30" r="26" stroke="rgba(255,255,255,0.08)" strokeWidth="3" />
                <motion.circle
                  cx="30"
                  cy="30"
                  r="26"
                  stroke="#C9A97A"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeDasharray="163.36"
                  animate={{ strokeDashoffset: [163.36, 0] }}
                  transition={{ duration: 1.2, repeat: Infinity, ease: 'easeInOut' }}
                  style={{ transformOrigin: 'center', transform: 'rotate(-90deg)' }}
                />
              </svg>
            </div>

            <p className="mb-6 text-sm text-white/40 tracking-widest uppercase">
              Preparando la tua esperienza…
            </p>

            <div className="w-48 h-0.5 bg-white/10 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-[#C9A97A] rounded-full"
                style={{ width: `${loadProgress}%` }}
                transition={{ duration: 0.2 }}
              />
            </div>

            <p className="mt-3 text-xs text-white/20 tabular-nums">{loadProgress}%</p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Sticky canvas */}
      <div className="sticky top-0 h-screen overflow-hidden">
        <canvas
          ref={canvasRef}
          role="img"
          aria-label="Sequenza video del Dr. Anton Kamel"
          className="absolute inset-0 w-full h-full"
          style={{ background: '#0a0a0a' }}
        />

        {/* Gradient vignette */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/40 via-transparent to-[#0a0a0a]/60 pointer-events-none" />

        {/* Beat A — centered */}
        <BeatOverlay scrollYProgress={scrollYProgress} beat={BEATS[0]}>
          <div className="w-full flex flex-col items-center justify-center text-center px-6">
            <h1 className="text-7xl md:text-9xl font-bold tracking-tighter text-white/90 leading-none">
              LA TUA BELLEZZA.
            </h1>
            <p className="mt-4 text-lg md:text-xl text-white/60">
              Non da cambiare. Da svelare.
            </p>
          </div>
        </BeatOverlay>

        {/* Beat B — left */}
        <BeatOverlay scrollYProgress={scrollYProgress} beat={BEATS[1]}>
          <div className="w-full flex flex-col items-start justify-center px-8 md:px-24">
            <h2 className="text-6xl md:text-8xl font-bold tracking-tighter text-white/90 leading-none">
              SGUARDO<br />CLINICO.
            </h2>
            <p className="mt-4 text-lg md:text-xl text-white/60 max-w-md">
              Ogni viso è unico. Ogni trattamento, costruito su di te.
            </p>
          </div>
        </BeatOverlay>

        {/* Beat C — right */}
        <BeatOverlay scrollYProgress={scrollYProgress} beat={BEATS[2]}>
          <div className="w-full flex flex-col items-end justify-center px-8 md:px-24 text-right">
            <h2 className="text-6xl md:text-8xl font-bold tracking-tighter text-white/90 leading-none">
              RISULTATI<br />NATURALI.
            </h2>
            <p className="mt-4 text-lg md:text-xl text-white/60 max-w-md">
              Nessuna maschera. Solo la versione migliore di te.
            </p>
          </div>
        </BeatOverlay>

        {/* Beat D — centered with CTA */}
        <BeatOverlay scrollYProgress={scrollYProgress} beat={BEATS[3]}>
          <motion.div
            style={{ pointerEvents: beat3Opacity.get() > 0 ? 'auto' : 'none' }}
            className="w-full flex flex-col items-center justify-center text-center px-6"
          >
            <h2 className="text-5xl md:text-8xl font-bold tracking-tighter text-white/90 leading-none">
              PRENOTA IL TUO<br />CONSULTO.
            </h2>
            <p className="mt-4 text-lg md:text-xl text-white/60">
              Primo passo: una conversazione. Senza impegno.
            </p>
            <button
              onClick={handleCtaClick}
              className="mt-8 rounded-full bg-[#C9A97A] px-8 py-4 text-black font-semibold text-base transition-all duration-300 hover:scale-105 cursor-pointer"
              style={{
                boxShadow: '0 0 24px rgba(201,169,122,0.35)',
                pointerEvents: 'auto',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0 0 40px rgba(201,169,122,0.6)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = '0 0 24px rgba(201,169,122,0.35)'
              }}
            >
              Prenota ora →
            </button>
          </motion.div>
        </BeatOverlay>

        {/* Scroll indicator */}
        <motion.div
          style={{ opacity: scrollIndicatorOpacity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none"
        >
          <span className="text-xs text-white/40 tracking-widest uppercase">Scorri per scoprire</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.4, repeat: Infinity, ease: 'easeInOut' }}
          >
            <ChevronDown size={18} className="text-white/40" />
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

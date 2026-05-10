'use client'

import { useRef, useState, useCallback, useEffect } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import Image from 'next/image'

interface BeforeAfterProps {
  before: string
  after: string
  altBefore?: string
  altAfter?: string
  initial?: number
  className?: string
}

/**
 * Drag-to-compare image slider for before/after results.
 * Hard-codes Anton's gold accent (#C9A97A) handle.
 */
export function BeforeAfter({
  before,
  after,
  altBefore = 'Prima del trattamento',
  altAfter = 'Dopo il trattamento',
  initial = 50,
  className = '',
}: BeforeAfterProps) {
  const [pos, setPos] = useState(initial)
  const [dragging, setDragging] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  const move = useCallback((clientX: number) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    const next = ((clientX - rect.left) / rect.width) * 100
    setPos(Math.max(0, Math.min(100, next)))
  }, [])

  const onPointerDown = (e: React.PointerEvent) => {
    setDragging(true)
    move(e.clientX)
  }
  const onPointerMove = useCallback(
    (e: PointerEvent) => {
      if (!dragging) return
      move(e.clientX)
    },
    [dragging, move]
  )
  const onPointerUp = useCallback(() => setDragging(false), [])

  useEffect(() => {
    if (!dragging) return
    window.addEventListener('pointermove', onPointerMove)
    window.addEventListener('pointerup', onPointerUp)
    document.body.style.cursor = 'ew-resize'
    return () => {
      window.removeEventListener('pointermove', onPointerMove)
      window.removeEventListener('pointerup', onPointerUp)
      document.body.style.cursor = ''
    }
  }, [dragging, onPointerMove, onPointerUp])

  return (
    <div
      ref={containerRef}
      onPointerDown={onPointerDown}
      className={`relative w-full overflow-hidden select-none rounded-2xl border border-white/10 bg-[#0a0a0a] ${className}`}
      role="slider"
      aria-valuenow={Math.round(pos)}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-label="Confronta prima e dopo trascinando"
    >
      {/* Bottom: AFTER (full visible) */}
      <Image
        src={after}
        alt={altAfter}
        fill
        sizes="(max-width: 768px) 100vw, 768px"
        className="object-cover pointer-events-none"
        draggable={false}
        priority={false}
      />

      {/* Top: BEFORE clipped */}
      <div
        className="absolute inset-0 overflow-hidden pointer-events-none"
        style={{ clipPath: `polygon(0 0, ${pos}% 0, ${pos}% 100%, 0 100%)` }}
      >
        <Image
          src={before}
          alt={altBefore}
          fill
          sizes="(max-width: 768px) 100vw, 768px"
          className="object-cover"
          draggable={false}
        />
      </div>

      {/* Labels */}
      <span className="absolute top-3 left-3 text-[10px] font-mono uppercase tracking-widest bg-black/60 text-white px-2 py-1 rounded-md backdrop-blur-sm">
        Prima
      </span>
      <span className="absolute top-3 right-3 text-[10px] font-mono uppercase tracking-widest bg-[#C9A97A] text-black px-2 py-1 rounded-md">
        Dopo
      </span>

      {/* Divider + handle */}
      <div
        className="absolute top-0 bottom-0 cursor-ew-resize"
        style={{ left: `calc(${pos}% - 1px)`, width: 2 }}
      >
        <div className="absolute inset-y-0 w-0.5 bg-[#C9A97A]/85 shadow-[0_0_12px_rgba(201,169,122,0.6)]" />
        <div
          className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center w-11 h-11 rounded-full bg-[#0a0a0a] border-2 border-[#C9A97A] text-[#C9A97A] transition-transform ${
            dragging ? 'scale-110' : 'hover:scale-105'
          }`}
          style={{ boxShadow: '0 0 24px rgba(201,169,122,0.4)' }}
          aria-hidden
        >
          <ChevronLeft size={14} />
          <ChevronRight size={14} />
        </div>
      </div>

      {/* Hint */}
      <p className="absolute bottom-3 left-1/2 -translate-x-1/2 text-[10px] uppercase tracking-widest text-white/55 bg-black/40 backdrop-blur-sm px-2.5 py-1 rounded-full pointer-events-none">
        Trascina per confrontare
      </p>
    </div>
  )
}

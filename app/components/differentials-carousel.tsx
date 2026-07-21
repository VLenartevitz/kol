'use client'

import { useState, useEffect, useRef, useCallback } from 'react'

interface Differential {
  title: string
  description: string
}

export function DifferentialsCarousel({
  items,
}: {
  items: Differential[]
}) {
  const [activeIndex, setActiveIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  const startLoop = useCallback(() => {
    stopLoop()
    intervalRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % items.length)
    }, 3500)
  }, [items.length])

  const stopLoop = useCallback(() => {
    if (intervalRef.current !== null) {
      clearInterval(intervalRef.current)
      intervalRef.current = null
    }
  }, [])

  useEffect(() => {
    startLoop()
    return stopLoop
  }, [startLoop, stopLoop])

  useEffect(() => {
    if (paused) {
      stopLoop()
    } else {
      startLoop()
    }
  }, [paused, startLoop, stopLoop])

  return (
    <div
      className="differentials"
      ref={containerRef}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {items.map((item, i) => (
        <div
          className={`differential${i === activeIndex ? ' is-active' : ''}`}
          key={item.title}
          onClick={() => setActiveIndex(i)}
        >
          <div className="differential-title">{item.title}</div>
          <div className="differential-description">{item.description}</div>
        </div>
      ))}
    </div>
  )
}

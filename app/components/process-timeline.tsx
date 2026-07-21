'use client'

import { useRef, useState, useEffect } from 'react'

interface Step {
  step: string
  title: string
  text: string
}

export function ProcessTimeline({ steps }: { steps: Step[] }) {
  const [visibleSteps, setVisibleSteps] = useState<Set<number>>(new Set())
  const cardRefs = useRef<(HTMLElement | null)[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute('data-index'))
            setVisibleSteps((prev) => new Set(prev).add(index))
          }
        })
      },
      { threshold: 0.25 }
    )

    const current = cardRefs.current
    current.forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => {
      current.forEach((ref) => {
        if (ref) observer.unobserve(ref)
      })
    }
  }, [])

  const lastVisible = Array.from(visibleSteps).reduce(
    (max, i) => Math.max(max, i),
    -1
  )
  const lineHeight = ((lastVisible + 1) / steps.length) * 100

  return (
    <div className="process-timeline">
      <div className="process-line-track" aria-hidden>
        <div
          className="process-line-fill"
          style={{ height: `${Math.max(0, lineHeight)}%` }}
        />
      </div>

      {steps.map((item, i) => (
        <article
          key={item.step}
          className={`process-card${visibleSteps.has(i) ? ' is-visible' : ''}`}
          data-index={i}
          ref={(el) => {
            cardRefs.current[i] = el
          }}
          style={{
            transitionDelay: visibleSteps.has(i) ? `${0.2 + i * 0.12}s` : '0s',
          }}
        >
          <div className="process-dot" aria-hidden />
          <div className="process-content">
            <span className="step">{item.step}</span>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </div>
        </article>
      ))}
    </div>
  )
}

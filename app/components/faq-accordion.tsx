'use client'

import { useRef, useState, useCallback } from 'react'

interface FaqItem {
  question: string
  answer: string
}

export function FaqAccordion({ items }: { items: FaqItem[] }) {
  const [openIndices, setOpenIndices] = useState<Set<number>>(new Set())

  const toggle = useCallback((index: number) => {
    setOpenIndices((prev) => {
      const next = new Set(prev)
      if (next.has(index)) {
        next.delete(index)
      } else {
        next.add(index)
      }
      return next
    })
  }, [])

  return (
    <div className="faq-list">
      {items.map((item, i) => (
        <FaqItem
          key={i}
          item={item}
          isOpen={openIndices.has(i)}
          onToggle={() => toggle(i)}
        />
      ))}
    </div>
  )
}

function FaqItem({
  item,
  isOpen,
  onToggle,
}: {
  item: FaqItem
  isOpen: boolean
  onToggle: () => void
}) {
  const contentRef = useRef<HTMLDivElement>(null)

  return (
    <div className={`faq${isOpen ? ' is-open' : ''}`}>
      <button
        className="faq-summary"
        onClick={onToggle}
        aria-expanded={isOpen}
      >
        <span>{item.question}</span>
        <svg
          className="faq-chevron"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          aria-hidden
        >
          <path
            d="M4 6l4 4 4-4"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
          />
        </svg>
      </button>
      <div
        className="faq-content"
        aria-hidden={!isOpen}
        style={{
          maxHeight: isOpen ? contentRef.current?.scrollHeight + 'px' : '0px',
        }}
      >
        <div ref={contentRef} className="faq-inner">
          <p>{item.answer}</p>
        </div>
      </div>
    </div>
  )
}

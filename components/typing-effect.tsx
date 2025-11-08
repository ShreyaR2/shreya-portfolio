"use client"

import { useEffect, useState } from "react"

interface TypingEffectProps {
  texts: string[]
  speed?: number
  delay?: number
  className?: string
}

export default function TypingEffect({ texts, speed = 50, delay = 500, className = "" }: TypingEffectProps) {
  const [displayedText, setDisplayedText] = useState("")
  const [textIdx, setTextIdx] = useState(0)
  const [charIdx, setCharIdx] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [showCursor, setShowCursor] = useState(true)

  // Blinking cursor effect
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev)
    }, 530)
    return () => clearInterval(cursorInterval)
  }, [])

  // Typing animation
  useEffect(() => {
    const currentText = texts[textIdx]
    let timeout: NodeJS.Timeout

    if (!isDeleting && charIdx < currentText.length) {
      timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + currentText[charIdx])
        setCharIdx((prev) => prev + 1)
      }, speed)
    } else if (isDeleting && charIdx > 0) {
      timeout = setTimeout(() => {
        setDisplayedText((prev) => prev.slice(0, -1))
        setCharIdx((prev) => prev - 1)
      }, speed / 2)
    } else if (!isDeleting && charIdx === currentText.length) {
      timeout = setTimeout(() => {
        setIsDeleting(true)
      }, delay)
    } else if (isDeleting && charIdx === 0) {
      setIsDeleting(false)
      setTextIdx((prev) => (prev + 1) % texts.length)
    }

    return () => clearTimeout(timeout)
  }, [charIdx, isDeleting, textIdx, texts, speed, delay])

  return (
    <span className={className}>
      {displayedText}
      <span className={`ml-1 transition-opacity duration-100 ${showCursor ? "opacity-100" : "opacity-0"}`}>|</span>
    </span>
  )
}

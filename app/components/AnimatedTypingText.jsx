'use client'

import { useState, useEffect } from 'react'

export default function AnimatedTypingText({ texts, typingSpeed = 100, delayBetweenTexts = 2000 }) {
  const [currentTextIndex, setCurrentTextIndex] = useState(0)
  const [currentText, setCurrentText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  
  useEffect(() => {
    const timeout = setTimeout(() => {
      // Current text from the array
      const fullText = texts[currentTextIndex]
      
      // If deleting, remove a character, otherwise add
      const updatedText = isDeleting
        ? fullText.substring(0, currentText.length - 1)
        : fullText.substring(0, currentText.length + 1)
      
      setCurrentText(updatedText)
      
      // Control the typing speed
      let newTypingSpeed = typingSpeed
      
      // If completed typing the current text
      if (!isDeleting && updatedText === fullText) {
        // Pause at the end before deleting
        newTypingSpeed = delayBetweenTexts
        setIsDeleting(true)
      } else if (isDeleting && updatedText === '') {
        // Finished deleting, move to next text
        setIsDeleting(false)
        setCurrentTextIndex((currentTextIndex + 1) % texts.length)
        newTypingSpeed = 500 // Slight pause before starting new text
      } else if (isDeleting) {
        // Deleting is a bit faster than typing
        newTypingSpeed = typingSpeed * 0.5
      }
      
      // Set the next timeout
      const timer = setTimeout(
        () => {
          clearTimeout(timeout)
        }, 
        newTypingSpeed
      )
      
      return () => clearTimeout(timer)
    }, typingSpeed)
    
    return () => clearTimeout(timeout)
  }, [currentText, currentTextIndex, isDeleting, texts, typingSpeed, delayBetweenTexts])
  
  return (
    <div className="h-8 sm:h-10 flex items-center">
      <span className="text-lg sm:text-2xl font-semibold text-primary-light">
        {currentText}
        <span className="text-primary animate-blink">|</span>
      </span>
    </div>
  )
} 
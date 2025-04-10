'use client'

import { useRef, useEffect, useState } from 'react'

export default function AnimatedCursor() {
  const cursorRef = useRef(null)
  const cursorOuterRef = useRef(null)
  const [isPointer, setIsPointer] = useState(false)
  const [isHidden, setIsHidden] = useState(false)
  const trailsRef = useRef([])
  const trailCount = 5

  useEffect(() => {
    // Create trail elements
    const trailContainer = document.createElement('div')
    trailContainer.classList.add('trail-container')
    trailContainer.style.position = 'fixed'
    trailContainer.style.pointerEvents = 'none'
    trailContainer.style.top = '0'
    trailContainer.style.left = '0'
    trailContainer.style.width = '100%'
    trailContainer.style.height = '100%'
    trailContainer.style.zIndex = '9999'
    document.body.appendChild(trailContainer)

    for (let i = 0; i < trailCount; i++) {
      const trail = document.createElement('div')
      trail.classList.add('cursor-trail')
      trail.style.position = 'fixed'
      trail.style.width = `${8 - i}px`
      trail.style.height = `${8 - i}px`
      trail.style.borderRadius = '50%'
      trail.style.backgroundColor = `rgba(59, 130, 246, ${0.3 - i * 0.05})`
      trail.style.transform = 'translate(-50%, -50%)'
      trail.style.pointerEvents = 'none'
      trail.style.transition = `transform 0.12s ease-out, opacity 0.3s ease-out`
      trail.style.opacity = '0'
      trailContainer.appendChild(trail)
      trailsRef.current.push(trail)
    }

    const trailPositions = Array(trailCount).fill({ x: 0, y: 0 })

    const updateCursor = (e) => {
      if (cursorRef.current && cursorOuterRef.current) {
        // Main cursor
        cursorRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`
        
        // Outer cursor with delay
        setTimeout(() => {
          cursorOuterRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`
        }, 100)

        // Update trail positions with decreasing delay
        trailPositions.unshift({ x: e.clientX, y: e.clientY })
        trailPositions.pop()

        // Update trail elements with positions
        trailsRef.current.forEach((trail, i) => {
          const position = trailPositions[Math.min(i, trailPositions.length - 1)]
          if (position) {
            setTimeout(() => {
              trail.style.opacity = '1'
              trail.style.transform = `translate(${position.x}px, ${position.y}px)`
            }, i * 40)
          }
        })
      }
    }

    const handleMouseEnter = () => {
      setIsHidden(false)
    }

    const handleMouseLeave = () => {
      setIsHidden(true)
    }

    // Check for clickable elements
    const handleMouseOver = (e) => {
      const target = e.target
      const isClickable = 
        target.tagName.toLowerCase() === 'a' || 
        target.tagName.toLowerCase() === 'button' ||
        target.tagName.toLowerCase() === 'input' ||
        target.closest('button') ||
        target.closest('a') ||
        getComputedStyle(target).cursor === 'pointer'
      
      setIsPointer(isClickable)
    }

    document.addEventListener('mousemove', updateCursor)
    document.addEventListener('mouseenter', handleMouseEnter)
    document.addEventListener('mouseleave', handleMouseLeave)
    document.addEventListener('mouseover', handleMouseOver)

    return () => {
      document.removeEventListener('mousemove', updateCursor)
      document.removeEventListener('mouseenter', handleMouseEnter)
      document.removeEventListener('mouseleave', handleMouseLeave)
      document.removeEventListener('mouseover', handleMouseOver)
      document.body.removeChild(trailContainer)
    }
  }, [])

  return (
    <>
      <div 
        ref={cursorRef} 
        className={`fixed top-0 left-0 w-3 h-3 bg-primary rounded-full pointer-events-none z-[10000] -translate-x-1/2 -translate-y-1/2 transition-transform duration-75 ease-out ${isHidden ? 'opacity-0' : 'opacity-100'} ${isPointer ? 'scale-150' : 'scale-100'}`}
        style={{ transform: 'translate(0px, 0px)' }}
      />
      <div 
        ref={cursorOuterRef} 
        className={`fixed top-0 left-0 w-7 h-7 border border-primary rounded-full pointer-events-none z-[10000] -translate-x-1/2 -translate-y-1/2 transition-all duration-200 ease-out ${isHidden ? 'opacity-0' : 'opacity-80'} ${isPointer ? 'w-9 h-9' : 'w-7 h-7'}`}
        style={{ transform: 'translate(0px, 0px)' }}
      />
    </>
  )
} 
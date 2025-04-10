'use client'

import { useState, useRef } from 'react'
import { useSpring, animated } from '@react-spring/web'
import Image from 'next/image'

const calc = (x, y, rect) => [
  -(y - rect.top - rect.height / 2) / 30,
  (x - rect.left - rect.width / 2) / 30,
  1.05
]

const trans = (x, y, s) => `perspective(1000px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`

export default function ProjectCard3D({ project }) {
  const ref = useRef(null)
  const [xys, set] = useState([0, 0, 1])
  const [hovered, setHovered] = useState(false)

  const props = useSpring({ 
    xys,
    config: { mass: 1, tension: 350, friction: 40 }
  })

  const imageProps = useSpring({
    transform: hovered ? 'scale(1.1)' : 'scale(1.0)',
    config: { mass: 5, tension: 500, friction: 80 }
  })

  const handleMouseMove = (e) => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect()
      set(calc(e.clientX, e.clientY, rect))
    }
  }

  const handleMouseLeave = () => {
    set([0, 0, 1])
    setHovered(false)
  }

  const handleMouseEnter = () => {
    setHovered(true)
  }

  return (
    <animated.div
      ref={ref}
      className="overflow-hidden rounded-xl bg-primary/5 border border-primary/10 shadow-xl h-full"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
      style={{
        transform: props.xys.to(trans)
      }}
    >
      <div className="relative h-40 sm:h-48 overflow-hidden">
        <animated.div 
          className="w-full h-full"
          style={imageProps}
        >
          <Image
            src={project.image || '/project-placeholder.jpg'}
            alt={project.title}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-70"></div>
        </animated.div>
        <div className="absolute bottom-0 left-0 p-4 w-full">
          <h3 className="text-lg sm:text-xl font-bold text-white drop-shadow-md">{project.title}</h3>
        </div>
      </div>
      
      <div className="p-4 sm:p-6">
        <p className="text-secondary-light text-sm mb-4">{project.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.map((tech) => (
            <span 
              key={tech} 
              className="px-3 py-1.5 bg-blue-600/70 text-white rounded-full text-xs sm:text-sm font-medium shadow-sm"
            >
              {tech}
            </span>
          ))}
        </div>
        
        <div className="flex justify-between mt-auto pt-2">
          {project.demoUrl && (
            <a 
              href={project.demoUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary-light hover:text-primary font-medium text-sm inline-flex items-center transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z" clipRule="evenodd" />
              </svg>
              Live Demo
            </a>
          )}
          
          {project.githubUrl && (
            <a 
              href={project.githubUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary-light hover:text-primary font-medium text-sm inline-flex items-center transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              View Code
            </a>
          )}
        </div>
      </div>
    </animated.div>
  )
} 
'use client'

import { useRef, useState } from 'react'
import { useSpring, animated } from '@react-spring/web'
import Image from 'next/image'

const calc = (x, y, rect) => [
  -(y - rect.top - rect.height / 2) / 20,
  (x - rect.left - rect.width / 2) / 20,
  1.05
]

const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`

const FloatingCard = ({ skill }) => {
  const ref = useRef(null)
  const [xys, set] = useState([0, 0, 1])
  
  const props = useSpring({ 
    xys, 
    config: { mass: 1, tension: 350, friction: 40 } 
  })

  const handleMouseMove = (e) => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect()
      set(calc(e.clientX, e.clientY, rect))
    }
  }

  const handleMouseLeave = () => {
    set([0, 0, 1])
  }

  return (
    <animated.div
      ref={ref}
      className="p-4 sm:p-6 rounded-xl bg-gradient-to-br from-primary/10 to-primary/20 h-full border border-primary/20 shadow-lg hover:shadow-primary/20 transition-all duration-300"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: props.xys.to(trans)
      }}
    >
      <div className="flex flex-col items-center justify-center h-full">
        {skill.icon && (
          <div className="mb-4 w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-primary/20 flex items-center justify-center">
            <skill.icon className="w-7 h-7 sm:w-9 sm:h-9 text-primary-light" />
          </div>
        )}
        <h3 className="text-lg sm:text-xl font-bold mb-2 text-center">{skill.name}</h3>
        <div className="w-full bg-primary/5 rounded-full h-2 mb-1">
          <div 
            className="bg-gradient-to-r from-primary to-primary-light h-2 rounded-full" 
            style={{ width: `${skill.level}%` }}
          ></div>
        </div>
        <p className="text-xs text-secondary-light">{skill.levelName}</p>
      </div>
    </animated.div>
  )
}

export default function FloatingCards({ skills }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
      {skills.map((skill, index) => (
        <FloatingCard key={index} skill={skill} />
      ))}
    </div>
  )
} 
'use client'

import { useRef, useEffect } from 'react'
import { Canvas, useFrame, extend, useThree } from '@react-three/fiber'
import { OrbitControls, PerspectiveCamera, useTexture, Sphere } from '@react-three/drei'
import * as THREE from 'three'
import { EffectComposer, Bloom } from '@react-three/postprocessing'

const Particles = ({ count = 1000, color = '#2a6fdb' }) => {
  const mesh = useRef()
  const dummy = new THREE.Object3D()
  const particles = new Float32Array(count * 3)
  
  for (let i = 0; i < count; i++) {
    const i3 = i * 3
    particles[i3] = (Math.random() - 0.5) * 15
    particles[i3 + 1] = (Math.random() - 0.5) * 15
    particles[i3 + 2] = (Math.random() - 0.5) * 15
  }
  
  useFrame((state) => {
    const time = state.clock.getElapsedTime() * 0.1
    
    for (let i = 0; i < count; i++) {
      const i3 = i * 3
      dummy.position.set(
        particles[i3],
        particles[i3 + 1],
        particles[i3 + 2]
      )
      
      const scale = Math.sin(time + i * 0.1) * 0.3 + 0.8
      dummy.scale.set(scale, scale, scale)
      dummy.updateMatrix()
      
      mesh.current.setMatrixAt(i, dummy.matrix)
    }
    
    mesh.current.instanceMatrix.needsUpdate = true
    mesh.current.rotation.y = time * 0.2
  })
  
  return (
    <instancedMesh ref={mesh} args={[null, null, count]}>
      <sphereGeometry args={[0.05, 16, 16]} />
      <meshBasicMaterial color={color} toneMapped={false} />
    </instancedMesh>
  )
}

const MovingGradientSpheres = () => {
  const group = useRef()
  
  useFrame((state) => {
    const time = state.clock.getElapsedTime()
    if (group.current) {
      group.current.rotation.y = time * 0.1
      group.current.rotation.z = time * 0.05
    }
  })
  
  return (
    <group ref={group}>
      <Sphere args={[1.5, 32, 32]} position={[-3, 0, -3]}>
        <meshBasicMaterial color="#4285F4" transparent opacity={0.2} />
      </Sphere>
      <Sphere args={[1, 32, 32]} position={[3, -2, -1]}>
        <meshBasicMaterial color="#0F9D58" transparent opacity={0.2} />
      </Sphere>
      <Sphere args={[2, 32, 32]} position={[0, 3, -4]}>
        <meshBasicMaterial color="#4054B4" transparent opacity={0.2} />
      </Sphere>
    </group>
  )
}

const Scene = () => {
  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 0, 6]} />
      <ambientLight intensity={0.4} />
      <MovingGradientSpheres />
      <Particles count={600} />
      <EffectComposer>
        <Bloom luminanceThreshold={0.2} intensity={1.5} levels={9} mipmapBlur />
      </EffectComposer>
    </>
  )
}

export default function AnimatedBackground() {
  return (
    <div className="fixed inset-0 z-0 opacity-70">
      <Canvas dpr={[1, 2]} gl={{ antialias: false }}>
        <Scene />
      </Canvas>
    </div>
  )
} 
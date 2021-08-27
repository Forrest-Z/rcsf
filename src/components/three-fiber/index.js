import React, { useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import Polygon from './shapes/Polygon'

const ThreeFiber = ({ points }) => {
  const orbit = useRef()

  return (
    <Canvas camera={{ position: [20, 15, 50], fov: 42 }}>
      {/* <color attach="background" args={['#a2b9e7']} /> */}
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Polygon position={[1.2, 0, 0]} points={points} />
      <OrbitControls ref={orbit} />
    </Canvas>
  )
}

export default ThreeFiber

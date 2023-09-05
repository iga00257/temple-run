import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import * as THREE from 'three'

const ThreeScene = () => {
  return (
    <Canvas>
      <pointLight position={[10, 10, -10]} />
    </Canvas>
  )
}

export default ThreeScene

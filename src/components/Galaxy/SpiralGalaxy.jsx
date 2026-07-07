import React, { useMemo, useRef } from 'react'
import { generateGalaxy } from './GalaxyGenerator'
import * as THREE from 'three'
import { useFrame } from '@react-three/fiber'
const SpiralGalaxy = () => {
  const ref = useRef()
  const geometry = useMemo(() => {
    const { positions, colors } = generateGalaxy({
      count: 20000
    })
    const geometry = new THREE.BufferGeometry()
    geometry.setAttribute(
      "position",
      new THREE.Float32BufferAttribute(positions, 3)
    )
    geometry.setAttribute(
      "color",
      new THREE.Float32BufferAttribute(colors, 3)
    )
    geometry.computeBoundingSphere()
    return geometry
  }, [])
  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.y += delta * 0.1
    }
  })
  return (
    <points ref={ref} geometry={geometry}>
      <pointsMaterial
        vertexColors
        size={0.05}
        sizeAttenuation
        depthWrite={false}
      />
    </points>
  )
}

export default SpiralGalaxy
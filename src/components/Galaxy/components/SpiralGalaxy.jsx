import React, { useMemo, useRef } from 'react'
import { generateGalaxy } from '../generators/GalaxyGenerator'
import * as THREE from 'three'
import { useFrame } from '@react-three/fiber'
import { fragmentShader, vertexShader } from '../shaders/galaxyShaders'
const SpiralGalaxy = () => {
  const ref = useRef()
  const geometry = useMemo(() => {
    const { positions, colors, scales, randomValues, brightness, coreStrengthArray } = generateGalaxy()
    const geometry = new THREE.BufferGeometry()
    geometry.setAttribute(
      "position",
      new THREE.Float32BufferAttribute(positions, 3)
    )
    geometry.setAttribute(
      "color",
      new THREE.Float32BufferAttribute(colors, 3)
    )

    geometry.setAttribute(
      "aScale",
      new THREE.Float32BufferAttribute(scales, 1)
    )
    geometry.setAttribute(
      "aRandom",
      new THREE.Float32BufferAttribute(randomValues, 1)
    )
    geometry.setAttribute(
      "aBrightness",
      new THREE.Float32BufferAttribute(brightness, 1)
    )
    geometry.setAttribute(
      "aCoreStrength",
      new THREE.Float32BufferAttribute(coreStrengthArray, 1)
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
      <shaderMaterial
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        vertexColors
        transparent
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  )
}

export default SpiralGalaxy
import React, { useMemo } from 'react'
import * as THREE from "three"
const Stars = () => {
  const geometry = useMemo(() => {
    const count = 20000
    const positions = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      const i3 = i * 3
      positions[i] = (Math.random() - 0.5) * 200
      positions[i + 1] = (Math.random() - 0.5) * 200
      positions[i + 2] = (Math.random() - 0.5) * 200
    }
    const geometry = new THREE.BufferGeometry()
    geometry.setAttribute(
      "position",
      new THREE.Float32BufferAttribute(positions, 3)
    )
    return geometry
  }, [])
  return (
    <points geometry={geometry}>
      <pointsMaterial
        color="#fff"
        size={0.1}
        sizeAttenuation
        depthWrite={false}
      />
    </points>
  )
}

export default Stars
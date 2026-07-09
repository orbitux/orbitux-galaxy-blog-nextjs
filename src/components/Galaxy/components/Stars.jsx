import React, { useMemo } from 'react'
import * as THREE from "three"
const Stars = ({ count, radius, size }) => {
  const geometry = useMemo(() => {
    const positions = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      const i3 = i * 3
      positions[i3] = (Math.random() - 0.5) * radius
      positions[i3 + 1] = (Math.random() - 0.5) * radius
      positions[i3 + 2] = (Math.random() - 0.5) * radius
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
        size={size}
        sizeAttenuation
        depthWrite={false}
      />
    </points>
  )
}

export default Stars
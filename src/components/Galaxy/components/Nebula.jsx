import React, { useMemo } from 'react'
import * as THREE from 'three'
const Nebula = () => {
  const texture = useMemo(() => {
    const size = 256
    const canvas = document.createElement('canvas')
    canvas.width = size
    canvas.height = size
    const ctx = canvas.getContext('2d')
    const gradient = ctx.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2)
    gradient.addColorStop(0, "rgba(180,80,255,0.45)")
    gradient.addColorStop(0.4, "rgba(140,60,255,0.2)")
    gradient.addColorStop(1, "rgba(0,0,0,0)")
    ctx.fillStyle = gradient
    ctx.fillRect(0, 0, size, size)
    return new THREE.CanvasTexture(canvas)
  }, [])
  return (
    <>
      <sprite position={[0, 0, -8]} scale={[35, 35, 1]}>
        <spriteMaterial
          map={texture}
          transparent
          depthWrite={false}
        />
      </sprite>

      <sprite position={[8, 5, -10]} scale={[18, 18, 1]}>
        <spriteMaterial
          map={texture}
          color='#8b5cf6'
          transparent
          depthWrite={false}
        />
      </sprite>

      <sprite position={[-10, -6, -12]} scale={[22, 22, 1]}>
        <spriteMaterial
          map={texture}
          color="#c084fc"
          transparent
          depthWrite={false}
        />
      </sprite>
    </>
  )
}

export default Nebula
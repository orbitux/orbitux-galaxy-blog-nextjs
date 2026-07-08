import { useFrame } from '@react-three/fiber'
import React, { useMemo, useRef } from 'react'
import * as THREE from 'three'
const DustParticles = () => {
    const ref = useRef()
    const geometry = useMemo(() => {
        const count = 8000
        const positions = new Float32Array(count * 3)
        for (let i = 0; i < count; i++) {
            const i3 = i * 3
            positions[i3] = (Math.random() - 0.5) * 40
            positions[i3 + 1] = (Math.random() - 0.5) * 40
            positions[i3 + 2] = (Math.random() - 0.5) * 40
        }
        const geometry = new THREE.BufferGeometry()
        geometry.setAttribute("position",
            new THREE.Float32BufferAttribute(positions, 3)
        )
        return geometry
    }, [])
    useFrame((_, delta) => {
        if (!ref.current) return
        ref.current.rotation.y += delta * 0.002
        ref.current.rotation.x += delta * 0.001
    })
    return (
        <points>
            <pointsMaterial
                color="#d8b4fe"
                size={0.015}
                transparent
                opacity={0.25}
                depthWrite={false}
            />
        </points>
    )
}

export default DustParticles
import { useFrame } from '@react-three/fiber'
import React, { useRef } from 'react'
import * as THREE from 'three'
import { createShootingStar } from '../generators/shootingStarGenerator'
const ShootingStar = () => {
    const star = useRef(createShootingStar())
    const ref = useRef()
    const tail = useRef()
    useFrame((state, delta) => {
        if (!ref.current || !tail.current) return
        if (document.hidden) return

        const data = star.current

        data.position.add(
            data.velocity.clone().multiplyScalar(delta)
        )

        if (data.position.x > 120) {
            Object.assign(
                data,
                createShootingStar()
            )
        }

        ref.current.position.copy(data.position)
        const speed = data.velocity.length()


        tail.current.scale.x = THREE.MathUtils.lerp(
            tail.current.scale.x,
            1 + speed * 0.05,
            0.08
        )
    })
    return (
        <group ref={ref} position={star.current.position}>
            {/* haed */}
            <mesh>
                <sphereGeometry args={[0.18, 16, 16]} />
                <meshBasicMaterial color="#fff" />
            </mesh>
            {/* tail */}
            <mesh ref={tail} position={[-1.5, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
                <cylinderGeometry args={[0.03, 0.12, 3, 12]} />
                <meshBasicMaterial
                    color="#caa6ff"
                    transparent
                    opacity={0.45}
                />
            </mesh>
        </group>
    )
}

export default ShootingStar
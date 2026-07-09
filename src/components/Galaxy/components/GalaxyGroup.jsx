import { useFrame, useThree } from '@react-three/fiber'
import React, { useRef } from 'react'
import * as THREE from 'three'
import Nebula from './Nebula'
import Stars from './Stars'
import DustParticles from './DustParticles'
import SpiralGalaxy from './SpiralGalaxy'
const GalaxyGroup = () => {
    const group = useRef()
    const { pointer } = useThree()
    useFrame(() => {
        if (!group.current) return

        group.current.rotation.y = THREE.MathUtils.lerp(
            group.current.rotation.y,
            pointer.x * 0.15,
            0.03
        )
        group.current.rotation.x = THREE.MathUtils.lerp(
            group.current.rotation.x,
            -pointer.y * 0.08,
            0.03
        )
    })
    return (
        <group ref={group}>
            <Nebula />
            <Stars count={140000} radius={220} size={0.02} />
            <Stars count={120000} radius={140} size={0.04} />
            <Stars count={100000} radius={80} size={0.05} />
            <DustParticles />
            <SpiralGalaxy />
        </group>
    )
}

export default GalaxyGroup
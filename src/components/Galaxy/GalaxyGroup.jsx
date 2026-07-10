import { useFrame, useThree } from '@react-three/fiber'
import React, { useRef } from 'react'
import * as THREE from 'three'
import Nebula from './components/Nebula'
import Stars from './components/Stars'
import DustParticles from './components/DustParticles'
import SpiralGalaxy from './components/SpiralGalaxy'
import Effects from './effects/Effects'
import ShootingStar from './components/ShootingStar'
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
            <Stars count={6000} depth={40} size={0.02} />
            <Stars count={3500} depth={40} size={0.04} />
            <Stars count={1800} depth={40} size={0.08} />
            <DustParticles />
            <SpiralGalaxy />
            <ShootingStar />
            <Effects />
        </group>
    )
}

export default GalaxyGroup
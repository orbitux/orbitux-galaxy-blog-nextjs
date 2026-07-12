"use client"
import { useMouse } from '@/hooks/useMouse'
import { useFrame, useThree } from '@react-three/fiber'
import React from 'react'
import * as THREE from 'three'
const CameraRig = () => {
    const mouse = useMouse()
    const { camera, pointer, viewport } = useThree()
    const target = new THREE.Vector3()
    useFrame((state) => {
        const time = state.clock.elapsedTime
        const breathingX = Math.sin(time * 0.15) * 0.26
        const breathingY = Math.cos(time * 0.18) * 0.15
        const targetX = mouse.current.x * 2
        const targetY = mouse.current.y * 1.2
        camera.position.x = THREE.MathUtils.lerp(
            camera.position.x,
            targetX,
            0.05
        )

        camera.position.y = THREE.MathUtils.lerp(
            camera.position.y,
            4 + targetY,
            0.05
        )
        target.lerp(
            new THREE.Vector3(
                pointer.x * 0.6,
                pointer.y * 0.4,
                0
            ),
            0.05
        )
        camera.lookAt(target)
    }, [])
    return null
}

export default CameraRig
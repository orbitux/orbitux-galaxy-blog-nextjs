import { useFrame } from '@react-three/fiber'
import React, { useMemo, useRef } from 'react'
import * as THREE from 'three'
import { dustFragmentShader, dustVertexShader } from '../shaders/dustShader'
import { generateDust } from '../generators/dustGenerator'
const DustParticles = () => {
    const ref = useRef()
    const { positions, scales } = generateDust()
    useFrame((state, delta) => {
        if (!ref.current) return
        material.uniforms.uTime.value = state.clock.elapsedTime
        ref.current.rotation.y += delta * 0.0025
        ref.current.rotation.x += delta * 0.0008
    })
    const material = useMemo(() => {
        return new THREE.ShaderMaterial({
            vertexShader: dustVertexShader,
            fragmentShader: dustFragmentShader,
            transparent: true,
            depthWrite: false,
            blending: THREE.AdditiveBlending,
            uniforms: {
                uTime: {
                    value: 0
                }
            }
        })
    }, [])
    const geometry = useMemo(() => {
        const geometry = new THREE.BufferGeometry()
        geometry.setAttribute(
            "position",
            new THREE.BufferAttribute(
                positions,
                3
            )
        )
        geometry.setAttribute(
            "aScale",
            new THREE.BufferAttribute(
                scales,
                1
            )
        )
        return geometry
    }, [])
    return (
        <points ref={ref} geometry={geometry} material={material} />
    )
}

export default DustParticles
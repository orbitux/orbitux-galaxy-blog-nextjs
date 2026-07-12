'use client'
import React, { useMemo, useRef } from 'react'
import * as THREE from "three"
import { generateStars } from '../generators/starsGenerator'
import { starFragmentShader, starVertexShader } from '../shaders/starShaders';
import { useFrame } from '@react-three/fiber';
const Stars = ({ count = 3000, depth = 40 }) => {
  const pointsRef = useRef()



  //-------geometry-------
  const geometry = useMemo(() => {
    const { positions, colors, randomValues, scales, twinkleStrength } = generateStars(count, depth)
    const geometry = new THREE.BufferGeometry()
    geometry.setAttribute(
      "position",
      new THREE.BufferAttribute(positions, 3)
    )
    geometry.setAttribute(
      "color",
      new THREE.BufferAttribute(colors, 3)
    )
    geometry.setAttribute(
      "aScale",
      new THREE.BufferAttribute(scales, 1)
    )
    geometry.setAttribute(
      "aRandom",
      new THREE.BufferAttribute(randomValues, 1)
    )
    geometry.setAttribute(
      "aTwinkleStrength",
      new THREE.BufferAttribute(twinkleStrength, 1)
    )
    return geometry
  }, [count, depth])

  //-------material-------
  const material = useMemo(() => {
    return new THREE.ShaderMaterial({
      vertexShader: starVertexShader,
      fragmentShader: starFragmentShader,
      transparent: true,
      depthWrite: false,
      vertexColors: true,
      blending: THREE.AdditiveBlending,
      uniforms: {
        uTime: {
          value: 0
        }
      }
    })
  }, [])

  //-------animation-------
  useFrame((state) => {
    if (document.hidden) return
    material.uniforms.uTime.value = state.clock.elapsedTime
  })
  return (
    <points ref={pointsRef} geometry={geometry} material={material} />
  )
}

export default Stars
import * as THREE from 'three'
import { galaxyConfig } from './config'
export function generateGalaxy() {
    const {
        count,
        radius,
        branches,
        spin,
        randomness,
        randomnessPower,
        insideColor,
        outSideColor,
    } = galaxyConfig

    const positions = new Float32Array(count * 3)
    const colors = new Float32Array(count * 3)
    const scales = new Float32Array(count)
    const colorInside = new THREE.Color(insideColor)
    const colorOutside = new THREE.Color(outSideColor)

    for (let i = 0; i < count; i++) {
        const i3 = i * 3
        const r = Math.random() * radius
        const branchAngle = ((i % branches) / branches) * Math.PI * 2
        const spinAngle = r * spin
        scales[i] = Math.random() * 0.8 + 0.2
        const randomX = Math.pow(Math.random(), randomnessPower) * (Math.random() < 0.5 ? -1 : 1)
            * randomness * r

        const randomY = Math.pow(Math.random(), randomnessPower) * (Math.random() < 0.5 ? -1 : 1)
            * randomness * r * 0.15

        const randomZ = Math.pow(Math.random(), randomnessPower) * (Math.random() < 0.5 ? -1 : 1)
            * randomness * r

        positions[i3] = Math.cos(branchAngle + spinAngle) * r + randomX
        positions[i3 + 1] = randomY
        positions[i3 + 2] = Math.sin(branchAngle + spinAngle) * r + randomZ
        const mixed = colorInside.clone()
        mixed.lerp(colorOutside, r / radius)

        colors[i3] = mixed.r
        colors[i3 + 1] = mixed.g
        colors[i3 + 2] = mixed.b
    }
    return {
        positions,
        colors,
        scales
    }
}
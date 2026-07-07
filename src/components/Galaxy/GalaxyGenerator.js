import * as THREE from 'three'
export function generateGalaxy({
    count = 1000,
    radius = 5,
    branches = 5,
    spin = 1,
    randomness = 0.3,
    randomnessPower = 3,
    insideColor = "#ff66ff",
    outSideColor = "#3c0366"
}) {
    const positions = new Float32Array(count * 3)
    const colors = new Float32Array(count * 3)
    const colorInside = new THREE.Color(insideColor)
    const colorOutside = new THREE.Color(outSideColor)

    for (let i = 0; i < count; i++) {
        const i3 = i * 3
        const r = Math.random() * radius
        const branchAngle = ((i % branches) / branches) * Math.PI * 2
        const spinAngle = r * spin
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
        colors
    }
}
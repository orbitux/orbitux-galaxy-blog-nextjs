import * as THREE from 'three'
export function generateStars(count = 3000, depth = 40) {
    const positions = new Float32Array(count * 3)
    const colors = new Float32Array(count * 3)

    const scales = new Float32Array(count)
    const randomValues = new Float32Array(count)

    const colorPalette = [
        new THREE.Color("#ffffff"), // white
        new THREE.Color("#dce8ff"), // cold blue
        new THREE.Color("#ffe7b3"), // yellow
        new THREE.Color("#ffd6ff"), // pink
        new THREE.Color("#c9b6ff"), // magenta
        new THREE.Color("#b5f2ff")  // cyan
    ]
    const twinkleStrength = new Float32Array(count)
    for (let i = 0; i < count; i++) {
        const i3 = i * 3
        const theta = Math.random() * Math.PI * 2
        const phi = Math.acos(2 * Math.random() - 1)
        const r = depth * (0.6 + Math.random() * 0.4)
        const offset = 15 * Math.random()
        positions[i3] = r * Math.sin(phi) * Math.cos(theta)
        positions[i3 + 1] = r * Math.cos(phi)
        positions[i3 + 2] = r * Math.sin(phi) * Math.sin(theta)
        const color = colorPalette[
            Math.floor(Math.random() * colorPalette.length)
        ]
        colors[i3] = color.r
        colors[i3 + 1] = color.g
        colors[i3 + 2] = color.b

        scales[i] = 0.4 + Math.random()
        randomValues[i] = Math.random() * Math.PI * 2
        twinkleStrength[i] = 0.4 + Math.random() * 0.6
    }
    return {
        positions,
        colors,
        scales,
        randomValues,
        twinkleStrength
    }
}
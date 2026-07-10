import * as THREE from 'three'
export function generateStars(count = 3000, depth = 40) {
    const positions = new Float32Array(count * 3)
    const colors = new Float32Array(count * 3)

    const scales = new Float32Array(count)
    const randomValues = new Float32Array(count)

    const colorPalette = [
        new THREE.Color("#ffffff"),
        new THREE.Color("#d8e6ff"),
        new THREE.Color("#b388ff"),
        new THREE.Color("#ffd6ff")
    ]

    for (let i = 0; i < count; i++) {
        const i3 = i * 3
        positions[i3] = (Math.random() - 0.5) * depth * 2
        positions[i3 + 1] = (Math.random() - 0.5) * depth * 2
        positions[i3 + 2] = (Math.random() - 0.5) * depth * 2

        const color = colorPalette[
            Math.floor(Math.random() * colorPalette.length)
        ]
        colors[i3] = color.r
        colors[i3 + 1] = color.g
        colors[i3 + 2] = color.b

        scales[i] = 0.4 + Math.random()
        randomValues[i] = Math.random() * Math.PI * 2
    }
    return {
        positions,
        colors,
        scales,
        randomValues
    }
}
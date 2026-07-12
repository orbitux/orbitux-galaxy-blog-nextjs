import * as THREE from "three"

export function generateDust(count = 4000) {
    const positions = new Float32Array(count * 3)
    const scales = new Float32Array(count)
    for (let i = 0; i < count; i++) {

        const i3 = i * 3
        positions[i3] = THREE.MathUtils.randFloatSpread(120)
        positions[i3 + 1] = THREE.MathUtils.randFloatSpread(120)
        positions[i3 + 2] = THREE.MathUtils.randFloatSpread(120)

        scales[i] = THREE.MathUtils.randFloat(0.3, 1.2)
    }
    return {
        positions,
        scales
    }
}
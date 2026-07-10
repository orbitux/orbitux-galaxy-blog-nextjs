import * as THREE from "three";
export function createShootingStar() {
    const position = new THREE.Vector3(
        -120,
        THREE.MathUtils.randFloat(20, 70),
        THREE.MathUtils.randFloat(-40, 10)
    )
    const velocity = new THREE.Vector3(
        THREE.MathUtils.randFloat(22, 40),
        THREE.MathUtils.randFloat(-12, -5),
        0
    )
    const scale = THREE.MathUtils.randFloat(0.8, 1.5)
    const color = new THREE.Color("#ffff")
    return {
        position,
        velocity,
        scale,
        color
    }
}
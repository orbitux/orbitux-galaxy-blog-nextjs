"use client";

import { Canvas } from "@react-three/fiber";
import SpiralGalaxy from "./SpiralGalaxy";
import '../../styles/header.css'
import Stars from "./Stars";
export const Galaxy = () => {
    return (
        <div className="bg-header-dark">
            <Canvas camera={{ position: [0, 2, 9], fov: 55 }}>
                <color attach="background" args={["#000"]} />
                <ambientLight intensity={1} />
                <Stars />
                <SpiralGalaxy />
            </Canvas>
        </div>
    );
}
"use client";

import { Canvas } from "@react-three/fiber";
import SpiralGalaxy from "./SpiralGalaxy";
import '../../styles/header.css'
import Stars from "./Stars";
import Nebula from "./Nebula";
import DustParticles from "./DustParticles";
export const Galaxy = () => {
    return (
        <div className="bg-header-dark">
            <Canvas camera={{ position: [0, 2, 9], fov: 55 }}>
                <color attach="background" args={["#000"]} />
                <ambientLight intensity={1} />
                <Nebula />
                <Stars count={140000} radius={220} size={0.02} />
                <Stars count={120000} radius={140} size={0.04} />
                <Stars count={100000} radius={80} size={0.05} />
                <DustParticles />
                <SpiralGalaxy />
            </Canvas>
        </div>
    );
}
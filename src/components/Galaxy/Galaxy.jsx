"use client";

import { Canvas } from "@react-three/fiber";
import SpiralGalaxy from "./components/SpiralGalaxy";
import '../../styles/header.css'
import Stars from "./components/Stars";
import Nebula from "./components/Nebula";
import DustParticles from "./components/DustParticles";
import GalaxyGroup from "./components/GalaxyGroup";
export const Galaxy = () => {
    return (
            <Canvas camera={{ position: [0, 2, 9], fov: 55 }}
                style={{ pointerEvents: 'auto' }}
            >
                <GalaxyGroup />
            </Canvas>
    );
}
"use client";

import { Canvas } from "@react-three/fiber";
import SpiralGalaxy from "./components/SpiralGalaxy";
import '../../styles/header.css'
import Stars from "./components/Stars";
import Nebula from "./components/Nebula";
import DustParticles from "./components/DustParticles";
import GalaxyGroup from "./GalaxyGroup";
import CameraRig from "./components/CameraRig";
import Header from "../Header/Header";
export const Galaxy = () => {
    return (
        <Canvas camera={{ position: [0, 2, 9], fov: 55 }}
            dpr={[1, 2]}
            style={{ pointerEvents: 'auto', height: '100vh',position:'absolute' }}
            className="hidden xl:inline-block"
        >
            <CameraRig />
            <GalaxyGroup />
        </Canvas>
    );
}
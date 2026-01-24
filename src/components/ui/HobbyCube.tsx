"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Box, MeshWobbleMaterial } from "@react-three/drei";
import { useRef, useState, useEffect } from "react";
import * as THREE from "three";
import { useTheme } from "next-themes";

function RotatingCube() {
    const meshRef = useRef<THREE.Mesh>(null);
    const { theme } = useTheme();
    const [color, setColor] = useState("#15803D");

    useEffect(() => {
        const style = getComputedStyle(document.documentElement);
        setColor(style.getPropertyValue("--primary").trim() || "#15803D");
    }, [theme]);

    useFrame((state) => {
        if (meshRef.current) {
            meshRef.current.rotation.x += 0.01;
            meshRef.current.rotation.y += 0.01;
        }
    });

    return (
        <Float speed={4} rotationIntensity={1} floatIntensity={2}>
            <Box args={[2, 2, 2]} ref={meshRef}>
                <MeshWobbleMaterial
                    attach="material"
                    color={color}
                    speed={1}
                    factor={0.6}
                    roughness={0.0}
                    metalness={0.5}
                />
            </Box>
        </Float>
    );
}

export function HobbyCube() {
    return (
        <div className="absolute top-20 right-10 w-full h-full max-w-[300px] max-h-[300px] pointer-events-none opacity-30 mix-blend-overlay hidden lg:block">
            <Canvas>
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} />
                <RotatingCube />
            </Canvas>
        </div>
    );
}

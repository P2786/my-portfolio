"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Sphere } from "@react-three/drei";
import { useRef, useState, useEffect } from "react";
import * as THREE from "three";
import { useTheme } from "next-themes";

function FloatingShape() {
    const meshRef = useRef<THREE.Mesh>(null);
    const [hovered, setHover] = useState(false);
    const { theme } = useTheme();
    const [colors, setColors] = useState({ primary: "#15803D", secondary: "#22c55e" });

    useEffect(() => {
        // dynamic color extraction from CSS variables
        const style = getComputedStyle(document.documentElement);
        setColors({
            primary: style.getPropertyValue("--primary").trim() || "#15803D",
            secondary: style.getPropertyValue("--secondary").trim() || "#22c55e"
        });
    }, [theme]);

    useFrame((state) => {
        if (meshRef.current) {
            // Gentle rotation
            meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.2;
            meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.3;

            // Mouse interaction (lerping for smoothness)
            const mouseX = state.mouse.x * 2;
            const mouseY = state.mouse.y * 2;
            meshRef.current.position.x = THREE.MathUtils.lerp(meshRef.current.position.x, mouseX, 0.1);
            meshRef.current.position.y = THREE.MathUtils.lerp(meshRef.current.position.y, mouseY, 0.1);
        }
    });

    return (
        <Float speed={2} rotationIntensity={1} floatIntensity={2}>
            <Sphere args={[1.5, 64, 64]} ref={meshRef} onPointerOver={() => setHover(true)} onPointerOut={() => setHover(false)}>
                <MeshDistortMaterial
                    color={colors.primary}
                    emissive={colors.secondary}
                    emissiveIntensity={0.2}
                    roughness={0.1}
                    metalness={0.8}
                    distort={0.4} // Wobbly effect
                    speed={2}
                />
            </Sphere>
        </Float>
    );
}

export function Scene3D() {
    return (
        <div className="absolute inset-0 -z-20 opacity-40 pointer-events-none">
            <Canvas camera={{ position: [0, 0, 5], fov: 45 }} dpr={[1, 2]} performance={{ min: 0.5 }} frameloop="always">
                <ambientLight intensity={0.5} />
                <directionalLight position={[10, 10, 5]} intensity={1} />
                <FloatingShape />
            </Canvas>
        </div>
    );
}

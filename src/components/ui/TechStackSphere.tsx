"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Text, Float, Sphere, MeshDistortMaterial } from "@react-three/drei";
import * as THREE from "three";

const skills = [
    "Next.js", "React", "TypeScript", "Three.js", "GSAP",
    "Tailwind", "Node.js", "Python", "Rust", "GraphQL",
    "PostgreSQL", "Docker", "AWS", "Git", "Figma"
];

function WordCloud({ color }: { color: string }) {
    const groupRef = useRef<THREE.Group>(null);

    const words = useMemo(() => {
        const temp = [];
        const count = skills.length;
        const radius = 2.5;

        for (let i = 0; i < count; i++) {
            // Fibonacci sphere distribution for uniform points
            const phi = Math.acos(-1 + (2 * i) / count);
            const theta = Math.sqrt(count * Math.PI) * phi;

            const x = radius * Math.cos(theta) * Math.sin(phi);
            const y = radius * Math.sin(theta) * Math.sin(phi);
            const z = radius * Math.cos(phi);

            temp.push({
                pos: [x, y, z] as [number, number, number],
                word: skills[i]
            });
        }
        return temp;
    }, []);

    useFrame((state) => {
        if (groupRef.current) {
            groupRef.current.rotation.y += 0.005;
            groupRef.current.rotation.x += 0.002;
        }
    });

    return (
        <group ref={groupRef}>
            {/* Central glowing core */}
            <Sphere args={[1.2, 32, 32]}>
                <MeshDistortMaterial
                    color={color}
                    speed={2}
                    distort={0.4}
                    radius={1}
                    transparent
                    opacity={0.15}
                />
            </Sphere>

            {words.map((w, i) => (
                <Float key={i} speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
                    <Text
                        position={w.pos}
                        fontSize={0.25}
                        color={color}
                        font="/fonts/SpaceGrotesk-Bold.ttf" // Optional: using default if missing
                        anchorX="center"
                        anchorY="middle"
                    >
                        {w.word}
                    </Text>
                </Float>
            ))}
        </group>
    );
}

export function TechStackSphere({ color = "#15803D" }: { color?: string }) {
    return (
        <div className="w-full h-[400px] md:h-[500px] cursor-grab active:cursor-grabbing">
            <Canvas camera={{ position: [0, 0, 7], fov: 40 }}>
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} />
                <WordCloud color={color} />
            </Canvas>
        </div>
    );
}

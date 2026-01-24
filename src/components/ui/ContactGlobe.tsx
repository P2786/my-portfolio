"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, OrbitControls, Sphere, Cylinder, Float, Trail } from "@react-three/drei";
import { useRef, useState, useEffect } from "react";
import * as THREE from "three";
import { useTheme } from "next-themes";

function HoloBot({ color }: { color: string }) {
    const headRef = useRef<THREE.Mesh>(null);
    const bodyRef = useRef<THREE.Mesh>(null);
    const rightArmRef = useRef<THREE.Group>(null);
    const leftArmRef = useRef<THREE.Group>(null);

    // Animation State
    useFrame((state) => {
        const time = state.clock.getElapsedTime();

        // 1. Waving Animation (Right Arm)
        if (rightArmRef.current) {
            // Wave motion: Point Up and Out (Negative Z)
            // Range: -0.4 (almost vertical) to -1.2 (tilted out)
            rightArmRef.current.rotation.z = -0.8 + Math.sin(time * 5) * 0.4;
            // Slight forward/back motion
            rightArmRef.current.rotation.x = Math.sin(time * 3) * 0.1;
        }

        // 2. Idle Body Float/Breathing
        if (bodyRef.current) {
            bodyRef.current.position.y = Math.sin(time * 1.5) * 0.05;
        }

        // 3. Head Look Around
        if (headRef.current) {
            headRef.current.rotation.y = Math.sin(time * 0.5) * 0.2;
        }
    });

    const holoMaterial = (
        <meshStandardMaterial
            color={color}
            emissive={color}
            emissiveIntensity={0.5}
            wireframe
            transparent
            opacity={0.3}
        />
    );

    const coreMaterial = (
        <meshStandardMaterial
            color={color}
            roughness={0.2}
            metalness={0.8}
        />
    );

    return (
        <group position={[0, -1, 0]}>
            <Float speed={2} rotationIntensity={0.2} floatIntensity={0.5}>
                {/* HEAD */}
                <mesh ref={headRef} position={[0, 1.6, 0]}>
                    <sphereGeometry args={[0.35, 16, 16]} />
                    {holoMaterial}
                </mesh>
                {/* Brain/Core glow */}
                <mesh position={[0, 1.6, 0]}>
                    <sphereGeometry args={[0.2, 8, 8]} />
                    <meshBasicMaterial color="white" />
                </mesh>

                {/* BODY */}
                <mesh ref={bodyRef} position={[0, 0.8, 0]}>
                    <cylinderGeometry args={[0.15, 0.25, 1.2, 8]} />
                    {holoMaterial}
                </mesh>

                {/* RIGHT ARM (Waving) */}
                <group ref={rightArmRef} position={[0.35, 1.3, 0]}>
                    {/* Shoulder */}
                    <mesh>
                        <sphereGeometry args={[0.1, 8, 8]} />
                        {coreMaterial}
                    </mesh>
                    {/* Arm Mesh */}
                    <mesh position={[0, 0.4, 0]}>
                        <capsuleGeometry args={[0.08, 0.8, 4, 8]} />
                        {holoMaterial}
                    </mesh>
                </group>

                {/* LEFT ARM (Idle) */}
                <group ref={leftArmRef} position={[-0.35, 1.3, 0]} rotation={[0, 0, -0.2]}>
                    <mesh>
                        <sphereGeometry args={[0.1, 8, 8]} />
                        {coreMaterial}
                    </mesh>
                    <mesh position={[0, -0.4, 0]}>
                        <capsuleGeometry args={[0.08, 0.8, 4, 8]} />
                        {holoMaterial}
                    </mesh>
                </group>
            </Float>
        </group>
    );
}

function Particles({ color }: { color: string }) {
    const ref = useRef<any>(null);
    const [coords] = useState(() => {
        const pts = [];
        for (let i = 0; i < 500; i++) {
            // Random spread
            const x = (Math.random() - 0.5) * 6;
            const y = (Math.random() - 0.5) * 6;
            const z = (Math.random() - 0.5) * 4;
            pts.push(x, y, z);
        }
        return new Float32Array(pts);
    });

    useFrame((state, delta) => {
        if (ref.current) {
            ref.current.rotation.y += delta / 20;
        }
    });

    return (
        <Points ref={ref} positions={coords} stride={3} {...(null as any)}>
            <PointMaterial
                transparent
                color={color}
                size={0.03}
                sizeAttenuation={true}
                depthWrite={false}
                opacity={0.4}
            />
        </Points>
    )
}

export function ContactGlobe() {
    const { theme } = useTheme();
    const [color, setColor] = useState("#15803D");

    useEffect(() => {
        const style = getComputedStyle(document.documentElement);
        setColor(style.getPropertyValue("--primary").trim() || "#15803D");
    }, [theme]);

    return (
        <div className="h-[400px] w-full relative -z-10">
            <Canvas camera={{ position: [0, 0, 4], fov: 50 }}>
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} intensity={1} />

                <HoloBot color={color} />
                <Particles color={color} />

                <OrbitControls enableZoom={false} enablePan={false} />
            </Canvas>
        </div>
    );
}

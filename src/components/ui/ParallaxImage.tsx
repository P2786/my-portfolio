"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

interface ParallaxImageProps {
    src: string;
    alt: string;
    className?: string;
    speed?: number; // 0 to 1, higher is faster movement
}

export function ParallaxImage({ src, alt, className = "", speed = 0.5 }: ParallaxImageProps) {
    const triggerRef = useRef<HTMLDivElement>(null);
    const imageRef = useRef<HTMLImageElement>(null);

    useEffect(() => {
        const trigger = triggerRef.current;
        const image = imageRef.current;

        if (!trigger || !image) return;

        // Animation: Move image slightly slower than scroll to create depth
        const yOffset = 100 * speed;

        const timeline = gsap.timeline({
            scrollTrigger: {
                trigger: trigger,
                start: "top bottom",
                end: "bottom top",
                scrub: true,
            },
        });

        timeline.fromTo(
            image,
            { y: -yOffset },
            { y: yOffset, ease: "none" }
        );

        return () => {
            // Cleanup ScrollTrigger
            ScrollTrigger.getAll().forEach(t => t.kill());
        };
    }, [speed]);

    return (
        <div ref={triggerRef} className={`relative overflow-hidden ${className} bg-surface`}>
            <img
                ref={imageRef}
                src={src}
                alt={alt}
                className="w-full h-[130%] object-cover absolute top-[-15%] pointer-events-none"
            />
        </div>
    );
}

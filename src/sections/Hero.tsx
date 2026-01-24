"use client";

import { Button } from "@/components/ui/Button";
import { ParticlesBackground } from "@/components/ui/ParticlesBackground";
import { SplitText } from "@/components/ui/SplitText";
import { Scene3D } from "@/components/ui/Scene3D";
import { ArrowRight, Download } from "lucide-react";
import { motion } from "framer-motion";

export function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">

            {/* Dynamic Backgrounds */}
            <Scene3D />
            <ParticlesBackground />
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] -z-10 animate-pulse" />

            <div className="container mx-auto px-6 flex flex-col items-center text-center z-10">

                {/* Profile Image Bubble */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="relative mb-6"
                >
                    <div className="w-24 h-24 md:w-32 md:h-32 rounded-full border-4 border-primary/20 p-1 bg-surface shadow-2xl overflow-hidden">
                        <img
                            src="/profile-v2.png"
                            alt="User Profile"
                            className="w-full h-full object-cover rounded-full"
                        />
                    </div>
                    {/* Pulsing indicator */}
                    <div className="absolute bottom-1 right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-surface animate-pulse" />
                </motion.div>

                {/* Animated Badge */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="mb-8 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm text-sm text-primary font-mono tracking-wide"
                >
                    Available for Hire
                </motion.div>

                {/* Animated Headlines */}
                <div className="mb-8 font-heading font-bold tracking-tight leading-[1.1] text-5xl md:text-7xl lg:text-8xl">
                    <SplitText delay={0.2}>
                        Building Digital
                    </SplitText>
                    <motion.span
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 1.0, duration: 0.5 }}
                        className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary block mt-2"
                    >
                        Experiences
                    </motion.span>
                </div>

                {/* Subheading */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.4, duration: 1 }}
                    className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-12 leading-relaxed"
                >
                    I craft accessible, pixel-perfect, and performant web experiences
                    blending design and technology.
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.6, duration: 0.8 }}
                    className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
                >
                    <Button size="lg" className="group">
                        View Projects
                        <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </Button>

                    <Button variant="secondary" size="lg">
                        Download CV
                        <Download className="ml-2 w-4 h-4" />
                    </Button>
                </motion.div>
            </div>
        </section>
    );
}

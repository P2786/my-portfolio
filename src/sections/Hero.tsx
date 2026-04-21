"use client";

import { Button } from "@/components/ui/Button";
import { ParticlesBackground } from "@/components/ui/ParticlesBackground";
import { SplitText } from "@/components/ui/SplitText";
import { Scene3D } from "@/components/ui/Scene3D";
import { ArrowRight, Download } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

export function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">

            {/* Background */}
            <Scene3D />
            <ParticlesBackground />
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] -z-10 animate-pulse" />

            <div className="container mx-auto px-6 flex flex-col items-center text-center z-10">

                {/* Profile Image (UNCHANGED NAME) */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="relative mb-6"
                >
                    <div className="w-24 h-24 md:w-32 md:h-32 rounded-full border-4 border-primary/20 p-1 bg-surface shadow-2xl overflow-hidden">
                        <img
                            src="/profile-v2.png"   // ✅ SAME NAME (no change)
                            alt="Pramit Savaliya"
                            className="w-full h-full object-cover rounded-full"
                        />
                    </div>

                    {/* Online Indicator */}
                    <div className="absolute bottom-1 right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-surface animate-pulse" />
                </motion.div>

                {/* Badge */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="mb-8 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm text-sm text-primary font-mono tracking-wide"
                >
                    🚀 Open to Opportunities
                </motion.div>

                {/* Heading */}
                <div className="mb-8 font-heading font-bold tracking-tight leading-[1.1] text-5xl md:text-7xl lg:text-8xl">
                    
                    <SplitText delay={0.2}>
                        Hi, I'm Pramit
                    </SplitText>

                    <motion.span
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 1.0, duration: 0.5 }}
                        className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary block mt-2"
                    >
                        Full Stack Developer
                    </motion.span>
                </div>

                {/* Description */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.4, duration: 1 }}
                    className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-12 leading-relaxed"
                >
                    I build modern, scalable, and user-friendly web applications using JavaScript, React, PHP, and more. Passionate about creating real-world projects and continuously learning new technologies.
                </motion.p>

                {/* Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.6, duration: 0.8 }}
                    className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
                >
                    
                    <Link href="/projects">
                        <Button size="lg" className="group">
                            View Projects
                            <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                        </Button>
                    </Link>

                    <a href="/resume.pdf" download>
                        <Button variant="secondary" size="lg">
                            Download CV
                            <Download className="ml-2 w-4 h-4" />
                        </Button>
                    </a>

                </motion.div>
            </div>
        </section>
    );
}
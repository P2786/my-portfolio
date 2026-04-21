"use client";

import React from "react";
import { HomeBentoBoard, BentoCard } from "./HomeBentoBoard";
import { Scene3D } from "@/components/ui/Scene3D";
import { ParticlesBackground } from "@/components/ui/ParticlesBackground";
import { SplitText } from "@/components/ui/SplitText";
import { Button } from "@/components/ui/Button";
import { ArrowRight, Download, Github, Mail, Sparkles, MapPin, Globe, Briefcase, GraduationCap } from "lucide-react";
import { TechStackSphere } from "@/components/ui/TechStackSphere";
import { ParallaxImage } from "@/components/ui/ParallaxImage";
import { Instagram, Linkedin } from "lucide-react";
import { AboutStats } from "@/components/ui/AboutStats";
import { Reveal } from "@/components/ui/Reveal";
import { motion } from "framer-motion";
import Link from "next/link";

const featuredProjects = [
    { title: "ChatMitra - Real-Time Chat App", category: "PHP & MySQL", link: "/projects" },
    { title: "Online Voting System", category: "Full Stack Web", link: "/projects" },
    { title: "PrepPilot AI - Interview Platform", category: "AI & Node.js", link: "/projects" },
    { title: "InvisiCam - Hidden Camera Detector", category: "Android (Java)", link: "/projects" },
    { title: "PramitVote+ Polling App", category: "Web App", link: "/projects" },
    { title: "Pritify - Spotify Clone", category: "Music Streaming UI", link: "/projects" },
    { title: "PramitPicx - Photo Editor", category: "JavaScript App", link: "/projects" },
    { title: "Restaurant Booking System", category: "PHP & Database", link: "/projects" },
];

export function EditorialHome() {
    return (
        <div className="relative min-h-screen">
            {/* Background Effects (Untouched) */}
            <Scene3D />
            <ParticlesBackground />
            <div className="fixed inset-0 opacity-[0.02] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')] blend-overlay z-0" />

            {/* The Bento Board */}
            <HomeBentoBoard>

                {/* 1. Brand/Nav Card */}
                <BentoCard span="md:col-span-12 lg:col-span-8 lg:row-span-1" className="flex-row justify-between items-center py-4 px-10 h-auto">
                    <span className="text-2xl font-heading font-bold tracking-tighter italic">Pramit Savaliya</span>
                    <nav className="hidden md:flex gap-8 text-sm font-medium uppercase tracking-widest text-muted-foreground">
                        <Link href="/about" className="hover:text-primary transition-colors">About</Link>
                        <Link href="/projects" className="hover:text-primary transition-colors">Projects</Link>
                        <Link href="/skills" className="hover:text-primary transition-colors">Skills</Link>
                        <Link href="/contact" className="hover:text-primary transition-colors">Contact</Link>
                    </nav>
                </BentoCard>

                <BentoCard span="md:col-span-12 lg:col-span-4 lg:row-span-2" className="h-full">
                    <div className="flex flex-col gap-3">
                        <div className="flex items-center gap-4 text-sm font-medium text-primary">
                            <MapPin size={16} /> <span>India, Gujarat, Surat</span>
                            <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse ml-auto" />
                        </div>
                        <div className="space-y-1.5 pl-8">
                            <div className="flex items-center gap-2 text-xs text-muted-foreground font-medium italic">
                                <GraduationCap size={12} className="text-primary/70" />
                                <span>Status: Studying B.C.A at UTU</span>
                            </div>
                            <div className="flex items-center gap-2 text-xs text-muted-foreground font-medium italic">
                                <Briefcase size={12} className="text-primary/70" />
                                <span>Working: Full-time Student</span>
                            </div>
                            <div className="flex items-center gap-2 text-xs text-muted-foreground font-medium italic">
                                <Sparkles size={12} className="text-primary/70" />
                                <span>Available for: Projects</span>
                            </div>
                        </div>
                    </div>
                </BentoCard>

                {/* 2. Main Headline Card */}
                <BentoCard span="md:col-span-12 lg:col-span-5 lg:row-span-5" className="justify-between items-start gap-6 overflow-visible">
                    <h1 className="text-5xl md:text-6xl font-heading font-bold tracking-tight leading-[1.1]">
                        <SplitText delay={0.2}>CS Student &</SplitText>
                        <span className="text-primary italic"> Full-Stack </span>
                        <SplitText delay={0.4}>Developer.</SplitText>
                    </h1>
                    <p className="text-lg text-muted-foreground max-w-lg leading-relaxed">
                        I am a Computer Science student driven by a passion for creating unique and functional digital experiences. My journey is defined by a relentless curiosity to understand how things work and a desire to build solutions that delight users. I focus on crafting accessible, high-performance web applications, turning complex ideas into intuitive, interactive realities.
                    </p>
                    <div className="flex items-center gap-4 pt-4">
                        <Link href="/contact">
                            <Button size="lg" className="group h-[60px]">
                                Let's Talk
                                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                            </Button>
                        </Link>
                        <a href="https://github.com/P2786" target="_blank" rel="noopener noreferrer">
                            <Button variant="outline" className="w-[60px] h-[60px] p-0 flex items-center justify-center">
                                <Github size={20} />
                            </Button>
                        </a>
                    </div>
                </BentoCard>

                {/* 3. Profile Portrait Card */}
                <BentoCard span="md:col-span-12 lg:col-span-3 lg:row-span-5" className="p-0 border-none bg-transparent hover:scale-105 transition-transform h-[500px] md:h-full">
                    <div className="relative w-full h-full rounded-[2.5rem] overflow-hidden border border-border/50">
                        <ParallaxImage
                            src="/profile-v2.png"
                            alt="Profile"
                            className="w-full h-full object-cover"
                            speed={0.15}
                        />
                        <div className="absolute bottom-6 left-6 right-6 p-4 bg-surface/80 backdrop-blur-md rounded-2xl border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity">
                            <p className="text-xs font-bold uppercase tracking-widest text-primary mb-1">Full-Stack Web Developer</p>
                            <p className="text-sm font-medium">Pramit Savaliya</p>
                        </div>
                    </div>
                </BentoCard>

                {/* 4. Projects Showcase Card */}
                <BentoCard span="md:col-span-12 lg:col-span-4 lg:row-span-6" className="justify-start gap-8">
                    <div className="flex justify-between items-center">
                        <h2 className="text-2xl font-heading font-bold uppercase tracking-tight">Key Works</h2>
                        <Link href="/projects">
                            <ArrowRight className="text-muted-foreground group-hover:text-primary transition-colors cursor-pointer" />
                        </Link>
                    </div>
                    <div className="space-y-6">
                        {featuredProjects.map((p, i) => (
                            <Link href="/projects" key={i}>
                                <div className="flex items-center justify-between group/item p-4 rounded-2xl hover:bg-white/5 transition-colors cursor-pointer border border-transparent hover:border-white/5">
                                    <div>
                                        <p className="text-xs text-primary font-bold uppercase tracking-widest mb-1">{p.category}</p>
                                        <p className="text-lg font-medium tracking-tight group-hover/item:text-primary transition-colors">{p.title}</p>
                                    </div>
                                    <Globe size={20} className="text-muted-foreground group-hover/item:text-primary transition-colors" />
                                </div>
                            </Link>
                        ))}
                    </div>
                    <div className="mt-auto px-4 py-3 bg-primary/5 rounded-xl border border-primary/10 text-center text-xs font-bold text-primary">
                        HOVER TO EXPLORE MORE
                    </div>
                </BentoCard>

                {/* 5. Minimal Bio / Experience Card */}
                <BentoCard span="md:col-span-12 lg:col-span-5 lg:row-span-3" className="gap-4">
                    <p className="text-muted-foreground text-sm leading-relaxed">
                        Computer Science student and Frontend Developer focused on building clean, accessible, and high-performance web experiences.
                    </p>
                    <div className="flex gap-8 items-center pt-2">
                        <div>
                            <p className="text-3xl font-heading font-bold text-primary">B.C.A</p>
                            <p className="text-[10px] uppercase tracking-widest text-muted-foreground font-bold">CS Student</p>
                        </div>
                        <div className="h-10 w-px bg-border/50" />
                        <div>
                            <p className="text-3xl font-heading font-bold text-primary">20+</p>
                            <p className="text-[10px] uppercase tracking-widest text-muted-foreground font-bold">Projects</p>
                        </div>
                    </div>
                </BentoCard>

                {/* 6. Big Contact / CTA Card */}
                <BentoCard span="md:col-span-12 lg:col-span-3 lg:row-span-3" className="p-0 overflow-hidden group/cta min-h-[300px] md:min-h-0">
                    <Link href="/contact" className="w-full h-full p-10 bg-primary hover:bg-primary/90 flex flex-col justify-center transition-colors">
                        <Mail className="text-white transform group-hover/cta:-rotate-12 transition-transform" size={48} />
                        <h2 className="text-4xl font-heading font-bold text-white mt-6 mb-2">Contact <span className="italic">me</span></h2>
                        <p className="text-white/80 text-sm font-medium">pramit.savaliya2786@gmail.com</p>
                    </Link>
                </BentoCard>

                {/* 7. Footer / Socials Card */}
               <BentoCard span="md:col-span-12 lg:col-span-4 lg:row-span-2" className="flex-row flex-wrap justify-center md:justify-around gap-4 h-auto py-6">

    <a
        href="https://www.instagram.com/pramit_savaliya_2708/"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest hover:text-primary transition-colors italic whitespace-nowrap"
    >
        <Instagram size={16} /> Instagram
    </a>

    <div className="hidden md:block w-px h-6 bg-border/50" />

    <a
        href="https://www.linkedin.com/in/Pramit-Savaliya/"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest hover:text-primary transition-colors italic whitespace-nowrap"
    >
        <Linkedin size={16} /> LinkedIn
    </a>

    <div className="hidden md:block w-px h-6 bg-border/50" />

    <a
        href="https://github.com/P2786"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest hover:text-primary transition-colors italic whitespace-nowrap"
    >
        <Github size={16} /> GitHub
    </a>

</BentoCard>

            </HomeBentoBoard>
        </div>
    );
}

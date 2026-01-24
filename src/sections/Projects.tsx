"use client";

import { Button } from "@/components/ui/Button";
import { ArrowUpRight, Github } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { motion } from "framer-motion";

const projects = [
    {
        title: "Student Portal V1",
        description: "A comprehensive student management system with a clean UI and intuitive navigation.",
        tags: ["HTML", "CSS", "JavaScript"],
        link: "https://github.com/Abbas192006",
        github: "https://github.com/Abbas192006",
        className: "md:col-span-1 md:row-span-1",
    },
    {
        title: "Social Media App (OOP)",
        description: "Robust social networking backend built entirely in C++ using advanced Object-Oriented principles.",
        tags: ["C++", "OOP", "Data Structures"],
        link: "https://github.com/Abbas192006",
        github: "https://github.com/Abbas192006",
        className: "md:col-span-1 md:row-span-1",
    },
    {
        title: "Holographic Portfolio",
        description: "High-end developer portfolio featuring WebGL, 3D assistants, and 30+ dynamic themes.",
        tags: ["Next.js", "Three.js", "Tailwind"],
        link: "/",
        github: "https://github.com/Abbas192006",
        className: "md:col-span-1 md:row-span-1",
    },
    {
        title: "Student Portal Design",
        description: "Professional UI/UX case study and prototype for a modern educational platform.",
        tags: ["Figma", "UI/UX", "Prototyping"],
        link: "https://www.instagram.com/abbas_412_/",
        github: "#",
        className: "md:col-span-1 md:row-span-1",
    },
    {
        title: "DSA Visualizer",
        description: "Interactive platform for visualizing complex sorting and searching algorithms in real-time.",
        tags: ["React", "Algorithms", "Framer Motion"],
        link: "https://github.com/Abbas192006",
        github: "https://github.com/Abbas192006",
        className: "md:col-span-1 md:row-span-1",
    },
    {
        title: "Full Stack Store",
        description: "Scalable e-commerce solution with secure authentication and real-time inventory management.",
        tags: ["Node.js", "Prisma", "PostgreSQL"],
        link: "https://github.com/Abbas192006",
        github: "https://github.com/Abbas192006",
        className: "md:col-span-1 md:row-span-1",
    },
    {
        title: "C++ CLI Manager",
        description: "Efficient command-line tool for managing student records and academic performance tracking.",
        tags: ["C++", "File I/O", "CLI"],
        link: "https://github.com/Abbas192006",
        github: "https://github.com/Abbas192006",
        className: "md:col-span-1 md:row-span-1",
    },
    {
        title: "Weather IoV",
        description: "Modern weather forecasting dashboard with dynamic background updates based on climate.",
        tags: ["React", "API", "Standard CSS"],
        link: "https://github.com/Abbas192006",
        github: "https://github.com/Abbas192006",
        className: "md:col-span-1 md:row-span-1",
    },
    {
        title: "Modern Portfolio V1",
        description: "Minimalist version 1 of personal identity featuring smooth transitions and clean grid layout.",
        tags: ["Astro", "Tailwind", "Alpine.js"],
        link: "https://github.com/Abbas192006",
        github: "https://github.com/Abbas192006",
        className: "md:col-span-1 md:row-span-1",
    },
    {
        title: "AI Sentiment Analyzer",
        description: "Natural Language Processing tool that identifies emotional tone in dataset comments.",
        tags: ["Python", "NLTK", "Scikit"],
        link: "https://github.com/Abbas192006",
        github: "https://github.com/Abbas192006",
        className: "md:col-span-1 md:row-span-1",
    },
    {
        title: "Real-time Chat App",
        description: "Instant messaging platform with room-based communication and persistent storage.",
        tags: ["Socket.io", "Express", "Redis"],
        link: "https://github.com/Abbas192006",
        github: "https://github.com/Abbas192006",
        className: "md:col-span-1 md:row-span-1",
    },
    {
        title: "Task Flow Pro",
        description: "Advanced productivity dashboard with drag-and-drop task management and analytics.",
        tags: ["TypeScript", "Dnd-kit", "Zustand"],
        link: "https://github.com/Abbas192006",
        github: "https://github.com/Abbas192006",
        className: "md:col-span-1 md:row-span-1",
    },
    {
        title: "Cryptocurrency Pulse",
        description: "Real-time crypto tracker with price alerts, historical data visualization, and market news.",
        tags: ["React", "WebSockets", "Chart.js"],
        link: "https://github.com/Abbas192006",
        github: "https://github.com/Abbas192006",
        className: "md:col-span-1 md:row-span-1",
    },
    {
        title: "HealthTrack AI",
        description: "Mobile-first health monitor using machine learning to predict wellness trends from user data.",
        tags: ["React Native", "TensorFlow.js", "Firebase"],
        link: "https://github.com/Abbas192006",
        github: "https://github.com/Abbas192006",
        className: "md:col-span-1 md:row-span-1",
    },
    {
        title: "Recipe Finder Hub",
        description: "Community-driven recipe platform with AI-powered ingredient substitution recommendations.",
        tags: ["Next.js", "MongoDB", "OpenAI"],
        link: "https://github.com/Abbas192006",
        github: "https://github.com/Abbas192006",
        className: "md:col-span-1 md:row-span-1",
    },
    {
        title: "Smart Garden IoT",
        description: "Automated plant care system with soil moisture sensors and remote dashboard control.",
        tags: ["C++", "ESP32", "MQTT"],
        link: "https://github.com/Abbas192006",
        github: "https://github.com/Abbas192006",
        className: "md:col-span-1 md:row-span-1",
    },
    {
        title: "Auto-Scraper Pro",
        description: "Versatile web scraping engine with proxy rotation and automated data cleaning pipelines.",
        tags: ["Python", "Selenium", "Pandas"],
        link: "https://github.com/Abbas192006",
        github: "https://github.com/Abbas192006",
        className: "md:col-span-1 md:row-span-1",
    },
    {
        title: "AudioWave Editor",
        description: "Browser-based lightweight audio editor for quick trims, fades, and visual analysis.",
        tags: ["Web Audio API", "Svelte", "Canvas"],
        link: "https://github.com/Abbas192006",
        github: "https://github.com/Abbas192006",
        className: "md:col-span-1 md:row-span-1",
    }
];

import { SpotlightCard } from "@/components/ui/SpotlightCard";

export function Projects() {
    return (
        <section id="projects" className="py-24 bg-surface/30">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12">
                    <Reveal width="fit-content">
                        <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">
                            Selected <span className="text-primary">Works</span>
                        </h2>
                        <p className="text-muted-foreground max-w-xl">
                            A showcase of my recent technical endeavors. <span className="text-primary font-medium animate-pulse">Hover to explore more.</span>
                        </p>
                    </Reveal>
                    <Reveal width="fit-content">
                        <a href="https://github.com/Abbas192006" target="_blank" rel="noopener noreferrer">
                            <Button variant="outline" className="mt-6 md:mt-0">View All Repos</Button>
                        </a>
                    </Reveal>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <Reveal key={index} width="100%" className={project.className}>
                            <a href={project.link || project.github} target="_blank" rel="noopener noreferrer" className="block h-full">
                                <SpotlightCard className="h-[450px] flex flex-col group hover:border-primary/50 transition-all duration-500 cursor-pointer">
                                    <div className="p-10 flex-1 flex flex-col h-full relative">
                                        <div className="flex justify-between items-start mb-8">
                                            <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-inner">
                                                <span className="font-bold text-xl">{project.title[0]}</span>
                                            </div>
                                            <div className="flex gap-3 opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0 duration-300">
                                                <div className="p-2.5 bg-surface/80 backdrop-blur-sm rounded-full text-muted-foreground hover:text-primary border border-border/50"><Github size={20} /></div>
                                                <div className="p-2.5 bg-surface/80 backdrop-blur-sm rounded-full text-muted-foreground hover:text-primary border border-border/50"><ArrowUpRight size={20} /></div>
                                            </div>
                                        </div>

                                        <h3 className="text-2xl font-bold font-heading mb-3 group-hover:text-primary transition-colors">{project.title}</h3>
                                        <p className="text-muted-foreground line-clamp-3 group-hover:text-foreground/80 transition-colors">{project.description}</p>

                                        <div className="mt-6 flex items-center text-primary text-sm font-bold opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500">
                                            View Project Case <ArrowUpRight size={16} className="ml-1" />
                                        </div>

                                        <div className="flex flex-wrap gap-2 mt-auto pt-6 border-t border-border/50">
                                            {project.tags.map(tag => (
                                                <span key={tag} className="px-2.5 py-1 bg-surface text-xs font-medium text-primary rounded-full border border-border/50 group-hover:border-primary/30 transition-colors">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </SpotlightCard>
                            </a>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
}

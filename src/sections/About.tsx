import { TechStackSphere } from "@/components/ui/TechStackSphere";
import { ParallaxImage } from "@/components/ui/ParallaxImage";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { AboutStats } from "@/components/ui/AboutStats";
import { ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";

export function About() {
    return (
        <section id="about" className="py-24 bg-background relative overflow-hidden">
            {/* Background Texture/Noise for Premium Feel */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')] blend-overlay" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* Left Side: Unique Visual Duo (Photo + 3D) */}
                    <Reveal width="100%">
                        <div className="relative group">
                            {/* The 3D Sphere - Floating behind/side to the photo */}
                            <div className="absolute -top-20 -left-20 w-full h-full opacity-40 group-hover:opacity-100 transition-opacity duration-700">
                                <TechStackSphere />
                            </div>

                            {/* The Profile Photo - The "Real" Person */}
                            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden bg-surface border border-border shadow-2xl z-10 max-w-[400px] mx-auto lg:ml-0">
                                <ParallaxImage
                                    src="/profile-v2.jpg"
                                    alt="User Profile"
                                    className="w-full h-full"
                                    speed={0.1}
                                />

                                {/* Overlay badge */}
                                <div className="absolute top-4 left-4 bg-primary/90 text-white px-4 py-2 rounded-full text-xs font-bold flex items-center gap-2 backdrop-blur-sm shadow-xl">
                                    <Sparkles size={14} /> Available for Projects
                                </div>
                            </div>
                        </div>
                    </Reveal>

                    {/* Right Side: High-Impact Content */}
                    <div className="space-y-8">
                        <Reveal>
                            <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">
                                The <span className="text-primary">Snapshot</span>
                            </h2>
                        </Reveal>
                        <Reveal>
                            <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
                                <p className="text-xl text-foreground font-medium">
                                    I am a Computer Science student and Frontend Developer dedicated to crafting high-performance digital products.
                                </p>
                                <p>
                                    My journey began with a curiosity for how things work on the internet, which quickly evolved into a passion for creating seamless, user-centric digital experiences. I specialize in the <strong>React ecosystem</strong>, leveraging Next.js and Tailwind CSS for precision styling.
                                </p>
                            </div>
                        </Reveal>

                        <div className="pt-4">
                            <AboutStats />
                        </div>

                        <Reveal>
                            <div className="flex flex-wrap gap-4 pt-4">
                                <Link href="/about">
                                    <Button size="lg" className="group">
                                        Discover Full Story
                                        <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                                    </Button>
                                </Link>
                                <Button size="lg" variant="outline">Learn More</Button>
                            </div>
                        </Reveal>
                    </div>
                </div>
            </div>
        </section>
    );
}

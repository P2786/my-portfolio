import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import { ParallaxImage } from "@/components/ui/ParallaxImage";
import { AboutStats } from "@/components/ui/AboutStats";
import { HobbyCube } from "@/components/ui/HobbyCube";
import { Timeline } from "@/components/ui/Timeline";
import { Download, Mail } from "lucide-react";

export default function AboutPage() {
    return (
        <main className="pt-32 pb-20 min-h-screen">
            <div className="container mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-20 items-start mb-32">
                    {/* Personal Focus Image */}
                    <Reveal width="100%">
                        <div className="relative">
                            <div className="aspect-[4/5] rounded-3xl overflow-hidden bg-surface relative border-4 border-primary/10 shadow-2xl">
                                <ParallaxImage
                                    src="/profile-v2.png"
                                    alt="Personal Profile"
                                    className="w-full h-full"
                                    speed={0.2}
                                />
                            </div>
                            <div className="absolute -bottom-10 -left-10 hidden xl:block z-20">
                                <HobbyCube />
                            </div>
                        </div>
                    </Reveal>

                    {/* Detailed Narrative */}
                    <div className="space-y-10">
                        <Reveal>
                            <h1 className="text-5xl md:text-7xl font-heading font-bold">
                                The Man Behind the <span className="text-primary">Pixels</span>
                            </h1>
                        </Reveal>

                        <Reveal>
                            <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
                                <p>
                                    I am a Computer Science student and Frontend Developer with a deep passion for building high-performance web applications. My journey began with a curiosity for how the internet works, which evolved into a focus on crafting seamless, user-centric digital experiences.
                                </p>
                                <p>
                                    I specialize in the <strong>React ecosystem</strong>, leveraging Next.js for scalable architecture and Tailwind CSS for visual precision. My approach focuses on bridging the gap between design and development—ensuring every product is as beautiful as it is functional.
                                </p>
                                <p>
                                    When I'm not in front of a screen, I'm likely experimenting with 3D modeling in Blender, contributing to open-source libraries, or exploring the latest design trends. I believe that quality isn't just an act, but a habit that informs everything I create.
                                </p>
                            </div>
                        </Reveal>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-4">
                            <div className="p-6 bg-surface/30 rounded-2xl border border-border">
                                <h3 className="font-bold text-foreground mb-2">My Philosophy</h3>
                                <p className="text-sm text-muted-foreground font-medium">Build for the future, code for the human.</p>
                            </div>
                            <div className="p-6 bg-surface/30 rounded-2xl border border-border">
                                <h3 className="font-bold text-foreground mb-2">Core Focus</h3>
                                <p className="text-sm text-muted-foreground font-medium">UX Engineering, Scalable Architecture, 3D Web.</p>
                            </div>
                        </div>

                        <Reveal>
                            <div className="flex flex-wrap gap-4">
                                <Button size="lg">
                                    <Download className="mr-2 w-4 h-4" /> Download Resume
                                </Button>
                                <Link href="/contact">
                                    <Button size="lg" variant="outline">
                                        <Mail className="mr-2 w-4 h-4" /> Get in Touch
                                    </Button>
                                </Link>
                            </div>
                        </Reveal>
                    </div>
                </div>

                <div className="mb-32">
                    <Reveal>
                        <h2 className="text-3xl md:text-5xl font-heading font-bold mb-16 text-center">Professional <span className="text-primary">Journey</span></h2>
                    </Reveal>
                    <Timeline />
                </div>

                <div>
                    <Reveal>
                        <h2 className="text-3xl md:text-5xl font-heading font-bold mb-16 text-center">By the <span className="text-primary">Numbers</span></h2>
                    </Reveal>
                    <AboutStats />
                </div>
            </div>
        </main>
    );
}

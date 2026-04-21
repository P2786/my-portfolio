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
                    
                    {/* Profile Image */}
                    <Reveal width="100%">
                        <div className="relative">
                            <div className="aspect-[4/5] rounded-3xl overflow-hidden bg-surface relative border-4 border-primary/10 shadow-2xl">
                                <ParallaxImage
                                    src="/profile-v2.png"   // 🔥 CHANGE IMAGE HERE
                                    alt="Pramit Savaliya"
                                    className="w-full h-full"
                                    speed={0.2}
                                />
                            </div>
                            <div className="absolute -bottom-10 -left-10 hidden xl:block z-20">
                                <HobbyCube />
                            </div>
                        </div>
                    </Reveal>

                    {/* About Content */}
                    <div className="space-y-10">
                        <Reveal>
                            <h1 className="text-5xl md:text-7xl font-heading font-bold">
                                The Developer Behind the <span className="text-primary">Code</span>
                            </h1>
                        </Reveal>

                        <Reveal>
                            <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
                                
                                <p>
                                    I am Pramit Savaliya, a passionate Computer Engineering student and full-stack developer with a strong interest in building modern and user-friendly web applications. I enjoy transforming ideas into real-world digital solutions that solve problems and create impact.
                                </p>

                                <p>
                                    My core expertise lies in technologies like <strong>HTML, CSS, JavaScript, PHP, and React</strong>. I have developed multiple projects including chat applications, voting systems, AI-based platforms like PrepPilot, and Android apps like InvisiCam. I love working on both frontend design and backend logic to create complete and scalable systems.
                                </p>

                                <p>
                                    Beyond coding, I am always eager to learn new technologies, improve my skills, and build innovative projects. I believe consistency and creativity are the keys to becoming a successful developer, and I continuously strive to grow in both technical and problem-solving abilities.
                                </p>

                                <p>
                                    My goal is to become a skilled software developer and contribute to impactful projects that make people's lives easier through technology.
                                </p>

                            </div>
                        </Reveal>

                        {/* Cards */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-4">
                            <div className="p-6 bg-surface/30 rounded-2xl border border-border">
                                <h3 className="font-bold text-foreground mb-2">My Philosophy</h3>
                                <p className="text-sm text-muted-foreground font-medium">
                                    Build impactful solutions and keep learning every day.
                                </p>
                            </div>
                            <div className="p-6 bg-surface/30 rounded-2xl border border-border">
                                <h3 className="font-bold text-foreground mb-2">Core Focus</h3>
                                <p className="text-sm text-muted-foreground font-medium">
                                    Full-Stack Development, UI/UX, Scalable Web Apps.
                                </p>
                            </div>
                        </div>

                        {/* Buttons */}
                        <Reveal>
                            <div className="flex flex-wrap gap-4">
                                
                                <a href="/pramit-savaliya-cv.pdf" download="Pramit_Savaliya_Resume.pdf">
                                    <Button size="lg">
                                        <Download className="mr-2 w-4 h-4" />
                                        Download Resume
                                    </Button>
                                </a>

                                <Link href="/contact">
                                    <Button size="lg" variant="outline">
                                        <Mail className="mr-2 w-4 h-4" /> Get in Touch
                                    </Button>
                                </Link>

                            </div>
                        </Reveal>
                    </div>
                </div>

                {/* Timeline */}
                <div className="mb-32">
                    <Reveal>
                        <h2 className="text-3xl md:text-5xl font-heading font-bold mb-16 text-center">
                            Professional <span className="text-primary">Journey</span>
                        </h2>
                    </Reveal>
                    <Timeline />
                </div>

                {/* Stats */}
                <div>
                    <Reveal>
                        <h2 className="text-3xl md:text-5xl font-heading font-bold mb-16 text-center">
                            By the <span className="text-primary">Numbers</span>
                        </h2>
                    </Reveal>
                    <AboutStats />
                </div>
            </div>
        </main>
    );
}

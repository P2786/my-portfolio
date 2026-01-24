"use client";

import { Contact } from "@/sections/Contact";
import { ContactGlobe } from "@/components/ui/ContactGlobe";
import { Reveal } from "@/components/ui/Reveal";

export default function ContactPage() {
    return (
        <main className="pt-32 pb-20 min-h-screen relative overflow-hidden">
            {/* Background elements if any needed specifically for this page */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -z-10" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* Left Side: 3D Holographic Assistant */}
                    <Reveal width="100%" className="order-2 lg:order-1">
                        <div className="relative group">
                            <div className="absolute inset-0 bg-primary/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                            <ContactGlobe />
                        </div>
                    </Reveal>

                    {/* Right Side: Contact Form & Heading */}
                    <div className="order-1 lg:order-2 space-y-12">
                        <Reveal>
                            <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6">
                                Get in <span className="text-primary italic">Touch</span>
                            </h1>
                            <p className="text-muted-foreground text-lg md:text-xl leading-relaxed max-w-xl">
                                Whether you have a question or just want to say hi, I'll try my best to get back to you! Let's build something amazing together.
                            </p>
                        </Reveal>

                        {/* Embedded Contact Form */}
                        <div className="pt-4">
                            <Contact isEmbedded={true} />
                        </div>

                        {/* Additional Info / Social Links could go here */}
                    </div>
                </div>
            </div>
        </main>
    );
}

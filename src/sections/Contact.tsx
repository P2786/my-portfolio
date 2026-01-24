"use client";

import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { Mail, Send } from "lucide-react";

interface ContactProps {
    isEmbedded?: boolean;
}

export function Contact({ isEmbedded = false }: ContactProps) {
    const content = (
        <div className={isEmbedded ? "w-full text-left" : "max-w-2xl mx-auto flex flex-col items-center text-center"}>

            {!isEmbedded && (
                <Reveal>
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-8 mx-auto">
                        <Mail size={32} />
                    </div>
                    <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">
                        Ready to start a <br /><span className="text-primary">Project?</span>
                    </h2>
                    <p className="text-lg md:text-xl text-muted-foreground mb-12">
                        Let's build something amazing together. Reach out for collaborations or just a friendly hello.
                    </p>
                </Reveal>
            )}

            <Reveal width="100%">
                <form className="w-full space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="group relative">
                            <input
                                type="text"
                                placeholder="Name"
                                className="w-full bg-surface/50 border border-border rounded-2xl px-6 py-4 focus:outline-none focus:border-primary transition-all duration-300"
                            />
                        </div>
                        <div className="group relative">
                            <input
                                type="email"
                                placeholder="Email"
                                className="w-full bg-surface/50 border border-border rounded-2xl px-6 py-4 focus:outline-none focus:border-primary transition-all duration-300"
                            />
                        </div>
                    </div>
                    <div className="group relative">
                        <textarea
                            placeholder="Message"
                            rows={4}
                            className="w-full bg-surface/50 border border-border rounded-2xl px-6 py-4 focus:outline-none focus:border-primary transition-all duration-300 resize-none"
                        />
                    </div>

                    <Button className="w-full" size="lg">
                        Send Message
                        <Send className="ml-2 w-4 h-4" />
                    </Button>
                </form>
            </Reveal>

        </div>
    );

    if (isEmbedded) return content;

    return (
        <section id="contact" className="py-24 bg-surface/30">
            <div className="container mx-auto px-6">
                {content}
            </div>
        </section>
    );
}

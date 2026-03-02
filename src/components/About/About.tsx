"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function About() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section
            id="about"
            ref={ref}
            className="min-h-screen py-20 px-4 relative"
        >
            <div className="max-w-4xl mx-auto">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-12"
                >
                    <h2 className="font-pixel text-2xl md:text-3xl text-arcade-cyan neon-text mb-4">
                        ABOUT ME
                    </h2>
                    <div className="flex justify-center gap-2">
                        {[...Array(5)].map((_, i) => (
                            <div key={i} className="w-3 h-3 bg-arcade-magenta" />
                        ))}
                    </div>
                </motion.div>

                {/* Terminal Window */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="pixel-border bg-arcade-dark/80 p-6 md:p-8"
                >
                    {/* Terminal Header */}
                    <div className="flex items-center gap-2 mb-6 pb-4 border-b border-arcade-cyan/30">
                        <div className="w-3 h-3 rounded-full bg-arcade-red" />
                        <div className="w-3 h-3 rounded-full bg-arcade-yellow" />
                        <div className="w-3 h-3 rounded-full bg-arcade-green" />
                        <span className="font-pixel text-xs text-arcade-cyan ml-4">
                            player_info.exe
                        </span>
                    </div>

                    {/* Player Stats */}
                    <div className="font-mono text-sm md:text-base space-y-4 text-white">
                        <div className="flex flex-col md:flex-row md:items-center gap-2">
                            <span className="text-arcade-cyan">PLAYER:</span>
                            <span className="text-arcade-yellow">THANH THUONG</span>
                        </div>
                        <div className="flex flex-col md:flex-row md:items-center gap-2">
                            <span className="text-arcade-cyan">CLASS:</span>
                            <span className="text-arcade-green">WEB & MOBILE DEVELOPER</span>
                        </div>
                        <div className="flex flex-col md:flex-row md:items-center gap-2">
                            <span className="text-arcade-cyan">EDUCATION:</span>
                            <span>COMPUTER SCIENCE - UNIVERSITY OF MANITOBA</span>
                        </div>
                        <div className="flex flex-col md:flex-row md:items-center gap-2">
                            <span className="text-arcade-cyan">LOCATION:</span>
                            <span>WINNIPEG, MB | WILLING TO RELOCATE</span>
                        </div>

                        <div className="border-t border-arcade-cyan/30 pt-4 mt-4">
                            <span className="text-arcade-cyan">BIO:</span>
                            <p className="mt-2 leading-relaxed text-gray-300">
                                Web & Mobile Developer with proven track record building and publishing
                                production iOS applications. Successfully launched My Adventures App
                                to App Store featuring AI-powered storytelling and 60 FPS animations.
                            </p>
                            <p className="mt-4 leading-relaxed text-gray-300">
                                Self-taught in modern frameworks with strong CS fundamentals.
                                Brings exceptional attention to detail and problem-solving
                                from professional interpretation background.
                            </p>
                        </div>

                        <div className="border-t border-arcade-cyan/30 pt-4 mt-4">
                            <span className="text-arcade-cyan">SPECIAL ABILITIES:</span>
                            <ul className="mt-2 space-y-1 text-gray-300">
                                <li>▸ iOS App Development & App Store Publishing</li>
                                <li>▸ AI Integration (Claude API, OpenAI API)</li>
                                <li>▸ In-App Purchases & Stripe Integration</li>
                                <li>▸ 60 FPS Animations with React Native Reanimated</li>
                            </ul>
                        </div>
                    </div>

                    {/* Blinking Cursor */}
                    <div className="mt-6 flex items-center">
                        <span className="text-arcade-green font-mono">guest@thanh-portfolio:~$</span>
                        <span className="animate-blink text-arcade-cyan ml-2">▋</span>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

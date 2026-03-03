"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { projects } from "@/data/projects";
import Image from "next/image";

function ProjectImageCarousel({ images, title }: { images?: string[]; title: string }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        if (!images || images.length <= 1) return;
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % images.length);
        }, 3000);
        return () => clearInterval(interval);
    }, [images]);

    if (!images || images.length === 0) {
        const isPortfolio = title.toLowerCase().includes("portfolio");
        return (
            <div className="relative h-64 bg-gradient-to-br from-arcade-purple to-arcade-dark flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(0,255,255,0.05)_50%,transparent_75%)] bg-[length:20px_20px]" />
                <div className="relative z-10 text-center">
                    <div className={`font-pixel text-xs ${isPortfolio ? 'text-arcade-magenta' : 'text-arcade-cyan/50'} mb-2`}>
                        {isPortfolio ? "[ YOU'RE LOOKING AT IT ]" : "[SCREENSHOT]"}
                    </div>
                    {isPortfolio && (
                        <div className="font-pixel text-[8px] text-arcade-cyan/50 animate-pulse">
                            ✨ META ✨
                        </div>
                    )}
                </div>
            </div>
        );
    }

    return (
        <div className="relative h-80 bg-arcade-dark overflow-hidden">
            <AnimatePresence mode="wait">
                <motion.div
                    key={currentIndex}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0 flex items-center justify-center"
                >
                    <Image
                        src={images[currentIndex]}
                        alt={`${title} screenshot ${currentIndex + 1}`}
                        fill
                        className="object-contain"
                        sizes="(max-width: 768px) 100vw, 50vw"
                    />
                </motion.div>
            </AnimatePresence>

            {/* Image Indicators */}
            {images.length > 1 && (
                <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-2 z-10">
                    {images.map((_, idx) => (
                        <button
                            key={idx}
                            onClick={() => setCurrentIndex(idx)}
                            className={`w-2 h-2 border ${idx === currentIndex
                                ? "bg-arcade-cyan border-arcade-cyan"
                                : "bg-transparent border-arcade-cyan/50 hover:border-arcade-cyan"
                                } transition-all`}
                        />
                    ))}
                </div>
            )}

            {/* Scanline overlay for arcade effect */}
            <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(transparent_50%,rgba(0,0,0,0.1)_50%)] bg-[length:100%_4px]" />
        </div>
    );
}

export default function Projects() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section
            id="projects"
            ref={ref}
            className="min-h-screen py-20 px-4 relative bg-arcade-purple/30"
        >
            <div className="max-w-6xl mx-auto">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-12"
                >
                    <h2 className="font-pixel text-2xl md:text-3xl text-arcade-magenta neon-text-magenta mb-4">
                        PROJECTS
                    </h2>
                    <p className="font-pixel text-xs text-arcade-cyan">
                        SELECT YOUR GAME
                    </p>
                </motion.div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group"
                        >
                            <div className="relative bg-arcade-dark border-4 border-arcade-cyan hover:border-arcade-magenta transition-all duration-300 hover:shadow-neon-magenta overflow-hidden">
                                {/* Project Image Carousel */}
                                <ProjectImageCarousel images={project.images} title={project.title} />

                                {/* Project Info */}
                                <div className="p-6">
                                    {/* Featured Badge */}
                                    {project.featured && (
                                        <div className="font-pixel text-[8px] text-arcade-yellow mb-2">
                                            ★ FEATURED
                                        </div>
                                    )}

                                    {/* Title */}
                                    <h3 className="font-pixel text-sm text-arcade-cyan group-hover:text-arcade-magenta transition-colors mb-2">
                                        {project.title}
                                    </h3>

                                    {/* Description */}
                                    <p className="font-mono text-sm text-gray-400 mb-4 line-clamp-2">
                                        {project.longDescription}
                                    </p>

                                    {/* Technologies */}
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {project.technologies.slice(0, 4).map((tech) => (
                                            <span
                                                key={tech}
                                                className="font-pixel text-[8px] px-2 py-1 bg-arcade-cyan/10 text-arcade-cyan border border-arcade-cyan/30"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Links */}
                                    <div className="flex gap-4">
                                        {project.liveUrl && (
                                            <a
                                                href={project.liveUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="font-pixel text-[10px] text-arcade-green hover:text-arcade-cyan transition-colors"
                                            >
                                                [LIVE DEMO]
                                            </a>
                                        )}
                                        {project.githubUrl && (
                                            <a
                                                href={project.githubUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="font-pixel text-[10px] text-white hover:text-arcade-cyan transition-colors"
                                            >
                                                [GITHUB]
                                            </a>
                                        )}
                                    </div>
                                </div>

                                {/* Corner Accents */}
                                <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-arcade-magenta opacity-0 group-hover:opacity-100 transition-opacity" />
                                <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-arcade-magenta opacity-0 group-hover:opacity-100 transition-opacity" />
                                <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-arcade-magenta opacity-0 group-hover:opacity-100 transition-opacity" />
                                <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-arcade-magenta opacity-0 group-hover:opacity-100 transition-opacity" />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { projects } from "@/data/projects";

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
                                {/* Project Image Placeholder */}
                                <div className="relative h-48 bg-gradient-to-br from-arcade-purple to-arcade-dark flex items-center justify-center overflow-hidden">
                                    {/* Placeholder for project screenshot */}
                                    <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(0,255,255,0.05)_50%,transparent_75%)] bg-[length:20px_20px]" />

                                    {/* Project Title Overlay */}
                                    <div className="relative z-10 text-center">
                                        <div className="font-pixel text-xs text-arcade-cyan/50 mb-2">
                                            [SCREENSHOT]
                                        </div>
                                        <div className="font-pixel text-xl text-white/20">
                                            {project.id.toString().padStart(2, "0")}
                                        </div>
                                    </div>

                                    {/* Hover Overlay */}
                                    <div className="absolute inset-0 bg-arcade-cyan/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                                </div>

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

                {/* More Projects Link */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="text-center mt-12"
                >
                    <a
                        href="https://github.com/thanhthuong03"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-pixel text-xs text-arcade-cyan hover:text-arcade-magenta transition-colors"
                    >
                        [ VIEW MORE ON GITHUB → ]
                    </a>
                </motion.div>
            </div>
        </section>
    );
}

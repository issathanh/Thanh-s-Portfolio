"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";

export default function Contact() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const [formState, setFormState] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate form submission - replace with actual form service
        await new Promise((resolve) => setTimeout(resolve, 1500));

        setIsSubmitting(false);
        setSubmitted(true);
        setFormState({ name: "", email: "", message: "" });
    };

    return (
        <section
            id="contact"
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
                        CONTACT
                    </h2>
                    <p className="font-pixel text-xs text-arcade-magenta">
                        ENTER YOUR MESSAGE
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <div className="pixel-border bg-arcade-dark/80 p-6">
                            {/* Form Header */}
                            <div className="flex items-center gap-2 mb-6 pb-4 border-b border-arcade-cyan/30">
                                <div className="w-3 h-3 bg-arcade-cyan animate-pulse" />
                                <span className="font-pixel text-xs text-arcade-cyan">
                                    MESSAGE.EXE
                                </span>
                            </div>

                            {submitted ? (
                                <div className="text-center py-8">
                                    <div className="font-pixel text-4xl text-arcade-green mb-4">
                                        ✓
                                    </div>
                                    <p className="font-pixel text-sm text-arcade-green mb-2">
                                        MESSAGE SENT!
                                    </p>
                                    <p className="font-mono text-gray-400">
                                        I&apos;ll get back to you soon.
                                    </p>
                                    <button
                                        onClick={() => setSubmitted(false)}
                                        className="mt-4 font-pixel text-xs text-arcade-cyan hover:text-arcade-magenta transition-colors"
                                    >
                                        [SEND ANOTHER]
                                    </button>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-4">
                                    {/* Name Field */}
                                    <div>
                                        <label className="block font-pixel text-[10px] text-arcade-cyan mb-2">
                                            PLAYER NAME
                                        </label>
                                        <input
                                            type="text"
                                            value={formState.name}
                                            onChange={(e) =>
                                                setFormState({ ...formState, name: e.target.value })
                                            }
                                            required
                                            className="w-full bg-arcade-dark border-2 border-arcade-cyan/50 focus:border-arcade-cyan text-white font-mono p-3 outline-none transition-colors"
                                            placeholder="Enter your name..."
                                        />
                                    </div>

                                    {/* Email Field */}
                                    <div>
                                        <label className="block font-pixel text-[10px] text-arcade-cyan mb-2">
                                            EMAIL ADDRESS
                                        </label>
                                        <input
                                            type="email"
                                            value={formState.email}
                                            onChange={(e) =>
                                                setFormState({ ...formState, email: e.target.value })
                                            }
                                            required
                                            className="w-full bg-arcade-dark border-2 border-arcade-cyan/50 focus:border-arcade-cyan text-white font-mono p-3 outline-none transition-colors"
                                            placeholder="Enter your email..."
                                        />
                                    </div>

                                    {/* Message Field */}
                                    <div>
                                        <label className="block font-pixel text-[10px] text-arcade-cyan mb-2">
                                            YOUR MESSAGE
                                        </label>
                                        <textarea
                                            value={formState.message}
                                            onChange={(e) =>
                                                setFormState({ ...formState, message: e.target.value })
                                            }
                                            required
                                            rows={5}
                                            className="w-full bg-arcade-dark border-2 border-arcade-cyan/50 focus:border-arcade-cyan text-white font-mono p-3 outline-none transition-colors resize-none"
                                            placeholder="Type your message..."
                                        />
                                    </div>

                                    {/* Submit Button */}
                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="w-full font-pixel text-xs py-4 bg-arcade-cyan text-arcade-dark hover:bg-arcade-magenta transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                                    >
                                        {isSubmitting ? "SENDING..." : "SEND MESSAGE →"}
                                    </button>
                                </form>
                            )}
                        </div>
                    </motion.div>

                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="space-y-6"
                    >
                        {/* Info Card */}
                        <div className="bg-arcade-dark/50 border-2 border-arcade-magenta/30 p-6">
                            <h3 className="font-pixel text-sm text-arcade-magenta mb-4">
                                DIRECT CONNECT
                            </h3>

                            <div className="space-y-4 font-mono">
                                <div>
                                    <p className="text-arcade-cyan text-sm mb-1">EMAIL</p>
                                    <a
                                        href="mailto:thanh.thuonq09@gmail.com"
                                        className="text-white hover:text-arcade-cyan transition-colors"
                                    >
                                        thanh.thuonq09@gmail.com
                                    </a>
                                </div>

                                <div>
                                    <p className="text-arcade-cyan text-sm mb-1">LOCATION</p>
                                    <p className="text-white">Winnipeg, MB | Willing to Relocate</p>
                                </div>

                                <div>
                                    <p className="text-arcade-cyan text-sm mb-1">STATUS</p>
                                    <p className="text-arcade-green flex items-center gap-2">
                                        <span className="w-2 h-2 bg-arcade-green animate-pulse rounded-full" />
                                        Open to opportunities
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Social Links */}
                        <div className="bg-arcade-dark/50 border-2 border-arcade-green/30 p-6">
                            <h3 className="font-pixel text-sm text-arcade-green mb-4">
                                SOCIAL LINKS
                            </h3>

                            <div className="space-y-3">
                                <a
                                    href="https://github.com/thanhthuong03"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-3 font-mono text-white hover:text-arcade-cyan transition-colors"
                                >
                                    <span className="font-pixel text-xs">[GH]</span>
                                    github.com/thanhthuong03
                                </a>
                                <a
                                    href="https://linkedin.com/in/thanh-thuong"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-3 font-mono text-white hover:text-arcade-cyan transition-colors"
                                >
                                    <span className="font-pixel text-xs">[LI]</span>
                                    linkedin.com/in/thanh-thuong
                                </a>
                            </div>
                        </div>

                        {/* Fun CTA */}
                        <div className="text-center p-4 border border-arcade-yellow/30">
                            <p className="font-pixel text-[10px] text-arcade-yellow animate-pulse">
                                LET&apos;S BUILD SOMETHING AWESOME TOGETHER!
                            </p>
                        </div>
                    </motion.div>
                </div>

                {/* Footer */}
                <motion.footer
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    className="mt-20 pt-8 border-t border-arcade-cyan/20 text-center"
                >
                    <p className="font-pixel text-[10px] text-gray-500 mb-2">
                        DESIGNED & BUILT BY THANH THUONG
                    </p>
                    <p className="font-pixel text-[8px] text-gray-600">
                        © 2026 ALL RIGHTS RESERVED
                    </p>
                    <div className="mt-4 flex justify-center gap-2">
                        <div className="w-2 h-2 bg-arcade-cyan" />
                        <div className="w-2 h-2 bg-arcade-magenta" />
                        <div className="w-2 h-2 bg-arcade-green" />
                        <div className="w-2 h-2 bg-arcade-yellow" />
                    </div>
                </motion.footer>
            </div>
        </section>
    );
}

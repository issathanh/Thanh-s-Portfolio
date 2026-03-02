"use client";

import { useState } from "react";
import LoadingScreen from "@/components/LoadingScreen/LoadingScreen";
import Hero from "@/components/Hero/Hero";
import Navbar from "@/components/Navbar/Navbar";
import About from "@/components/About/About";
import Projects from "@/components/Projects/Projects";
import Skills from "@/components/Skills/Skills";
import Experience from "@/components/Experience/Experience";
import Contact from "@/components/Contact/Contact";

export default function Home() {
    const [isLoading, setIsLoading] = useState(true);

    const handleLoadingComplete = () => {
        setIsLoading(false);
    };

    if (isLoading) {
        return <LoadingScreen onComplete={handleLoadingComplete} />;
    }

    return (
        <main className="min-h-screen bg-arcade-dark">
            <Navbar />
            <Hero />
            <About />
            <Projects />
            <Skills />
            <Experience />
            <Contact />
        </main>
    );
}

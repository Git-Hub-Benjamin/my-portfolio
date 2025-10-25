import { Code2, TreePine, GraduationCap, Apple } from 'lucide-react';

export const projects = [
    {
        title: "FAT16 Driver",
        description: "Implementation of a FAT16 filesystem driver, enabling reading of files. The github link will direct you to the fat16.c driver implementation that I wrote. It runs on PEACHOS as part of a kernel development course I have taken by Daniel McCarthy.",
        technologies: ["C++", "File Systems", "OS Development"],
        githubLink: "https://github.com/Git-Hub-Benjamin/fat16Driver/blob/main/src/fs/fat/fat16.c",
        demoLink: "https://github.com/Git-Hub-Benjamin/fat16Driver/tree/main/src/fs/fat",
        demoType: "code",
        demoDescription: "Explore the implementation details and source code"
    },
    {
        title: "Chess Game",
        description: "A functional chess game implementation with move validation and game state management. Currently works in the terminal on Linux, with ongoing development for Windows support and online functionality. Features include complete chess rules implementation and a command-line interface.",
        technologies: ["C++", "Game Development", "Object-Oriented Design"],
        githubLink: "https://github.com/Git-Hub-Benjamin/Chess",
        demoLink: "https://github.com/Git-Hub-Benjamin/Chess#readme",
        demoType: "documentation",
        demoDescription: "View game features and implementation details"
    },
    {
        title: "Custom Compiler Implementation: Multi-Stage C Language Processing Pipeline",
        description: "A sophisticated compiler implementation that demonstrates fundamental concepts of language processing and system programming. This project features a hand-crafted lexer/tokenizer written in C, coupled with an assembly-based preprocessor and a robust C-implemented parser.",
        technologies: ["C", "Compiler Design Principles", "Assembly"],
        githubLink: "https://github.com/Git-Hub-Benjamin/flexer",
        demoLink: "https://github.com/Git-Hub-Benjamin/flexer/blob/main/README.md",
        demoType: "documentation",
        demoDescription: "View detailed implementation and usage documentation"
    },
    {
        title: "GoTogether – University Ride‑Sharing Platform",
        description: "Cross-platform ride-sharing app for university students. Includes web (React + MUI) and mobile (Expo/React Native) clients, email verification, ride creation/search, join/approve flows, rate limiting, and notifications. Node/Express backend provides distance calculations and nearby-city search with robust filtering.",
        technologies: ["React", "Material UI (MUI)", "React Native", "Expo", "Node.js", "Express", "JWT", "MongoDB", "Nodemailer", "Rate Limiting"],
        githubLink: "https://github.com/Git-Hub-Benjamin/GoTogether", 
        demoLink: "https://github.com/Git-Hub-Benjamin/GoTogether", 
        demoType: "code",
        demoDescription: "Run web client at http://localhost:3000, API at http://localhost:5000, and mobile via Expo tunnel."
    },
    {
        title: "Full Stack Authentication System",
        description: "Modern authentication system with animated UI components and secure backend implementation. Features include user registration, login functionality, and protected routes using JWT authentication. The project showcases modern web development practices and security implementations.",
        technologies: ["React", "Node.js", "MongoDB", "Express", "JWT", "Framer Motion", "Tailwind CSS"],
        githubLink: "https://github.com/Git-Hub-Benjamin/framer-goose",
        demoLink: "https://github.com/Git-Hub-Benjamin/framer-goose#readme",
        demoType: "documentation",
        demoDescription: "Explore the authentication system features and implementation"
    },
    {
        title: "Personal Portfolio Website",
        description: "A modern, responsive portfolio website built with React and Tailwind CSS. Features include a dynamic project showcase, responsive design, smooth scrolling navigation, and animated UI components. Implements clean code practices with reusable React components and efficient state management.",
        technologies: ["React", "Tailwind CSS", "JavaScript", "Node.js", "Responsive Design", "Git", "Component Design", "HTML5"],
        githubLink: "https://github.com/Git-Hub-Benjamin/portfolio",
        demoLink: "https://github.com/Git-Hub-Benjamin/portfolio#readme",
        demoType: "code",
        demoDescription: "The react code for this website!"
    },
];


export const contentData = [
    {
        icon: Code2,
        iconColor: "text-blue-600",
        title: "My areas of interest",
        description: "Self-taught programmer since 2022, specializing in C/C++. My passion lies in low-level development, particularly in systems programming, kernel development, and cybersecurity."
    },
    {
        icon: GraduationCap,
        iconColor: "text-purple-600",
        title: "Education Journey",
        description: "Currently pursuing a Bachelor's degree in Computer Engineering with a minor in Mathematics at Utah State University. I hold an Associate of Science from CTState Community College."
    },
    {
        icon: TreePine,
        iconColor: "text-green-600",
        title: "Outdoor Adventures",
        description: "An Eagle Scout and outdoor enthusiast who loves exploring nature and spending time outside."
    },
    {
        icon: Apple,
        iconColor: "text-pink-600",
        title: "Current involvement",
        description: "I'm involved in the Cyber Security, Free Software and Linux, and Game Development clubs. I am also currently working on obtaining my CompTIA Security+ certification."
    }
];
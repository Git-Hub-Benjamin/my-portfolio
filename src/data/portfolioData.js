import { Code2, TreePine, Bike, Wrench, GraduationCap, Apple } from 'lucide-react';

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
        title: "Lexer/Preprocessor",
        description: "A custom lexer and preprocessor implementation that handles tokenization and preprocessing of source code. This project demonstrates fundamental concepts in compiler design and text processing.",
        technologies: ["C", "Lexing", "Basic Compiler Design", "Assembly"],
        githubLink: "https://github.com/Git-Hub-Benjamin/flexer",
        demoLink: "https://github.com/Git-Hub-Benjamin/flexer/blob/main/README.md",
        demoType: "documentation",
        demoDescription: "View detailed implementation and usage documentation"
    },
    {
        title: "Full Stack Authentication System",
        description: "Modern authentication system with animated UI components and secure backend implementation. Features include user registration, login functionality, and protected routes using JWT authentication. The project showcases modern web development practices and security implementations.",
        technologies: ["React", "Node.js", "MongoDB", "Express", "JWT", "Framer Motion", "Tailwind CSS"],
        githubLink: "https://github.com/Git-Hub-Benjamin/routing-webpage/tree/main",
        demoLink: "https://github.com/Git-Hub-Benjamin/routing-webpage/tree/main#readme",
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
    }
];


export const contentData = [
    {
        icon: Code2,
        iconColor: "text-blue-600",
        title: "Low Level Development",
        description: "Self-taught programmer since 2022, specializing in C/C++. I am specifically interested in systems programming, kernel development, and OS drivers."
   },
   {
       icon: GraduationCap,
       iconColor: "text-purple-600",
       title: "Education Journey",
       description: "Currently at CTState, planning to transfer to University of Utah for Computer Engineering in 2025. Bethel High School graduate 2023."
   },
   {
       icon: Bike,
       iconColor: "text-red-600",
       title: "Mountain Biking",
       description: "Passionate mountain bike rider, Just bought my first mountain bike; a hardtail. Although I am new to the sport in 2024 I am already hooked on the trails."
   },
   {
       icon: Wrench,
       iconColor: "text-gray-600",
       title: "Woodworking",
       description: "Hands-on craftsman experienced in building and construction. Love working with tools and creating things from scratch."
   },
   {
       icon: TreePine,
       iconColor: "text-green-600",
       title: "Outdoor Adventures",
       description: "Avid camper and outdoor enthusiast. As an eagle scout I love exploring nature and spending time outside."
   },
   {
        icon: Apple, 
        iconColor: "text-pink-600",
        title: "Working with Kids",
        description: "I've spent the past two years working with kids - both at a daycare and teaching swimming lessons."
    }
];
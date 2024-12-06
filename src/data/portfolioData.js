import { Code2, TreePine, Bike, Wrench, GraduationCap, Apple } from 'lucide-react';

export const projects = [
    {
        title: "Lexer/Preprocessor",
        description: "A custom lexer and preprocessor implementation that handles tokenization and preprocessing of source code",
        technologies: ["C", "Lexing", "Basic Compiler Design", "Assembly"],
        githubLink: "https://github.com/Git-Hub-Benjamin/flexer",
        demoLink: "https://github.com/Git-Hub-Benjamin/flexer/blob/main/README.md"
    },
    {
        title: "FAT16 Driver",
        description: "Implementation of a FAT16 filesystem driver, enabling reading of files. The github link will direct you to the fat16.c driver implementation that I wrote. It runs on PEACHOS as part of a kernel devlopment course I have taken by Daniel McCarthy.",
        technologies: ["C++", "File Systems", "OS Development"],
        githubLink: "https://github.com/Git-Hub-Benjamin/fat16Driver/blob/main/src/fs/fat/fat16.c"
    },
    {
        title: "Chess Game",
        description: "A functional chess game implementation with move validation and game state management, A work in progress. Works in the terminal on linux, I am working on bringing it to windows and adding online functionality.",
        technologies: ["C++", "Game Development", "Object-Oriented Design"],
        githubLink: "https://github.com/Git-Hub-Benjamin/Chess"
    },
    {
        title: "Full Stack Authentication System",
        description: "Modern authentication system with animated UI components and secure backend implementation. Features include user registration, login functionality, and protected routes using JWT authentication.",
        technologies: ["React", "Node.js", "MongoDB", "Express", "JWT", "Framer Motion", "Tailwind CSS"],
        githubLink: "https://github.com/Git-Hub-Benjamin/routing-webpage/tree/main"
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
       description: "Passionate mountain bike rider, I own a Commencal Meta HT Race hardtail. New to the sport in 2024 but already hooked on the trails."
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
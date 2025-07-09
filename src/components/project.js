import React from 'react';
import { Code2, GithubIcon, BookOpen, FileCode } from 'lucide-react';

export const DemoContent = ({ demoType, demoLink, demoDescription, title }) => {
  const icons = {
    documentation: BookOpen,
    code: FileCode,
    video: Code2
  };

  const IconComponent = icons[demoType] || Code2;

  return (
    <div className="h-full bg-white rounded-lg shadow-lg p-4 flex flex-col items-center justify-center hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-50">
      <a 
        href={demoLink}
        className="text-center text-blue-600 hover:text-blue-800 transition-colors"
        target="_blank"
        rel="noopener noreferrer"
      >
        <IconComponent size={36} className="mx-auto mb-2" />
        <h4 className="text-lg font-semibold mb-1">{title} Demo</h4>
        <p className="text-sm text-gray-600">{demoDescription}</p>
      </a>
    </div>
  );
};

const Project = ({
  title = "Project Title",
  description = "Project description",
  technologies = ["Tech"],
  githubLink = "#",
  demoLink,
  demoType,
  demoDescription
}) => {
  return (
    <div className="h-full p-4 bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-50 group">
      <div className="flex justify-between items-start mb-2">
        <h3 className="text-lg font-bold text-gray-800 group-hover:text-blue-600 transition-colors">
          <a href={githubLink} target="_blank" rel="noopener noreferrer">{title}</a>
        </h3>
        <a
          href={githubLink}
          className="text-gray-600 hover:text-black transition-colors"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GithubIcon size={20} className="transform group-hover:rotate-12 transition-transform" />
        </a>
      </div>

      <p className="text-sm text-gray-600 mb-3">{description}</p>

      <div className="flex flex-wrap gap-1">
        {technologies.map((tech, index) => (
          <span
            key={index}
            className="px-2 py-0.5 bg-blue-100 text-blue-800 rounded-full text-xs group-hover:bg-blue-200 transition-colors"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Project;
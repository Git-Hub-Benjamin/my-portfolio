import React from 'react';
import { Code2, GithubIcon } from 'lucide-react';

const Project = ({
  title = "Project Title",
  description = "Project description",
  technologies = ["Tech"],
  githubLink = "#",
  demoLink = "#"
}) => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-lg mb-4 hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-50 group">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors"><a href={githubLink}>{title}</a></h3>
        <a
          href={githubLink}
          className="text-gray-600 hover:text-black transition-colors"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GithubIcon size={24} className="transform group-hover:rotate-12 transition-transform" />
        </a>
      </div>

      <p className="text-gray-600 mb-4">{description}</p>

      <div className="flex flex-wrap gap-2 mb-4">
        {technologies.map((tech, index) => (
          <span
            key={index}
            className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm group-hover:bg-blue-200 transition-colors"
          >
            {tech}
          </span>
        ))}
      </div>

      {
        // TODO - I need to add the README files to each repo, Also some of them are hard to demo like the driver, get a video of it and fix up the chess game for the video
      }
      {/* {demoLink && (
        <a
          href={demoLink}
          className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800"
        >
          <Code2 size={20} />
          <span>View Demo</span>
        </a>
      )} */}
    </div>
  );
};


export default Project;
import React from 'react';

import Content from './content'
import { contentData } from '../data/portfolioData';

const AboutMe = () => {
  return (
    <section id="aboutme" className="p-8 bg-white scroll-mt-16">
      <div className="max-w-7xl mx-auto">

        
        <div className='flex justify-center'>
          <h2 className="text-3xl font-bold mb-8">About Me</h2>
        </div>
        
        <div className="flex flex-col md:flex-row gap-8">
          {/* Left column with image */}
          <div className="md:w-1/3 flex items-center">
            <div className="rounded-lg overflow-hidden shadow-lg max-w-xs mx-auto">
              <img 
                src="/profile.jpg" 
                alt="Profile" 
                className="w-full h-auto object-cover"
              />
            </div>
            </div>
 
          {/* Right column with content grid */}
          <div className="md:w-2/3">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {contentData.map((content, index) => (
                <Content key={index} {...content} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
 };

export default AboutMe;
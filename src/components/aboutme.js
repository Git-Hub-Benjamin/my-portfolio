import React from 'react';
import Content from './content';
import { contentData } from '../data/portfolioData';

const AboutMe = () => {
    // Change the image source to be a single image
    const singleImageSrc = "/my-portfolio/profile.jpg";

    return (
        <section id="aboutme" className="p-8 bg-white scroll-mt-16 mt-14">
            <div className="max-w-7xl mx-auto">
                <div className='flex justify-center'>
                    <h2 className="text-3xl font-bold mb-8">About Me</h2>
                </div>

                <div className="flex flex-col md:flex-row gap-8 items-center">
                    {/* Left column with a single image */}
                    <div className="w-full md:w-1/3 flex flex-col justify-center">
                        <div className="relative rounded-lg overflow-hidden shadow-lg w-full max-w-xs mx-auto h-96"> {/* Added h-96 for height */}
                            <img
                                src={singleImageSrc}
                                alt="Benjamin Funk"
                                className="w-full h-full object-cover"
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
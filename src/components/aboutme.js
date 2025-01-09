import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Content from './content';
import { contentData } from '../data/portfolioData';

const AboutMe = () => {
  const images = [
    { src: "/my-portfolio/profile.jpg", alt: "Profile" },
    { src: "/my-portfolio/bike-filler.jpg", alt: "Bike"},

    // { src: "/my-portfolio/mountain-biking.jpg", alt: "Mountain Biking" },
    // { src: "/my-portfolio/coding.jpg", alt: "Coding" },
  ];

  const [currentImage, setCurrentImage] = useState(0);

  // Auto-cycle images every 10 seconds
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCurrentImage((prev) => (prev + 1) % images.length);
  //   }, 10000);

  //   // Cleanup interval on component unmount
  //   return () => clearInterval(interval);
  // }, [images.length]);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const previousImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToImage = (index) => {
    setCurrentImage(index);
  };

  return (
    <section id="aboutme" className="p-8 bg-white scroll-mt-16 mt-14">
      <div className="max-w-7xl mx-auto">
        <div className='flex justify-center'>
          <h2 className="text-3xl font-bold mb-8">About Me</h2>
        </div>
        
        <div className="flex flex-col md:flex-row gap-8 items-center">
          {/* Left column with image carousel */}
          <div className="md:w-1/3 flex flex-col justify-center">
            <div className="relative rounded-lg overflow-hidden shadow-lg w-full max-w-xs mx-auto group">
              {/* Fixed aspect ratio container */}
              <div className="aspect-[3/4] w-full">
                <img 
                  src={images[currentImage].src}
                  alt={images[currentImage].alt}
                  className="absolute w-full h-full object-cover transition-opacity duration-300"
                />
                
                {/* Navigation Arrows */}
                {images.length > 1 && (
                  <>
                    <button 
                      onClick={previousImage}
                      className="absolute left-2 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-opacity-75"
                      aria-label="Previous image"
                    >
                      <ChevronLeft size={20} />
                    </button>
                    <button 
                      onClick={nextImage}
                      className="absolute right-2 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-opacity-75"
                      aria-label="Next image"
                    >
                      <ChevronRight size={20} />
                    </button>
                  </>
                )}
              </div>
              
              {/* Navigation Dots */}
              {images.length > 1 && (
                <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-1">
                  {images.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => goToImage(index)}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        currentImage === index 
                          ? 'bg-white scale-125' 
                          : 'bg-white bg-opacity-50 hover:bg-opacity-75'
                      }`}
                      aria-label={`Go to image ${index + 1}`}
                    />
                  ))}
                </div>
              )}
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
import Project, { DemoContent } from "./components/project";
import { projects } from './data/portfolioData.js';
import Navbar from "./components/navbar";
import AboutMe from './components/aboutme.js';
import Contact from "./components/contact.js";

function App() {
  return (
    <div className="bg-gray-100"> 
      <div className="flex justify-center">
        <Navbar />
      </div>
      <main> 
        <AboutMe />
        
        <section id="projects" className="p-4 bg-gray-100 scroll-mt-16">
          <div className="flex justify-center mb-4">
            <h2 className="text-3xl font-bold">Projects</h2>
          </div>
          <div className="max-w-6xl mx-auto">
            {projects.map((project, index) => (
              <div key={index} className="md:flex md:gap-4 mb-4">
                <div className="md:w-1/2">
                  <Project {...project} />
                </div>
                <div className="md:w-1/2 mt-4 md:mt-0">
                  {project.demoLink && (
                    <DemoContent {...project} />
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-6">
            <div className="p-4 bg-white rounded-lg shadow-lg w-fit">
              <p className="text-sm text-center text-gray-600">
                I welcome feedback, bug reports, and suggestions for improvement on any of my projects! Whether you're a beginner or experienced developer, your input is valuable.
              </p>
            </div>
          </div>
        </section>

        <Contact />
      </main>
    </div>
  );
}

export default App;
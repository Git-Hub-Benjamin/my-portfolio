import Project from "./components/project";
import { projects } from './data/portfolioData.js';
import Navbar from "./components/navbar";
import AboutMe from './components/aboutme.js';
import Contact from "./components/contact.js";

function App() {
  return (
    <div bg-gray-100> 
      <div class='flex justify-center'>
        <Navbar />
      </div>
      <main > 

        <section id="projects" className="p-8 bg-gray-100 scroll-mt-16 mt-12">
          <div class='flex justify-center'>
            <h2 className="text-3xl font-bold mb-6">Projects</h2>
          </div>
            {projects.map((project, index) => (
              <Project key={index} {...project} />
            ))}

            <div class='flex justify-center'>
              <div className="p-6 bg-white rounded-lg shadow-lg mb-4 w-fit">
                  <p className="text-center text-gray-600">
                  I welcome feedback, bug reports, and suggestions for improvement on any of my projects! Whether you're a beginner or experienced developer, your input is valuable.
                  </p>
              </div>
            </div>
        </section>

        <AboutMe />

        <Contact />
      </main>
    </div>
  );
}

export default App;
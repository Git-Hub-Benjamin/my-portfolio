import { Github, Mail, Linkedin, Youtube, SquareTerminal} from 'lucide-react';

const Contact = () => {
 return (
   <section id="contact" className="p-8 bg-white scroll-mt-16">
     <div className="max-w-4xl mx-auto">
        <div class='flex justify-center'>
            <h2 className="text-3xl font-bold mb-8">Contact</h2>
        </div>
       
       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
         <a 
           href="https://github.com/Git-Hub-Benjamin"
           target="_blank"
           rel="noopener noreferrer"
           className="flex items-center gap-3 p-4 bg-gray-100 rounded-lg shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 hover:bg-gray-50"
         >
           <Github className="w-6 h-6" />
           <span>GitHub</span>
         </a>

         <a 
           href="mailto:benjonah25@gmail.com"
           className="flex items-center gap-3 p-4 bg-gray-100 rounded-lg shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 hover:bg-gray-50"
         >
           <Mail className="w-6 h-6" />
           <span>Email</span>
         </a>

         <a 
           href="https://www.linkedin.com/in/benjamin-funk-8bb6a9307/"
           target="_blank"
           rel="noopener noreferrer"
           className="flex items-center gap-3 p-4 bg-gray-100 rounded-lg shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 hover:bg-gray-50"
         >
           <Linkedin className="w-6 h-6" />
           <span>LinkedIn</span>
         </a>

         <a 
           href="https://www.youtube.com/@abcbenjy6998/videos"
           target="_blank"
           rel="noopener noreferrer"
           className="flex items-center gap-3 p-4 bg-gray-100 rounded-lg shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 hover:bg-gray-50"
         >
           <Youtube className="w-6 h-6" />
           <span>Youtube</span>
         </a>

         <a 
           href="https://leetcode.com/u/benjonah25/"
           target="_blank"
           rel="noopener noreferrer"
           className="flex items-center gap-3 p-4 bg-gray-100 rounded-lg shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 hover:bg-gray-50"
         >
           <SquareTerminal className="w-6 h-6" />
           <span>Leetcode</span>
         </a>
       </div>
     </div>
   </section>
 );
};

export default Contact;
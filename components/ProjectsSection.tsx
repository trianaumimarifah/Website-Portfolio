import { ExternalLink } from "lucide-react";
import { projects } from "@/lib/data";
import Image from "next/image";

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20 bg-card-bg transition-colors duration-300 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div data-aos="fade-up" data-aos-delay="100">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Featured Projects</h2>
            <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl">
              Here are some case studies showcasing end-to-end data analysis processes, from data preparation to interactive visualizations.
            </p>
          </div>
        </div>

        {/* Horizontal Scroll Container */}
        <div className="relative -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8">
          <div className="flex overflow-x-auto gap-6 pb-8 snap-x snap-mandatory hide-scrollbar" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
            {projects.map((project, index) => (
              <div key={project.id} className="snap-center shrink-0 w-[85vw] sm:w-[400px] md:w-[450px]">
                <div data-aos="fade-left" data-aos-delay={(index % 4) * 100} className="h-full">
                  <div className="group h-full flex flex-col bg-section-bg border border-card-border rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300">
                    {/* Project Image */}
                    <div className="w-full h-56 bg-neutral-200 dark:bg-neutral-800 flex items-center justify-center relative border-b border-card-border overflow-hidden">
                      <Image 
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    </div>
                    
                    {/* Project Content */}
                    <div className="p-6 flex flex-col flex-grow">
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tools.map((tool) => (
                          <span 
                            key={tool}
                            className="px-3 py-1 bg-primary-50 text-primary-700 dark:bg-primary-900/30 dark:text-primary-300 text-xs font-semibold rounded-full"
                          >
                            {tool}
                          </span>
                        ))}
                      </div>
                      <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary-600 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-neutral-600 dark:text-neutral-400 mb-6 flex-grow text-sm leading-relaxed">
                        {project.description}
                      </p>
                      <a 
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-primary-600 hover:text-primary-700 font-semibold text-sm transition-colors mt-auto"
                      >
                        View Project
                        <ExternalLink className="w-4 h-4 ml-2" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* Fading Edges for Scroll indication */}
          <div className="absolute top-0 right-0 bottom-8 w-12 sm:w-24 bg-gradient-to-l from-card-bg to-transparent pointer-events-none z-10"></div>
          <div className="absolute top-0 left-0 bottom-8 w-12 sm:w-24 bg-gradient-to-r from-card-bg to-transparent pointer-events-none z-10"></div>
        </div>
      </div>
      
      <style dangerouslySetInnerHTML={{__html: `
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}} />
    </section>
  );
}

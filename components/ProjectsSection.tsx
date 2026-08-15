import { projects } from "@/lib/data";
import { ArrowRight, BarChart2 } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20 bg-card-bg transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">Featured Projects</h2>
          <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl">
            Berikut adalah beberapa case study yang menunjukkan proses analisis data end-to-end, mulai dari data preparation hingga visualisasi.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="group flex flex-col bg-section-bg border border-card-border rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300">
              {/* Project Image Placeholder */}
              <div className="w-full h-56 bg-neutral-200 dark:bg-neutral-800 flex items-center justify-center relative border-b border-card-border">
                <BarChart2 className="w-12 h-12 text-neutral-300" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
              
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tools.map((tool) => (
                    <span key={tool} className="px-2.5 py-1 bg-primary-50 text-primary-700 text-xs font-semibold rounded-md border border-primary-100">
                      {tool}
                    </span>
                  ))}
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-neutral-600 dark:text-neutral-400 mb-6 flex-grow line-clamp-2">
                  {project.description}
                </p>
                <Link 
                  href={`/projects/${project.slug}`}
                  className="inline-flex items-center text-primary-600 font-semibold hover:text-primary-700 transition-colors"
                >
                  Lihat Detail Case Study
                  <ArrowRight className="ml-1 w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

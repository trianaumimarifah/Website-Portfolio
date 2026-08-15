import { projects } from "@/lib/data";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Create static paths for all projects
export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default function ProjectDetail({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  return (
    <>
      <Navbar />
      <main className="pt-24 pb-20 bg-section-bg min-h-screen transition-colors duration-300">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <Link href="/#projects" className="inline-flex items-center text-neutral-500 hover:text-primary-600 mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Kembali ke Home
          </Link>

          <article className="bg-card-bg rounded-2xl border border-card-border overflow-hidden shadow-sm">
            {/* Header / Hero of Case Study */}
            <div className="bg-primary-900 px-8 py-12 text-center text-white">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">{project.title}</h1>
              <p className="text-primary-100 text-lg max-w-2xl mx-auto">
                {project.description}
              </p>
            </div>

            <div className="p-8 md:p-12">
              {/* Tools tags */}
              <div className="mb-10 flex flex-wrap justify-center gap-2">
                {project.tools.map((tool) => (
                  <span key={tool} className="px-3 py-1.5 bg-primary-50 text-primary-700 text-sm font-semibold rounded-md border border-primary-100">
                    {tool}
                  </span>
                ))}
              </div>

              {/* Dummy Image Placeholder */}
              <div className="w-full aspect-[16/9] bg-neutral-200 dark:bg-neutral-800 rounded-xl mb-12 flex flex-col items-center justify-center border-2 border-dashed border-card-border">
                <p className="text-neutral-500 font-medium">Project Screenshot Placeholder</p>
                <p className="text-sm text-neutral-400">Resolution: 1920x1080 (Recommended)</p>
              </div>

              {/* Case Study Content */}
              <div className="space-y-12">
                
                <section>
                  <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center">
                    <span className="w-8 h-8 rounded-full bg-primary-100 text-primary-700 flex items-center justify-center text-sm mr-3">1</span>
                    Problem Statement
                  </h2>
                  <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed text-lg">
                    {project.problem}
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center">
                    <span className="w-8 h-8 rounded-full bg-primary-100 text-primary-700 flex items-center justify-center text-sm mr-3">2</span>
                    Approach & Methodology
                  </h2>
                  <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed text-lg mb-4">
                    {project.approach}
                  </p>
                  <ul className="space-y-3 mt-4">
                    {project.tools.map(tool => (
                      <li key={tool} className="flex items-start">
                        <CheckCircle2 className="w-5 h-5 text-primary-500 mr-3 mt-0.5" />
                        <span className="text-neutral-700 dark:text-neutral-300"><strong>{tool}</strong> digunakan untuk mengoptimalkan solusi.</span>
                      </li>
                    ))}
                  </ul>
                </section>

                {project.result && (
                  <section className="bg-primary-50 dark:bg-primary-950/30 p-8 rounded-xl border border-primary-100 dark:border-primary-900">
                    <h2 className="text-2xl font-bold text-primary-900 dark:text-primary-300 mb-4 flex items-center">
                      <span className="w-8 h-8 rounded-full bg-primary-200 dark:bg-primary-800 text-primary-800 dark:text-primary-200 flex items-center justify-center text-sm mr-3">3</span>
                      Result & Impact
                    </h2>
                    <p className="text-primary-800 dark:text-primary-400 leading-relaxed text-lg font-medium">
                      {project.result}
                    </p>
                  </section>
                )}

              </div>
            </div>
          </article>

        </div>
      </main>
      <Footer />
    </>
  );
}

import Image from "next/image";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-section-bg transition-colors duration-300 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="w-full md:w-1/2">
            <div data-aos="fade-right">
              <h2 className="text-3xl font-bold text-foreground mb-6">About</h2>
            </div>
            <div data-aos="fade-right" data-aos-delay="200">
              <div className="space-y-4 text-neutral-600 dark:text-neutral-400 text-lg leading-relaxed text-justify">
                <p>
                  Most data isn&apos;t hard to collect, it&apos;s hard to trust. Numbers live in different systems, definitions don&apos;t match, and by the time someone needs an answer, nobody&apos;s confident in the dashboard in front of them. Closing that gap is what I care about most.
                </p>
                <p>
                  I graduated as Telkom University&apos;s Best Graduate in 2025 (GPA 3.92, Informatics Engineering), and I&apos;ve built my skill set around exactly that problem - designing data models that make sense, writing DAX measures that hold up under scrutiny, and building live SQL pipelines that don&apos;t break when the business needs them most.
                </p>
                <p>
                  That experience spans corporate finance, HR analytics, and e-commerce - from consolidating financial statements across 8 subsidiaries to building a Human Capital dashboard from raw employee data. Different domains, same core skill: turning &quot;I think&quot; into &quot;I know.&quot; I&apos;m not looking to specialize in one industry - just to keep doing that, wherever it&apos;s needed.
                </p>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 flex justify-center">
            <div data-aos="fade-left" data-aos-delay="300">
              <div className="w-64 h-64 md:w-80 md:h-80 bg-card-bg rounded-2xl shadow-lg border-4 border-card-border flex items-center justify-center relative overflow-hidden group">
                <Image 
                  src="/assets/images/Foto About.jpeg" 
                  alt="About Triana" 
                  fill 
                  className="object-cover group-hover:scale-105 transition-transform duration-500" 
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

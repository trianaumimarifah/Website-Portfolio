import { CheckCircle2 } from "lucide-react";
import { skills } from "@/lib/data";

export default function SkillsSection() {
  return (
    <section id="skills" className="py-20 bg-section-bg border-t border-card-border transition-colors duration-300 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div data-aos="fade-up" data-aos-delay="100">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-foreground mb-4">Technical Skills</h2>
            <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
              Technical skills I use to turn raw data into strategic business insights.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {Object.entries(skills).map(([category, items], index) => (
            <div key={category} data-aos="fade-up" data-aos-delay={index * 100} className="h-full">
              <div className="bg-card-bg p-6 rounded-xl border border-card-border shadow-sm hover:shadow-md transition-shadow h-full">
                <h3 className="text-lg font-bold text-foreground mb-4 border-b border-card-border pb-2">{category}</h3>
                <ul className="space-y-3">
                  {items.map((skill) => (
                    <li key={skill} className="flex items-start text-neutral-700 dark:text-neutral-300 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-primary-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { skills } from "@/lib/data";
import { CheckCircle2 } from "lucide-react";

export default function SkillsSection() {
  return (
    <section id="skills" className="py-20 bg-section-bg border-t border-card-border transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">Technical Skills</h2>
          <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
            Keahlian teknis yang saya gunakan untuk mengubah data mentah menjadi wawasan bisnis yang strategis.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category} className="bg-card-bg p-6 rounded-xl border border-card-border shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-foreground mb-4 border-b border-card-border pb-2">{category}</h3>
              <ul className="space-y-3">
                {items.map((skill) => (
                  <li key={skill} className="flex items-start text-neutral-700 dark:text-neutral-300">
                    <CheckCircle2 className="w-5 h-5 text-primary-500 mr-3 flex-shrink-0 mt-0.5" />
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

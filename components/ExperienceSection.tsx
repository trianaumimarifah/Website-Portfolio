import { Briefcase } from "lucide-react";

const experiences = [
  {
    id: 1,
    role: "Business Intelligence Analyst",
    company: "PT Telekomunikasi Indonesia International (Telin)",
    period: "Apr 2026 – Present",
    description: [
      "Developed end-to-end BI dashboards using Power BI, covering data preparation, transformation, modelling, DAX calculations, and interactive visualization.",
      "Performed data analysis to support business decision-making within the Financial Controller unit.",
      "Integrated Claude AI via MCP (Model Context Protocol) to automate analysis, generate insights, and enable natural language querying of business data."
    ]
  },
  {
    id: 2,
    role: "Quality Digitalization",
    company: "Department QMC, PT Denso Indonesia",
    period: "Oct 2025 – Apr 2026",
    description: [
      "Developed PCR/ESC tracking website with approval automation, notification reminders, and escalation using Power Apps, improving KPI monitoring and reducing delays by 30%.",
      "Automated PIC notification workflow, improving response time by 25%.",
      "Conducted abnormality and claim analysis to support root cause identification and FY26 claim reduction strategy."
    ]
  },
  {
    id: 3,
    role: "Admin Data & Survey, Drawing, Inventory Intern",
    company: "PT Telkom Akses Yogyakarta",
    period: "Feb 2024 – Jun 2024",
    description: [
      "Conducted field surveys for pole and ODP installation and created location maps using Google Earth for network planning.",
      "Managed and archived 50+ documents related to surveys, drawings, and inventory with high accuracy."
    ]
  },
  {
    id: 4,
    role: "Database Laboratory Assistant",
    company: "Telkom University",
    period: "Sept 2023 – Feb 2024",
    description: [
      "Guided 40+ students in SQL and ERD concepts using MySQL during database practicum sessions, improving material comprehension by 30%.",
      "Developed and updated practicum modules including SQL exercise sets."
    ]
  },
  {
    id: 5,
    role: "Data Science Intern",
    company: "Startup Campus (MSIB)",
    period: "Aug 2023 – Jan 2024",
    description: [
      "Applied data science, business analytics, SQL, and data storytelling to e-commerce case studies.",
      "Performed customer segmentation using K-Means clustering.",
      "Built interactive Tableau dashboards to present insights and business recommendations."
    ]
  }
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-20 bg-section-bg transition-colors duration-300 border-t border-card-border">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">Work Experience</h2>
          <p className="text-lg text-neutral-600 dark:text-neutral-400">
            Perjalanan karir dan pengalaman profesional saya dalam bidang data dan IT.
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={exp.id} className="relative pl-8 sm:pl-32 py-6 group">
              {/* Timeline line */}
              <div className="hidden sm:block absolute left-[7.5rem] top-0 bottom-0 w-px bg-neutral-200 dark:bg-neutral-800 group-last:bottom-auto group-last:h-full"></div>
              
              {/* Timeline dot */}
              <div className="hidden sm:flex absolute left-[7rem] top-8 w-4 h-4 rounded-full bg-primary-500 border-4 border-card-bg items-center justify-center shadow-sm"></div>

              <div className="flex flex-col sm:flex-row gap-4 sm:gap-12">
                {/* Date column */}
                <div className="sm:w-32 flex-shrink-0 sm:text-right pt-2 sm:pt-1">
                  <span className="text-sm font-semibold text-primary-600 dark:text-primary-400">{exp.period}</span>
                </div>
                
                {/* Content column */}
                <div className="flex-grow bg-card-bg p-6 rounded-2xl border border-card-border shadow-sm hover:shadow-md transition-shadow">
                  <h3 className="text-xl font-bold text-foreground mb-1">{exp.role}</h3>
                  <div className="flex items-center text-neutral-600 dark:text-neutral-400 mb-4 font-medium text-sm">
                    <Briefcase className="w-4 h-4 mr-2" />
                    {exp.company}
                  </div>
                  <ul className="space-y-2">
                    {exp.description.map((desc, i) => (
                      <li key={i} className="text-neutral-600 dark:text-neutral-300 text-sm leading-relaxed flex items-start">
                        <span className="mr-2 text-primary-500 mt-1.5">•</span>
                        <span>{desc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

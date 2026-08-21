import { Award, Trophy } from "lucide-react";

const certificates = [
  {
    id: 1,
    type: "achievement",
    title: "Best Graduate in Information Technology",
    issuer: "Telkom University",
    year: "2025",
    details: "Graduated with the highest honors (GPA 3.92) in the Information Technology Study Program."
  },
  {
    id: 2,
    type: "certification",
    title: "Power BI with AI Integration",
    issuer: "MCP Claude",
    year: "2026",
    details: "Integration of Power BI with Claude AI using Model Context Protocol."
  },
  {
    id: 3,
    type: "achievement",
    title: "2nd Place, National UX Design Competition",
    issuer: "University of Jember",
    year: "2024",
    details: "National level UX design competition."
  },
  {
    id: 4,
    type: "certification",
    title: "Data Classification & Summarization",
    issuer: "IBM Skill Build",
    year: "2025",
    details: "Implementation of AI for data classification and summarization using IBM Granite."
  },
  {
    id: 5,
    type: "achievement",
    title: "Awardee of IDR 12.9M Funding",
    issuer: "P2MW Kemendikbudristek",
    year: "2024",
    details: "Funding awardee for the 'Lanafa Temani' Program."
  },
  {
    id: 6,
    type: "certification",
    title: "Data Science, ML, AI & Statistics",
    issuer: "Bisa AI",
    year: "2025",
    details: "Basic Excel, Excel for Analytics, Python, Data Science, Machine Learning, AI, Statistics."
  },
  {
    id: 7,
    type: "achievement",
    title: "Awardee of IDR 38M Funding",
    issuer: "PPK ORMAWA Kemendikbudristek",
    year: "2023",
    details: "Funding awardee for the 'WANI LEMPER' Program."
  },
  {
    id: 8,
    type: "achievement",
    title: "1st Place, National Prototype UI/UX",
    issuer: "UNY",
    year: "2023",
    details: "Public Administration Prototype Competition."
  },
  {
    id: 9,
    type: "certification",
    title: "Data Science Foundation & Business Analytics",
    issuer: "Startup Campus",
    year: "2023",
    details: "SQL, Business Analytics, Visualization, Storytelling."
  }
];

export default function CertificatesSection() {
  return (
    <section id="certificates" className="py-20 bg-card-bg transition-colors duration-300 border-t border-card-border overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div data-aos="fade-up" data-aos-delay="100">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-foreground mb-4">Training, Certifications & Achievements</h2>
            <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
              Professional training, certifications, and academic achievements I have accomplished.
            </p>
          </div>
        </div>

        {/* Horizontal Scroll Container */}
        <div className="relative -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8">
          <div className="flex overflow-x-auto gap-6 pb-8 snap-x snap-mandatory hide-scrollbar" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
            {certificates.map((cert, index) => (
              <div key={cert.id} className="snap-center shrink-0 w-[80vw] sm:w-[350px]">
                <div data-aos="fade-up" data-aos-delay={(index % 4) * 100} className="h-full">
                  <div className="bg-section-bg p-6 rounded-2xl border border-card-border hover:border-primary-300 dark:hover:border-primary-700 transition-colors shadow-sm group h-full flex flex-col relative overflow-hidden">
                    
                    {/* Background Graphic */}
                    <div className="absolute -right-6 -top-6 text-primary-50 dark:text-primary-900/20 group-hover:text-primary-100 dark:group-hover:text-primary-900/40 transition-colors pointer-events-none">
                      {cert.type === 'achievement' ? (
                        <Trophy className="w-32 h-32" />
                      ) : (
                        <Award className="w-32 h-32" />
                      )}
                    </div>

                    <div className="w-12 h-12 rounded-full bg-primary-100 dark:bg-primary-900 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform relative z-10">
                      {cert.type === 'achievement' ? (
                        <Trophy className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                      ) : (
                        <Award className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                      )}
                    </div>
                    <h3 className="text-lg font-bold text-foreground mb-2 leading-tight relative z-10">
                      {cert.title}
                    </h3>
                    <div className="flex items-center text-sm font-medium text-primary-600 dark:text-primary-400 mb-3 relative z-10">
                      <span>{cert.issuer}</span>
                      <span className="mx-2">•</span>
                      <span>{cert.year}</span>
                    </div>
                    <p className="text-neutral-600 dark:text-neutral-400 text-sm relative z-10">
                      {cert.details}
                    </p>
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

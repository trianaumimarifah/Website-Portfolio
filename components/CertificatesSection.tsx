import { Award } from "lucide-react";

const certificates = [
  {
    id: 1,
    title: "Power BI with AI Integration (MCP Claude)",
    issuer: "Training",
    year: "2026",
    details: "Integrasi Power BI dengan Claude AI menggunakan MCP."
  },
  {
    id: 2,
    title: "Data Classification & Summarization with IBM Granite",
    issuer: "IBM Skill Build",
    year: "2025",
    details: "Penerapan AI untuk klasifikasi dan peringkasan data."
  },
  {
    id: 3,
    title: "Data Science, Machine Learning, AI, Statistik",
    issuer: "Bisa AI",
    year: "2025",
    details: "Basic Excel, Excel for Analytics, Python, Data Science, Machine Learning, AI, Statistik."
  },
  {
    id: 4,
    title: "English Competency Test (ITTP ECT)",
    issuer: "ITTP",
    year: "2024",
    details: "Score 597."
  },
  {
    id: 5,
    title: "Data Science Foundation & Business Analytics",
    issuer: "Startup Campus",
    year: "2023",
    details: "SQL, Business Analytics, Visualization, Storytelling."
  }
];

export default function CertificatesSection() {
  return (
    <section id="certificates" className="py-20 bg-card-bg transition-colors duration-300 border-t border-card-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">Training & Certification</h2>
          <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
            Pelatihan dan sertifikasi yang telah saya selesaikan untuk terus mengasah kemampuan teknis dan manajerial.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((cert) => (
            <div key={cert.id} className="bg-section-bg p-6 rounded-2xl border border-card-border hover:border-primary-300 dark:hover:border-primary-700 transition-colors shadow-sm group">
              <div className="w-12 h-12 rounded-full bg-primary-100 dark:bg-primary-900 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Award className="w-6 h-6 text-primary-600 dark:text-primary-400" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2 leading-tight">
                {cert.title}
              </h3>
              <div className="flex items-center text-sm font-medium text-primary-600 dark:text-primary-400 mb-3">
                <span>{cert.issuer}</span>
                <span className="mx-2">•</span>
                <span>{cert.year}</span>
              </div>
              <p className="text-neutral-600 dark:text-neutral-400 text-sm">
                {cert.details}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

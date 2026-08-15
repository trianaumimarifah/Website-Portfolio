export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-section-bg transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl font-bold text-foreground mb-6">Tentang Saya</h2>
            <div className="space-y-4 text-neutral-600 dark:text-neutral-400 text-lg leading-relaxed">
              <p>
                Saya adalah seorang Data Enthusiast yang sangat tertarik pada bagaimana data dapat mendorong keputusan bisnis yang lebih baik. Sebagai lulusan terbaik (GPA 3.92) dari Telkom University pada tahun 2025, saya memiliki fondasi akademis yang kuat di bidang analisis data.
              </p>
              <p>
                Selama pengalaman saya di lingkungan corporate finance, saya bertanggung jawab untuk merancang dan mengimplementasikan dashboard Power BI end-to-end. Saya terbiasa menangani kompleksitas data menggunakan SQL dan Python untuk membangun pipeline yang efisien dan data model yang robust.
              </p>
              <p>
                Tujuan karir saya adalah terus berkembang sebagai Business Intelligence Analyst / Data Analyst yang mampu memberikan insight krusial dan actionable bagi pemangku kepentingan.
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/2 flex justify-center">
            {/* Placeholder for Photo */}
            <div className="w-64 h-64 md:w-80 md:h-80 bg-card-bg rounded-2xl shadow-lg border-4 border-card-border flex items-center justify-center relative overflow-hidden">
              <span className="text-neutral-400 font-medium">Foto Profil</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

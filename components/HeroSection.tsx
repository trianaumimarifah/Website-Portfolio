import { ArrowRight, Download, Briefcase } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section id="hero" className="pt-32 pb-20 md:pt-48 md:pb-32 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto min-h-[90vh] flex items-center">
      <div className="w-full flex flex-col md:flex-row items-center gap-12">
        {/* Text Content (Left) */}
        <div className="w-full md:w-3/5 order-2 md:order-1 text-center md:text-left">
          <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-primary-50 text-primary-700 font-semibold text-sm tracking-wide border border-primary-100 shadow-sm dark:bg-primary-950 dark:border-primary-900 dark:text-primary-300">
            DATA ENTHUSIAST & BI ANALYST
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-foreground tracking-tight leading-tight mb-6">
            Hi, I&apos;m <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-rose-400">Triana Umi Ma&apos;rifah</span>
          </h1>
          <p className="text-lg sm:text-xl text-neutral-600 dark:text-neutral-400 mb-10 leading-relaxed max-w-2xl mx-auto md:mx-0">
            Lulusan cum laude Telkom University dengan pengalaman hands-on dalam membangun end-to-end Power BI dashboard di lingkungan corporate finance. Mengubah data kompleks menjadi actionable insights menggunakan SQL, Python, dan AI-augmented analytics.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Link 
              href="#projects"
              className="inline-flex justify-center items-center px-6 py-3 border border-transparent text-base font-medium rounded-xl text-white bg-primary-600 hover:bg-primary-700 transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5"
            >
              Lihat Portfolio
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <a 
              href="/assets/CV_Triana.pdf"
              download
              className="inline-flex justify-center items-center px-6 py-3 border-2 border-primary-200 dark:border-primary-900 text-base font-medium rounded-xl text-foreground bg-card-bg hover:bg-primary-50 dark:hover:bg-primary-950 transition-all shadow-sm hover:shadow-md"
            >
              <Download className="mr-2 w-5 h-5" />
              Download CV
            </a>
          </div>
        </div>

        {/* Photo Content (Right) */}
        <div className="w-full md:w-2/5 order-1 md:order-2 flex justify-center">
          <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-full bg-gradient-to-tr from-primary-200 to-rose-100 dark:from-primary-900 dark:to-neutral-800 p-2 shadow-2xl flex-shrink-0">
            <div className="w-full h-full rounded-full bg-card-bg border-4 border-white dark:border-neutral-800 flex items-center justify-center overflow-hidden relative">
              <span className="text-neutral-400 dark:text-neutral-500 font-medium">Foto Profil</span>
              {/* Optional: if you have a photo, uncomment and place it in public/assets/profile.jpg
              <Image 
                src="/assets/profile.jpg"
                alt="Triana Umi Ma'rifah"
                fill
                className="object-cover"
                priority
              />
              */}
            </div>
            
            {/* Decorative Floating Badge */}
            <div className="absolute -bottom-4 -right-4 bg-white dark:bg-neutral-800 px-4 py-3 rounded-2xl shadow-xl border border-neutral-100 dark:border-neutral-700 flex items-center gap-3 animate-bounce-slow">
              <div className="bg-primary-100 dark:bg-primary-900/50 p-2 rounded-full text-primary-600 dark:text-primary-400">
                <Briefcase className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs text-neutral-500 font-medium">Available for</p>
                <p className="text-sm font-bold text-foreground">Opportunities</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

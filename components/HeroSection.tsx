import { ArrowRight, Download, Briefcase, Database, BarChart, FileJson } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

function ToolBadge({ className, children, style }: { className: string, children: React.ReactNode, style?: React.CSSProperties }) {
  return (
    <div className={`absolute flex items-center justify-center w-12 h-12 bg-white dark:bg-neutral-800 rounded-full shadow-lg border border-neutral-100 dark:border-neutral-700 ${className}`} style={style}>
      {children}
    </div>
  );
}

// Custom SVGs for tools
const PythonIcon = () => (
  <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor" className="text-blue-500">
    <path d="M11.95 2.01c-3.52 0-4.04.57-4.04.57l-.02 2.58h4.15V6.7H7.72S3.6 6.55 3.6 11.83c0 5.27 3.51 5.34 3.51 5.34l2.25.04v-2.73s-.08-2.68 2.76-2.68h3.94s2.61.1 2.61-2.58V5.37s.2-3.36-6.72-3.36zm-2.02 2.5a.86.86 0 1 1 0 1.72.86.86 0 0 1 0-1.72zm10.5 4.88c0 0-3.51-.06-3.51-.06l-2.25-.04v2.73s.08 2.68-2.76 2.68H7.98s-2.6-.1-2.6 2.58v3.86s-.2 3.36 6.72 3.36c3.52 0 4.04-.57 4.04-.57l.02-2.58h-4.15v-1.54h4.32s4.12.15 4.12-5.13c0-5.27-3.5-5.34-3.5-5.34zm-4.46 7.63a.86.86 0 1 1 0 1.72.86.86 0 0 1 0-1.72z" />
  </svg>
);

export default function HeroSection() {
  return (
    <section id="hero" className="pt-32 pb-20 md:pt-48 md:pb-32 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto min-h-[90vh] flex items-center overflow-hidden">
      <div className="w-full flex flex-col md:flex-row items-center gap-12">
        {/* Text Content (Left) */}
        <div className="w-full md:w-3/5 order-2 md:order-1 text-center md:text-left z-10">
          <div data-aos="fade-up" data-aos-delay="100">
            <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-primary-50 text-primary-700 font-semibold text-sm tracking-wide border border-primary-100 shadow-sm dark:bg-primary-950 dark:border-primary-900 dark:text-primary-300">
              DATA ENTHUSIAST & BI ANALYST
            </div>
          </div>
          
          <div data-aos="fade-up" data-aos-delay="200">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-foreground tracking-tight leading-tight mb-6">
              Hi, I&apos;m <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-rose-400">Triana Umi Ma&apos;rifah</span>
            </h1>
          </div>
          
          <div data-aos="fade-up" data-aos-delay="300">
            <p className="text-lg sm:text-xl text-neutral-600 dark:text-neutral-400 mb-10 leading-relaxed max-w-2xl mx-auto md:mx-0 text-justify">
              Every dataset has a decision hiding inside it. I find it, model it, and turn it into a dashboard people can actually act on. Business Intelligence Analyst and cum laude graduate from Telkom University, experienced in turning raw, messy data into clean, decision-ready insights using SQL, DAX, Python, and AI-augmented analytics.
            </p>
          </div>
          
          <div data-aos="fade-up" data-aos-delay="400">
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Link 
                href="#projects"
                className="inline-flex justify-center items-center px-6 py-3 border border-transparent text-base font-medium rounded-xl text-white bg-primary-600 hover:bg-primary-700 transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5"
              >
                View Portfolio
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
        </div>

        {/* Photo Content (Right) */}
        <div className="w-full md:w-2/5 order-1 md:order-2 flex justify-center mt-10 md:mt-0 relative">
          <div data-aos="fade-left" data-aos-delay="500">
            <div className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full bg-gradient-to-tr from-primary-200 to-rose-100 dark:from-primary-900 dark:to-neutral-800 p-2 shadow-2xl flex-shrink-0">
              <div className="w-full h-full rounded-full bg-card-bg border-4 border-white dark:border-neutral-800 flex items-center justify-center overflow-hidden relative">
                <Image 
                  src="/assets/images/Foto Hero.jpg"
                  alt="Triana Umi Ma'rifah"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              
              {/* Tool Logos Orbiting */}
              <ToolBadge className="-top-4 left-1/2 -translate-x-1/2 animate-bounce-slow">
                <Database className="w-6 h-6 text-emerald-500" />
              </ToolBadge>
              
              <ToolBadge className="-bottom-4 left-1/2 -translate-x-1/2 animate-bounce-slow" style={{ animationDelay: '1s' }}>
                <PythonIcon />
              </ToolBadge>
              
              <ToolBadge className="top-1/2 -translate-y-1/2 -left-6 animate-bounce-slow" style={{ animationDelay: '0.5s' }}>
                <BarChart className="w-6 h-6 text-yellow-500" />
              </ToolBadge>
              
              <ToolBadge className="top-1/2 -translate-y-1/2 -right-6 animate-bounce-slow" style={{ animationDelay: '1.5s' }}>
                <FileJson className="w-6 h-6 text-primary-500" />
              </ToolBadge>

              {/* Decorative Floating Badge */}
              <div className="absolute bottom-6 -right-8 md:-right-12 bg-white dark:bg-neutral-800 px-4 py-3 rounded-2xl shadow-xl border border-neutral-100 dark:border-neutral-700 flex items-center gap-3 animate-bounce-slow" style={{ animationDelay: '2s' }}>
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
      </div>
    </section>
  );
}

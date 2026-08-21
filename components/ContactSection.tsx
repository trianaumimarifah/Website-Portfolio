import { Mail, Download } from "lucide-react";

function LinkedinIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
    </svg>
  );
}

function GithubIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
    </svg>
  );
}

function MediumIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
      <path d="M24 11.984c0-3.321-3.265-6.012-7.295-6.012s-7.295 2.691-7.295 6.012c0 3.322 3.265 6.012 7.295 6.012s7.295-2.69 7.295-6.012zM16.48 11.984c0-3.111-1.47-5.632-3.284-5.632s-3.283 2.521-3.283 5.632c0 3.11 1.47 5.632 3.283 5.632s3.284-2.522 3.284-5.632zM7.34 11.984c0-3.3-2.124-5.975-4.743-5.975s-4.744 2.675-4.744 5.975 2.125 5.975 4.744 5.975c2.618 0 4.743-2.675 4.743-5.975z"/>
    </svg>
  );
}

function InstagramIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
    </svg>
  );
}

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-section-bg transition-colors duration-300 overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div data-aos="fade-up" data-aos-delay="100">
          <h2 className="text-3xl font-bold text-foreground mb-6">Let&apos;s Connect</h2>
          <p className="text-lg text-neutral-600 dark:text-neutral-400 mb-10 max-w-2xl mx-auto">
            Interested in collaborating or have questions about my portfolio? Don&apos;t hesitate to reach out via email or my social links.
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center items-center gap-4 mb-12">
          <a 
            href="mailto:trianafaaa@gmail.com" 
            className="flex items-center px-6 py-4 bg-card-bg hover:bg-primary-50 dark:hover:bg-primary-950 text-foreground hover:text-primary-600 rounded-xl border border-card-border hover:border-primary-200 dark:hover:border-primary-800 transition-all shadow-sm w-full sm:w-auto"
          >
            <Mail className="w-5 h-5 mr-3 text-primary-600" />
            <span className="font-medium">trianafaaa@gmail.com</span>
          </a>
          
          <a 
            href="https://www.linkedin.com/in/trianaumimarifah/" 
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center px-6 py-4 bg-card-bg hover:bg-primary-50 dark:hover:bg-primary-950 text-foreground hover:text-primary-600 rounded-xl border border-card-border hover:border-primary-200 dark:hover:border-primary-800 transition-all shadow-sm w-full sm:w-auto"
          >
            <LinkedinIcon className="w-5 h-5 mr-3 text-primary-600" />
            <span className="font-medium">LinkedIn</span>
          </a>

          <a 
            href="https://medium.com/@trianafaaa" 
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center px-6 py-4 bg-card-bg hover:bg-primary-50 dark:hover:bg-primary-950 text-foreground hover:text-primary-600 rounded-xl border border-card-border hover:border-primary-200 dark:hover:border-primary-800 transition-all shadow-sm w-full sm:w-auto"
          >
            <MediumIcon className="w-5 h-5 mr-3 text-primary-600" />
            <span className="font-medium">Medium</span>
          </a>

          <a 
            href="https://github.com/trianaumimarifah" 
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center px-6 py-4 bg-card-bg hover:bg-primary-50 dark:hover:bg-primary-950 text-foreground hover:text-primary-600 rounded-xl border border-card-border hover:border-primary-200 dark:hover:border-primary-800 transition-all shadow-sm w-full sm:w-auto"
          >
            <GithubIcon className="w-5 h-5 mr-3 text-primary-600" />
            <span className="font-medium">GitHub</span>
          </a>

          <a 
            href="https://www.instagram.com/trianafa28" 
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center px-6 py-4 bg-card-bg hover:bg-primary-50 dark:hover:bg-primary-950 text-foreground hover:text-primary-600 rounded-xl border border-card-border hover:border-primary-200 dark:hover:border-primary-800 transition-all shadow-sm w-full sm:w-auto"
          >
            <InstagramIcon className="w-5 h-5 mr-3 text-primary-600" />
            <span className="font-medium">Instagram</span>
          </a>
        </div>

        <div data-aos="fade-up" data-aos-delay="300">
          <div className="pt-8 border-t border-card-border">
            <p className="text-neutral-600 dark:text-neutral-400 mb-4">Or you can directly download my CV:</p>
            <a 
              href="/assets/CV_Triana.pdf"
              download
              className="inline-flex justify-center items-center px-8 py-3 border border-transparent text-base font-semibold rounded-lg text-white bg-primary-600 hover:bg-primary-700 transition-colors shadow-md hover:shadow-lg"
            >
              <Download className="mr-2 w-5 h-5" />
              Download Full CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

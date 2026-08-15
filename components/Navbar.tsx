"use client";

import Link from "next/link";
import { Download, Menu, X, Moon, Sun } from "lucide-react";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <nav className="fixed w-full bg-nav-bg backdrop-blur-sm z-50 border-b border-card-border transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="font-bold text-xl text-primary-600">
              Triana Sange<span className="text-foreground">.</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            <Link href="/#about" className="text-foreground hover:text-primary-600 font-medium transition-colors">About</Link>
            <Link href="/#experience" className="text-foreground hover:text-primary-600 font-medium transition-colors">Experience</Link>
            <Link href="/#projects" className="text-foreground hover:text-primary-600 font-medium transition-colors">Projects</Link>
            <Link href="/#skills" className="text-foreground hover:text-primary-600 font-medium transition-colors">Skills</Link>
            <Link href="/#certificates" className="text-foreground hover:text-primary-600 font-medium transition-colors">Certificates</Link>
            <Link href="/#contact" className="text-foreground hover:text-primary-600 font-medium transition-colors">Contact</Link>
            
            {/* Dark Mode Toggle */}
            {mounted && (
              <button
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="p-2 rounded-full hover:bg-neutral-200 dark:hover:bg-neutral-800 transition-colors text-foreground"
                aria-label="Toggle Dark Mode"
              >
                {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
            )}

            <a 
              href="/assets/CV_Triana.pdf" 
              download
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-primary-600 hover:bg-primary-700 transition-colors"
            >
              <Download className="w-4 h-4 mr-2" />
              Download CV
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            {mounted && (
              <button
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="p-2 rounded-full hover:bg-neutral-200 dark:hover:bg-neutral-800 transition-colors text-foreground"
              >
                {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
            )}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-foreground hover:text-neutral-500 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-card-bg border-b border-card-border">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="/#about" onClick={() => setIsOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-foreground hover:text-primary-600 hover:bg-neutral-100 dark:hover:bg-neutral-800">About</Link>
            <Link href="/#experience" onClick={() => setIsOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-foreground hover:text-primary-600 hover:bg-neutral-100 dark:hover:bg-neutral-800">Experience</Link>
            <Link href="/#projects" onClick={() => setIsOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-foreground hover:text-primary-600 hover:bg-neutral-100 dark:hover:bg-neutral-800">Projects</Link>
            <Link href="/#skills" onClick={() => setIsOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-foreground hover:text-primary-600 hover:bg-neutral-100 dark:hover:bg-neutral-800">Skills</Link>
            <Link href="/#certificates" onClick={() => setIsOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-foreground hover:text-primary-600 hover:bg-neutral-100 dark:hover:bg-neutral-800">Certificates</Link>
            <Link href="/#contact" onClick={() => setIsOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-foreground hover:text-primary-600 hover:bg-neutral-100 dark:hover:bg-neutral-800">Contact</Link>
            <a 
              href="/assets/CV_Triana.pdf" 
              download
              className="mt-4 flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700"
            >
              <Download className="w-5 h-5 mr-2" />
              Download CV
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

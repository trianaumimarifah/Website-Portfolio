export default function Footer() {
  return (
    <footer className="bg-neutral-900 dark:bg-black text-neutral-400 py-8 border-t border-neutral-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <div>
          <span className="text-xl font-bold text-white">Triana.</span>
        </div>
        <div className="text-sm">
          &copy; {new Date().getFullYear()} Triana Umi Ma&apos;rifah. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

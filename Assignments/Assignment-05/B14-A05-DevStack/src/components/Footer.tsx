const Footer = () => {
  return (
    <footer id="contact" className="mt-12 border-t border-gray-100 bg-white pb-8 pt-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 grid grid-cols-1 gap-8 md:grid-cols-5">

          <div className="space-y-4 md:col-span-2">
            <div className="flex items-center gap-2">
              <div className="bg-brand-gradient flex h-8 w-8 items-center justify-center rounded-md text-sm font-bold text-white">
                DS
              </div>

              <span className="text-xl font-bold text-black">
                Dev<span className="text-pink-500">Stack</span>
              </span>
            </div>

            <p className="max-w-sm text-sm leading-relaxed text-gray-400">
              Curated tools, technologies, and resources for developers
              building modern software.
            </p>

            <div className="flex gap-4 pt-2 text-sm font-medium text-gray-500">
              <a
                href="https://github.com/EHMahi9"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-pink-500"
              >
                GitHub
              </a>

              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-pink-500"
              >
                Twitter
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-pink-500"
              >
                LinkedIn
              </a>
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-xs font-bold uppercase tracking-wider text-gray-800">
              Product
            </h3>

            <ul className="space-y-3 text-sm font-medium text-gray-400">
              <li><a href="#" className="hover:text-pink-500">Home</a></li>
              <li><a href="#technologies" className="hover:text-pink-500">Technologies</a></li>
              <li><a href="#projects" className="hover:text-pink-500">Projects</a></li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-xs font-bold uppercase tracking-wider text-gray-800">
              Company
            </h3>

            <ul className="space-y-3 text-sm font-medium text-gray-400">
              <li><a href="#about" className="hover:text-pink-500">About</a></li>
              <li><a href="#contact" className="hover:text-pink-500">Contact</a></li>
              <li><a href="#" className="hover:text-pink-500">Careers</a></li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-xs font-bold uppercase tracking-wider text-gray-800">
              Legal
            </h3>

            <ul className="space-y-3 text-sm font-medium text-gray-400">
              <li><a href="#" className="hover:text-pink-500">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-pink-500">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-gray-100 pt-8 md:flex-row">
          <p className="text-sm text-gray-400">
            © 2026 Dev Stack. All rights reserved.
          </p>

          <div className="flex gap-6 text-sm font-medium text-gray-400">
            <a href="#" className="transition-colors hover:text-gray-600">
              Privacy
            </a>

            <a href="#" className="transition-colors hover:text-gray-600">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-100 pt-16 pb-8 mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-16">

          {/* Column 1: Brand & Description */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <div className="bg-pink-500 text-white font-bold w-8 h-8 flex items-center justify-center rounded-md text-sm">
                DS
              </div>
              <span className="font-bold text-xl text-[#0f172a]">
                Dev<span className="text-pink-500 font-normal">Stack</span>
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
              Curated tools, technologies, and resources for developers building modern software.
            </p>
            <div className="flex gap-4 text-gray-500 text-sm font-medium pt-2">
              <a href="#" className="hover:text-pink-500 transition-colors">GitHub</a>
              <a href="#" className="hover:text-pink-500 transition-colors">Twitter</a>
              <a href="#" className="hover:text-pink-500 transition-colors">LinkedIn</a>
            </div>
          </div>

          {/* Column 2: PRODUCT */}
          <div>
            <h3 className="font-bold text-gray-800 tracking-wider text-xs mb-4 uppercase">Product</h3>
            <ul className="space-y-3 text-sm text-gray-400 font-medium">
              <li><a href="#" className="hover:text-pink-500 transition-colors">Home</a></li>
              <li><a href="#" className="hover:text-pink-500 transition-colors">Technologies</a></li>
              <li><a href="#" className="hover:text-pink-500 transition-colors">Projects</a></li>
            </ul>
          </div>

          {/* Column 3: COMPANY */}
          <div>
            <h3 className="font-bold text-gray-800 tracking-wider text-xs mb-4 uppercase">Company</h3>
            <ul className="space-y-3 text-sm text-gray-400 font-medium">
              <li><a href="#about" className="hover:text-pink-500 transition-colors">About</a></li>
              <li><a href="#" className="hover:text-pink-500 transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-pink-500 transition-colors">Careers</a></li>
            </ul>
          </div>

          {/* Column 4: LEGAL */}
          <div>
            <h3 className="font-bold text-gray-800 tracking-wider text-xs mb-4 uppercase">Legal</h3>
            <ul className="space-y-3 text-sm text-gray-400 font-medium">
              <li><a href="#" className="hover:text-pink-500 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-pink-500 transition-colors">Terms of Service</a></li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Terms */}
        <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-400">
            © 2026 Dev Stack. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-gray-400 font-medium">
            <a href="#" className="hover:text-gray-600 transition-colors">Privacy</a>
            <a href="#" className="hover:text-gray-600 transition-colors">Terms</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
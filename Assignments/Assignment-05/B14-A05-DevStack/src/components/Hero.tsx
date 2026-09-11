import HeroImage from '../assets/banner-stack.png';

const Hero = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
      <div className="flex flex-col-reverse md:flex-row items-center gap-12">
        
        {/* textarea */}
        <div className="flex-1 space-y-6 text-center md:text-left">
          <h1 className="text-4xl font-extrabold leading-tight text-gray-900 md:text-6xl">
            Build Your Ideal <br />
            <span className="text-brand-gradient">Development Stack</span>
          </h1>
          
          <p className="text-lg text-gray-600 md:max-w-lg">
            Explore frontend, backend, database, and tooling options, compare
            them side by side, and put together the stack that fits your next
            project.
          </p>
          
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row md:justify-start">
            <a
              href="#technologies"
              className="bg-brand-gradient w-full rounded-lg px-6 py-3 text-center font-semibold text-white shadow-sm transition-all hover:shadow-md sm:w-auto"
            >
              Explore Technologies
            </a>
            <a
              href="#about"
              className="w-full rounded-lg border border-gray-200 bg-white px-6 py-3 text-center font-semibold text-gray-700 transition-all hover:bg-gray-50 sm:w-auto"
            >
              Learn More
            </a>
          </div>
        </div>

        {/* image */}
        <div className="flex-1 w-full">
          <img 
            src={HeroImage} 
            alt="Dev Stack Hero" 
            className="HeroImage w-full max-w-md mx-auto md:max-w-full drop-shadow-2xl"
          />
        </div>

      </div>
    </section>
  );
};

export default Hero;
import HeroImage from '../assets/banner-stack.png';

const Hero = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
      <div className="flex flex-col-reverse md:flex-row items-center gap-12">
        
        {/* textarea */}
        <div className="flex-1 space-y-6 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight">
            Build Your Ultimate <br />
            <span className="text-brand-gradient">Development Stack</span>
          </h1>
          
          <p className="text-lg text-gray-600 md:max-w-lg">
            Explore, discover, and organize the best technologies for your next big project. 
            From frontend libraries to powerful databases, build your dream stack today.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start">
            <button className="w-full sm:w-auto bg-brand-gradient text-white px-8 py-3 rounded-full font-bold shadow-lg hover:shadow-xl transition-all">
              Explore Technologies
            </button>
            <button className="w-full sm:w-auto border-2 border-purple-500 text-purple-600 px-8 py-3 rounded-full font-bold hover:bg-purple-50 transition-all">
              Learn More
            </button>
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
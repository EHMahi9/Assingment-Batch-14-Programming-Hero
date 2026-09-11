const About = () => {
  return (
    <section id="about" className="bg-white py-16 md:py-24 border-t border-gray-100 mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-12">
          
          <div className="flex-1 w-full flex justify-center">
            <img 
              src="https://illustrations.popsy.co/amber/freelancer.svg" 
              alt="About DevStack" 
              className="w-full max-w-md object-contain"
            />
          </div>

          <div className="flex-1 space-y-6 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#0f172a]">
              About <span className="text-pink-500">DevStack</span>
            </h2>
            <p className="text-lg text-gray-500 leading-relaxed">
              DevStack is your ultimate platform to discover, compare, and organize the best tools for your next development project. Whether you are a beginner building your first website or an expert scaling a complex web application, choosing the right technology stack is crucial.
            </p>
            <button className="mt-4 border border-pink-500 text-pink-500 px-8 py-3 rounded-lg font-semibold hover:bg-pink-50 transition-colors">
              Read Our Story
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
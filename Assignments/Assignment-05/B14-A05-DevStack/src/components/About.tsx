const About = () => {
  return (
    <section
      id="about"
      className="mt-12 border-t border-gray-100 bg-white py-16 md:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-12 md:flex-row">

          <div className="flex w-full flex-1 justify-center">
            <img
              src="https://illustrations.popsy.co/amber/freelancer.svg"
              alt="About DevStack"
              className="w-full max-w-md object-contain"
            />
          </div>

          <div className="flex-1 space-y-6 text-center md:text-left">
            <h2 className="text-3xl font-extrabold text-[#0f172a] md:text-4xl">
              About{' '}
              <span className="text-brand-gradient">
                DevStack
              </span>
            </h2>

            <p className="text-lg leading-relaxed text-gray-500">
              DevStack is your ultimate platform to discover, compare, and
              organize the best tools for your next development project.
              Whether you are a beginner building your first website or an
              expert scaling a complex web application, choosing the right
              technology stack is crucial.
            </p>

            <button className="mt-4 rounded-lg border border-pink-500 px-8 py-3 font-semibold text-pink-500 transition-colors hover:bg-pink-50">
              Read Our Story
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
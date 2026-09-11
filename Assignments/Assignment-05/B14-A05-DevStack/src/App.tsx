import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TechCard from './components/TechCard';
import './App.css';
import Footer from './components/Footer';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export type Technology = {
  id: string;
  name: string;
  category: string;
  description: string;
  icon: string;
  rating: number;
  difficulty: string;
  badge: string;
};

function App() {
  const [techs, setTechs] = useState<Technology[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>('');
  const [stack, setStack] = useState<Technology[]>([]);

  useEffect(() => {
    const loadTechnologies = async () => {
      try {
        setIsLoading(true);
        setError('');

        const response = await fetch('/data.json');

        if (!response.ok) {
          throw new Error(`Failed to load technologies (${response.status})`);
        }

        const data: Technology[] = await response.json();

        setTechs(data);
      } catch (error) {
        console.error('Error fetching data:', error);
        setError('Unable to load technologies. Please try again.');
      } finally {
        setIsLoading(false);
      }
    };

    loadTechnologies();
  }, []);

  const handleAddToStack = (tech: Technology) => {
    const isAlreadyExists = stack.some((item) => item.id === tech.id);

    if (isAlreadyExists) {
      toast.warning(`${tech.name} is already in your stack!`);
      return;
    }

    setStack((previousStack) => [...previousStack, tech]);
    toast.success(`${tech.name} added to your stack!`);
  };

  const handleRemoveFromStack = (id: string) => {
    setStack((previousStack) =>
      previousStack.filter((item) => item.id !== id)
    );

    toast.error('Technology removed!');
  };

  const handleClearStack = () => {
    setStack([]);
    toast.error('Stack cleared!');
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />

      <ToastContainer
        position="bottom-right"
        aria-label="Toast notifications"
      />

      {isLoading ? (
        <div className="flex min-h-[70vh] items-center justify-center px-4">
          <p className="text-center text-2xl font-bold text-brand-gradient">
            Loading Technologies...
          </p>
        </div>
      ) : error ? (
        <div className="flex min-h-[70vh] items-center justify-center px-4">
          <div className="rounded-2xl border border-red-100 bg-white p-8 text-center shadow-sm">
            <p className="mb-4 text-lg font-semibold text-red-500">
              {error}
            </p>

            <button
              onClick={() => window.location.reload()}
              className="bg-brand-gradient rounded-full px-6 py-3 font-semibold text-white transition-all hover:shadow-lg"
            >
              Try Again
            </button>
          </div>
        </div>
      ) : (
        <main>
          <Hero />

          <section id="technologies" className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
            <div className="flex flex-col gap-8 lg:flex-row">
              <div className="lg:w-3/4">
                <div className="mb-8">
                  <h2 className="text-3xl font-extrabold text-[#0f172a] md:text-4xl">
                    Explore the{' '}
                    <span className="text-brand-gradient">Technologies</span>
                  </h2>
                  <p className="mt-2 text-slate-500">
                    Pick one technology per category to build your ideal stack.
                  </p>
                </div>

                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {techs.map((tech) => {
                    const isAdded = stack.some(
                      (item) => item.id === tech.id
                    );

                    return (
                      <TechCard
                        key={tech.id}
                        tech={tech}
                        handleAddToStack={handleAddToStack}
                        isAdded={isAdded}
                      />
                    );
                  })}
                </div>
              </div>

              <div id="projects" className="lg:w-1/4">
                <div className="sticky top-24 rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
                  <h2 className="mb-1 text-xl font-bold text-[#0f172a]">
                    Your Stack
                  </h2>

                  <p className="mb-6 text-sm text-slate-400">
                    {stack.length === 0
                      ? 'No technologies selected yet.'
                      : `${stack.length} Technology Selected`}
                  </p>

                  {stack.length === 0 ? (
                    <div className="rounded-2xl border border-dashed border-slate-200 py-8 px-4 text-center">
                      <p className="text-sm font-medium text-slate-400">
                        Your stack is empty.
                      </p>
                    </div>
                  ) : (
                    <div className="space-y-3">
                      {stack.map((item) => (
                        <div
                          key={item.id}
                          className="flex items-center justify-between rounded-xl border border-slate-200/80 bg-white p-3"
                        >
                          <div className="flex min-w-0 items-center gap-3">
                            <img
                              src={item.icon}
                              alt={item.name}
                              className="h-8 w-8 shrink-0 object-contain"
                            />

                            <div className="min-w-0">
                              <h4 className="truncate text-sm font-bold text-gray-900">
                                {item.name}
                              </h4>

                              <p className="text-xs text-slate-400">
                                {item.category}
                              </p>
                            </div>
                          </div>

                          <button
                            onClick={() => handleRemoveFromStack(item.id)}
                            className="ml-2 p-1 text-slate-400 transition-colors hover:text-slate-600"
                            title={`Remove ${item.name}`}
                            aria-label={`Remove ${item.name}`}
                          >
                            <svg
                              className="h-4 w-4"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M6 18L18 6M6 6l12 12"
                              />
                            </svg>
                          </button>
                        </div>
                      ))}

                      <button
                        onClick={handleClearStack}
                        className="mt-4 w-full rounded-xl border border-red-300 bg-white py-2.5 text-sm font-bold text-red-500 transition-colors hover:bg-red-50"
                      >
                        Remove All
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </section>
        </main>
      )}

      <Footer />
    </div>
  );
}

export default App;
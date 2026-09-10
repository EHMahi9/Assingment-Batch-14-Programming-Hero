import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TechCard from './components/TechCard';
import './App.css';
import Footer from './components/Footer';
import About from './components/About';

// ১. Toastify import
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
  
  // state
  const [stack, setStack] = useState<Technology[]>([]);

  useEffect(() => {
    fetch('/data.json')
      .then((response) => response.json())
      .then((data) => {
        setTechs(data);
        setIsLoading(false);
      })
      .catch((error) => console.error("Error fetching data: ", error));
  }, []);

  // ৩. Add to Stack ফাংশন
  const handleAddToStack = (tech: Technology) => {
    // checking if it was before or not
    const isAlreadyExists = stack.find((item) => item.id === tech.id);

    if (isAlreadyExists) {
      toast.warning(`${tech.name} is already in your stack!`);
      return; // ends
    }

    // if not, then add to stack
    const newStack = [...stack, tech];
    setStack(newStack);
    toast.success(`${tech.name} added to your stack!`);
  };

  const handleRemoveFromStack = (id: string) => {
    // filter ব্যবহার করে যেই id তে ক্লিক করা হয়েছে, সেটা বাদে বাকিগুলো রেখে দিচ্ছি
    const remainingStack = stack.filter((item) => item.id !== id);
    setStack(remainingStack);
    toast.error("Technology removed!"); // লাল রঙের অ্যালার্ট
  };

  // পুরো স্ট্যাক একসাথে খালি করার ফাংশন
  const handleClearStack = () => {
    setStack([]); // স্ট্যাকের অ্যারেকে পুরোপুরি ফাঁকা করে দিলাম
    toast.error("Stack cleared!");
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      
      {/* ToastContainer to see the notification to the screen */}
      <ToastContainer position="bottom-right" aria-label="Toast notifications" />

      {isLoading ? (
        <div className="flex justify-center items-center h-[70vh] text-2xl font-bold text-brand-gradient">
          Loading Technologies...
        </div>
      ) : (
        <main>
          <Hero />
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="flex flex-col lg:flex-row gap-8">
              
              {/* left: Technology Grid */}
              <div className="lg:w-3/4">
                <h2 className="text-3xl font-bold text-gray-800 mb-8">Popular Technologies</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {techs.map((tech) => {
                    // 4. check
                    const isAdded = stack.some((item) => item.id === tech.id);
                    
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

              {/* ডান দিক: Your Stack Sidebar */}
              <div className="lg:w-1/4">
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 sticky top-24">
                  <h2 className="text-2xl font-bold text-gray-800 mb-2">Your Stack</h2>
                  <p className="text-sm text-gray-500 mb-6">{stack.length} Technology Selected</p>
                  
                  {/* Conditional Rendering: স্ট্যাক খালি হলে Empty State, না হলে লিস্ট দেখাবে */}
                  {stack.length === 0 ? (
                    // Empty State
                    <div className="bg-gray-50 border-2 border-dashed border-gray-200 rounded-xl p-8 text-center">
                      <span className="text-4xl mb-3 block">📭</span>
                      <p className="text-gray-500 font-medium">Your stack is empty.</p>
                      <p className="text-xs text-gray-400 mt-2">Add technologies from the list to build your custom stack.</p>
                    </div>
                  ) : (
                    // Selected Items List
                    <div className="space-y-4">
                      {stack.map((item) => (
                        <div key={item.id} className="flex items-center justify-between bg-gray-50 p-3 rounded-xl border border-gray-100">
                          {/* আইকন এবং নাম */}
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-white p-2 rounded-lg border border-gray-200 flex items-center justify-center">
                              <img src={item.icon} alt={item.name} className="w-full h-full object-contain" />
                            </div>
                            <div>
                              <h4 className="font-bold text-gray-800 text-sm">{item.name}</h4>
                              <p className="text-xs text-gray-500">{item.category}</p>
                            </div>
                          </div>
                          {/* Remove বাটন (✕) */}
                          <button 
                            onClick={() => handleRemoveFromStack(item.id)}
                            className="text-red-500 hover:bg-red-100 w-8 h-8 rounded-full flex items-center justify-center transition-colors font-bold"
                            title="Remove"
                          >
                            ✕
                          </button>
                        </div>
                      ))}

                      {/* Remove All বাটন */}
                      <button 
                        onClick={handleClearStack}
                        className="w-full mt-4 border-2 border-red-500 text-red-500 font-bold py-2 rounded-xl hover:bg-red-50 transition-colors"
                      >
                        Remove All
                      </button>
                    </div>
                  )}

                </div>
              </div>

            </div>
          </div>
          <About />
        </main>
      )}
      <Footer />
    </div>
  );
}

export default App;
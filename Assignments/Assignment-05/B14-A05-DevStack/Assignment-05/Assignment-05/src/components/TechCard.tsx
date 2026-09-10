import type { Technology } from '../App';

type TechCardProps = {
  tech: Technology;
  handleAddToStack: (tech: Technology) => void;
  isAdded: boolean;
};

const TechCard = ({ tech, handleAddToStack, isAdded }: TechCardProps) => {
  return (
    <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow flex flex-col h-full">
      
      <div className="flex justify-between items-center mb-5">
        <img src={tech.icon} alt={tech.name} className="w-10 h-10 object-contain" />
        <span className="bg-blue-50 text-blue-500 text-xs font-semibold px-3 py-1 rounded-full">
          {tech.badge}
        </span>
      </div>

      <h3 className="text-lg font-bold text-[#0f172a] mb-2">{tech.name}</h3>
      <p className="text-sm text-gray-500 mb-6 flex-grow leading-relaxed">{tech.description}</p>

      <div className="flex items-center gap-3 mb-6 border-b border-gray-50 pb-4">
        <span className="bg-gray-50 text-gray-600 text-xs font-medium px-2 py-1 rounded">{tech.category}</span>
        <span className="bg-gray-50 text-gray-600 text-xs font-medium px-2 py-1 rounded">{tech.difficulty}</span>
        <span className="text-gray-800 text-xs font-bold flex items-center ml-auto">
          <span className="text-yellow-400 mr-1">★</span> {tech.rating}
        </span>
      </div>

      <button 
        onClick={() => handleAddToStack(tech)}
        disabled={isAdded}
        className={`w-full font-medium py-3 rounded-lg transition-colors text-sm ${
          isAdded 
            ? 'bg-gray-100 text-gray-400 cursor-not-allowed' 
            : 'bg-[#0f172a] text-white hover:bg-gray-800'
        }`}
      >
        {isAdded ? '✓ Added to Stack' : 'Add to Stack'}
      </button>
      
    </div>
  );
};

export default TechCard;
import type { Technology } from '../App';

type TechCardProps = {
  tech: Technology;
  handleAddToStack: (tech: Technology) => void;
  isAdded: boolean;
};

const TechCard = ({
  tech,
  handleAddToStack,
  isAdded,
}: TechCardProps) => {
  return (
    <div className="flex h-full flex-col rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">

      <div className="mb-5 flex items-center justify-between">
        <img
          src={tech.icon}
          alt={tech.name}
          className="h-10 w-10 object-contain"
        />

        <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-500">
          {tech.badge}
        </span>
      </div>

      <h3 className="mb-2 text-lg font-bold text-[#0f172a]">
        {tech.name}
      </h3>

      <p className="mb-6 flex-grow text-sm leading-relaxed text-gray-500">
        {tech.description}
      </p>

      <div className="mb-6 flex items-center gap-3 border-b border-gray-50 pb-4">
        <span className="rounded bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600">
          {tech.category}
        </span>

        <span className="rounded bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600">
          {tech.difficulty}
        </span>

        <span className="ml-auto flex items-center text-xs font-bold text-gray-800">
          <span className="mr-1 text-yellow-400">★</span>
          {tech.rating}
        </span>
      </div>

      <button
        onClick={() => handleAddToStack(tech)}
        disabled={isAdded}
        className={`w-full rounded-lg py-3 text-sm font-medium transition-all ${
          isAdded
            ? 'cursor-not-allowed bg-gray-100 text-gray-400'
            : 'bg-black text-white hover:bg-gray-800 hover:shadow-lg'
        }`}
      >
        {isAdded ? '✓ Added to Stack' : 'Add to Stack'}
      </button>
    </div>
  );
};

export default TechCard;
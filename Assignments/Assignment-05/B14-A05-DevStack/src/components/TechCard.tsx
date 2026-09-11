import type { Technology } from '../App';

type TechCardProps = {
  tech: Technology;
  handleAddToStack: (tech: Technology) => void;
  isAdded: boolean;
};

const getBadgeClasses = (badge?: string) => {
  switch (badge) {
    case 'Popular':
    case 'Top SQL':
    case 'Essential':
    case 'Robust':
    case 'Containers':
      return 'bg-blue-50 text-blue-500';
    case 'Versatile':
    case 'Standard':
      return 'bg-emerald-50 text-emerald-600';
    case 'Fast':
      return 'bg-orange-50 text-orange-500';
    case 'Cache':
      return 'bg-rose-50 text-rose-500';
    case 'Ubiquitous':
      return 'bg-amber-50 text-amber-600';
    case 'Modern':
      return 'bg-cyan-50 text-cyan-600';
    default:
      return 'bg-blue-50 text-blue-500';
  }
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
          onError={(e) => {
            (e.target as HTMLImageElement).src = `/icons/${tech.id}.svg`;
          }}
        />

        {tech.badge ? (
          <span
            className={`rounded-full px-3 py-1 text-xs font-semibold ${getBadgeClasses(
              tech.badge
            )}`}
          >
            {tech.badge}
          </span>
        ) : (
          <span />
        )}
      </div>

      <h3 className="mb-2 text-lg font-bold text-[#0f172a]">
        {tech.name}
      </h3>

      <p className="mb-6 flex-grow text-sm leading-relaxed text-gray-500">
        {tech.description}
      </p>

      <div className="mb-6 flex items-center gap-3 pt-1">
        <span className="rounded-lg bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-600">
          {tech.category}
        </span>

        <span className="text-xs font-medium text-slate-500">
          {tech.difficulty}
        </span>

        <span className="ml-auto flex items-center text-xs font-bold text-slate-700">
          <span className="mr-1 text-amber-400">★</span>
          {tech.rating}
        </span>
      </div>

      <button
        onClick={() => handleAddToStack(tech)}
        aria-disabled={isAdded}
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
interface PlatformCardProps {
  name: string;
  description: string;
  path: string;
  color: 'purple' | 'orange' | 'gold';
  status: 'Live' | 'Coming Soon' | 'In Development';
  external?: boolean;
}

const colorClasses = {
  purple: 'from-purple-900 to-purple-700 hover:from-purple-800 hover:to-purple-600 border-purple-500',
  orange: 'from-orange-900 to-orange-700 hover:from-orange-800 hover:to-orange-600 border-orange-500',
  gold: 'from-yellow-900 to-yellow-700 hover:from-yellow-800 hover:to-yellow-600 border-yellow-500',
};

const statusClasses = {
  'Live': 'bg-green-500 text-white',
  'Coming Soon': 'bg-blue-500 text-white',
  'In Development': 'bg-purple-500 text-white',
};

export default function PlatformCard({
  name,
  description,
  path,
  color,
  status,
  external = false,
}: PlatformCardProps) {
  const isClickable = status === 'Live' || external;
  const Component = isClickable ? 'a' : 'div';
  const props = isClickable
    ? {
        href: path,
        target: external ? '_blank' : undefined,
        rel: external ? 'noopener noreferrer' : undefined,
      }
    : {};

  return (
    <Component
      {...props}
      className={`
        relative overflow-hidden rounded-lg border-2 p-6
        bg-gradient-to-br ${colorClasses[color]}
        transition-all duration-300 shadow-lg
        ${isClickable ? 'cursor-pointer hover:scale-105 hover:shadow-2xl' : 'cursor-default opacity-75'}
      `}
    >
      {/* Status Badge */}
      <div className="absolute top-4 right-4">
        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${statusClasses[status]}`}>
          {status}
        </span>
      </div>

      {/* Content */}
      <div className="mt-8">
        <h3 className="text-2xl font-bold mb-3 text-white">{name}</h3>
        <p className="text-slate-200 text-sm">{description}</p>
      </div>

      {/* Arrow Icon for clickable cards */}
      {isClickable && (
        <div className="absolute bottom-4 right-4 text-white opacity-50 group-hover:opacity-100 transition-opacity">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            />
          </svg>
        </div>
      )}
    </Component>
  );
}

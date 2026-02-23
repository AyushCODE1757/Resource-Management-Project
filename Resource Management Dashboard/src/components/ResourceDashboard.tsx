import { Resource } from '../data/mockData';
import { ResourceCard } from './ResourceCard';
import { ResourceStats } from './ResourceStats';

interface ResourceDashboardProps {
  resources: Resource[];
}

export function ResourceDashboard({ resources }: ResourceDashboardProps) {
  return (
    <div className="space-y-6">
      {/* Stats */}
      <ResourceStats resources={resources} />

      {/* Resource Grid */}
      {resources.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {resources.map(resource => (
            <ResourceCard key={resource.id} resource={resource} />
          ))}
        </div>
      ) : (
        <div className="bg-white/40 backdrop-blur-lg rounded-2xl p-12 border border-white/60 shadow-xl text-center">
          <p className="text-gray-600 text-lg">No resources found matching your filters.</p>
        </div>
      )}
    </div>
  );
}

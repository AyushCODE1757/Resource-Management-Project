import { Search } from 'lucide-react';

interface ResourceFiltersProps {
  selectedType: string;
  selectedStatus: string;
  searchQuery: string;
  onTypeChange: (type: string) => void;
  onStatusChange: (status: string) => void;
  onSearchChange: (query: string) => void;
}

const resourceTypes = [
  { value: 'all', label: 'All Resources' },
  { value: 'printer', label: 'Printers' },
  { value: 'computer', label: 'Computers' },
  { value: 'projector', label: 'Projectors' },
  { value: 'ac', label: 'ACs' },
  { value: 'fan', label: 'Fans' },
  { value: 'cctv', label: 'CCTVs' },
  { value: 'blackboard', label: 'Blackboards' },
  { value: 'chair', label: 'Chairs' }
];

export function ResourceFilters({
  selectedType,
  selectedStatus,
  searchQuery,
  onTypeChange,
  onStatusChange,
  onSearchChange
}: ResourceFiltersProps) {
  return (
    <div className="mb-6 bg-white/40 backdrop-blur-lg rounded-2xl p-6 border border-white/60 shadow-xl">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Search */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search resources..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full pl-10 pr-4 py-3 bg-white/60 backdrop-blur-sm border border-white/80 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-400 placeholder:text-gray-500"
          />
        </div>

        {/* Type Filter */}
        <select
          value={selectedType}
          onChange={(e) => onTypeChange(e.target.value)}
          className="px-4 py-3 bg-white/60 backdrop-blur-sm border border-white/80 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-400 cursor-pointer"
        >
          {resourceTypes.map(type => (
            <option key={type.value} value={type.value}>
              {type.label}
            </option>
          ))}
        </select>

        {/* Status Filter */}
        <select
          value={selectedStatus}
          onChange={(e) => onStatusChange(e.target.value)}
          className="px-4 py-3 bg-white/60 backdrop-blur-sm border border-white/80 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-400 cursor-pointer"
        >
          <option value="all">All Status</option>
          <option value="working">Working</option>
          <option value="non-working">Non-Working</option>
        </select>
      </div>
    </div>
  );
}

import { useState } from 'react';
import { ResourceDashboard } from './components/ResourceDashboard';
import { ResourceFilters } from './components/ResourceFilters';
import { mockResources } from './data/mockData';

export default function App() {
  const [selectedType, setSelectedType] = useState<string>('all');
  const [selectedStatus, setSelectedStatus] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredResources = mockResources.filter(resource => {
    const matchesType = selectedType === 'all' || resource.type === selectedType;
    const matchesStatus = selectedStatus === 'all' || resource.status === selectedStatus;
    const matchesSearch = resource.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         resource.allocatedTo.toLowerCase().includes(searchQuery.toLowerCase());
    
    return matchesType && matchesStatus && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl mb-2 text-gray-800">College Resource Management</h1>
          <p className="text-gray-600">Track and manage all college resources and their allocations</p>
        </div>

        {/* Filters */}
        <ResourceFilters
          selectedType={selectedType}
          selectedStatus={selectedStatus}
          searchQuery={searchQuery}
          onTypeChange={setSelectedType}
          onStatusChange={setSelectedStatus}
          onSearchChange={setSearchQuery}
        />

        {/* Dashboard */}
        <ResourceDashboard resources={filteredResources} />
      </div>
    </div>
  );
}

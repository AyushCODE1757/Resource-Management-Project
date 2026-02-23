import { Resource } from '../data/mockData';
import { CheckCircle2, XCircle, Package, Users } from 'lucide-react';

interface ResourceStatsProps {
  resources: Resource[];
}

export function ResourceStats({ resources }: ResourceStatsProps) {
  const totalResources = resources.length;
  const workingResources = resources.filter(r => r.status === 'working').length;
  const nonWorkingResources = resources.filter(r => r.status === 'non-working').length;
  const facultyAllocated = resources.filter(r => r.allocationType === 'faculty').length;

  const stats = [
    {
      label: 'Total Resources',
      value: totalResources,
      icon: Package,
      gradient: 'from-blue-400 to-blue-600'
    },
    {
      label: 'Working',
      value: workingResources,
      icon: CheckCircle2,
      gradient: 'from-green-400 to-green-600'
    },
    {
      label: 'Non-Working',
      value: nonWorkingResources,
      icon: XCircle,
      gradient: 'from-red-400 to-red-600'
    },
    {
      label: 'Faculty Allocated',
      value: facultyAllocated,
      icon: Users,
      gradient: 'from-purple-400 to-purple-600'
    }
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((stat, index) => (
        <div
          key={index}
          className="bg-white/40 backdrop-blur-lg rounded-2xl p-6 border border-white/60 shadow-xl"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm mb-1">{stat.label}</p>
              <p className="text-3xl text-gray-800">{stat.value}</p>
            </div>
            <div className={`p-3 rounded-xl bg-gradient-to-br ${stat.gradient}`}>
              <stat.icon className="size-6 text-white" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

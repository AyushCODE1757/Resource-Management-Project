import { Resource } from '../data/mockData';
import {
  Printer,
  Monitor,
  Projector,
  Wind,
  Fan,
  Camera,
  SquareChartGantt,
  Armchair,
  MapPin,
  User,
  Calendar,
  Wrench
} from 'lucide-react';

interface ResourceCardProps {
  resource: Resource;
}

const iconMap = {
  printer: Printer,
  computer: Monitor,
  projector: Projector,
  ac: Wind,
  fan: Fan,
  cctv: Camera,
  blackboard: SquareChartGantt,
  chair: Armchair
};

export function ResourceCard({ resource }: ResourceCardProps) {
  const Icon = iconMap[resource.type];
  const isWorking = resource.status === 'working';

  return (
    <div className="bg-white/40 backdrop-blur-lg rounded-2xl p-6 border border-white/60 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className={`p-3 rounded-xl ${isWorking ? 'bg-gradient-to-br from-green-400 to-green-600' : 'bg-gradient-to-br from-red-400 to-red-600'}`}>
            <Icon className="size-6 text-white" />
          </div>
          <div>
            <h3 className="text-gray-800 mb-1">{resource.name}</h3>
            <span className="text-xs text-gray-500 uppercase tracking-wide">{resource.type}</span>
          </div>
        </div>
        <div className={`px-3 py-1 rounded-full text-xs ${isWorking ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
          {isWorking ? 'Working' : 'Non-Working'}
        </div>
      </div>

      {/* Details */}
      <div className="space-y-3 pt-4 border-t border-white/60">
        <div className="flex items-center gap-2 text-sm text-gray-700">
          {resource.allocationType === 'faculty' ? (
            <User className="size-4 text-purple-500" />
          ) : (
            <MapPin className="size-4 text-blue-500" />
          )}
          <span className="text-gray-600">Allocated to:</span>
          <span className="ml-auto">{resource.allocatedTo}</span>
        </div>

        <div className="flex items-center gap-2 text-sm text-gray-700">
          <Calendar className="size-4 text-orange-500" />
          <span className="text-gray-600">Purchased:</span>
          <span className="ml-auto">{new Date(resource.purchaseDate).toLocaleDateString()}</span>
        </div>

        {resource.lastMaintenance && (
          <div className="flex items-center gap-2 text-sm text-gray-700">
            <Wrench className="size-4 text-teal-500" />
            <span className="text-gray-600">Last Service:</span>
            <span className="ml-auto">{new Date(resource.lastMaintenance).toLocaleDateString()}</span>
          </div>
        )}
      </div>
    </div>
  );
}

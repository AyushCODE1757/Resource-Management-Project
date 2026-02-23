export interface Resource {
  id: string;
  name: string;
  type: 'printer' | 'chair' | 'ac' | 'fan' | 'cctv' | 'blackboard' | 'projector' | 'computer';
  allocatedTo: string;
  allocationType: 'faculty' | 'classroom';
  status: 'working' | 'non-working';
  lastMaintenance?: string;
  purchaseDate: string;
}

export const mockResources: Resource[] = [
  {
    id: '1',
    name: 'HP LaserJet Pro',
    type: 'printer',
    allocatedTo: 'Dr. Sarah Johnson',
    allocationType: 'faculty',
    status: 'working',
    lastMaintenance: '2025-01-15',
    purchaseDate: '2023-03-10'
  },
  {
    id: '2',
    name: 'Epson EcoTank',
    type: 'printer',
    allocatedTo: 'Room 201',
    allocationType: 'classroom',
    status: 'non-working',
    lastMaintenance: '2024-11-20',
    purchaseDate: '2022-08-15'
  },
  {
    id: '3',
    name: 'Dell Desktop i7',
    type: 'computer',
    allocatedTo: 'Prof. Michael Chen',
    allocationType: 'faculty',
    status: 'working',
    lastMaintenance: '2025-01-10',
    purchaseDate: '2024-01-05'
  },
  {
    id: '4',
    name: 'BenQ Projector 4K',
    type: 'projector',
    allocatedTo: 'Room 305',
    allocationType: 'classroom',
    status: 'working',
    lastMaintenance: '2024-12-28',
    purchaseDate: '2023-09-20'
  },
  {
    id: '5',
    name: 'LG Split AC 2 Ton',
    type: 'ac',
    allocatedTo: 'Room 101',
    allocationType: 'classroom',
    status: 'working',
    lastMaintenance: '2024-10-15',
    purchaseDate: '2021-05-12'
  },
  {
    id: '6',
    name: 'Crompton Ceiling Fan',
    type: 'fan',
    allocatedTo: 'Room 204',
    allocationType: 'classroom',
    status: 'working',
    lastMaintenance: '2024-08-05',
    purchaseDate: '2020-07-18'
  },
  {
    id: '7',
    name: 'Hikvision CCTV',
    type: 'cctv',
    allocatedTo: 'Room 301',
    allocationType: 'classroom',
    status: 'working',
    lastMaintenance: '2025-01-20',
    purchaseDate: '2023-02-14'
  },
  {
    id: '8',
    name: 'Green Board 6x4',
    type: 'blackboard',
    allocatedTo: 'Room 102',
    allocationType: 'classroom',
    status: 'working',
    purchaseDate: '2019-06-10'
  },
  {
    id: '9',
    name: 'Ergonomic Office Chair',
    type: 'chair',
    allocatedTo: 'Dr. Emily Roberts',
    allocationType: 'faculty',
    status: 'working',
    purchaseDate: '2023-11-25'
  },
  {
    id: '10',
    name: 'Student Chair Set',
    type: 'chair',
    allocatedTo: 'Room 203',
    allocationType: 'classroom',
    status: 'non-working',
    purchaseDate: '2021-01-08'
  },
  {
    id: '11',
    name: 'HP Desktop',
    type: 'computer',
    allocatedTo: 'Room 405',
    allocationType: 'classroom',
    status: 'working',
    lastMaintenance: '2024-12-15',
    purchaseDate: '2023-07-22'
  },
  {
    id: '12',
    name: 'Usha Ceiling Fan',
    type: 'fan',
    allocatedTo: 'Prof. David Lee',
    allocationType: 'faculty',
    status: 'non-working',
    lastMaintenance: '2024-09-10',
    purchaseDate: '2020-03-30'
  },
  {
    id: '13',
    name: 'Sony Projector HD',
    type: 'projector',
    allocatedTo: 'Room 501',
    allocationType: 'classroom',
    status: 'working',
    lastMaintenance: '2025-01-05',
    purchaseDate: '2022-11-12'
  },
  {
    id: '14',
    name: 'Daikin AC 1.5 Ton',
    type: 'ac',
    allocatedTo: 'Dr. Sarah Johnson',
    allocationType: 'faculty',
    status: 'working',
    lastMaintenance: '2024-11-30',
    purchaseDate: '2022-04-18'
  },
  {
    id: '15',
    name: 'CP Plus CCTV',
    type: 'cctv',
    allocatedTo: 'Room 205',
    allocationType: 'classroom',
    status: 'working',
    lastMaintenance: '2024-12-20',
    purchaseDate: '2023-05-08'
  }
];

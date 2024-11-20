import React from 'react';
import { Truck, MapPin, Calendar, Package } from 'lucide-react';

const ShipmentTracker = () => {
  const shipments = [
    {
      id: 'SH-2024-001',
      destination: 'New York, NY',
      status: 'In Transit',
      eta: '2024-03-25',
      items: 45,
      progress: 65,
    },
    {
      id: 'SH-2024-002',
      destination: 'Los Angeles, CA',
      status: 'Departed',
      eta: '2024-03-24',
      items: 32,
      progress: 25,
    },
  ];

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
      <h2 className="text-xl font-semibold bg-gradient-to-r from-indigo-600 to-sky-600 bg-clip-text text-transparent mb-4">
        Active Shipments
      </h2>
      <div className="space-y-4">
        {shipments.map((shipment) => (
          <div key={shipment.id} className="border border-gray-100 rounded-lg p-4 hover:shadow-md transition-shadow">
            <div className="flex justify-between items-start mb-4">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Truck className="w-5 h-5 text-indigo-500" />
                  <span className="font-semibold text-gray-700">{shipment.id}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <MapPin className="w-4 h-4" />
                  <span>{shipment.destination}</span>
                </div>
              </div>
              <span className={`px-3 py-1 rounded-full text-sm font-medium
                ${shipment.status === 'In Transit' ? 'bg-blue-100 text-blue-800' : 'bg-purple-100 text-purple-800'}`}>
                {shipment.status}
              </span>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-gray-400" />
                  <span>ETA: {shipment.eta}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Package className="w-4 h-4 text-gray-400" />
                  <span>{shipment.items} items</span>
                </div>
              </div>
              <div className="w-full bg-gray-100 rounded-full h-2">
                <div
                  className="bg-gradient-to-r from-indigo-500 to-sky-500 h-2 rounded-full transition-all duration-500"
                  style={{ width: `${shipment.progress}%` }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShipmentTracker;
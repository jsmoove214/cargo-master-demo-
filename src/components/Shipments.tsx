import React from 'react';
import { Truck, Package, MapPin, Calendar, Clock } from 'lucide-react';

const Shipments = () => {
  const shipments = [
    {
      id: 'SH-2024-001',
      customer: 'Acme Corp',
      destination: 'New York, NY',
      items: 45,
      status: 'In Transit',
      eta: '2024-03-25',
      progress: 65,
    },
    {
      id: 'SH-2024-002',
      customer: 'Global Tech',
      destination: 'Los Angeles, CA',
      items: 32,
      status: 'Departed',
      eta: '2024-03-24',
      progress: 25,
    },
    {
      id: 'SH-2024-003',
      customer: 'Tech Solutions',
      destination: 'Chicago, IL',
      items: 28,
      status: 'Preparing',
      eta: '2024-03-26',
      progress: 10,
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-sky-600 bg-clip-text text-transparent">
          Shipment Tracking
        </h2>
        <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors">
          Create Shipment
        </button>
      </div>

      <div className="grid gap-6">
        {shipments.map((shipment) => (
          <div key={shipment.id} className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex flex-col lg:flex-row justify-between gap-6">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Truck className="w-6 h-6 text-indigo-600" />
                  <div>
                    <h3 className="text-xl font-semibold">{shipment.id}</h3>
                    <p className="text-gray-500">{shipment.customer}</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-gray-400" />
                    <span>{shipment.destination}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Package className="w-4 h-4 text-gray-400" />
                    <span>{shipment.items} items</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-gray-400" />
                    <span>ETA: {shipment.eta}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-gray-400" />
                    <span>{shipment.status}</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col justify-center">
                <div className="w-full bg-gray-100 rounded-full h-2 mb-2">
                  <div
                    className="bg-gradient-to-r from-indigo-500 to-sky-500 h-2 rounded-full transition-all duration-500"
                    style={{ width: `${shipment.progress}%` }}
                  />
                </div>
                <span className="text-sm text-gray-500 text-center">{shipment.progress}% Complete</span>
              </div>
            </div>

            <div className="mt-6 flex gap-3">
              <button className="text-sm bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors">
                Track Details
              </button>
              <button className="text-sm border border-gray-300 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors">
                Update Status
              </button>
              <button className="text-sm border border-gray-300 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors">
                View Documents
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shipments;
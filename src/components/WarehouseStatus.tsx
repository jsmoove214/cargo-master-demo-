import React from 'react';
import { BarChart3, ArrowUp, ArrowDown } from 'lucide-react';

const WarehouseStatus = () => {
  const warehouses = [
    {
      name: 'Warehouse A',
      capacity: 85,
      items: '12,500',
      trend: '+2.4%',
      temperature: '18°C',
      humidity: '45%',
    },
    {
      name: 'Warehouse B',
      capacity: 62,
      items: '8,900',
      trend: '-1.2%',
      temperature: '19°C',
      humidity: '42%',
    },
    {
      name: 'Warehouse C',
      capacity: 45,
      items: '5,600',
      trend: '+0.8%',
      temperature: '17°C',
      humidity: '40%',
    },
  ];

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold bg-gradient-to-r from-indigo-600 to-sky-600 bg-clip-text text-transparent">
          Warehouse Status
        </h2>
        <button className="text-sm text-indigo-600 hover:text-indigo-800 flex items-center gap-1">
          <BarChart3 className="w-4 h-4" />
          View Reports
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {warehouses.map((warehouse) => (
          <div key={warehouse.name} className="border border-gray-100 rounded-lg p-4 hover:shadow-md transition-shadow">
            <div className="flex justify-between items-start mb-3">
              <h3 className="font-semibold text-gray-700">{warehouse.name}</h3>
              <div className="flex items-center min-w-[70px] justify-end">
                <span className={`flex items-center text-sm font-medium
                  ${warehouse.trend.startsWith('+') ? 'text-emerald-600' : 'text-red-600'}`}>
                  {warehouse.trend.startsWith('+') ? (
                    <ArrowUp className="w-4 h-4 mr-1 flex-shrink-0" />
                  ) : (
                    <ArrowDown className="w-4 h-4 mr-1 flex-shrink-0" />
                  )}
                  {warehouse.trend}
                </span>
              </div>
            </div>
            <div className="space-y-3">
              <div>
                <div className="flex justify-between text-sm text-gray-500 mb-1">
                  <span>Capacity Usage</span>
                  <span className="font-medium ml-2">{warehouse.capacity}%</span>
                </div>
                <div className="w-full bg-gray-100 rounded-full h-2">
                  <div
                    className={`h-2 rounded-full transition-all duration-500 ${
                      warehouse.capacity > 80 ? 'bg-red-500' :
                      warehouse.capacity > 60 ? 'bg-amber-500' :
                      'bg-emerald-500'
                    }`}
                    style={{ width: `${warehouse.capacity}%` }}
                  />
                </div>
              </div>
              <div className="grid grid-cols-3 gap-2 text-sm">
                <div className="bg-gray-50 rounded-lg p-2">
                  <span className="text-gray-500 block text-xs">Items</span>
                  <span className="font-semibold text-sm truncate">{warehouse.items}</span>
                </div>
                <div className="bg-gray-50 rounded-lg p-2">
                  <span className="text-gray-500 block text-xs">Temp</span>
                  <span className="font-semibold text-sm">{warehouse.temperature}</span>
                </div>
                <div className="bg-gray-50 rounded-lg p-2">
                  <span className="text-gray-500 block text-xs">Humidity</span>
                  <span className="font-semibold text-sm">{warehouse.humidity}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WarehouseStatus;
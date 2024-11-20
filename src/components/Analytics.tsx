import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts';
import { TrendingUp, Package, DollarSign, AlertTriangle } from 'lucide-react';

const Analytics = () => {
  const inventoryData = [
    { month: 'Jan', stock: 4000, demand: 2400, reorder: 2800 },
    { month: 'Feb', stock: 3000, demand: 2210, reorder: 2500 },
    { month: 'Mar', stock: 2000, demand: 2290, reorder: 2100 },
    { month: 'Apr', stock: 2780, demand: 2000, reorder: 2300 },
    { month: 'May', stock: 1890, demand: 2181, reorder: 2000 },
    { month: 'Jun', stock: 2390, demand: 2500, reorder: 2400 },
  ];

  const supplierPerformance = [
    { name: 'On-Time', value: 85 },
    { name: 'Late', value: 12 },
    { name: 'Failed', value: 3 },
  ];

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-lg">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 bg-indigo-100 rounded-lg">
              <TrendingUp className="w-6 h-6 text-indigo-600" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Inventory Turnover</p>
              <p className="text-2xl font-bold">4.5x</p>
            </div>
          </div>
          <div className="text-sm text-emerald-600 flex items-center gap-1">
            <span>↑ 12.5%</span>
            <span className="text-gray-500">vs last month</span>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-lg">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 bg-emerald-100 rounded-lg">
              <Package className="w-6 h-6 text-emerald-600" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Stock Accuracy</p>
              <p className="text-2xl font-bold">98.2%</p>
            </div>
          </div>
          <div className="text-sm text-emerald-600 flex items-center gap-1">
            <span>↑ 2.1%</span>
            <span className="text-gray-500">vs last month</span>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-lg">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 bg-amber-100 rounded-lg">
              <AlertTriangle className="w-6 h-6 text-amber-600" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Stockouts</p>
              <p className="text-2xl font-bold">0.8%</p>
            </div>
          </div>
          <div className="text-sm text-emerald-600 flex items-center gap-1">
            <span>↓ 0.3%</span>
            <span className="text-gray-500">vs last month</span>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-lg">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 bg-sky-100 rounded-lg">
              <DollarSign className="w-6 h-6 text-sky-600" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Inventory Value</p>
              <p className="text-2xl font-bold">$1.2M</p>
            </div>
          </div>
          <div className="text-sm text-emerald-600 flex items-center gap-1">
            <span>↑ 8.2%</span>
            <span className="text-gray-500">vs last month</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-lg">
          <h3 className="text-lg font-semibold mb-4">Inventory Trends</h3>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={inventoryData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Area type="monotone" dataKey="stock" stackId="1" stroke="#4f46e5" fill="#4f46e5" fillOpacity={0.2} />
                <Area type="monotone" dataKey="demand" stackId="2" stroke="#0ea5e9" fill="#0ea5e9" fillOpacity={0.2} />
                <Area type="monotone" dataKey="reorder" stackId="3" stroke="#10b981" fill="#10b981" fillOpacity={0.2} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-lg">
          <h3 className="text-lg font-semibold mb-4">Supplier Performance</h3>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={supplierPerformance}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="value" fill="#4f46e5" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
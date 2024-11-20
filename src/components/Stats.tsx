import React from 'react';
import { Package, AlertTriangle, TrendingUp, Clock } from 'lucide-react';

const Stats = () => {
  const stats = [
    {
      title: 'Total Items',
      value: '24,521',
      icon: Package,
      trend: '+12%',
      color: 'bg-indigo-500',
      gradient: 'from-indigo-500 to-blue-500',
    },
    {
      title: 'Low Stock Items',
      value: '45',
      icon: AlertTriangle,
      trend: '-5%',
      color: 'bg-amber-500',
      gradient: 'from-amber-500 to-orange-500',
    },
    {
      title: 'Incoming Shipments',
      value: '128',
      icon: TrendingUp,
      trend: '+25%',
      color: 'bg-emerald-500',
      gradient: 'from-emerald-500 to-teal-500',
    },
    {
      title: 'Pending Orders',
      value: '89',
      icon: Clock,
      trend: '+8%',
      color: 'bg-fuchsia-500',
      gradient: 'from-fuchsia-500 to-purple-500',
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
      {stats.map((stat) => (
        <div key={stat.title} className="bg-white rounded-xl shadow-lg p-6 hover:scale-105 transition-transform duration-300">
          <div className="flex items-center justify-between mb-4">
            <div className={`p-3 rounded-xl bg-gradient-to-br ${stat.gradient}`}>
              <stat.icon className="w-6 h-6 text-white" />
            </div>
            <span className={`text-sm font-semibold ${
              stat.trend.startsWith('+') ? 'text-emerald-500' : 'text-red-500'
            }`}>
              {stat.trend}
            </span>
          </div>
          <h3 className="text-gray-500 text-sm mb-1">{stat.title}</h3>
          <p className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
            {stat.value}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Stats;
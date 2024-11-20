import React, { useState, useEffect } from 'react';
import Stats from './Stats';
import QuickActions from './QuickActions';
import ShipmentTracker from './ShipmentTracker';
import WarehouseStatus from './WarehouseStatus';
import InventoryTable from './InventoryTable';
import { AlertCircle } from 'lucide-react';
import useStore from '../store/useStore';

const Dashboard = () => {
  const { orders, addOrder } = useStore();
  const [notifications, setNotifications] = useState([]);

  const handleOrderCreate = (newOrder) => {
    // Add new order to the store
    addOrder(newOrder);

    // Add notification
    const notification = {
      id: Date.now(),
      type: 'success',
      message: `New order ${newOrder.id} created for ${newOrder.customer} at ${newOrder.location}`,
    };
    setNotifications([notification, ...notifications]);

    // Auto-dismiss notification after 5 seconds
    setTimeout(() => {
      setNotifications(current => current.filter(n => n.id !== notification.id));
    }, 5000);
  };

  return (
    <>
      <div className="mb-8">
        <h1 className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-sky-600 bg-clip-text text-transparent mb-2">
          Dashboard
        </h1>
        <p className="text-gray-500">Welcome back! Here's what's happening with your inventory.</p>
      </div>

      {/* Notifications */}
      <div className="fixed top-4 right-4 z-50 space-y-2 max-w-md">
        {notifications.map((notification) => (
          <div
            key={notification.id}
            className={`flex items-center gap-2 p-4 rounded-lg shadow-lg bg-white border-l-4 ${
              notification.type === 'success' ? 'border-green-500' : 'border-yellow-500'
            } animate-fade-in`}
          >
            <AlertCircle className={`w-5 h-5 flex-shrink-0 ${
              notification.type === 'success' ? 'text-green-500' : 'text-yellow-500'
            }`} />
            <p className="text-sm text-gray-700">{notification.message}</p>
          </div>
        ))}
      </div>

      <QuickActions onOrderCreate={handleOrderCreate} />
      <Stats />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ShipmentTracker />
        <WarehouseStatus />
      </div>
      <InventoryTable orders={orders} />
    </>
  );
};

export default Dashboard;
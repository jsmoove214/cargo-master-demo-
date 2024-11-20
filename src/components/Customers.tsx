import React from 'react';
import { Users, Phone, Mail, MapPin, Package, CreditCard, History } from 'lucide-react';

const Customers = () => {
  const customers = [
    {
      id: 1,
      name: 'Acme Corporation',
      contact: 'John Smith',
      email: 'john@acmecorp.com',
      phone: '+1 (555) 123-4567',
      address: '123 Business Ave, New York, NY',
      totalOrders: 156,
      lastOrder: '2024-03-15',
      status: 'Active',
    },
    {
      id: 2,
      name: 'Global Tech Solutions',
      contact: 'Emma Wilson',
      email: 'emma@globaltech.com',
      phone: '+1 (555) 987-6543',
      address: '456 Tech Park, San Francisco, CA',
      totalOrders: 89,
      lastOrder: '2024-03-18',
      status: 'Active',
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-sky-600 bg-clip-text text-transparent">
          Customer Management
        </h2>
        <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors">
          Add Customer
        </button>
      </div>

      <div className="grid gap-6">
        {customers.map((customer) => (
          <div key={customer.id} className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Users className="w-6 h-6 text-indigo-600" />
                  <div>
                    <h3 className="text-xl font-semibold">{customer.name}</h3>
                    <p className="text-gray-500">{customer.contact}</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-gray-400" />
                    <span>{customer.phone}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-gray-400" />
                    <span>{customer.email}</span>
                  </div>
                  <div className="flex items-center gap-2 md:col-span-2">
                    <MapPin className="w-4 h-4 text-gray-400" />
                    <span>{customer.address}</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-4 lg:gap-6">
                <div className="flex items-center gap-2 bg-indigo-50 px-4 py-2 rounded-lg">
                  <Package className="w-5 h-5 text-indigo-600" />
                  <div>
                    <p className="text-sm text-gray-500">Total Orders</p>
                    <p className="font-semibold">{customer.totalOrders}</p>
                  </div>
                </div>

                <div className="flex items-center gap-2 bg-emerald-50 px-4 py-2 rounded-lg">
                  <History className="w-5 h-5 text-emerald-600" />
                  <div>
                    <p className="text-sm text-gray-500">Last Order</p>
                    <p className="font-semibold">{customer.lastOrder}</p>
                  </div>
                </div>

                <div className="flex items-center gap-2 bg-sky-50 px-4 py-2 rounded-lg">
                  <CreditCard className="w-5 h-5 text-sky-600" />
                  <div>
                    <p className="text-sm text-gray-500">Status</p>
                    <p className="font-semibold">{customer.status}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 flex gap-3">
              <button className="text-sm bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors">
                View Details
              </button>
              <button className="text-sm border border-gray-300 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors">
                Create Order
              </button>
              <button className="text-sm border border-gray-300 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors">
                Message
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Customers;
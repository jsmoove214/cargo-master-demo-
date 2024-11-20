import React from 'react';
import { Building2, Phone, Mail, MapPin, Package, Clock, AlertTriangle, CheckCircle2 } from 'lucide-react';

const SupplierPortal = () => {
  const suppliers = [
    {
      id: 1,
      name: 'Global Packaging Solutions',
      contact: 'Sarah Johnson',
      phone: '+1 (555) 123-4567',
      email: 'sarah@globalpack.com',
      address: '123 Industry Ave, Chicago, IL',
      status: 'Active',
      performance: 98,
      lastDelivery: '2024-03-15',
      pendingOrders: 3,
    },
    {
      id: 2,
      name: 'Premium Materials Co.',
      contact: 'Michael Chen',
      phone: '+1 (555) 987-6543',
      email: 'mchen@premiumco.com',
      address: '456 Supply Chain Rd, Houston, TX',
      status: 'Active',
      performance: 95,
      lastDelivery: '2024-03-18',
      pendingOrders: 2,
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-sky-600 bg-clip-text text-transparent">
          Supplier Management
        </h2>
        <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors">
          Add New Supplier
        </button>
      </div>

      <div className="grid gap-6">
        {suppliers.map((supplier) => (
          <div key={supplier.id} className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Building2 className="w-6 h-6 text-indigo-600" />
                  <div>
                    <h3 className="text-xl font-semibold">{supplier.name}</h3>
                    <p className="text-gray-500">{supplier.contact}</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-gray-400" />
                    <span>{supplier.phone}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-gray-400" />
                    <span>{supplier.email}</span>
                  </div>
                  <div className="flex items-center gap-2 md:col-span-2">
                    <MapPin className="w-4 h-4 text-gray-400" />
                    <span>{supplier.address}</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-4 lg:gap-6">
                <div className="flex items-center gap-2 bg-indigo-50 px-4 py-2 rounded-lg">
                  <Package className="w-5 h-5 text-indigo-600" />
                  <div>
                    <p className="text-sm text-gray-500">Pending Orders</p>
                    <p className="font-semibold">{supplier.pendingOrders}</p>
                  </div>
                </div>

                <div className="flex items-center gap-2 bg-emerald-50 px-4 py-2 rounded-lg">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                  <div>
                    <p className="text-sm text-gray-500">Performance</p>
                    <p className="font-semibold">{supplier.performance}%</p>
                  </div>
                </div>

                <div className="flex items-center gap-2 bg-amber-50 px-4 py-2 rounded-lg">
                  <Clock className="w-5 h-5 text-amber-600" />
                  <div>
                    <p className="text-sm text-gray-500">Last Delivery</p>
                    <p className="font-semibold">{supplier.lastDelivery}</p>
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

export default SupplierPortal;
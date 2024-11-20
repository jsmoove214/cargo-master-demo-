import React, { useState } from 'react';
import { Plus, FileText, Printer, Download, UploadCloud, RefreshCw, X } from 'lucide-react';

const QuickActions = ({ onOrderCreate }) => {
  const [showNewOrderModal, setShowNewOrderModal] = useState(false);
  const [showReportModal, setShowReportModal] = useState(false);
  const [orderForm, setOrderForm] = useState({
    customerName: '',
    orderType: '',
    items: '',
    location: 'Warehouse A'
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const newOrder = {
      id: `ORD-${Date.now()}`,
      customer: orderForm.customerName,
      type: orderForm.orderType,
      items: orderForm.items.split('\n').filter(Boolean),
      status: 'New',
      location: orderForm.location,
      createdAt: new Date().toISOString(),
    };
    
    onOrderCreate(newOrder);
    setShowNewOrderModal(false);
    setOrderForm({
      customerName: '',
      orderType: '',
      items: '',
      location: 'Warehouse A'
    });
  };

  const handleGenerateReport = () => {
    const reportData = {
      timestamp: new Date().toISOString(),
      reportType: document.getElementById('reportType').value,
      dateRange: document.getElementById('dateRange').value,
      format: document.getElementById('format').value
    };

    // Simulate report generation
    setTimeout(() => {
      alert(`Report generated successfully!\nType: ${reportData.reportType}\nDate Range: ${reportData.dateRange}`);
      setShowReportModal(false);
    }, 1000);
  };

  const handlePrintLabels = () => {
    alert('Preparing labels for printing...');
    // Simulate printing process
    setTimeout(() => {
      alert('Labels sent to printer successfully!');
    }, 1000);
  };

  const handleExportData = () => {
    alert('Preparing data export...');
    // Simulate export process
    setTimeout(() => {
      alert('Data exported successfully! Check your downloads folder.');
    }, 1000);
  };

  const handleBackup = () => {
    alert('Starting system backup...');
    // Simulate backup process
    setTimeout(() => {
      alert('System backup completed successfully!');
    }, 1500);
  };

  const handleSync = () => {
    alert('Syncing system data...');
    // Simulate sync process
    setTimeout(() => {
      alert('System sync completed successfully!');
    }, 1000);
  };

  const actions = [
    { icon: Plus, label: 'New Order', color: 'bg-indigo-500 hover:bg-indigo-600', onClick: () => setShowNewOrderModal(true) },
    { icon: FileText, label: 'Generate Report', color: 'bg-sky-500 hover:bg-sky-600', onClick: () => setShowReportModal(true) },
    { icon: Printer, label: 'Print Labels', color: 'bg-emerald-500 hover:bg-emerald-600', onClick: handlePrintLabels },
    { icon: Download, label: 'Export Data', color: 'bg-amber-500 hover:bg-amber-600', onClick: handleExportData },
    { icon: UploadCloud, label: 'Backup', color: 'bg-purple-500 hover:bg-purple-600', onClick: handleBackup },
    { icon: RefreshCw, label: 'Sync System', color: 'bg-rose-500 hover:bg-rose-600', onClick: handleSync },
  ];

  return (
    <>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mb-6">
        {actions.map((action) => (
          <button
            key={action.label}
            onClick={action.onClick}
            className={`${action.color} text-white p-4 rounded-xl flex flex-col items-center gap-2 transition-all duration-200 hover:scale-105`}
          >
            <action.icon className="w-6 h-6" />
            <span className="text-sm font-medium">{action.label}</span>
          </button>
        ))}
      </div>

      {/* New Order Modal */}
      {showNewOrderModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-6 w-full max-w-lg">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-bold">Create New Order</h3>
              <button 
                onClick={() => setShowNewOrderModal(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Customer Name
                </label>
                <input
                  type="text"
                  value={orderForm.customerName}
                  onChange={(e) => setOrderForm({...orderForm, customerName: e.target.value})}
                  className="w-full border border-gray-200 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="Enter customer name"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Order Type
                </label>
                <select
                  value={orderForm.orderType}
                  onChange={(e) => setOrderForm({...orderForm, orderType: e.target.value})}
                  className="w-full border border-gray-200 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  required
                >
                  <option value="">Select order type...</option>
                  <option value="standard">Standard Delivery</option>
                  <option value="express">Express Delivery</option>
                  <option value="pickup">Local Pickup</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Warehouse Location
                </label>
                <select
                  value={orderForm.location}
                  onChange={(e) => setOrderForm({...orderForm, location: e.target.value})}
                  className="w-full border border-gray-200 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  required
                >
                  <option value="Warehouse A">Warehouse A</option>
                  <option value="Warehouse B">Warehouse B</option>
                  <option value="Warehouse C">Warehouse C</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Items (one per line)
                </label>
                <textarea
                  value={orderForm.items}
                  onChange={(e) => setOrderForm({...orderForm, items: e.target.value})}
                  className="w-full border border-gray-200 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  rows={3}
                  placeholder="Enter order items..."
                  required
                />
              </div>

              <div className="flex justify-end gap-3 mt-6">
                <button
                  type="button"
                  onClick={() => setShowNewOrderModal(false)}
                  className="px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
                >
                  Create Order
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Generate Report Modal */}
      {showReportModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-6 w-full max-w-lg">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-bold">Generate Report</h3>
              <button 
                onClick={() => setShowReportModal(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Report Type
                </label>
                <select
                  id="reportType"
                  className="w-full border border-gray-200 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                >
                  <option value="inventory">Inventory Report</option>
                  <option value="orders">Orders Report</option>
                  <option value="shipping">Shipping Report</option>
                  <option value="analytics">Analytics Report</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Date Range
                </label>
                <select
                  id="dateRange"
                  className="w-full border border-gray-200 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                >
                  <option value="today">Today</option>
                  <option value="week">Last 7 Days</option>
                  <option value="month">Last 30 Days</option>
                  <option value="quarter">Last Quarter</option>
                  <option value="year">Last Year</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Format
                </label>
                <select
                  id="format"
                  className="w-full border border-gray-200 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                >
                  <option value="pdf">PDF</option>
                  <option value="excel">Excel</option>
                  <option value="csv">CSV</option>
                </select>
              </div>

              <div className="flex justify-end gap-3 mt-6">
                <button
                  onClick={() => setShowReportModal(false)}
                  className="px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50"
                >
                  Cancel
                </button>
                <button
                  onClick={handleGenerateReport}
                  className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
                >
                  Generate Report
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default QuickActions;
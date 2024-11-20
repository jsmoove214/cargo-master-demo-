import React, { useState, useEffect } from 'react';
import { QRCodeSVG } from 'qrcode.react';
import { Html5QrcodeScanner } from 'html5-qrcode';
import { QrCode, RotateCcw, Package, Scan } from 'lucide-react';

const MobileScanner = () => {
  const [selectedItem, setSelectedItem] = useState('');
  const [scanResult, setScanResult] = useState('');
  const [showScanner, setShowScanner] = useState(false);
  
  const items = [
    { id: 'INV-001', name: 'Premium Packaging Boxes', location: 'Warehouse A', quantity: 1500 },
    { id: 'INV-002', name: 'Shipping Labels', location: 'Warehouse B', quantity: 5000 },
  ];

  useEffect(() => {
    if (showScanner) {
      const scanner = new Html5QrcodeScanner('reader', {
        qrbox: {
          width: 250,
          height: 250,
        },
        fps: 5,
      });

      scanner.render(success, error);

      function success(result) {
        scanner.clear();
        setScanResult(result);
        setShowScanner(false);
      }

      function error(err) {
        console.warn(err);
      }

      return () => {
        scanner.clear();
      };
    }
  }, [showScanner]);

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-sky-600 bg-clip-text text-transparent">
          Barcode & QR Scanner
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
            <QrCode className="w-5 h-5 text-indigo-600" />
            QR Code Generator
          </h3>
          
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Select Item to Generate QR Code
            </label>
            <select
              value={selectedItem}
              onChange={(e) => setSelectedItem(e.target.value)}
              className="w-full border border-gray-200 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <option value="">Select an item...</option>
              {items.map((item) => (
                <option key={item.id} value={item.id}>
                  {item.name} ({item.id})
                </option>
              ))}
            </select>
          </div>

          {selectedItem && (
            <div className="flex flex-col items-center gap-4 p-6 bg-gray-50 rounded-lg">
              <QRCodeSVG
                value={selectedItem}
                size={200}
                level="H"
                includeMargin
                className="bg-white p-2 rounded-lg"
              />
              <button className="flex items-center gap-2 text-indigo-600 hover:text-indigo-800 transition-colors">
                <RotateCcw className="w-5 h-5" />
                Regenerate Code
              </button>
            </div>
          )}
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6">
          <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
            <Scan className="w-5 h-5 text-indigo-600" />
            Barcode & QR Scanner
          </h3>

          <div className="space-y-4">
            {!showScanner ? (
              <button
                onClick={() => setShowScanner(true)}
                className="w-full py-12 border-2 border-dashed border-gray-300 rounded-lg hover:border-indigo-500 transition-colors group"
              >
                <Package className="w-12 h-12 mx-auto mb-4 text-gray-400 group-hover:text-indigo-500" />
                <p className="text-gray-500 group-hover:text-indigo-600">Click to start scanning</p>
              </button>
            ) : (
              <div id="reader" className="w-full"></div>
            )}

            {scanResult && (
              <div className="mt-4 p-4 bg-white rounded-lg border border-gray-200">
                <p className="text-sm text-gray-500 mb-1">Scan Result:</p>
                <p className="font-mono text-indigo-600">{scanResult}</p>
              </div>
            )}

            <div className="text-sm text-gray-500">
              <p className="font-medium mb-2">Supported Formats:</p>
              <ul className="list-disc list-inside space-y-1">
                <li>QR Code</li>
                <li>Code 128</li>
                <li>EAN-13</li>
                <li>EAN-8</li>
                <li>UPC-A</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileScanner;
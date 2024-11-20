import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import useStore from './store/useStore';
import Login from './components/Login';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import PricingPlans from './components/PricingPlans';
import Analytics from './components/Analytics';
import SupplierPortal from './components/SupplierPortal';
import DocumentManager from './components/DocumentManager';
import MobileScanner from './components/MobileScanner';
import Inventory from './components/Inventory';
import Shipments from './components/Shipments';
import Customers from './components/Customers';
import Settings from './components/Settings';

const PrivateRoute = ({ children }) => {
  const isAuthenticated = useStore((state) => state.isAuthenticated);
  return isAuthenticated ? children : <Navigate to="/login" />;
};

function App() {
  const isAuthenticated = useStore((state) => state.isAuthenticated);

  return (
    <Router>
      <div className="flex min-h-screen bg-gradient-to-br from-gray-50 to-indigo-50/30">
        {isAuthenticated && <Sidebar />}
        <main className={`flex-1 ${isAuthenticated ? 'p-8' : ''} overflow-auto`}>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            } />
            <Route path="/analytics" element={
              <PrivateRoute>
                <Analytics />
              </PrivateRoute>
            } />
            <Route path="/inventory" element={
              <PrivateRoute>
                <Inventory />
              </PrivateRoute>
            } />
            <Route path="/suppliers" element={
              <PrivateRoute>
                <SupplierPortal />
              </PrivateRoute>
            } />
            <Route path="/shipments" element={
              <PrivateRoute>
                <Shipments />
              </PrivateRoute>
            } />
            <Route path="/documents" element={
              <PrivateRoute>
                <DocumentManager />
              </PrivateRoute>
            } />
            <Route path="/mobile" element={
              <PrivateRoute>
                <MobileScanner />
              </PrivateRoute>
            } />
            <Route path="/customers" element={
              <PrivateRoute>
                <Customers />
              </PrivateRoute>
            } />
            <Route path="/pricing" element={
              <PrivateRoute>
                <PricingPlans />
              </PrivateRoute>
            } />
            <Route path="/settings" element={
              <PrivateRoute>
                <Settings />
              </PrivateRoute>
            } />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
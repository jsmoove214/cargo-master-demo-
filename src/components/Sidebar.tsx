import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useStore from '../store/useStore';
import { 
  Home, 
  Package, 
  Truck, 
  Users, 
  Settings, 
  LogOut, 
  Box, 
  CreditCard,
  BarChart2,
  Building2,
  FileText,
  Smartphone
} from 'lucide-react';

const Sidebar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const logout = useStore((state) => state.logout);
  const clearData = useStore((state) => state.clearData);

  const handleLogout = () => {
    clearData();
    logout();
    navigate('/login');
  };

  const menuItems = [
    { icon: Home, label: 'Dashboard', path: '/' },
    { icon: BarChart2, label: 'Analytics', path: '/analytics' },
    { icon: Package, label: 'Inventory', path: '/inventory' },
    { icon: Building2, label: 'Suppliers', path: '/suppliers' },
    { icon: Truck, label: 'Shipments', path: '/shipments' },
    { icon: FileText, label: 'Documents', path: '/documents' },
    { icon: Smartphone, label: 'Mobile', path: '/mobile' },
    { icon: Users, label: 'Customers', path: '/customers' },
    { icon: CreditCard, label: 'Pricing', path: '/pricing' },
    { icon: Settings, label: 'Settings', path: '/settings' },
  ];

  return (
    <div className="bg-gradient-to-b from-indigo-900 via-indigo-800 to-indigo-900 text-white w-64 min-h-screen p-4">
      <div className="flex items-center gap-3 mb-8 bg-white/10 p-4 rounded-xl">
        <Box className="w-8 h-8 text-sky-400" strokeWidth={1.5} />
        <div>
          <h1 className="text-2xl font-bold bg-gradient-to-r from-sky-400 to-indigo-300 text-transparent bg-clip-text">
            CargoMaster
          </h1>
          <span className="text-xs text-indigo-200">Logistics Solutions</span>
        </div>
      </div>
      
      <nav>
        {menuItems.map((item) => (
          <Link
            key={item.label}
            to={item.path}
            className={`flex items-center gap-3 w-full p-3 text-indigo-100 hover:bg-white/10 rounded-lg transition-all duration-200 mb-1 group ${
              location.pathname === item.path ? 'bg-white/10' : ''
            }`}
          >
            <item.icon className={`w-5 h-5 ${
              location.pathname === item.path ? 'text-sky-400' : 'group-hover:text-sky-400'
            } transition-colors`} />
            <span className="group-hover:translate-x-1 transition-transform">
              {item.label}
            </span>
          </Link>
        ))}
      </nav>

      <button 
        onClick={handleLogout}
        className="flex items-center gap-3 w-full p-3 text-red-300 hover:bg-white/10 rounded-lg transition-colors mt-auto absolute bottom-4 group"
      >
        <LogOut className="w-5 h-5 group-hover:text-red-400 transition-colors" />
        <span className="group-hover:translate-x-1 transition-transform">Logout</span>
      </button>
    </div>
  );
};

export default Sidebar;
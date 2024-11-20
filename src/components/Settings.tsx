import React from 'react';
import { User, Bell, Lock, Globe, Palette, Database, Shield, HelpCircle } from 'lucide-react';

const Settings = () => {
  const settingsSections = [
    {
      title: 'Account Settings',
      icon: User,
      settings: [
        { name: 'Profile Information', description: 'Update your account details and profile' },
        { name: 'Email Preferences', description: 'Manage your email notifications and updates' },
        { name: 'Password', description: 'Change your password and security settings' },
      ],
    },
    {
      title: 'Notifications',
      icon: Bell,
      settings: [
        { name: 'Push Notifications', description: 'Configure mobile and desktop notifications' },
        { name: 'Email Alerts', description: 'Set up email alerts for important events' },
      ],
    },
    {
      title: 'Security',
      icon: Lock,
      settings: [
        { name: 'Two-Factor Authentication', description: 'Add an extra layer of security' },
        { name: 'Login History', description: 'View your recent login activity' },
      ],
    },
    {
      title: 'System',
      icon: Globe,
      settings: [
        { name: 'Language', description: 'Choose your preferred language' },
        { name: 'Time Zone', description: 'Set your local time zone' },
        { name: 'Date Format', description: 'Configure date and time format' },
      ],
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-sky-600 bg-clip-text text-transparent">
          Settings
        </h2>
        <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors">
          Save Changes
        </button>
      </div>

      <div className="grid gap-6">
        {settingsSections.map((section) => (
          <div key={section.title} className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center gap-3 mb-6">
              <section.icon className="w-6 h-6 text-indigo-600" />
              <h3 className="text-xl font-semibold">{section.title}</h3>
            </div>

            <div className="space-y-4">
              {section.settings.map((setting) => (
                <div key={setting.name} className="flex items-center justify-between p-4 hover:bg-gray-50 rounded-lg transition-colors">
                  <div>
                    <h4 className="font-medium text-gray-900">{setting.name}</h4>
                    <p className="text-sm text-gray-500">{setting.description}</p>
                  </div>
                  <button className="text-sm text-indigo-600 hover:text-indigo-800 font-medium">
                    Configure
                  </button>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <button className="flex items-center gap-3 p-4 bg-white rounded-xl shadow-lg hover:bg-gray-50 transition-colors">
          <Database className="w-6 h-6 text-indigo-600" />
          <div className="text-left">
            <h4 className="font-medium">Backup Data</h4>
            <p className="text-sm text-gray-500">Export your data</p>
          </div>
        </button>

        <button className="flex items-center gap-3 p-4 bg-white rounded-xl shadow-lg hover:bg-gray-50 transition-colors">
          <Shield className="w-6 h-6 text-indigo-600" />
          <div className="text-left">
            <h4 className="font-medium">Privacy Policy</h4>
            <p className="text-sm text-gray-500">View our policies</p>
          </div>
        </button>

        <button className="flex items-center gap-3 p-4 bg-white rounded-xl shadow-lg hover:bg-gray-50 transition-colors">
          <HelpCircle className="w-6 h-6 text-indigo-600" />
          <div className="text-left">
            <h4 className="font-medium">Help & Support</h4>
            <p className="text-sm text-gray-500">Get assistance</p>
          </div>
        </button>
      </div>
    </div>
  );
};

export default Settings;
import React from 'react';
import MyProfileSidebar from '../components/MyProfileSidebar';

export default function SettingsPage() {
  return (
    <div className="flex min-h-screen bg-gray-50">

      {/* Sidebar */}
      <MyProfileSidebar />

      {/* Main Content */}
      <div className="flex-1 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-8">
          
          {/* Page Header */}
          <div>
            <h1 className="text-2xl font-bold text-gray-900 tracking-tight">Account Settings</h1>
            <p className="text-sm text-gray-500">Manage your security preferences, notification choices, and language options.</p>
          </div>

          {/* Form Container */}
          <div className="space-y-6">
            
            {/* Section 1: General Preferences */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-1">Preferences</h2>
              <p className="text-xs text-gray-500 mb-6">Customize your browsing experience on our platform.</p>
              
              <div className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Language</label>
                  <select className="w-full px-4 py-2.5 rounded-lg border border-gray-300 bg-white focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 outline-none transition">
                    <option>English (US)</option>
                    <option>English (UK)</option>
                    <option>Español</option>
                    <option>Français</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Currency</label>
                  <select className="w-full px-4 py-2.5 rounded-lg border border-gray-300 bg-white focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 outline-none transition">
                    <option>USD ($)</option>
                    <option>EUR (€)</option>
                    <option>GBP (£)</option>
                    <option>INR (₹)</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Section 2: Notification Toggles */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-1">Notifications</h2>
              <p className="text-xs text-gray-500 mb-6">Manage how and when you want to receive alerts.</p>
              
              <div className="space-y-4">
                <div className="flex items-start justify-between p-3 rounded-xl hover:bg-gray-50/75 transition">
                  <div className="flex-1 pr-4">
                    <label className="text-sm font-semibold text-gray-800 block">Order Status Updates</label>
                    <span className="text-xs text-gray-500">Receive emails regarding tracking updates, arrivals, and delay notices.</span>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" defaultChecked className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                  </div>
                </div>

                <div className="flex items-start justify-between p-3 rounded-xl hover:bg-gray-50/75 transition">
                  <div className="flex-1 pr-4">
                    <label className="text-sm font-semibold text-gray-800 block">Promotions & Discounts</label>
                    <span className="text-xs text-gray-500">Get notified about seasonal clearance sales, coupon codes, and exclusive deals.</span>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" defaultChecked className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                  </div>
                </div>

                <div className="flex items-start justify-between p-3 rounded-xl hover:bg-gray-50/75 transition">
                  <div className="flex-1 pr-4">
                    <label className="text-sm font-semibold text-gray-800 block">Weekly Newsletter</label>
                    <span className="text-xs text-gray-500">A weekly digest containing upcoming product drops and trending articles.</span>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                  </div>
                </div>
              </div>
            </div>

            {/* Section 3: Danger Zone */}
            <div className="bg-white rounded-2xl border border-red-100 shadow-sm p-6">
              <h2 className="text-lg font-semibold text-red-600 mb-1">Danger Zone</h2>
              <p className="text-xs text-gray-500 mb-6">Irreversible actions concerning your shop profile data.</p>
              
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between p-4 bg-red-50/50 rounded-xl border border-red-100 space-y-3 sm:space-y-0">
                <div>
                  <h4 className="text-sm font-bold text-gray-900">Delete Account Permanently</h4>
                  <p className="text-xs text-gray-500 mt-0.5">This action will delete all order history and points earned.</p>
                </div>
                <button type="button" className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-xl text-xs font-semibold shadow-sm transition self-start sm:self-center">
                  Delete Account
                </button>
              </div>
            </div>

            {/* General Page Actions */}
            <div className="flex items-center justify-end space-x-4 pt-4">
              <button 
                type="button" 
                className="px-5 py-2.5 rounded-xl border border-gray-300 text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 transition"
              >
                Reset Configuration
              </button>
              <button 
                type="submit" 
                className="px-5 py-2.5 rounded-xl text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 shadow-sm shadow-indigo-600/10 transition"
              >
                Apply Settings
              </button>
            </div>

          </div>

        </div>
      </div>

    </div>
  );
}
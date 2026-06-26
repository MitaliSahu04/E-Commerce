import React from 'react';
import MyProfileSidebar from '../components/MyProfileSidebar';

export default function ChangePasswordPage() {
  return (
    <div className="flex min-h-screen bg-gray-50">

      {/* Sidebar */}
      <MyProfileSidebar />

      {/* Main Content */}
      <div className="flex-1 py-12 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
        <div className="max-w-md w-full bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          
          {/* Header Section */}
          <div className="p-6 sm:p-8 border-b border-gray-100 text-center sm:text-left">
            <h1 className="text-2xl font-bold text-gray-900 tracking-tight">Update Password</h1>
            <p className="text-sm text-gray-500 mt-1">Ensure your account stays secure by choosing a strong, unique password.</p>
          </div>

          {/* Form Details */}
          <form className="p-6 sm:p-8 space-y-6">
            
            {/* Current Password Field */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Current Password</label>
              <input 
                type="password" 
                placeholder="••••••••"
                className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 outline-none transition" 
              />
              <div className="mt-1.5 text-right">
                <span className="text-xs text-indigo-600 hover:underline cursor-pointer font-medium">Forgot your current password?</span>
              </div>
            </div>

            <hr className="border-gray-100" />

            {/* New Password Field */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">New Password</label>
              <input 
                type="password" 
                placeholder="Enter new password"
                className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 outline-none transition" 
              />
            </div>

            {/* Confirm New Password Field */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Confirm New Password</label>
              <input 
                type="password" 
                placeholder="Re-enter new password"
                className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 outline-none transition" 
              />
            </div>

            {/* Password Requirements UI Checklist */}
            <div className="bg-gray-50 rounded-xl p-4 border border-gray-100 space-y-2">
              <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Password Rules:</h4>
              <ul className="text-xs space-y-1.5 text-gray-600">
                <li className="flex items-center text-green-600 font-medium">
                  <svg className="w-4 h-4 mr-1.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                  </svg>
                  At least 8 characters long
                </li>
                <li className="flex items-center text-gray-500">
                  <div className="w-1.5 h-1.5 rounded-full bg-gray-400 mr-2.5 ml-1"></div>
                  Contains at least one number or special symbol
                </li>
                <li className="flex items-center text-gray-500">
                  <div className="w-1.5 h-1.5 rounded-full bg-gray-400 mr-2.5 ml-1"></div>
                  Contains both uppercase and lowercase letters
                </li>
              </ul>
            </div>

            {/* Form Controls */}
            <div className="flex flex-col sm:flex-row-reverse gap-3 pt-2">
              <button 
                type="submit" 
                className="w-full sm:flex-1 px-5 py-2.5 text-center rounded-xl text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 shadow-sm shadow-indigo-600/10 transition"
              >
                Update Password
              </button>
              <button 
                type="button" 
                className="w-full sm:flex-1 px-5 py-2.5 text-center rounded-xl border border-gray-300 text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 transition"
              >
                Cancel
              </button>
            </div>

          </form>
        </div>
      </div>

    </div>
  );
}
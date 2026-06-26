import React from 'react';
import MyProfileSidebar from '../components/MyProfileSidebar';

export default function AddressPage() {
  return (
    <div className="flex min-h-screen bg-gray-50">

      {/* Sidebar */}
      <MyProfileSidebar />

      {/* Main Content */}
      <div className="flex-1 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-8">
          
          {/* Page Header */}
          <div>
            <h1 className="text-2xl font-bold text-gray-900 tracking-tight">Saved Addresses</h1>
            <p className="text-sm text-gray-500">Manage your shipping destinations and billing addresses.</p>
          </div>

          {/* Address Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Address Card 1 (Default) */}
            <div className="bg-white p-6 rounded-2xl border-2 border-indigo-600 shadow-sm relative flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-semibold text-gray-900">Home (Primary)</span>
                  <span className="px-2.5 py-0.5 text-xs font-semibold rounded-full bg-indigo-50 text-indigo-700">
                    Default
                  </span>
                </div>
                <p className="text-base font-medium text-gray-800">Alex Morgan</p>
                <p className="text-sm text-gray-500 mt-1 leading-relaxed">
                  123 E-Commerce Blvd, Suite 400<br />
                  San Francisco, CA 94103<br />
                  United States
                </p>
                <p className="text-sm text-gray-500 mt-3">Phone: +1 (555) 019-2834</p>
              </div>
              
              <div className="flex items-center space-x-4 mt-6 pt-4 border-t border-gray-100 text-sm">
                <button type="button" className="font-medium text-indigo-600 hover:text-indigo-700 transition">Edit</button>
                <button type="button" className="font-medium text-gray-400 cursor-not-allowed" disabled>Remove</button>
              </div>
            </div>

            {/* Address Card 2 */}
            <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm relative flex flex-col justify-between hover:border-gray-300 transition">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-semibold text-gray-900">Office</span>
                </div>
                <p className="text-base font-medium text-gray-800">Alex Morgan</p>
                <p className="text-sm text-gray-500 mt-1 leading-relaxed">
                  555 Tech Park Way, Tower B<br />
                  San Jose, CA 95110<br />
                  United States
                </p>
                <p className="text-sm text-gray-500 mt-3">Phone: +1 (555) 014-9921</p>
              </div>
              
              <div className="flex items-center space-x-4 mt-6 pt-4 border-t border-gray-100 text-sm">
                <button type="button" className="font-medium text-indigo-600 hover:text-indigo-700 transition">Edit</button>
                <button type="button" className="font-medium text-red-600 hover:text-red-700 transition">Remove</button>
                <button type="button" className="font-medium text-gray-500 hover:text-gray-700 ml-auto transition">Set as default</button>
              </div>
            </div>

          </div>

          {/* Add New Address Section */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
            <div className="p-6 border-b border-gray-100">
              <h2 className="text-lg font-semibold text-gray-900">Add New Address</h2>
              <p className="text-xs text-gray-500">Fill out the details below to add a new delivery location.</p>
            </div>
            
            <form className="p-6 space-y-6">
              <div className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-6">
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Address Title (e.g., Home, Office)</label>
                  <input 
                    type="text" 
                    placeholder="e.g., Vacation Home"
                    className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 outline-none transition" 
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Receiver's Full Name</label>
                  <input 
                    type="text" 
                    placeholder="Alex Morgan"
                    className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 outline-none transition" 
                  />
                </div>

                <div className="sm:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Street Address</label>
                  <input 
                    type="text" 
                    placeholder="Street address, P.O. box, company name"
                    className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 outline-none transition mb-3" 
                  />
                  <input 
                    type="text" 
                    placeholder="Apartment, suite, unit, building, floor, etc. (optional)"
                    className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 outline-none transition" 
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">City</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 outline-none transition" 
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">State</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 outline-none transition" 
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">ZIP Code</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 outline-none transition" 
                    />
                  </div>
                </div>

                <div className="sm:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number for Delivery</label>
                  <input 
                    type="tel" 
                    placeholder="+1 (555) 000-0000"
                    className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 outline-none transition" 
                  />
                </div>

              </div>

              <div className="flex items-center mt-4">
                <input 
                  id="default-address" 
                  type="checkbox" 
                  className="h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                />
                <label htmlFor="default-address" className="ml-2 text-sm text-gray-600 select-none">
                  Set as my default shipping address
                </label>
              </div>

              <div className="flex justify-end space-x-4 pt-4 border-t border-gray-100">
                <button 
                  type="button" 
                  className="px-5 py-2.5 rounded-xl border border-gray-300 text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 transition"
                >
                  Clear
                </button>
                <button 
                  type="submit" 
                  className="px-5 py-2.5 rounded-xl text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 shadow-sm shadow-indigo-600/10 transition"
                >
                  Save Address
                </button>
              </div>
            </form>
          </div>

        </div>
      </div>

    </div>
  );
}
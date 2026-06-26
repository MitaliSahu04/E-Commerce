import MyProfileSideBar from '../components/MyProfileSideBar';

function ProfilePage() {
  return (
    <div className="flex min-h-screen bg-gray-50">

      {/* Sidebar */}
      <MyProfileSideBar />

      {/* Main Content */}
      <div className="flex-1 py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-sm overflow-hidden border border-gray-100">

          {/* Header / Cover Banner Accent */}
          <div className="h-32 bg-gradient-to-r from-indigo-500 to-purple-600"></div>

          {/* Profile Header Section */}
          <div className="px-6 pb-6 lg:px-8 relative">
            <div className="flex flex-col sm:flex-row sm:items-end sm:space-x-5 -mt-16 mb-6">
              <div className="relative h-28 w-28 rounded-full border-4 border-white bg-gray-200 overflow-hidden shadow-md mx-auto sm:mx-0">
                <img
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=256&h=256"
                  alt="Profile Avatar"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="mt-4 text-center sm:text-left sm:mt-0 flex-1">
                <h1 className="text-2xl font-bold text-gray-900">Alex Morgan</h1>
                <p className="text-sm text-gray-500">Member since October 2024</p>
              </div>
              <div className="mt-4 sm:mt-0 flex justify-center">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-indigo-50 text-indigo-700 border border-indigo-100">
                  Premium Account
                </span>
              </div>
            </div>
          </div>

          {/* Main Content Form */}
          <div className="border-t border-gray-100 px-6 py-8 lg:px-8">
            <form className="space-y-8">

              {/* Section: Personal Info */}
              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-1">Edit Profile Details</h2>
                <p className="text-sm text-gray-500 mb-6">Update your personal information and contact details.</p>

                <div className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                    <input
                      type="text"
                      defaultValue="Alex"
                      className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 outline-none transition"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                    <input
                      type="text"
                      defaultValue="Morgan"
                      className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 outline-none transition"
                    />
                  </div>

                  <div className="sm:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                    <input
                      type="email"
                      defaultValue="alex.morgan@example.com"
                      className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 outline-none transition"
                    />
                  </div>

                  <div className="sm:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                    <input
                      type="tel"
                      defaultValue="+1 (555) 019-2834"
                      className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 outline-none transition"
                    />
                  </div>
                </div>
              </div>

              <hr className="border-gray-100" />

              {/* Section: Shipping Address */}
              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-1">Shipping Address</h2>
                <p className="text-sm text-gray-500 mb-6">Where your purchases will be delivered.</p>

                <div className="grid grid-cols-1 gap-y-6 sm:grid-cols-3 sm:gap-x-4">
                  <div className="sm:col-span-3">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Street Address</label>
                    <input
                      type="text"
                      defaultValue="123 E-Commerce Blvd, Suite 400"
                      className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 outline-none transition"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">City</label>
                    <input
                      type="text"
                      defaultValue="San Francisco"
                      className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 outline-none transition"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">State / Province</label>
                    <input
                      type="text"
                      defaultValue="CA"
                      className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 outline-none transition"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Postal Code</label>
                    <input
                      type="text"
                      defaultValue="94103"
                      className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 outline-none transition"
                    />
                  </div>
                </div>
              </div>

              <hr className="border-gray-100" />

              {/* Section: Recent Activity */}
              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Recent Activity</h2>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="p-4 rounded-xl border border-gray-200 bg-gray-50/50 flex justify-between items-center">
                    <div>
                      <p className="text-xs font-medium text-gray-400 uppercase tracking-wider">Total Orders</p>
                      <p className="text-2xl font-bold text-gray-800 mt-1">24 Orders</p>
                    </div>
                    <span className="text-xs text-indigo-600 font-semibold cursor-pointer hover:underline">View all</span>
                  </div>
                  <div className="p-4 rounded-xl border border-gray-200 bg-gray-50/50 flex justify-between items-center">
                    <div>
                      <p className="text-xs font-medium text-gray-400 uppercase tracking-wider">Active Cart Items</p>
                      <p className="text-2xl font-bold text-gray-800 mt-1">3 Items</p>
                    </div>
                    <span className="text-xs text-indigo-600 font-semibold cursor-pointer hover:underline">Go to cart</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center justify-end space-x-4 pt-4 border-t border-gray-100">
                <button
                  type="button"
                  className="px-5 py-2.5 rounded-xl border border-gray-300 text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 transition"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2.5 rounded-xl text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 shadow-sm shadow-indigo-600/10 transition"
                >
                  Save Changes
                </button>
              </div>

            </form>
          </div>

        </div>
      </div>

    </div>
  );
}

export default ProfilePage;
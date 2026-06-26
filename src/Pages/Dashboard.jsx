import React from 'react';
import MyProfileSideBar from '../components/MyProfileSideBar';

export default function DashboardPage() {
  return (
    <div className="flex min-h-screen bg-gray-50">

      {/* Sidebar */}
      <MyProfileSideBar />

      {/* Main Content */}
      <div className="flex-1 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-8">
          
          {/* Dashboard Header */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-4 sm:space-y-0">
            <div>
              <h1 className="text-2xl font-bold text-gray-900 tracking-tight">Dashboard</h1>
              <p className="text-sm text-gray-500">Welcome back, Alex. Here's what's happening with your store today.</p>
            </div>
            <div className="flex items-center space-x-3">
              <button className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-xl hover:bg-gray-50 transition shadow-sm">
                Export Report
              </button>
              <button className="px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-xl hover:bg-indigo-700 transition shadow-sm shadow-indigo-600/10">
                Add Product
              </button>
            </div>
          </div>

          {/* Metrics Grid */}
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-gray-500">Total Revenue</span>
                <span className="text-xs font-semibold text-green-600 bg-green-50 px-2 py-1 rounded-md">+12.5%</span>
              </div>
              <p className="text-3xl font-bold text-gray-900 mt-2">$48,259.50</p>
              <p className="text-xs text-gray-400 mt-2">Previous month: $42,890.00</p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-gray-500">Active Orders</span>
                <span className="text-xs font-semibold text-indigo-600 bg-indigo-50 px-2 py-1 rounded-md">Processing</span>
              </div>
              <p className="text-3xl font-bold text-gray-900 mt-2">354</p>
              <p className="text-xs text-gray-400 mt-2">12 items awaiting shipment</p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-gray-500">Conversion Rate</span>
                <span className="text-xs font-semibold text-green-600 bg-green-50 px-2 py-1 rounded-md">+2.1%</span>
              </div>
              <p className="text-3xl font-bold text-gray-900 mt-2">3.24%</p>
              <p className="text-xs text-gray-400 mt-2">Previous month: 3.03%</p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-gray-500">Total Customers</span>
                <span className="text-xs font-semibold text-red-600 bg-red-50 px-2 py-1 rounded-md">-0.4%</span>
              </div>
              <p className="text-3xl font-bold text-gray-900 mt-2">12,482</p>
              <p className="text-xs text-gray-400 mt-2">84 new signups this week</p>
            </div>
          </div>

          {/* Analytics Graph & Top Products Row */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            <div className="lg:col-span-2 bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex flex-col justify-between min-h-[350px]">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h2 className="text-lg font-semibold text-gray-900">Sales Analytics</h2>
                  <p className="text-xs text-gray-500">Gross revenue over time</p>
                </div>
                <select className="text-sm font-medium text-gray-600 bg-gray-50 border border-gray-200 rounded-lg px-3 py-1.5 outline-none focus:ring-2 focus:ring-indigo-500/20">
                  <option>Last 7 Days</option>
                  <option>Last 30 Days</option>
                  <option>Last 12 Months</option>
                </select>
              </div>
              <div className="flex-1 bg-gray-50 rounded-xl border border-dashed border-gray-200 flex items-center justify-center">
                <span className="text-sm text-gray-400">[ Visual Graph Component Placeholder ]</span>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex flex-col min-h-[350px]">
              <h2 className="text-lg font-semibold text-gray-900 mb-1">Top Products</h2>
              <p className="text-xs text-gray-500 mb-5">Most popular items this week</p>
              
              <div className="space-y-4 flex-1 overflow-y-auto">
                {[
                  { name: 'Minimalist Leather Watch', sales: '142 sales', price: '$189.00', img: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=120&h=120' },
                  { name: 'Wireless Noise-Canceling Headphones', sales: '98 sales', price: '$299.00', img: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=120&h=120' },
                  { name: 'Scented Soy Candle Blend', sales: '76 sales', price: '$24.00', img: 'https://images.unsplash.com/photo-1603006905003-be475563bc59?auto=format&fit=crop&q=80&w=120&h=120' },
                ].map((product, idx) => (
                  <div key={idx} className="flex items-center space-x-4">
                    <img src={product.img} alt={product.name} className="w-12 h-12 rounded-lg object-cover bg-gray-100" />
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-900 truncate">{product.name}</p>
                      <p className="text-xs text-gray-500">{product.sales}</p>
                    </div>
                    <div className="text-sm font-semibold text-gray-900">{product.price}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Recent Orders Table Section */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
            <div className="p-6 border-b border-gray-100 flex items-center justify-between">
              <div>
                <h2 className="text-lg font-semibold text-gray-900">Recent Orders</h2>
                <p className="text-xs text-gray-500">Overview of the latest customer purchases</p>
              </div>
              <button className="text-sm font-semibold text-indigo-600 hover:underline">View all orders</button>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-gray-50/75 border-b border-gray-100">
                    <th className="p-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Order ID</th>
                    <th className="p-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Customer</th>
                    <th className="p-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Status</th>
                    <th className="p-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Date</th>
                    <th className="p-4 text-xs font-semibold text-gray-500 uppercase tracking-wider text-right">Total</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  <tr>
                    <td className="p-4 text-sm font-medium text-gray-900">#ORD-9482</td>
                    <td className="p-4 text-sm text-gray-600">Sarah Jenkins</td>
                    <td className="p-4 text-sm"><span className="px-2.5 py-1 text-xs font-medium rounded-full bg-green-50 text-green-700">Delivered</span></td>
                    <td className="p-4 text-sm text-gray-500">June 24, 2026</td>
                    <td className="p-4 text-sm font-semibold text-gray-900 text-right">$214.00</td>
                  </tr>
                  <tr>
                    <td className="p-4 text-sm font-medium text-gray-900">#ORD-9481</td>
                    <td className="p-4 text-sm text-gray-600">Michael Chang</td>
                    <td className="p-4 text-sm"><span className="px-2.5 py-1 text-xs font-medium rounded-full bg-amber-50 text-amber-700">Processing</span></td>
                    <td className="p-4 text-sm text-gray-500">June 24, 2026</td>
                    <td className="p-4 text-sm font-semibold text-gray-900 text-right">$89.50</td>
                  </tr>
                  <tr>
                    <td className="p-4 text-sm font-medium text-gray-900">#ORD-9480</td>
                    <td className="p-4 text-sm text-gray-600">Emma Watson</td>
                    <td className="p-4 text-sm"><span className="px-2.5 py-1 text-xs font-medium rounded-full bg-red-50 text-red-700">Cancelled</span></td>
                    <td className="p-4 text-sm text-gray-500">June 23, 2026</td>
                    <td className="p-4 text-sm font-semibold text-gray-900 text-right">$45.00</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
}
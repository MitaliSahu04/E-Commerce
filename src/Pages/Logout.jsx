function Logout() {
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="bg-white w-[400px] p-8 rounded-2xl shadow-lg text-center">
        <h1 className="text-3xl font-bold mb-4">Logout</h1>

        <p className="text-gray-600 mb-8">
          Are you sure you want to logout?
        </p>

        <div className="flex justify-center gap-4">
          <button className="px-6 py-3 bg-gray-300 rounded-lg hover:bg-gray-400 duration-300">
            Cancel
          </button>

          <button className="px-6 py-3 bg-red-500 text-white rounded-lg hover:bg-red-600 duration-300">
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}

export default Logout;
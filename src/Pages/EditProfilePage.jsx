function EditProfilePage() {
  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center py-10">
      <div className="bg-white w-full max-w-2xl rounded-2xl shadow-lg p-8">
        <h1 className="text-3xl font-bold text-center mb-8">
          Edit Profile
        </h1>

        {/* Profile Image */}
        <div className="flex flex-col items-center mb-8">
          <img
            src="https://via.placeholder.com/120"
            alt="profile"
            className="w-32 h-32 rounded-full object-cover border-4 border-pink-500"
          />

          <button className="mt-4 bg-pink-500 text-white px-4 py-2 rounded-lg hover:bg-pink-600 duration-300">
            Change Photo
          </button>
        </div>

        {/* Form */}
        <form className="space-y-5">
          <div>
            <label className="block mb-2 font-medium">
              Full Name
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full border p-3 rounded-lg outline-none focus:border-pink-500"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full border p-3 rounded-lg outline-none focus:border-pink-500"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">
              Phone Number
            </label>
            <input
              type="tel"
              placeholder="Enter your phone number"
              className="w-full border p-3 rounded-lg outline-none focus:border-pink-500"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">
              Address
            </label>
            <textarea
              rows="4"
              placeholder="Enter your address"
              className="w-full border p-3 rounded-lg outline-none focus:border-pink-500"
            ></textarea>
          </div>

          <div className="flex gap-4 justify-end">
            <button
              type="button"
              className="px-6 py-3 bg-gray-300 rounded-lg hover:bg-gray-400 duration-300"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="px-6 py-3 bg-pink-500 text-white rounded-lg hover:bg-pink-600 duration-300"
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditProfilePage;
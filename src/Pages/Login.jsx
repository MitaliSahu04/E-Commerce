function Login() {
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="bg-white w-[400px] p-8 rounded-2xl shadow-lg">
        <h1 className="text-3xl font-bold text-center mb-6">Login</h1>

        <form className="space-y-5">
          <div>
            <label className="block mb-2 text-gray-700">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full border p-3 rounded-lg outline-none focus:border-pink-500"
            />
          </div>

          <div>
            <label className="block mb-2 text-gray-700">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full border p-3 rounded-lg outline-none focus:border-pink-500"
            />
          </div>

          <button className="w-full bg-pink-500 text-white py-3 rounded-lg hover:bg-pink-600 duration-300">
            Login
          </button>
        </form>

        <p className="text-center mt-5 text-gray-600">
          Don't have an account?{" "}
          <span className="text-pink-500 cursor-pointer">Sign Up</span>
        </p>
      </div>
    </div>
  );
}

export default Login;
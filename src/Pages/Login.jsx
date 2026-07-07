import { useState } from "react";
import { NavLink ,useNavigate } from "react-router-dom";
import axios from "axios";

export default function Login() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [loginData, setLoginData] = useState({
  email: "",
  password: "",
});

  const validate = () => {
  const errs = {};

  if (!loginData.email) {
    errs.email = "Enter a valid email.";
  } else if (!/\S+@\S+\.\S+/.test(loginData.email)) {
    errs.email = "Enter a valid email.";
  }

  if (!loginData.password) {
    errs.password = "Password is required.";
  } else if (loginData.password.length < 6) {
    errs.password = "Minimum 6 characters.";
  }

  return errs;
};


  const handleLogin = async (e) => {
  e.preventDefault();

  const payload = {
    email:loginData.email,
    password:loginData.password
  }
  console.log(payload)
  const token = localStorage.getItem("token")
  console.log(token)


  try {
    setLoading(true);
    const response = await axios.post(
      "http://localhost:3000/api/login",
       payload,{
        headers: {
          Authorization: `Bearer: ${token}`,
        },
       }
    );

    console.log(response.data);
    navigate("/");

  } catch (error) {
    console.log(error.response.data);
    setLoading(false);
  }
};


  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap"
        rel="stylesheet"
      />
      <style>{`
        * { box-sizing: border-box; }
        input::placeholder { color: #9ca3af; }
        input:focus { outline: none; border-color: #111 !important; }
        .btn-primary:hover { background-color: #222 !important; }
        .btn-google:hover { background-color: #f9fafb !important; }
        .link:hover { text-decoration: underline; }
      `}</style>
     
      <div
        className="min-h-screen bg-gray-50 flex items-center justify-center px-4"
        style={{ fontFamily: "'Inter', sans-serif" }}
      >
        <div className="w-full max-w-sm">
          {/* Header */}
          <div className="mb-8">
            <div className="w-8 h-8 bg-black rounded-lg mb-6 flex items-center justify-center">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path
                  d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinejoin="round"
                />
                <path
                  d="M3 6h18M16 10a4 4 0 01-8 0"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </div>
            <h1 className="text-2xl font-semibold text-gray-900 tracking-tight">
              Sign in
            </h1>
            <p className="mt-1 text-sm text-gray-500">
              Enter your details to continue.
            </p>
          </div>

          {success && (
            <div className="mb-5 rounded-lg px-4 py-3 text-sm text-green-700 bg-green-50 border border-green-200">
              Signed in successfully. Redirecting…
            </div>
          )}

          {/* Email */}
          <div className="mb-4">
            <label className="block text-xs font-medium text-gray-500 mb-1.5 uppercase tracking-wider">
              Email
            </label>
            <input
              type="email"
              placeholder="you@example.com"
              value={loginData.email}
               onChange={(e) =>
    setLoginData({
      ...loginData,
      email: e.target.value,
    })
  }
              className="w-full rounded-lg px-3.5 py-2.5 text-sm text-gray-900 bg-white border transition-colors"
              style={{ borderColor: errors.email ? "#ef4444" : "#e5e7eb" }}
            />
            {errors.email && (
              <p className="mt-1 text-xs text-red-500">{errors.email}</p>
            )}
          </div>

          {/* Password */}
          <div className="mb-5">
            <div className="flex items-center justify-between mb-1.5">
              <label className="block text-xs font-medium text-gray-500 uppercase tracking-wider">
                Password
              </label>
              <a href="#" className="text-xs text-gray-500 link">
                Forgot password?
              </a>
            </div>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="••••••••"
                value={loginData.password}
                 onChange={(e) =>
    setLoginData({
      ...loginData,
      password: e.target.value,
    })
  }
                className="w-full rounded-lg px-3.5 py-2.5 pr-10 text-sm text-gray-900 bg-white border transition-colors"
                style={{ borderColor: errors.password ? "#ef4444" : "#e5e7eb" }}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                style={{
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  fontSize: "14px",
                }}
              >
                {showPassword ? "🙈" : "👁"}
              </button>
            </div>
            {errors.password && (
              <p className="mt-1 text-xs text-red-500">{errors.password}</p>
            )}
          </div>

          {/* Remember me */}
          <div className="flex items-center gap-2 mb-6">
            <input
              type="checkbox"
              id="remember"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
              className="w-3.5 h-3.5 rounded accent-black"
            />
            <label
              htmlFor="remember"
              className="text-xs text-gray-500 cursor-pointer select-none"
            >
              Remember me for 30 days
            </label>
          </div>

          {/* Sign In */}
          <button
            type="submit"
            onClick={handleLogin}
            disabled={loading}
            className="btn-primary w-full rounded-lg py-2.5 text-sm font-medium text-white transition-colors"
            style={{
              backgroundColor: "#111",
              border: "none",
              cursor: loading ? "not-allowed" : "pointer",
              opacity: loading ? 0.6 : 1,
              fontFamily: "'Inter', sans-serif",
            }}
          >
            {loading ? "Signing in…" : "Sign in"}
          </button>

          {/* Divider */}
          <div className="flex items-center gap-3 my-4">
            <div className="flex-1 h-px bg-gray-200" />
            <span className="text-xs text-gray-400">or</span>
            <div className="flex-1 h-px bg-gray-200" />
          </div>

          {/* Google */}
          <button
            className="btn-google w-full rounded-lg py-2.5 text-sm font-medium text-gray-700 flex items-center justify-center gap-2.5 border border-gray-200 bg-white transition-colors"
            style={{ cursor: "pointer", fontFamily: "'Inter', sans-serif" }}
          >
            <svg width="16" height="16" viewBox="0 0 48 48">
              <path
                fill="#EA4335"
                d="M24 9.5c3.2 0 5.9 1.1 8.1 2.9l6-6C34.5 3.1 29.6 1 24 1 14.8 1 7 6.7 3.7 14.7l7 5.4C12.4 13.6 17.7 9.5 24 9.5z"
              />
              <path
                fill="#4285F4"
                d="M46.5 24.5c0-1.6-.1-3.1-.4-4.5H24v8.5h12.7c-.6 3-2.3 5.5-4.8 7.2l7.4 5.7C43.4 37.4 46.5 31.4 46.5 24.5z"
              />
              <path
                fill="#FBBC05"
                d="M10.7 28.6A14.5 14.5 0 0 1 9.5 24c0-1.6.3-3.2.8-4.6l-7-5.4A23.9 23.9 0 0 0 .5 24c0 3.9.9 7.5 2.8 10.7l7.4-6.1z"
              />
              <path
                fill="#34A853"
                d="M24 47c5.5 0 10.2-1.8 13.6-4.9l-7.4-5.7c-1.8 1.2-4.1 1.9-6.2 1.9-6.3 0-11.6-4.2-13.4-9.9l-7.4 6.1C7 42.3 14.9 47 24 47z"
              />
            </svg>
            Continue with Google
          </button>

          {/* Sign up */}
          <p className="mt-6 text-center text-xs text-gray-400">
            Don't have an account?{" "}
            <NavLink
              to={"/create-account"}
              className="text-gray-900 font-medium link"
            >
              Create one
            </NavLink>
          </p>
        </div>
      </div>
    </>
  );
}

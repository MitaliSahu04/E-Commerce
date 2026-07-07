import axios from "axios";
import { useState } from "react";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useApp } from "../context/CreateUserContext";

export default function CreateAccount() {
  const { setUser } = useApp();
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    lastname: "",
    email: "",
    password: "",
    confirm: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const update = (field) => (e) => {
    setForm((p) => ({ ...p, [field]: e.target.value }));
    setErrors((p) => ({ ...p, [field]: null }));
  };

  const validate = () => {
    const errs = {};
    if (!form.name.trim()) errs.name = "First name is required.";
    if (!form.lastname.trim()) errs.lastname = "Last name is required.";
    if (!form.email) errs.email = "Email is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      errs.email = "Enter a valid email.";
    if (!form.password) errs.password = "Password is required.";
    else if (form.password.length < 6) errs.password = "Minimum 8 characters.";
    if (!form.confirm) errs.confirm = "Please confirm your password.";
    else if (form.confirm !== form.password)
      errs.confirm = "Passwords don't match.";
    return errs;
  };

  const handleSubmit = async () => {
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setErrors({});
    setLoading(true);
    const payload = {
      firstName: form.name,
      lastName: form.lastname,
      email: form.email,
      password: form.confirm,
    };
    const token = localStorage.getItem("token");

    try {
      setLoading(true);
      const response = await axios.post(
        "http://localhost:3000/api/register",
        payload,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      const registerData = response.data;
      setLoading(false);
      setSuccess(true);
      localStorage.setItem("FirstName", registerData.data.firstName);
      localStorage.setItem("LastName", registerData.data.lastName);
      localStorage.setItem("Email", registerData.data.email);
      localStorage.setItem("CustGuid", registerData.data.custGuId);
      setUser(true);
      toast.success("Account Created Successfully");
      setForm({ name: "", email: "", password: "", confirm: "" });
      navigate("/");
    } catch (error) {
      console.log(error);
      setLoading(false);
    }

    setLoading(false);
  };

  const strength = (() => {
    const p = form.password;
    if (!p) return 0;
    let s = 0;
    if (p.length >= 8) s++;
    if (/[A-Z]/.test(p)) s++;
    if (/[0-9]/.test(p)) s++;
    if (/[^A-Za-z0-9]/.test(p)) s++;
    return s;
  })();

  const strengthLabel = ["", "Weak", "Fair", "Good", "Strong"][strength];
  const strengthColor = ["", "#ef4444", "#f97316", "#eab308", "#22c55e"][
    strength
  ];

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
        className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-10"
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
              Create account
            </h1>
            <p className="mt-1 text-sm text-gray-500">
              Fill in the details below to get started.
            </p>
          </div>

          {success && (
            <div className="mb-5 rounded-lg px-4 py-3 text-sm text-green-700 bg-green-50 border border-green-200">
              Account created! Check your email to verify.
            </div>
          )}

          {/* Full Name */}
          <div className="mb-4">
            <label className="block text-xs font-medium text-gray-500 mb-1.5 uppercase tracking-wider">
              First Name
            </label>
            <input
              type="text"
              placeholder="Jane"
              value={form.name}
              onChange={update("name")}
              className="w-full rounded-lg px-3.5 py-2.5 text-sm text-gray-900 bg-white border transition-colors"
              style={{ borderColor: errors.name ? "#ef4444" : "#e5e7eb" }}
            />
            {errors.name && (
              <p className="mt-1 text-xs text-red-500">{errors.name}</p>
            )}
          </div>
          <div className="mb-4">
            <label className="block text-xs font-medium text-gray-500 mb-1.5 uppercase tracking-wider">
              Last Name
            </label>
            <input
              type="text"
              placeholder="Doe"
              value={form.lastname}
              onChange={update("lastname")}
              className="w-full rounded-lg px-3.5 py-2.5 text-sm text-gray-900 bg-white border transition-colors"
              style={{ borderColor: errors.lastname ? "#ef4444" : "#e5e7eb" }}
            />
            {errors.lastname && (
              <p className="mt-1 text-xs text-red-500">{errors.lastname}</p>
            )}
          </div>

          {/* Email */}
          <div className="mb-4">
            <label className="block text-xs font-medium text-gray-500 mb-1.5 uppercase tracking-wider">
              Email
            </label>
            <input
              type="email"
              placeholder="you@example.com"
              value={form.email}
              onChange={update("email")}
              className="w-full rounded-lg px-3.5 py-2.5 text-sm text-gray-900 bg-white border transition-colors"
              style={{ borderColor: errors.email ? "#ef4444" : "#e5e7eb" }}
            />
            {errors.email && (
              <p className="mt-1 text-xs text-red-500">{errors.email}</p>
            )}
          </div>

          {/* Password */}
          <div className="mb-4">
            <label className="block text-xs font-medium text-gray-500 mb-1.5 uppercase tracking-wider">
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Min. 8 characters"
                value={form.password}
                onChange={update("password")}
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
            {/* Strength bar */}
            {form.password && (
              <div className="mt-2">
                <div className="flex gap-1 mb-1">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="h-1 flex-1 rounded-full transition-all"
                      style={{
                        backgroundColor:
                          i <= strength ? strengthColor : "#e5e7eb",
                      }}
                    />
                  ))}
                </div>
                <p className="text-xs" style={{ color: strengthColor }}>
                  {strengthLabel}
                </p>
              </div>
            )}
          </div>

          {/* Confirm Password */}
          <div className="mb-6">
            <label className="block text-xs font-medium text-gray-500 mb-1.5 uppercase tracking-wider">
              Confirm Password
            </label>
            <div className="relative">
              <input
                type={showConfirm ? "text" : "password"}
                placeholder="••••••••"
                value={form.confirm}
                onChange={update("confirm")}
                className="w-full rounded-lg px-3.5 py-2.5 pr-10 text-sm text-gray-900 bg-white border transition-colors"
                style={{ borderColor: errors.confirm ? "#ef4444" : "#e5e7eb" }}
              />
              <button
                type="button"
                onClick={() => setShowConfirm(!showConfirm)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                style={{
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  fontSize: "14px",
                }}
              >
                {showConfirm ? "🙈" : "👁"}
              </button>
            </div>
            {errors.confirm && (
              <p className="mt-1 text-xs text-red-500">{errors.confirm}</p>
            )}
            {form.confirm &&
              !errors.confirm &&
              form.confirm === form.password && (
                <p className="mt-1 text-xs text-green-600">✓ Passwords match</p>
              )}
          </div>

          {/* Submit */}
          <button
            onClick={handleSubmit}
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
            {loading ? "Creating account…" : "Create account"}
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
            Sign up with Google
          </button>

          {/* Terms */}
          <p className="mt-4 text-center text-xs text-gray-400 leading-relaxed">
            By creating an account you agree to our{" "}
            <a href="#" className="text-gray-600 link">
              Terms
            </a>{" "}
            and{" "}
            <a href="#" className="text-gray-600 link">
              Privacy Policy
            </a>
            .
          </p>

          {/* Sign in */}
          <p className="mt-5 text-center text-xs text-gray-400">
            Already have an account?{" "}
            <a href="/login" className="text-gray-900 font-medium link">
              Sign in
            </a>
          </p>
        </div>
      </div>
    </>
  );
}

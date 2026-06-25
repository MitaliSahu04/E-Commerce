import { useState } from "react";

export default function Logout() {
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);

  const handleLogout = async () => {
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setDone(true);
  };

  return (
    <>
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap" rel="stylesheet" />
      <style>{`
        * { box-sizing: border-box; }
        .btn-black:hover { background-color: #222 !important; }
        .link:hover { text-decoration: underline; }
      `}</style>

      <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4"
        style={{ fontFamily: "'Inter', sans-serif" }}>

        <div className="w-full max-w-sm text-center">

          {/* Icon */}
          <div className="w-12 h-12 bg-black rounded-xl mx-auto mb-6 flex items-center justify-center">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" stroke="white" strokeWidth="2" strokeLinejoin="round"/>
              <path d="M3 6h18M16 10a4 4 0 01-8 0" stroke="white" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </div>

          {!done ? (
            <>
              <h1 className="text-xl font-semibold text-gray-900 tracking-tight">Sign out?</h1>
              <p className="mt-2 text-sm text-gray-500 mb-8">You'll need to sign in again to access your account.</p>

              <div className="flex flex-col gap-3">
                <button
                  onClick={handleLogout}
                  disabled={loading}
                  className="btn-black w-full rounded-lg py-2.5 text-sm font-medium text-white transition-colors"
                  style={{
                    backgroundColor: "#111", border: "none",
                    cursor: loading ? "not-allowed" : "pointer",
                    opacity: loading ? 0.6 : 1,
                    fontFamily: "'Inter', sans-serif",
                  }}>
                  {loading ? "Signing out…" : "Yes, sign out"}
                </button>

                <a href="/home"
                  className="w-full rounded-lg py-2.5 text-sm font-medium text-gray-700 border border-gray-200 bg-white hover:bg-gray-50 transition-colors flex items-center justify-center link"
                  style={{ textDecoration: "none" }}>
                  Cancel
                </a>
              </div>
            </>
          ) : (
            <>
              <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center mx-auto mb-4">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path d="M5 13l4 4L19 7" stroke="#111" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h1 className="text-xl font-semibold text-gray-900 tracking-tight">You're signed out</h1>
              <p className="mt-2 text-sm text-gray-500 mb-8">Thanks for visiting. See you next time.</p>

              <a href="/login"
                className="btn-black inline-block w-full rounded-lg py-2.5 text-sm font-medium text-white text-center transition-colors"
                style={{ backgroundColor: "#111", textDecoration: "none", fontFamily: "'Inter', sans-serif" }}>
                Sign back in
              </a>
            </>
          )}
        </div>
      </div>
    </>
  );
}
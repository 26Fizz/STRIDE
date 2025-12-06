import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../Firebase/firebase";
import { Eye, EyeOff, X } from "lucide-react";

const firebaseErrorMap = (code) => {
  if (!code) return "Login failed.";
  if (code.includes("user-not-found")) return "No account found with this email.";
  if (code.includes("wrong-password")) return "Incorrect password.";
  if (code.includes("invalid-email")) return "Invalid email format.";
  if (code.includes("too-many-requests"))
    return "Too many attempts. Please try again later.";
  return "Login failed. Please try again.";
};

const LoginModal = ({ closeModal }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPw, setShowPw] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    if (!email || !password) {
      setError("Please enter both email and password.");
      return;
    }

    setLoading(true);

    try {
      await signInWithEmailAndPassword(auth, email.trim(), password);
      closeModal();
    } catch (err) {
      setError(firebaseErrorMap(err.code));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[200] flex items-center justify-center p-4">
      <form
        onSubmit={handleLogin}
        className="bg-white w-full max-w-md p-6 rounded-2xl shadow-2xl space-y-5 relative border border-gray-100"
      >
        {/* Close button */}
        <button
          type="button"
          onClick={closeModal}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 transition"
        >
          <X size={20} />
        </button>

        <h2 className="text-2xl font-semibold text-center text-gray-900">
          Welcome Back
        </h2>

        {error && (
          <p className="text-red-500 text-sm text-center bg-red-50 p-2 rounded-lg border border-red-200">
            {error}
          </p>
        )}

        {/* Email */}
        <input
          type="email"
          placeholder="Email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-3 border rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition"
        />

        {/* Password with eye toggle */}
        <div className="relative">
          <input
            type={showPw ? "text" : "password"}
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 border rounded-xl pr-12 focus:ring-2 focus:ring-blue-500 outline-none transition"
          />

          <span
            onClick={() => setShowPw(!showPw)}
            className="absolute right-3 top-3 cursor-pointer text-gray-500 hover:text-gray-700"
          >
            {showPw ? <EyeOff size={20} /> : <Eye size={20} />}
          </span>
        </div>

        {/* Submit */}
        <button
          disabled={loading}
          className="w-full p-3 bg-blue-600 text-white rounded-xl text-sm font-medium hover:bg-blue-700 transition disabled:opacity-50"
        >
          {loading ? "Signing in..." : "Login"}
        </button>
      </form>
    </div>
  );
};

export default LoginModal;

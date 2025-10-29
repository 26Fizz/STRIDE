// src/auth/LoginModal.jsx
import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../Firebase/firebase";

const firebaseErrorMap = (code) => {
  if (!code) return "Login failed.";
  if (code.includes("user-not-found")) return "No account found for this email.";
  if (code.includes("wrong-password")) return "Incorrect password.";
  if (code.includes("invalid-email")) return "Invalid email address.";
  return "Login failed. Please try again.";
};

const LoginModal = ({ closeModal }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e?.preventDefault();
    setError("");
    if (!email || !password) {
      setError("Please fill in both fields.");
      return;
    }
    setLoading(true);
    try {
      await signInWithEmailAndPassword(auth, email.trim(), password);
      closeModal();
    } catch (err) {
      setError(firebaseErrorMap(err?.code || err?.message));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50" role="dialog" aria-modal="true" aria-labelledby="login-title">
      <form className="bg-white p-6 rounded-xl w-80 space-y-4" onSubmit={handleLogin}>
        <h2 id="login-title" className="text-xl font-bold">Login</h2>
        {error && <p className="text-red-500 text-sm" role="alert">{error}</p>}
        <label className="block">
          <span className="sr-only">Email</span>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 border rounded"
            required
            aria-required="true"
          />
        </label>
        <label className="block">
          <span className="sr-only">Password</span>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 border rounded"
            required
            aria-required="true"
          />
        </label>
        <div className="flex gap-2">
          <button disabled={loading} className="flex-1 bg-blue-600 text-white p-2 rounded disabled:opacity-60">
            {loading ? "Signing in..." : "Login"}
          </button>
          <button type="button" onClick={closeModal} className="px-3 py-2 rounded border">
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginModal;

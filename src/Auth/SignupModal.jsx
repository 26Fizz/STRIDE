import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../Firebase/firebase";
import { doc, setDoc, serverTimestamp } from "firebase/firestore";
import { Eye, EyeOff, X } from "lucide-react";

// Map Firebase errors → clean messages
const formatError = (code) => {
  switch (code) {
    case "auth/email-already-in-use":
      return "This email is already registered.";
    case "auth/invalid-email":
      return "Please enter a valid email.";
    case "auth/weak-password":
      return "Password must be at least 6 characters.";
    default:
      return "Signup failed. Please try again.";
  }
};

const SignupModal = ({ closeModal }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [instagram, setInstagram] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPw, setShowPw] = useState(false);

  const handleSignup = async (e) => {
    e.preventDefault();
    setError("");

    if (!email || !password || !username) {
      setError("Email, password and username are required.");
      return;
    }

    setLoading(true);

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email.trim(),
        password
      );

      const user = userCredential.user;

      // Create user document
      await setDoc(
        doc(db, "users", user.uid),
        {
          username,
          email: user.email,
          instagram: instagram || null,
          strikes: 0,
          unlockedSummaries: {},
          totalDonated: 0,
          createdAt: serverTimestamp(),
        },
        { merge: true }
      );

      closeModal(); // just close, no alerts/toasts
    } catch (err) {
      setError(formatError(err.code));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[200] flex items-center justify-center p-4">
      <form
        onSubmit={handleSignup}
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
          Create Account
        </h2>

        {error && (
          <p className="text-red-500 text-sm text-center bg-red-50 p-2 rounded-lg border border-red-200">
            {error}
          </p>
        )}

        {/* Username */}
        <input
          type="text"
          placeholder="Full Name / Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full p-3 border rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition"
        />

        {/* Instagram */}
        <input
          type="text"
          placeholder="Instagram Handle (optional)"
          value={instagram}
          onChange={(e) => setInstagram(e.target.value)}
          className="w-full p-3 border rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition"
        />

        {/* Email */}
        <input
          type="email"
          placeholder="Email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-3 border rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition"
        />

        {/* Password w/ eye toggle */}
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
          {loading ? "Creating..." : "Create Account"}
        </button>
      </form>
    </div>
  );
};

export default SignupModal;
